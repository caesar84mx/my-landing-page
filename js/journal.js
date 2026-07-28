document.documentElement.classList.add('js');

const UI = {
    en: {
        metaTitle: 'Mobile Engineering Journal — MAX.D / SIGNAL',
        metaDescription: 'A chronological archive of MAX.D / SIGNAL, a weekly engineering journal on Android and cross-platform development.',
        skip: 'Skip to issues', language: 'Language', role: 'Mobile consultant · Full-stack mobile app developer',
        nav: ['Services', 'Case studies', 'Journal', 'Ways to work'], contact: 'Discuss a project',
        kicker: 'MAX.D / SIGNAL · Engineering journal',
        title: 'The mobile engineering changes that deserve a decision.',
        lead: 'A weekly archive of source-backed changes across Android, Kotlin Multiplatform, iOS, React Native, tooling, performance, and applied AI.',
        publishedForms: ['issue published', 'issues published'], yearForms: ['archive year', 'archive years'], browse: 'Browse by year', year: 'Year',
        issue: 'Issue', read: 'min read', topics: 'Topics', sources: 'sources', signals: 'signals',
        footerCompany: 'Services through Dymnoff Software Labs SAS', footerTagline: 'From backend to apps. One accountable delivery.',
        issueForms: ['issue', 'issues']
    },
    es: {
        metaTitle: 'Revista de ingeniería móvil — MAX.D / SIGNAL',
        metaDescription: 'Archivo cronológico de MAX.D / SIGNAL, una revista semanal sobre Android y desarrollo multiplataforma.',
        skip: 'Ir a las ediciones', language: 'Idioma', role: 'Consultor de productos móviles · Desarrollador full-stack',
        nav: ['Servicios', 'Casos', 'Revista', 'Formas de trabajo'], contact: 'Hablemos del proyecto',
        kicker: 'MAX.D / SIGNAL · Revista de ingeniería',
        title: 'Cambios en la ingeniería móvil que merecen una decisión.',
        lead: 'Un archivo semanal de cambios respaldados por fuentes sobre Android, Kotlin Multiplatform, iOS, React Native, herramientas, rendimiento e IA aplicada.',
        publishedForms: ['edición publicada', 'ediciones publicadas'], yearForms: ['año en el archivo', 'años en el archivo'], browse: 'Explorar por año', year: 'Año',
        issue: 'Edición', read: 'min de lectura', topics: 'Temas', sources: 'fuentes', signals: 'señales',
        footerCompany: 'Servicios por medio de Dymnoff Software Labs SAS', footerTagline: 'Del backend a las apps. Una entrega bajo una sola responsabilidad.',
        issueForms: ['edición', 'ediciones']
    },
    pt: {
        metaTitle: 'Revista de engenharia mobile — MAX.D / SIGNAL',
        metaDescription: 'Arquivo cronológico da MAX.D / SIGNAL, uma revista semanal sobre Android e desenvolvimento multiplataforma.',
        skip: 'Ir para as edições', language: 'Idioma', role: 'Consultor de produtos mobile · Desenvolvedor full-stack',
        nav: ['Serviços', 'Projetos', 'Revista', 'Formas de trabalho'], contact: 'Conversar sobre o projeto',
        kicker: 'MAX.D / SIGNAL · Revista de engenharia',
        title: 'Mudanças na engenharia mobile que merecem uma decisão.',
        lead: 'Um arquivo semanal de mudanças respaldadas por fontes sobre Android, Kotlin Multiplatform, iOS, React Native, ferramentas, performance e IA aplicada.',
        publishedForms: ['edição publicada', 'edições publicadas'], yearForms: ['ano no arquivo', 'anos no arquivo'], browse: 'Explorar por ano', year: 'Ano',
        issue: 'Edição', read: 'min de leitura', topics: 'Tópicos', sources: 'fontes', signals: 'sinais',
        footerCompany: 'Serviços por meio da Dymnoff Software Labs SAS', footerTagline: 'Do backend aos aplicativos. Uma entrega sob uma única responsabilidade.',
        issueForms: ['edição', 'edições']
    },
    ru: {
        metaTitle: 'Журнал о мобильной разработке — MAX.D / SIGNAL',
        metaDescription: 'Хронологический архив MAX.D / SIGNAL — еженедельного журнала об Android и кроссплатформенной разработке.',
        skip: 'Перейти к выпускам', language: 'Язык', role: 'Мобильный консультант · Full-stack разработчик',
        nav: ['Услуги', 'Кейсы', 'Журнал', 'Форматы работы'], contact: 'Обсудить проект',
        kicker: 'MAX.D / SIGNAL · Инженерный журнал',
        title: 'Изменения в мобильной разработке, которые требуют решений.',
        lead: 'Еженедельный архив изменений с опорой на первоисточники: Android, Kotlin Multiplatform, iOS, React Native, инструменты, производительность и прикладной ИИ.',
        publishedForms: ['выпуск опубликован', 'выпуска опубликовано', 'выпусков опубликовано'], yearForms: ['год в архиве', 'года в архиве', 'лет в архиве'], browse: 'Выбрать год', year: 'Год',
        issue: 'Выпуск', read: 'минут чтения', topics: 'Темы', sources: 'источников', signals: 'сигналов',
        footerCompany: 'Работа через Dymnoff Software Labs SAS', footerTagline: 'От серверной части до приложений. Один ответственный за результат.',
        issueForms: ['выпуск', 'выпуска', 'выпусков']
    }
};

