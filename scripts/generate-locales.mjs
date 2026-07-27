import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {CASE_LOCALES, CASE_STUDIES} from './case-study-locales.mjs';
import {SERVICE_LOCALES, SERVICES} from './service-locales.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const templatePath = path.join(projectRoot, 'index.html');
const translationsPath = path.join(projectRoot, 'js', 'main.js');
const template = fs.readFileSync(templatePath, 'utf8');
const translationsSource = fs.readFileSync(translationsPath, 'utf8');
const checkOnly = process.argv.includes('--check');

const objectStart = translationsSource.indexOf('const I18N = ') + 'const I18N = '.length;
const objectEnd = translationsSource.indexOf('\n};', objectStart) + 2;

if (objectStart < 'const I18N = '.length || objectEnd < 2) {
    throw new Error('Could not find the I18N object in js/main.js');
}

const translations = vm.runInNewContext(`(${translationsSource.slice(objectStart, objectEnd)})`);
const localePaths = {en: '/', es: '/es/', pt: '/pt/', ru: '/ru/'};
const localeNames = {en: 'EN', es: 'ES', pt: 'PT', ru: 'RU'};
const localeOpenGraph = {en: 'en_US', es: 'es_ES', pt: 'pt_BR', ru: 'ru_RU'};
const languageLabels = {
    en: 'Choose language',
    es: 'Elegir idioma',
    pt: 'Escolher idioma',
    ru: 'Выбрать язык'
};
const siteOrigin = 'https://www.mdymnoff-mobile.dev';

function getTranslation(locale, key) {
    return key.split('.').reduce((value, part) => value?.[part], translations[locale]);
}

function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
}

function escapeAttribute(value) {
    return escapeHtml(value).replaceAll('"', '&quot;');
}

function replaceElementContent(html, locale, attribute, allowHtml) {
    const pattern = new RegExp(
        `<([a-z][a-z0-9-]*)\\b([^>]*\\s${attribute}="([^"]+)"[^>]*)>[\\s\\S]*?<\\/\\1>`,
        'gi'
    );

    return html.replace(pattern, (match, tag, attributes, key) => {
        const value = getTranslation(locale, key);
        if (typeof value !== 'string') {
            throw new Error(`Missing ${locale} translation for ${key}`);
        }
        return `<${tag}${attributes}>${allowHtml ? value : escapeHtml(value)}</${tag}>`;
    });
}

function replaceMeta(html, selector, value) {
    const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`(<meta\\s+${escapedSelector}\\s+content=")[^"]*("/>)`);
    if (!pattern.test(html)) {
        throw new Error(`Could not find meta selector: ${selector}`);
    }
    return html.replace(pattern, `$1${escapeAttribute(value)}$2`);
}

function renderLanguageControl(locale) {
    const links = Object.entries(localePaths).map(([code, href]) => {
        const current = code === locale ? ' aria-current="page"' : '';
        return `                        <a href="${href}" lang="${code}" hreflang="${code}"${current}>${localeNames[code]}</a>`;
    }).join('\n');

    return `            <nav class="language-control" aria-label="${escapeAttribute(translations[locale].a11y.language)}">
                <details>
                    <summary aria-label="${escapeAttribute(languageLabels[locale])}"><span>${localeNames[locale]}</span></summary>
                    <div class="language-menu">
${links}
                    </div>
                </details>
            </nav>`;
}

