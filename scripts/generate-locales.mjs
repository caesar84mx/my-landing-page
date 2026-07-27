import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

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
    '/services/fractional-mobile-lead/'
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((urlPath) => `  <url><loc>${siteOrigin}${urlPath}</loc></url>`).join('\n')}
</urlset>
`;

writeOrCheck('sitemap.xml', sitemap);

console.log(checkOnly ? 'Generated SEO files are up to date.' : 'Generated locale pages and sitemap.');