const ISSUES = [
    {
        number: 1,
        published: '2026-07-27',
        path: '/journal/signal-001/',
        minutes: 10,
        sources: 8,
        signals: 7,
        title: {
            en: 'Mobile changes worth making decisions about.',
            es: 'Cambios en el desarrollo móvil que exigen tomar decisiones.',
            pt: 'Mudanças no desenvolvimento mobile que exigem decisões.',
            ru: 'Изменения в мобильной разработке, которые требуют решений.'
        },
        summary: {
            en: 'Kotlin improves Swift export, Media3 fixes a high-risk memory behavior, Nearby Connections changes radio-state handling, and Android’s AI stack starts to look like an execution layer.',
            es: 'Kotlin mejora la exportación a Swift, Media3 corrige un problema grave de memoria, Nearby Connections cambia la gestión de Wi-Fi y Bluetooth, y la IA en Android empieza a tomar forma como una capa de ejecución propia.',
            pt: 'Kotlin melhora a exportação para Swift, Media3 corrige um problema grave de memória, Nearby Connections muda o controle de Wi-Fi e Bluetooth, e a IA no Android começa a tomar forma como uma camada própria de execução.',
            ru: 'Kotlin улучшает экспорт в Swift, Media3 исправляет опасную работу с памятью, Nearby Connections меняет управление Wi-Fi и Bluetooth, а ИИ в Android начинает превращаться в отдельный слой выполнения.'
        },
        topics: {
            en: ['Kotlin Multiplatform', 'Media3', 'Nearby Connections', 'Android tooling', 'Tracing', 'AI'],
            es: ['Kotlin Multiplatform', 'Media3', 'Nearby Connections', 'Herramientas Android', 'Tracing', 'IA'],
            pt: ['Kotlin Multiplatform', 'Media3', 'Nearby Connections', 'Ferramentas Android', 'Tracing', 'IA'],
            ru: ['Kotlin Multiplatform', 'Media3', 'Nearby Connections', 'Инструменты Android', 'Трассировка', 'ИИ']
        }
    }
];

const SUPPORTED_LOCALES = Object.keys(UI);
const localeParam = new URLSearchParams(location.search).get('lang');
const storedLocale = localStorage.getItem('signal-locale');
let locale = SUPPORTED_LOCALES.includes(localeParam)
    ? localeParam
    : (SUPPORTED_LOCALES.includes(storedLocale) ? storedLocale : 'en');

const $ = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

function setMeta(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute('content', value);
}

function issueCount(count, text) {
    return `${count} ${text.issueForms[formIndex(count)]}`;
}

function formIndex(count) {
    if (locale !== 'ru') return count === 1 ? 0 : 1;
    const mod10 = count % 10;
    const mod100 = count % 100;
    return mod10 === 1 && mod100 !== 11 ? 0 : (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? 1 : 2);
}

function localDate(value) {
    return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    }).format(new Date(`${value}T00:00:00Z`));
}

function monthName(value) {
    return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : locale, {
        month: 'long',
        timeZone: 'UTC'
    }).format(new Date(`${value}-01T00:00:00Z`));
}

function groupIssues() {
    const sorted = [...ISSUES].sort((left, right) => right.published.localeCompare(left.published));
    const years = new Map();
    for (const issue of sorted) {
        const [year, month] = issue.published.split('-');
        if (!years.has(year)) years.set(year, new Map());
        if (!years.get(year).has(month)) years.get(year).set(month, []);
        years.get(year).get(month).push(issue);
    }
    return years;
}

function renderIssue(issue, text) {
    const number = String(issue.number).padStart(3, '0');
    return `
        <a class="issue-entry" href="${issue.path}?lang=${locale}">
            <div class="issue-number"><span>${escapeHtml(text.issue)}</span><strong>${number}</strong></div>
            <div class="issue-copy">
                <div class="issue-date">${escapeHtml(localDate(issue.published))} · ${issue.minutes} ${escapeHtml(text.read)}</div>
                <h4>${escapeHtml(issue.title[locale])}</h4>
                <p>${escapeHtml(issue.summary[locale])}</p>
                <ul class="issue-topics" aria-label="${escapeHtml(text.topics)}">
                    ${issue.topics[locale].map((topic) => `<li>${escapeHtml(topic)}</li>`).join('')}
                </ul>
            </div>
            <div class="issue-side">
                <span>${issue.sources} ${escapeHtml(text.sources)} · ${issue.signals} ${escapeHtml(text.signals)}</span>
                <strong aria-hidden="true">↗</strong>
            </div>
        </a>`;
}