function renderLocale(locale) {
    let html = template;
    const canonicalUrl = `${siteOrigin}${localePaths[locale]}`;
    const meta = translations[locale].meta;

    html = html.replace('<html lang="en">', `<html lang="${locale}">`);
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
    html = replaceMeta(html, 'name="description"', meta.description);
    html = replaceMeta(html, 'property="og:url"', canonicalUrl);
    html = replaceMeta(html, 'property="og:title"', meta.socialTitle);
    html = replaceMeta(html, 'property="og:description"', meta.socialDescription);
    html = replaceMeta(html, 'property="og:locale"', localeOpenGraph[locale]);
    html = replaceMeta(html, 'name="twitter:title"', meta.socialTitle);
    html = replaceMeta(html, 'name="twitter:description"', meta.socialDescription);
    html = html.replace(
        /<link rel="canonical" href="[^"]+"\/>/,
        `<link rel="canonical" href="${canonicalUrl}"/>`
    );
    html = replaceElementContent(html, locale, 'data-i18n', false);
    html = replaceElementContent(html, locale, 'data-i18n-html', true);
    html = html.replace(
        /(<[^>]+\sdata-i18n-placeholder="([^"]+)"[^>]*\splaceholder=")[^"]*("[^>]*>)/gi,
        (match, before, key, after) => {
            const value = getTranslation(locale, key);
            if (typeof value !== 'string') {
                throw new Error(`Missing ${locale} placeholder translation for ${key}`);
            }
            return `${before}${escapeAttribute(value)}${after}`;
        }
    );
    html = html.replace(
        /\s{12}<nav class="language-control"[\s\S]*?<\/nav>/,
        `\n${renderLanguageControl(locale)}`
    );
    if (locale !== 'en') {
        html = html.replaceAll('href="/case-studies/', `href="/${locale}/case-studies/`);
        html = html.replaceAll('href="/services/', `href="/${locale}/services/`);
    }

    return html;
}

function writeOrCheck(relativePath, contents) {
    const target = path.join(projectRoot, relativePath);
    if (checkOnly) {
        if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== contents) {
            throw new Error(`${relativePath} is not up to date; run node scripts/generate-locales.mjs`);
        }
        return;
    }

    fs.mkdirSync(path.dirname(target), {recursive: true});
    fs.writeFileSync(target, contents);
}

for (const locale of ['es', 'pt', 'ru']) {
    writeOrCheck(path.join(locale, 'index.html'), renderLocale(locale));
}

function caseRoute(locale, slug) {
    return locale === 'en' ? `/case-studies/${slug}/` : `/${locale}/case-studies/${slug}/`;
}

function renderCaseLanguageControl(locale, slug) {
    const labels = {en: 'EN', es: 'ES', pt: 'PT', ru: 'RU'};
    const links = Object.keys(labels).map((code) => {
        const current = code === locale ? ' aria-current="page"' : '';
        return `                            <a href="${caseRoute(code, slug)}" lang="${code}" hreflang="${code}"${current}>${labels[code]}</a>`;
    }).join('\n');

    return `                <div class="language-control">
                    <details>
                        <summary aria-label="${escapeAttribute(languageLabels[locale])}"><span>${labels[locale]}</span></summary>
                        <div class="language-menu">
${links}
                        </div>
                    </details>
                </div>`;
}

function renderCaseSection(section, index, technologies, technologiesLabel) {
    const paragraphs = (section.paragraphs || []).map((paragraph) => `                    <p>${escapeHtml(paragraph)}</p>`).join('\n');
    const subsections = (section.subsections || []).map(([title, paragraph]) => `                    <h3>${escapeHtml(title)}</h3>
                    <p>${escapeHtml(paragraph)}</p>`).join('\n');
    const techList = index === 1 ? `
                    <ul class="case-tech-list" aria-label="${escapeAttribute(technologiesLabel)}">
${technologies.map((technology) => `                        <li>${escapeHtml(technology)}</li>`).join('\n')}
                    </ul>` : '';
    const outcomes = section.outcomes ? `
                    <div class="case-outcomes">
${section.outcomes.map(([value, label]) => `                        <div class="case-outcome"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join('\n')}
                    </div>` : '';

    return `        <section class="case-content-section">
            <div class="case-section-label">${escapeHtml(section.label)}</div>
            <div class="case-prose">
                <h2>${escapeHtml(section.title)}</h2>
