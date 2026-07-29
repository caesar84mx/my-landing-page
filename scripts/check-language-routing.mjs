import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'js', 'language-routing.js'), 'utf8');

function execute({
    pathname,
    search = '',
    hash = '',
    languages = ['en-US'],
    storage = {}
}) {
    let redirect = '';
    const values = new Map(Object.entries(storage));
    const listeners = new Map();

    class MockElement {
        constructor(link = null) {
            this.link = link;
        }

        closest() {
            return this.link;
        }
    }

    class MockSelectElement {
        constructor(id, value) {
            this.id = id;
            this.value = value;
        }
    }

    const location = {
        href: `https://www.mdymnoff-mobile.dev${pathname}${search}${hash}`,
        replace(value) {
            redirect = value;
            this.href = value;
        }
    };

    const context = {
        URL,
        location,
        navigator: {
            languages,
            language: languages[0]
        },
        localStorage: {
            getItem(key) {
                return values.get(key) ?? null;
            },
            setItem(key, value) {
                values.set(key, String(value));
            }
        },
        document: {
            addEventListener(type, listener) {
                listeners.set(type, listener);
            }
        },
        Element: MockElement,
        HTMLSelectElement: MockSelectElement
    };

    vm.runInNewContext(source, context, {filename: 'js/language-routing.js'});

    return {
        redirect: redirect ? new URL(redirect) : null,
        storage: values,
        clickLanguage(language) {
            const link = {getAttribute: () => language};
            listeners.get('click')?.({target: new MockElement(link)});
        },
        selectLanguage(language, id = 'language') {
            listeners.get('change')?.({target: new MockSelectElement(id, language)});
        }
    };
}

function route(url) {
    return url ? `${url.pathname}${url.search}${url.hash}` : '';
}

function expectEqual(actual, expected, label) {
    if (actual !== expected) {
        throw new Error(`${label}: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`);
    }
}

const cases = [
    {
        label: 'Spanish device opens landing',
        input: {pathname: '/', languages: ['es-UY']},
        expected: '/es/'
    },
    {
        label: 'Portuguese device opens service',
        input: {pathname: '/services/mobile-product-consulting/', languages: ['pt-BR']},
        expected: '/pt/services/mobile-product-consulting/'
    },
    {
        label: 'Russian device opens case study',
        input: {pathname: '/case-studies/clear/', languages: ['ru-RU']},
        expected: '/ru/case-studies/clear/'
    },
    {
        label: 'Unsupported device language uses English',
        input: {pathname: '/', languages: ['de-DE']},
        expected: ''
    },
    {
        label: 'Explicit locale path is preserved',
        input: {pathname: '/es/services/mobile-app-modernization/', languages: ['ru-RU']},
        expected: ''
    },
    {
        label: 'Explicit query selects a static locale',
        input: {pathname: '/', search: '?lang=pt'},
        expected: '/pt/'
    },
    {
        label: 'Unsupported query falls back to English',
        input: {pathname: '/es/', search: '?lang=de'},
        expected: '/'
    },
    {
        label: 'Journal uses an explicit language query',
        input: {pathname: '/journal/signal-001/', languages: ['ru-RU']},
        expected: '/journal/signal-001/?lang=ru'
    },
    {
        label: 'Redirect preserves unrelated query and hash',
        input: {pathname: '/', search: '?sent=1', hash: '#contact', languages: ['es-UY']},
        expected: '/es/?sent=1#contact'
    },
    {
        label: 'Stored manual choice overrides device language',
        input: {pathname: '/', languages: ['es-UY'], storage: {'site-language': 'en'}},
        expected: ''
    }
];

for (const testCase of cases) {
    const result = execute(testCase.input);
    expectEqual(route(result.redirect), testCase.expected, testCase.label);
}

const linkChoice = execute({pathname: '/es/', languages: ['es-UY']});
linkChoice.clickLanguage('en');
expectEqual(linkChoice.storage.get('site-language'), 'en', 'English language link stores manual choice');

const journalChoice = execute({pathname: '/journal/', search: '?lang=en'});
journalChoice.selectLanguage('pt');
expectEqual(journalChoice.storage.get('site-language'), 'pt', 'Journal language control stores manual choice');

console.log(`Language routing checks passed for ${cases.length + 2} scenarios.`);
