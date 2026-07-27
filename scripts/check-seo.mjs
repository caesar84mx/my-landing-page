import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteOrigin = 'https://www.mdymnoff-mobile.dev';
const pages = new Map([
    ['/', 'index.html'],
    ['/es/', 'es/index.html'],
    ['/pt/', 'pt/index.html'],
    ['/ru/', 'ru/index.html'],
    ['/case-studies/hailme/', 'case-studies/hailme/index.html'],
    ['/case-studies/ifit/', 'case-studies/ifit/index.html'],
    ['/case-studies/clear/', 'case-studies/clear/index.html'],
    ['/case-studies/surfcast/', 'case-studies/surfcast/index.html'],
    ['/services/mobile-product-consulting/', 'services/mobile-product-consulting/index.html'],
    ['/services/full-stack-mobile-app-development/', 'services/full-stack-mobile-app-development/index.html'],
    ['/services/mobile-app-modernization/', 'services/mobile-app-modernization/index.html'],
    ['/services/fractional-mobile-lead/', 'services/fractional-mobile-lead/index.html']
]);
const languageRoutes = new Map([
    ['x-default', '/'],
    ['en', '/'],
    ['es', '/es/'],
    ['pt', '/pt/'],
    ['ru', '/ru/']
]);
const titles = new Set();
const canonicals = new Set();
const errors = [];

function report(condition, message) {
    if (!condition) errors.push(message);
}

function matchOne(html, pattern, label, file) {
    const matches = [...html.matchAll(pattern)];
    report(matches.length === 1, `${file}: expected one ${label}, found ${matches.length}`);
    return matches[0]?.[1];
}

function localTargetExists(rawUrl) {
    const url = rawUrl.split('#')[0].split('?')[0];
    if (!url || /^(https?:|mailto:|tel:)/.test(url)) return true;

    const normalized = url.startsWith('/') ? url : `/${url}`;
    let target = path.join(root, normalized);
    if (normalized.endsWith('/')) target = path.join(target, 'index.html');
    return fs.existsSync(target);
}

for (const [route, relativeFile] of pages) {
    const file = path.join(root, relativeFile);
    const html = fs.readFileSync(file, 'utf8');
    const title = matchOne(html, /<title>([\s\S]*?)<\/title>/g, 'title', relativeFile);
    const description = matchOne(html, /<meta name="description" content="([^"]+)"\/>/g, 'meta description', relativeFile);
    const canonical = matchOne(html, /<link rel="canonical" href="([^"]+)"\/>/g, 'canonical', relativeFile);
    const openGraphUrl = matchOne(html, /<meta property="og:url" content="([^"]+)"\/>/g, 'og:url', relativeFile);
    const language = matchOne(html, /<html lang="([^"]+)">/g, 'html lang', relativeFile);

    report((html.match(/<h1\b/g) || []).length === 1, `${relativeFile}: expected exactly one h1`);
    report(Boolean(title?.trim()), `${relativeFile}: title is empty`);
    report(Boolean(description?.trim()), `${relativeFile}: meta description is empty`);
    report(canonical === `${siteOrigin}${route}`, `${relativeFile}: canonical does not match its route`);
    report(openGraphUrl === canonical, `${relativeFile}: og:url differs from canonical`);
    report(!titles.has(title), `${relativeFile}: duplicate title`);
    report(!canonicals.has(canonical), `${relativeFile}: duplicate canonical`);
    titles.add(title);
    canonicals.add(canonical);

    if (languageRoutes.has(language) || route === '/') {
        const alternates = new Map(
            [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"\/>/g)]
                .map((match) => [match[1], match[2]])
        );
        if (['/', '/es/', '/pt/', '/ru/'].includes(route)) {
            for (const [locale, localeRoute] of languageRoutes) {
                report(
                    alternates.get(locale) === `${siteOrigin}${localeRoute}`,
                    `${relativeFile}: missing or incorrect ${locale} hreflang`
                );
            }
        }
    }

    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    report(new Set(ids).size === ids.length, `${relativeFile}: duplicate id attribute`);

    for (const match of html.matchAll(/<(?:a|link)\b[^>]*\shref="([^"]+)"/g)) {
        report(localTargetExists(match[1]), `${relativeFile}: missing local href target ${match[1]}`);
    }
    for (const match of html.matchAll(/<(?:img|script)\b[^>]*\ssrc="([^"]+)"/g)) {
        report(localTargetExists(match[1]), `${relativeFile}: missing local src target ${match[1]}`);
    }

    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
        try {
            JSON.parse(match[1]);
        } catch (error) {
            errors.push(`${relativeFile}: invalid JSON-LD: ${error.message}`);
        }
    }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
const expectedUrls = new Set([...pages.keys()].map((route) => `${siteOrigin}${route}`));
report(sitemapUrls.size === expectedUrls.size, 'sitemap.xml: unexpected URL count');
for (const url of expectedUrls) report(sitemapUrls.has(url), `sitemap.xml: missing ${url}`);

try {
    JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
} catch (error) {
    errors.push(`vercel.json: invalid JSON: ${error.message}`);
}

if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
}

console.log(`SEO checks passed for ${pages.size} canonical pages.`);