${paragraphs}
${subsections}${techList}${outcomes}
            </div>
        </section>`;
}

function renderLocalizedCase(caseId, locale) {
    const caseStudy = CASE_STUDIES[caseId];
    const copy = caseStudy.locales[locale];
    const localeCopy = CASE_LOCALES[locale];
    const canonicalPath = caseRoute(locale, caseStudy.slug);
    const canonicalUrl = `${siteOrigin}${canonicalPath}`;
    const alternateLinks = [
        ['x-default', caseRoute('en', caseStudy.slug)],
        ['en', caseRoute('en', caseStudy.slug)],
        ['es', caseRoute('es', caseStudy.slug)],
        ['pt', caseRoute('pt', caseStudy.slug)],
        ['ru', caseRoute('ru', caseStudy.slug)]
    ].map(([language, route]) => `    <link rel="alternate" hreflang="${language}" href="${siteOrigin}${route}"/>`).join('\n');
    const ogAlternates = Object.entries({en: 'en_US', es: 'es_ES', pt: 'pt_BR', ru: 'ru_RU'})
        .filter(([code]) => code !== locale)
        .map(([, ogLocale]) => `    <meta property="og:locale:alternate" content="${ogLocale}"/>`)
        .join('\n');
    const facts = copy.facts.map(([term, definition]) => `                    <div class="case-fact"><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(definition)}</dd></div>`).join('\n');
    const sections = copy.sections.map((section, index) => renderCaseSection(section, index, caseStudy.technologies, localeCopy.technologies)).join('\n\n');
    const externalAction = copy.ctaExternal ? `
                <a class="text-link" href="${caseStudy.externalUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(copy.ctaExternal)} <span aria-hidden="true">↗</span></a>` : '';
    const nextRoute = caseRoute(locale, CASE_STUDIES[caseStudy.next].slug);
    const structuredData = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: copy.socialTitle,
        description: copy.socialDescription,
        inLanguage: locale,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        author: {
            '@type': 'Person',
            '@id': `${siteOrigin}/#person`,
            name: 'Maxim Dymnov',
            alternateName: 'Max Dymnoff'
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${siteOrigin}/#organization`,
            name: 'Dymnoff Software Labs SAS'
        },
        about: caseStudy.technologies
    }, null, 2);

    return `<!doctype html>
<html lang="${localeCopy.htmlLanguage}">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>${escapeHtml(copy.seoTitle)}</title>
    <meta name="description" content="${escapeAttribute(copy.seoDescription)}"/>
    <meta name="theme-color" content="#080b12"/>
    <meta name="color-scheme" content="dark"/>

    <link rel="canonical" href="${canonicalUrl}"/>
${alternateLinks}
    <meta property="og:type" content="article"/>
    <meta property="og:site_name" content="Max Dymnoff"/>
    <meta property="og:locale" content="${localeCopy.ogLocale}"/>
${ogAlternates}
    <meta property="og:url" content="${canonicalUrl}"/>
    <meta property="og:title" content="${escapeAttribute(copy.socialTitle)}"/>
    <meta property="og:description" content="${escapeAttribute(copy.socialDescription)}"/>
    <meta property="og:image" content="${siteOrigin}/assets/og-v2.png"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:image:alt" content="${escapeAttribute(localeCopy.socialImageAlt)}"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="${escapeAttribute(copy.socialTitle)}"/>
    <meta name="twitter:description" content="${escapeAttribute(copy.socialDescription)}"/>
    <meta name="twitter:image" content="${siteOrigin}/assets/og-v2.png"/>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png?v=20260727"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16.png?v=20260727"/>
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png?v=20260727"/>
    <link rel="stylesheet" href="/css/styles.css?v=20260727-seo1"/>

    <script type="application/ld+json">
${structuredData.split('\n').map((line) => `        ${line}`).join('\n')}
    </script>
</head>
<body class="case-study-page">
<a class="skip-link" href="#main">${escapeHtml(localeCopy.skip)}</a>

<header class="site-header">
    <div class="container nav-shell">
        <a class="brand" href="/${locale}/" aria-label="Max Dymnoff">
            <span class="brand-mark" aria-hidden="true"><span>M</span><span>D</span></span>
            <span class="brand-copy"><strong>Max Dymnoff</strong><small>${escapeHtml(localeCopy.brandRole)}</small></span>
        </a>
        <nav class="case-header-nav" aria-label="${escapeAttribute(localeCopy.navigation)}">
            <a href="/${locale}/">${escapeHtml(localeCopy.home)}</a>
            <a href="/${locale}/#work">${escapeHtml(localeCopy.allCases)}</a>
${renderCaseLanguageControl(locale, caseStudy.slug)}
            <a class="button button-small" href="/${locale}/#contact">${escapeHtml(localeCopy.discuss)}</a>
        </nav>
    </div>
</header>

<main id="main" class="case-study-main">
    <section class="case-hero-section">
        <div class="container">
            <nav class="case-breadcrumbs" aria-label="${escapeAttribute(localeCopy.breadcrumb)}">
                <a href="/${locale}/">${escapeHtml(localeCopy.home)}</a><span aria-hidden="true">/</span><a href="/${locale}/#work">${escapeHtml(localeCopy.allCases)}</a><span aria-hidden="true">/</span><span>${escapeHtml(copy.caseName)}</span>
            </nav>
            <div class="case-hero-grid">
                <div>
                    <p class="section-kicker">${escapeHtml(copy.kicker)}</p>
                    <h1>${copy.title}</h1>
                    <p class="case-summary">${escapeHtml(copy.summary)}</p>
                </div>
                <dl class="case-facts">
${facts}
                </dl>
            </div>
        </div>
    </section>

    <div class="container case-content">
${sections}

        <aside class="case-next">
            <p class="section-kicker">${escapeHtml(copy.ctaKicker)}</p>
            <h2>${escapeHtml(copy.ctaTitle)}</h2>
            <p>${escapeHtml(copy.ctaBody)}</p>
            <div class="case-next-actions">
                <a class="button" href="/${locale}/#contact">${escapeHtml(copy.ctaPrimary)} <span aria-hidden="true">↗</span></a>${externalAction}
                <a class="text-link" href="${nextRoute}">${escapeHtml(localeCopy.next)}: ${escapeHtml(copy.nextLabel)} <span aria-hidden="true">→</span></a>
            </div>
        </aside>
    </div>
</main>

<footer class="site-footer">
    <div class="container footer-grid">
        <div><strong>Max Dymnoff</strong><span>${escapeHtml(localeCopy.footerCompany)}</span><span>${escapeHtml(localeCopy.footerTagline)}</span></div>
        <p>© 2026 Dymnoff Software Labs SAS · Max Dymnoff · Montevideo, Uruguay</p>
    </div>
</footer>
</body>
</html>
`;
}