function renderArchive(text) {
    const years = groupIssues();
    $('yearNav').innerHTML = [...years.entries()].map(([year, months], index) => {
        const count = [...months.values()].reduce((sum, issues) => sum + issues.length, 0);
        return `<a href="#year-${year}"${index === 0 ? ' aria-current="true"' : ''}><span>${year}</span><small>${escapeHtml(issueCount(count, text))}</small></a>`;
    }).join('');

    $('archiveList').innerHTML = [...years.entries()].map(([year, months]) => {
        const yearCount = [...months.values()].reduce((sum, issues) => sum + issues.length, 0);
        const monthSections = [...months.entries()].map(([month, issues]) => `
            <section class="month-group">
                <header class="month-heading">
                    <h3>${escapeHtml(monthName(`${year}-${month}`))}</h3>
                    <span>${escapeHtml(issueCount(issues.length, text))}</span>
                </header>
                ${issues.map((issue) => renderIssue(issue, text)).join('')}
            </section>`).join('');
        return `
            <section class="archive-year" id="year-${year}">
                <header class="year-heading">
                    <span>${escapeHtml(text.year)}</span>
                    <h2>${year}</h2>
                    <small>${escapeHtml(issueCount(yearCount, text))}</small>
                </header>
                ${monthSections}
            </section>`;
    }).join('');
    setupYearObserver();
}

let yearObserver;
function setupYearObserver() {
    if (yearObserver) yearObserver.disconnect();
    const links = [...document.querySelectorAll('#yearNav a')];
    yearObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            links.forEach((link) => link.removeAttribute('aria-current'));
            const active = links.find((link) => link.getAttribute('href') === `#${entry.target.id}`);
            if (active) active.setAttribute('aria-current', 'true');
        }
    }, {rootMargin: '-18% 0px -70% 0px'});
    document.querySelectorAll('.archive-year').forEach((year) => yearObserver.observe(year));
}

function render() {
    const text = UI[locale];
    const landingBase = locale === 'en' ? '/' : `/${locale}/`;
    const sortedYears = [...new Set(ISSUES.map((issue) => issue.published.slice(0, 4)))].sort((a, b) => b.localeCompare(a));

    document.documentElement.lang = locale;
    document.title = text.metaTitle;
    setMeta('meta[name="description"]', text.metaDescription);
    setMeta('meta[property="og:title"]', text.metaTitle);
    setMeta('meta[property="og:description"]', text.metaDescription);
    setMeta('meta[name="twitter:title"]', text.metaTitle);
    setMeta('meta[name="twitter:description"]', text.metaDescription);

    $('language').value = locale;
    $('language').setAttribute('aria-label', text.language);
    $('languageLabel').textContent = text.language;
    $('skipLink').textContent = text.skip;
    $('role').textContent = text.role;
    ['navServices', 'navCases', 'navJournal', 'navWork'].forEach((id, index) => $(id).textContent = text.nav[index]);
    $('brandLink').href = landingBase;
    $('navServices').href = `${landingBase}#expertise`;
    $('navCases').href = `${landingBase}#work`;
    $('navJournal').href = '#top';
    $('navWork').href = `${landingBase}#engagement`;
    $('contactLink').href = `${landingBase}#contact`;
    $('contactLink').textContent = text.contact;

    $('heroKicker').textContent = text.kicker;
    $('heroTitle').textContent = text.title;
    $('heroLead').textContent = text.lead;
    $('issueTotal').textContent = String(ISSUES.length);
    $('issueTotalLabel').textContent = text.publishedForms[formIndex(ISSUES.length)];
    $('yearRange').textContent = sortedYears.length === 1 ? sortedYears[0] : `${sortedYears.at(-1)}–${sortedYears[0]}`;
    $('yearRangeLabel').textContent = text.yearForms[formIndex(sortedYears.length)];
    $('browseLabel').textContent = text.browse;
    $('footerCompany').textContent = text.footerCompany;
    $('footerTagline').textContent = text.footerTagline;
    renderArchive(text);
}

$('language').addEventListener('change', (event) => {
    locale = event.target.value;
    localStorage.setItem('signal-locale', locale);
    const url = new URL(location.href);
    url.searchParams.set('lang', locale);
    history.replaceState(null, '', url);
    render();
});

addEventListener('scroll', () => {
    const page = document.documentElement;
    const max = page.scrollHeight - page.clientHeight;
    document.querySelector('.scroll-progress span').style.width = `${max ? page.scrollTop / max * 100 : 0}%`;
}, {passive: true});

render();
