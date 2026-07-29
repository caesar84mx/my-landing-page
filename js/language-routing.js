(() => {
    'use strict';

    const SUPPORTED_LANGUAGES = new Set(['en', 'es', 'pt', 'ru']);
    const LANGUAGE_STORAGE_KEY = 'site-language';
    const JOURNAL_LANGUAGE_STORAGE_KEY = 'signal-locale';

    function normalizeLanguage(value) {
        const match = String(value || '').trim().match(/^([a-z]{2})(?:[-_]|$)/i);
        return match ? match[1].toLowerCase() : '';
    }

    function readStoredLanguage(key) {
        try {
            const language = normalizeLanguage(localStorage.getItem(key));
            return SUPPORTED_LANGUAGES.has(language) ? language : '';
        } catch {
            return '';
        }
    }

    function storeLanguage(key, language) {
        try {
            localStorage.setItem(key, language);
        } catch {
            // Language detection still works when storage is unavailable.
        }
    }

    function rememberLanguage(language) {
        if (SUPPORTED_LANGUAGES.has(language)) {
            storeLanguage(LANGUAGE_STORAGE_KEY, language);
        }
    }

    function languageFromPath(pathname) {
        const match = pathname.match(/^\/(es|pt|ru)(?:\/|$)/);
        return match?.[1] || '';
    }

    function stripLanguagePrefix(pathname) {
        const stripped = pathname.replace(/^\/(?:es|pt|ru)(?=\/|$)/, '');
        return stripped || '/';
    }

    function localizedPath(pathname, language) {
        const basePath = stripLanguagePrefix(pathname);
        if (language === 'en') return basePath;
        return basePath === '/' ? `/${language}/` : `/${language}${basePath}`;
    }

    function isLocalizedStaticPath(pathname) {
        const basePath = stripLanguagePrefix(pathname);
        return basePath === '/'
            || /^\/(?:case-studies|services)(?:\/|$)/.test(basePath);
    }

    function isJournalPath(pathname) {
        return /^\/journal(?:\/|$)/.test(pathname);
    }

    function replaceLocation(url) {
        if (url.href !== location.href) location.replace(url.href);
    }

    document.addEventListener('click', (event) => {
        const link = event.target instanceof Element
            ? event.target.closest('a[hreflang]')
            : null;
        const language = normalizeLanguage(link?.getAttribute('hreflang'));
        rememberLanguage(language);
    }, true);

    document.addEventListener('change', (event) => {
        const control = event.target;
        if (!(control instanceof HTMLSelectElement)) return;
        if (control.id !== 'language' && control.id !== 'lang') return;
        rememberLanguage(normalizeLanguage(control.value));
    }, true);

    const currentUrl = new URL(location.href);
    const pathname = currentUrl.pathname;
    const queryLanguage = currentUrl.searchParams.has('lang')
        ? normalizeLanguage(currentUrl.searchParams.get('lang'))
        : null;
    const requestedLanguage = queryLanguage === null
        ? null
        : (SUPPORTED_LANGUAGES.has(queryLanguage) ? queryLanguage : 'en');

    if (requestedLanguage) {
        rememberLanguage(requestedLanguage);

        if (isJournalPath(pathname)) {
            storeLanguage(JOURNAL_LANGUAGE_STORAGE_KEY, requestedLanguage);
            if (queryLanguage !== requestedLanguage) {
                currentUrl.searchParams.set('lang', requestedLanguage);
                replaceLocation(currentUrl);
            }
            return;
        }

        if (isLocalizedStaticPath(pathname)) {
            currentUrl.pathname = localizedPath(pathname, requestedLanguage);
            currentUrl.searchParams.delete('lang');
            replaceLocation(currentUrl);
        }
        return;
    }

    const pathLanguage = languageFromPath(pathname);
    if (pathLanguage) {
        rememberLanguage(pathLanguage);
        return;
    }

    const storedLanguage = readStoredLanguage(LANGUAGE_STORAGE_KEY)
        || (isJournalPath(pathname) ? readStoredLanguage(JOURNAL_LANGUAGE_STORAGE_KEY) : '');
    const deviceLanguage = normalizeLanguage(navigator.languages?.[0] || navigator.language);
    const language = storedLanguage
        || (SUPPORTED_LANGUAGES.has(deviceLanguage) ? deviceLanguage : 'en');

    if (isJournalPath(pathname)) {
        storeLanguage(JOURNAL_LANGUAGE_STORAGE_KEY, language);
        if (language !== 'en') {
            currentUrl.searchParams.set('lang', language);
            replaceLocation(currentUrl);
        }
        return;
    }

    if (language !== 'en' && isLocalizedStaticPath(pathname)) {
        currentUrl.pathname = localizedPath(pathname, language);
        replaceLocation(currentUrl);
    }
})();