for (const [caseId, caseStudy] of Object.entries(CASE_STUDIES)) {
    for (const locale of ['es', 'pt', 'ru']) {
        writeOrCheck(
            path.join(locale, 'case-studies', caseStudy.slug, 'index.html'),
            renderLocalizedCase(caseId, locale)
        );
    }
}

function serviceRoute(locale, slug) {
    return locale === 'en' ? `/services/${slug}/` : `/${locale}/services/${slug}/`;
}

function renderServiceLanguageControl(locale, slug) {
    const links = Object.keys(localeNames).map((code) => {
        const current = code === locale ? ' aria-current="page"' : '';
        return `                            <a href="${serviceRoute(code, slug)}" lang="${code}" hreflang="${code}"${current}>${localeNames[code]}</a>`;
    }).join('\n');

    return `                <div class="language-control">
                    <details>
                        <summary aria-label="${escapeAttribute(languageLabels[locale])}"><span>${localeNames[locale]}</span></summary>
                        <div class="language-menu">
${links}
                        </div>
                    </details>
                </div>`;
}

function renderServiceSection(section, service) {
    const paragraphs = (section.paragraphs || []).map((paragraph) => `                    <p>${escapeHtml(paragraph)}</p>`).join('\n');
    const subsections = (section.subsections || []).map(([title, paragraph]) => `                    <h3>${escapeHtml(title)}</h3>
                    <p>${escapeHtml(paragraph)}</p>`).join('\n');
    const list = section.list ? `
                    <ul>
${section.list.map((item) => `                        <li>${escapeHtml(item)}</li>`).join('\n')}
                    </ul>` : '';
    const technologies = section.showTechnologies ? `
                    <ul class="case-tech-list" aria-label="${escapeAttribute(service.technologiesLabel)}">
${service.technologies.map((technology) => `                        <li>${escapeHtml(technology)}</li>`).join('\n')}
                    </ul>` : '';
    const outcomes = section.outcomes ? `
                    <div class="case-outcomes">
${section.outcomes.map(([value, label]) => `                        <div class="case-outcome"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join('\n')}
                    </div>` : '';

    return `        <section class="case-content-section">
            <div class="case-section-label">${escapeHtml(section.label)}</div>
            <div class="case-prose">
                <h2>${escapeHtml(section.title)}</h2>
${paragraphs}${subsections}${list}${technologies}${outcomes}
            </div>
        </section>`;
}

function renderLocalizedService(serviceId, locale) {
    const service = SERVICES[serviceId];
    const copy = service.locales[locale];
    const localeCopy = CASE_LOCALES[locale];
    const serviceLocale = SERVICE_LOCALES[locale];
    const canonicalPath = serviceRoute(locale, service.slug);
    const canonicalUrl = `${siteOrigin}${canonicalPath}`;
    const alternateLinks = [
        ['x-default', serviceRoute('en', service.slug)],
        ['en', serviceRoute('en', service.slug)],
        ['es', serviceRoute('es', service.slug)],
        ['pt', serviceRoute('pt', service.slug)],
        ['ru', serviceRoute('ru', service.slug)]
    ].map(([language, route]) => `    <link rel="alternate" hreflang="${language}" href="${siteOrigin}${route}"/>`).join('\n');
    const ogAlternates = Object.entries(localeOpenGraph)
        .filter(([code]) => code !== locale)
        .map(([, ogLocale]) => `    <meta property="og:locale:alternate" content="${ogLocale}"/>`)
        .join('\n');
    const facts = copy.facts.map(([term, definition]) => `                    <div class="case-fact"><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(definition)}</dd></div>`).join('\n');
    const sections = copy.sections.map((section) => renderServiceSection(section, copy)).join('\n\n');
    const proofRoute = caseRoute(locale, service.proofCase);
    const structuredData = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: copy.serviceName,
        serviceType: copy.serviceType,
        url: canonicalUrl,
        description: copy.structuredDescription,
        inLanguage: locale,
        provider: {
            '@type': 'Person',
            '@id': `${siteOrigin}/#person`,
            name: 'Maxim Dymnov',
            alternateName: 'Max Dymnoff'
        },
        areaServed: 'Worldwide'
    }, null, 2);

    return `<!doctype html>
<html lang="${localeCopy.htmlLanguage}">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>${escapeHtml(copy.seoTitle)}</title>
    <meta name="description" content="${escapeAttribute(copy.seoDescription)}"/>
    <meta name="theme-color" content="#080b12"/>
    <meta name="color-scheme" content="dark"/>

    <link rel="canonical" href="${canonicalUrl}"/>
${alternateLinks}
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Max Dymnoff"/>
    <meta property="og:locale" content="${localeCopy.ogLocale}"/>
${ogAlternates}
    <meta property="og:url" content="${canonicalUrl}"/>
    <meta property="og:title" content="${escapeAttribute(copy.socialTitle)}"/>
    <meta property="og:description" content="${escapeAttribute(copy.socialDescription)}"/>
    <meta property="og:image" content="${siteOrigin}/assets/og-v2.png"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:image:alt" content="${escapeAttribute(localeCopy.socialImageAlt)}"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="${escapeAttribute(copy.socialTitle)}"/>
    <meta name="twitter:description" content="${escapeAttribute(copy.socialDescription)}"/>
    <meta name="twitter:image" content="${siteOrigin}/assets/og-v2.png"/>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png?v=20260727"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16.png?v=20260727"/>
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png?v=20260727"/>
    <link rel="stylesheet" href="/css/styles.css?v=20260727-seo1"/>

    <script type="application/ld+json">
${structuredData.split('\n').map((line) => `        ${line}`).join('\n')}
    </script>
</head>
<body class="case-study-page">
<a class="skip-link" href="#main">${escapeHtml(localeCopy.skip)}</a>

<header class="site-header">
    <div class="container nav-shell">
        <a class="brand" href="/${locale}/" aria-label="Max Dymnoff">
            <span class="brand-mark" aria-hidden="true"><span>M</span><span>D</span></span>
            <span class="brand-copy"><strong>Max Dymnoff</strong><small>${escapeHtml(localeCopy.brandRole)}</small></span>
        </a>
        <nav class="case-header-nav" aria-label="${escapeAttribute(serviceLocale.navigation)}">
            <a href="/${locale}/">${escapeHtml(localeCopy.home)}</a>
            <a href="/${locale}/#expertise">${escapeHtml(serviceLocale.allServices)}</a>
${renderServiceLanguageControl(locale, service.slug)}
            <a class="button button-small" href="/${locale}/#contact">${escapeHtml(localeCopy.discuss)}</a>
        </nav>
    </div>
</header>

<main id="main" class="case-study-main">
    <section class="case-hero-section">
        <div class="container">
            <nav class="case-breadcrumbs" aria-label="${escapeAttribute(localeCopy.breadcrumb)}">
                <a href="/${locale}/">${escapeHtml(localeCopy.home)}</a><span aria-hidden="true">/</span><a href="/${locale}/#expertise">${escapeHtml(serviceLocale.services)}</a><span aria-hidden="true">/</span><span>${escapeHtml(copy.serviceName)}</span>
            </nav>
            <div class="case-hero-grid">
                <div>
                    <p class="section-kicker">${escapeHtml(copy.kicker)}</p>
                    <h1>${copy.title}</h1>
                    <p class="case-summary">${escapeHtml(copy.summary)}</p>
                </div>
                <dl class="case-facts">
${facts}
                </dl>
            </div>
        </div>
    </section>

    <div class="container case-content">
${sections}

        <aside class="case-next">
            <p class="section-kicker">${escapeHtml(copy.ctaKicker)}</p>
            <h2>${escapeHtml(copy.ctaTitle)}</h2>
            <p>${escapeHtml(copy.ctaBody)}</p>
            <div class="case-next-actions">
                <a class="button" href="/${locale}/#contact">${escapeHtml(copy.ctaPrimary)} <span aria-hidden="true">↗</span></a>
                <a class="text-link" href="${proofRoute}">${escapeHtml(copy.ctaProof)} <span aria-hidden="true">→</span></a>
            </div>
        </aside>
    </div>
</main>

<footer class="site-footer">
    <div class="container footer-grid">
        <div><strong>Max Dymnoff</strong><span>${escapeHtml(localeCopy.footerCompany)}</span><span>${escapeHtml(localeCopy.footerTagline)}</span></div>
        <p>© 2026 Dymnoff Software Labs SAS · Max Dymnoff · Montevideo, Uruguay</p>
    </div>
</footer>
</body>
</html>
`;
}

for (const [serviceId, service] of Object.entries(SERVICES)) {
    for (const locale of ['es', 'pt', 'ru']) {
        writeOrCheck(
            path.join(locale, 'services', service.slug, 'index.html'),
            renderLocalizedService(serviceId, locale)
        );
    }
}

const sitemapPaths = [
    '/',
    '/es/',
    '/pt/',
    '/ru/',
    '/case-studies/hailme/',
    '/case-studies/ifit/',
    '/case-studies/clear/',
    '/case-studies/surfcast/',
    '/services/mobile-product-consulting/',
    '/services/full-stack-mobile-app-development/',
    '/services/mobile-app-modernization/',
    '/services/mobile-technical-lead/'
];
for (const caseStudy of Object.values(CASE_STUDIES)) {
    for (const locale of ['es', 'pt', 'ru']) {
        sitemapPaths.push(caseRoute(locale, caseStudy.slug));
    }
}
for (const service of Object.values(SERVICES)) {
    for (const locale of ['es', 'pt', 'ru']) {
        sitemapPaths.push(serviceRoute(locale, service.slug));
    }
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((urlPath) => `  <url><loc>${siteOrigin}${urlPath}</loc></url>`).join('\n')}
</urlset>
`;

writeOrCheck('sitemap.xml', sitemap);

console.log(checkOnly ? 'Generated SEO files are up to date.' : 'Generated locale pages and sitemap.');
