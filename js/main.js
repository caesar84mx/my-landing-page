// Main JavaScript file for Max Dymnoff landing page

// i18n dictionaries
const I18N = {
    en: {
        nav: { services: 'Services', clients: 'Trusted by', process: 'Process', cta: 'Discuss a project' },
        hero: { title: 'Mobile apps, end‑to‑end — Android, iOS & backend', lead: 'I design the architecture, write clean code, and ship to the App Store and Google Play. Cross‑platform with Compose/KMM/React Native, or native with Kotlin & Swift — based on your goals and budget.', ctaPrimary: 'Get a quote', ctaSecondary: 'See services' },
        kpi: { years: 'years of pro experience', releases: 'production releases', timezones: 'time zones & clients' },
        heroStackNote: 'I pick the stack for your product goals: time‑to‑market, performance, maintenance cost.',
        services: { title: 'Services', sub: 'Clear scope, timelines, deliverables. No surprises.',
            full: { title: 'End‑to‑end development', text: 'Mobile app plus backend: architecture, development, testing, release, monitoring. Documentation & hand‑off.' },
            cross: { title: 'Cross‑platform', text: 'Compose Multiplatform / KMM or React Native for shared code and unified features. Trade‑offs discussed upfront.' },
            native: { title: 'Native Android & iOS', text: 'Deep system integrations, offline, maps & payments. Performance and UX first.' }
        },
        clients: { title: 'Trusted by', sub: 'Experience in fintech, lifestyle, and infrastructure SDKs.' },
        process: { title:'How I work', step1:{badge:'Step 1', title:'Discovery & prioritization', text:'Clarify business goals, risks, constraints. Roadmap & KPIs.'}, step2:{badge:'Step 2', title:'Architecture & stack', text:'Propose options (cross‑platform / native), estimate TCO and complexity.'}, step3:{badge:'Step 3', title:'Delivery & QA', text:'1–2 week iterations, CI/CD, tests. Stability metrics as DoD.'}, step4:{badge:'Step 4', title:'Launch & support', text:'Store release, analytics, alerts. Continuous improvement.'}},
        contact: { title:'Tell me about your project', sub:'I usually reply within a business day (UTC‑3). The more details, the more accurate the estimate.', tip1:'Links to designs/repos/references are welcome.', tip2:'Need an NDA? Send yours or use my standard template.' },
        form: { nameLabel:'Name *', emailLabel:'Email *', aboutLabel:'Project brief *', aboutPh:'Goal, platform(s), key features, timeline', budgetLabel:'Budget', budget0:'Not decided', timelineLabel:'Timeline', timeline0:'Flexible', timeline1:'Up to 1 month', timeline2:'1–3 months', timeline3:'3–6 months', submit:'Send', note:'By clicking "Send", you agree to the processing of your data to answer your request.' },
        footer:{contact:'Contact'}
    },
    es: {
        nav: { services: 'Servicios', clients: 'Clientes', process: 'Proceso', cta: 'Hablemos del proyecto' },
        hero: { title: 'Apps móviles de punta a punta — Android, iOS y backend', lead: 'Diseño la arquitectura, escribo código limpio y publico en App Store y Google Play. Multiplataforma con Compose/KMM/React Native, o nativo con Kotlin y Swift — según objetivos y presupuesto.', ctaPrimary: 'Pedir estimación', ctaSecondary: 'Ver servicios' },
        kpi: { years: 'años de experiencia', releases: 'lanzamientos en producción', timezones: 'zonas horarias y clientes' },
        heroStackNote: 'Elijo el stack según los objetivos del producto: velocidad de salida al mercado, rendimiento, costo de mantenimiento.',
        services: { title: 'Servicios', sub: 'Alcance, plazos y entregables claros. Sin sorpresas.',
            full: { title: 'Desarrollo llave en mano', text: 'App móvil con backend: arquitectura, desarrollo, pruebas, publicación, monitoreo. Documentación y hand‑off.' },
            cross: { title: 'Multiplataforma', text: 'Compose Multiplatform / KMM o React Native para código compartido y features unificadas. Aclaramos trade‑offs desde el inicio.' },
            native: { title: 'Nativo Android e iOS', text: 'Integraciones profundas, offline, mapas y pagos. Rendimiento y UX primero.' }
        },
        clients: { title: 'Clientes', sub: 'Experiencia en fintech, lifestyle y SDKs de infraestructura.' },
        process: { title:'Cómo trabajo', step1:{badge:'Paso 1', title:'Descubrimiento y priorización', text:'Objetivos, riesgos y restricciones. Roadmap y KPIs.'}, step2:{badge:'Paso 2', title:'Arquitectura y stack', text:'Opciones (multiplataforma / nativo), costo total y complejidad.'}, step3:{badge:'Paso 3', title:'Entrega y QA', text:'Iteraciones de 1–2 semanas, CI/CD, tests. Métricas de estabilidad en la DoD.'}, step4:{badge:'Paso 4', title:'Lanzamiento y soporte', text:'Publicación, analítica, alertas. Evolución continua.'}},
        contact: { title:'Contame del proyecto', sub:'Suelo responder dentro de un día hábil (UTC‑3). Más detalles = mejor estimación.', tip1:'Podés adjuntar links a diseños/repos/referencias.', tip2:'¿NDA? Enviá el tuyo o usamos mi plantilla estándar.' },
        form: { nameLabel:'Nombre *', emailLabel:'Email *', aboutLabel:'Resumen del proyecto *', aboutPh:'Objetivo, plataforma(s), features clave, plazos', budgetLabel:'Presupuesto', budget0:'Sin definir', timelineLabel:'Plazos', timeline0:'Flexibles', timeline1:'Hasta 1 mes', timeline2:'1–3 meses', timeline3:'3–6 meses', submit:'Enviar', note:'Al enviar aceptás el tratamiento de tus datos para responder tu solicitud.' },
        footer:{contact:'Contacto'}
    },
    pt: {
        nav: { services: 'Serviços', clients: 'Clientes', process: 'Processo', cta: 'Discutir projeto' },
        hero: { title: 'Apps móveis ponta a ponta — Android, iOS e backend', lead: 'Desenho a arquitetura, escrevo código limpo e publico na App Store e Google Play. Multiplataforma com Compose/KMM/React Native, ou nativo com Kotlin e Swift — conforme objetivos e orçamento.', ctaPrimary: 'Solicitar orçamento', ctaSecondary: 'Ver serviços' },
        kpi: { years: 'anos de experiência', releases: 'lançamentos em produção', timezones: 'fusos e clientes' },
        heroStackNote: 'Escolho o stack conforme os objetivos do produto: time‑to‑market, performance, custo de manutenção.',
        services: { title: 'Serviços', sub: 'Escopo, prazos e entregáveis claros. Sem surpresas.',
            full: { title: 'Desenvolvimento turnkey', text: 'App móvel com backend: arquitetura, desenvolvimento, testes, publicação e monitoramento. Documentação e hand‑off.' },
            cross: { title: 'Multiplataforma', text: 'Compose Multiplatform / KMM ou React Native para código compartilhado e features unificadas. Trade‑offs combinados de início.' },
            native: { title: 'Nativo Android e iOS', text: 'Integrações profundas, offline, mapas e pagamentos. Performance e UX em primeiro lugar.' }
        },
        clients: { title: 'Clientes', sub: 'Experiência em fintech, lifestyle e SDKs de infraestrutura.' },
        process: { title:'Como trabalho', step1:{badge:'Etapa 1', title:'Descoberta e priorização', text:'Objetivos, riscos e restrições. Roteiro e KPIs.'}, step2:{badge:'Etapa 2', title:'Arquitetura e stack', text:'Opções (multiplataforma / nativo), TCO e complexidade.'}, step3:{badge:'Etapa 3', title:'Entrega e QA', text:'Sprints de 1–2 semanas, CI/CD, testes. Métricas de estabilidad na DoD.'}, step4:{badge:'Etapa 4', title:'Lançamento e suporte', text:'Publicação, analytics, alertas. Evolução contínua.'}},
        contact: { title:'Fale do seu projeto', sub:'Normalmente respondo em um dia útil (UTC‑3). Quanto mais detalhes, melhor a estimativa.', tip1:'Links para design/repos/referências são bem‑vindos.', tip2:'Precisa de NDA? Envie o seu ou usamos meu padrão.' },
        form: { nameLabel:'Nome *', emailLabel:'Email *', aboutLabel:'Resumo do projeto *', aboutPh:'Objetivo, plataforma(s), features-chave, prazos', budgetLabel:'Orçamento', budget0:'Indefinido', timelineLabel:'Prazo', timeline0:'Flexível', timeline1:'Até 1 mês', timeline2:'1–3 meses', timeline3:'3–6 meses', submit:'Enviar', note:'Ao enviar, você concorda com o tratamento dos seus dados para resposta ao seu pedido.' },
        footer:{contact:'Contato'}
    },
    ru: {
        nav: { services: 'Услуги', clients: 'Клиенты', process: 'Как работаю', cta: 'Обсудить проект' },
        hero: { title: 'Мобильные приложения под ключ — Android, iOS и backend', lead: 'Проектирую архитектуру, пишу чистый код и довожу до релиза в App Store и Google Play. Кроссплатформенно на Compose/KMM/React Native или нативно на Kotlin и Swift — под задачу и бюджет.', ctaPrimary: 'Оценить проект', ctaSecondary: 'Посмотреть услуги' },
        kpi: { years: 'лет профессионального опыта', releases: 'продакшен‑релизов', timezones: 'таймзоны и клиенты' },
        heroStackNote: 'Подбираю стек под задачи продукта: скорость вывода на рынок, производительность, стоимость поддержки.',
        services: { title: 'Услуги', sub: 'Четко фиксирую границы работ, сроки и итоговые артефакты. Без сюрпризов.',
            full: { title: 'Разработка под ключ', text: 'Мобильное приложение вместе с backend: архитектура, разработка, тестирование, публикация, мониторинг. Документация и hand‑off.' },
            cross: { title: 'Кроссплатформенная разработка', text: 'Compose Multiplatform / KMM или React Native для общего кода и единых фич. Компромиссы проговариваю заранее.' },
            native: { title: 'Нативный Android и iOS', text: 'Глубокая интеграция с системными сервисами, офлайн‑режим, работа с картами и оплатами. Производительность и UX на первом месте.' }
        },
        clients: { title: 'Мне доверяли', sub: 'Опыт в финтехе, лайфстайле и инфраструктурных SDK.' },
        process: { title:'Как я работаю', step1:{badge:'Шаг 1', title:'Диагностика и приоритизация', text:'Выясняю цели бизнеса, риски и ограничения. Формирую дорожную карту и KPI.'}, step2:{badge:'Шаг 2', title:'Архитектура и стек', text:'Предлагаю варианты (кроссплатформа/натив), оцениваю стоимость владения и сложность.'}, step3:{badge:'Шаг 3', title:'Разработка и контроль качества', text:'Итерации 1–2 недели, CI/CD, автотесты. Показатели стабильности — часть Definition of Done.'}, step4:{badge:'Шаг 4', title:'Запуск и поддержка', text:'Публикация в сторах, аналитика, алерты. Дальнейшее развитие по бэклогу.'}},
        contact: { title:'Расскажите о проекте', sub:'Обычно отвечаю в течение рабочего дня (UTC‑3). Чем конкретнее запрос, тем точнее оценка.', tip1:'Можно приложить ссылки на макеты/репо/референсы.', tip2:'Если нужен NDA — пришлите свой или возьмём мой стандартный шаблон.' },
        form: { nameLabel:'Имя *', emailLabel:'Email *', aboutLabel:'Кратко о проекте *', aboutPh:'Цель, платформа(ы), ключевые фичи, сроки', budgetLabel:'Бюджет', budget0:'Не определён', timelineLabel:'Сроки', timeline0:'Гибкие', timeline1:'До 1 месяца', timeline2:'1–3 месяца', timeline3:'3–6 месяцев', submit:'Отправить', note:'Нажимая «Отправить», вы соглашаетесь на обработку данных для ответа на ваш запрос.' },
        footer:{contact:'Контакты'}
    }
};

// Utility functions
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

// Initialize year in footer
function initializeYear() {
    document.getElementById('y').textContent = new Date().getFullYear();
}

// Smooth anchor scroll
function initializeSmoothScroll() {
    Array.from(document.querySelectorAll('a[href^="#"]')).forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            const el = document.querySelector(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Apply internationalization
function applyI18n(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    
    // Apply text content
    $$('[data-i18n]').forEach(el => {
        const path = el.getAttribute('data-i18n').split('.');
        let cur = dict;
        for (const p of path) {
            cur = cur?.[p];
            if (!cur) break;
        }
        if (typeof cur === 'string') el.innerHTML = cur;
    });
    
    // Apply placeholders
    $$('[data-i18n-placeholder]').forEach(el => {
        const path = el.getAttribute('data-i18n-placeholder').split('.');
        let cur = dict;
        for (const p of path) {
            cur = cur?.[p];
            if (!cur) break;
        }
        if (typeof cur === 'string') el.setAttribute('placeholder', cur);
    });
    
    // Update language button states
    $$('.lang button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    
    // Update dropdown current language display
    $$('.lang-current').forEach(span => {
        span.textContent = lang.toUpperCase();
    });
    
    // Update dropdown option states
    $$('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Update hero stack note
    const helper = document.querySelector('.hero-card .helper');
    if (helper && dict.heroStackNote) {
        helper.textContent = dict.heroStackNote;
    }
}

// Initialize language switching
function initializeLanguageSwitching() {
    // Handle both dropdown options and button clicks
    $$('.lang button[data-lang]').forEach(b => {
        b.addEventListener('click', () => {
            const lang = b.dataset.lang;
            localStorage.setItem('lang', lang);
            const url = new URL(window.location);
            url.searchParams.set('lang', lang);
            history.replaceState({}, '', url);
            applyI18n(lang);
            
            // Close dropdown if it's open
            const dropdown = b.closest('.lang-dropdown');
            if (dropdown) {
                const toggle = dropdown.querySelector('.lang-toggle');
                const menu = dropdown.querySelector('.lang-menu');
                if (toggle && menu) {
                    toggle.setAttribute('aria-expanded', 'false');
                    menu.setAttribute('aria-hidden', 'true');
                }
            }
        });
    });
    
    // Handle dropdown toggle
    $$('.lang-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const menu = toggle.nextElementSibling;
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            
            toggle.setAttribute('aria-expanded', !isExpanded);
            menu.setAttribute('aria-hidden', isExpanded);
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-dropdown')) {
            $$('.lang-dropdown').forEach(dropdown => {
                const toggle = dropdown.querySelector('.lang-toggle');
                const menu = dropdown.querySelector('.lang-menu');
                if (toggle && menu) {
                    toggle.setAttribute('aria-expanded', 'false');
                    menu.setAttribute('aria-hidden', 'true');
                }
            });
        }
    });
}

// Get initial language
function getInitialLang() {
    const urlLang = new URLSearchParams(location.search).get('lang');
    const storeLang = localStorage.getItem('lang');
    const nav = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
    const supported = ['en', 'es', 'pt', 'ru'];
    
    if (urlLang && supported.includes(urlLang)) return urlLang;
    if (storeLang && supported.includes(storeLang)) return storeLang;
    if (supported.includes(nav)) return nav;
    return 'en';
}

// Router functionality
function initializeRouter() {
    const sections = ['.hero', '#services', '#clients', '#process', '#contact'];
    
    const form = document.getElementById('contactForm');
    if (form) {
        let next = form.querySelector('input[name="_next"]');
        if (!next) {
            next = document.createElement('input');
            next.type = 'hidden';
            next.name = '_next';
            form.appendChild(next);
        }
        
        // For Vercel deployment, use hash-based thanks page
        let thanksUrl = '#/thanks';
        try {
            // Only use absolute URL if we're on a domain that supports it
            if (location.protocol !== 'file:' && !location.hostname.includes('vercel.app')) {
                thanksUrl = new URL('/thanks', location.origin).toString();
            }
        } catch {}
        next.value = thanksUrl;
    }
    
    // Pre-fill form from URL params
    function prefill() {
        const params = new URLSearchParams(location.search);
        const map = { name: '#name', email: '#email', about: '#about', budget: '#budget', timeline: '#timeline' };
        Object.entries(map).forEach(([k, sel]) => {
            const v = params.get(k);
            const el = $(sel);
            if (v && el) {
                el.value = v;
            }
        });
    }
    
    function showThanks() {
        document.title = 'Thank you — Max Dymnoff';
        sections.forEach(sel => {
            const el = $(sel);
            if (el) el.style.display = 'none';
        });
        
        const container = document.createElement('section');
        container.className = 'hero';
        container.innerHTML = '<div class="container hero-grid"><div><span class="eyebrow">Message received</span><h2 class="h1">Thanks — I\'ll get back to you</h2><p class="lead">Your request is in. I usually reply within one business day (UTC‑3).</p><div class="cta"><a class="btn" href="/" id="backHome">Back to home</a></div></div></div>';
        document.querySelector('main').prepend(container);
        
        document.getElementById('backHome')?.addEventListener('click', (e) => {
            e.preventDefault();
            history.replaceState({}, '', '/');
            location.reload();
        });
    }
    
    prefill();
    if (location.pathname.endsWith('/thanks') || location.hash === '#/thanks') {
        showThanks();
    }
}

// Development guard for file:// protocol
function initializeDevGuard() {
    if (location.protocol === 'file:') {
        const status = document.getElementById('formStatus');
        if (status) {
            status.className = 'status err';
            status.innerHTML = 'You\'re viewing this page via <code>file://</code>. To submit the form with FormSubmit, run a local server.<br/>Quick options: <code>python3 -m http.server</code>, <code>npx serve</code>, or VS Code Live Server.';
        }
    }
}

// Form submission handling
function initializeFormSubmission() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const btn = document.getElementById('submitBtn');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        const action = form.getAttribute('action') || '';
        if (action.startsWith('mailto:')) return; // let mailto open
        
        // Honeypot: if filled, silently drop
        const trap = form.website && form.website.value && form.website.value.trim() !== '';
        if (trap) {
            e.preventDefault();
            return;
        }
        
        const isFormSubmit = /formsubmit\.co\//.test(action);
        const isAjax = /\/ajax\//.test(action);
        
        // If opened as file://, block submit and explain
        if (location.protocol === 'file:') {
            e.preventDefault();
            status.className = 'status err';
            status.innerHTML = 'FormSubmit will not work from <code>file://</code>. Please run a local server (e.g. <code>python3 -m http.server</code>) and open via <code>http://localhost</code>.';
            return;
        }
        
        // If classic FormSubmit endpoint (non-AJAX), let the browser submit normally (avoids CORS)
        if (isFormSubmit && !isAjax) {
            return; // native POST & redirect handled by FormSubmit
        }
        
        e.preventDefault();
        status.textContent = '';
        btn.disabled = true;
        btn.textContent = ({ en: 'Sending…', es: 'Enviando…', pt: 'Enviando…', ru: 'Отправка…' })[$('.lang .active')?.dataset.lang || 'en'];
        
        try {
            if (!action) throw new Error('Form action URL is not configured.');
            
            let resp;
            if (form.dataset.formspree === 'true') {
                const data = new URLSearchParams(new FormData(form));
                resp = await fetch(action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
            } else {
                const payload = Object.fromEntries(new FormData(form).entries());
                resp = await fetch(action, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(payload) });
            }
            
            if (resp.ok) {
                form.reset();
                status.className = 'status ok';
                const lang = $('.lang .active')?.dataset.lang || 'en';
                status.textContent = ({ en: 'Thanks! I received your request and will get back to you.', es: '¡Gracias! Recibí tu solicitud y te responderé.', pt: 'Obrigado! Recebi sua mensagem e retornarei em breve.', ru: 'Спасибо! Я получил вашу заявку и свяжусь с вами.' })[lang];
            } else {
                throw new Error(await resp.text() || 'Network error');
            }
        } catch (err) {
            status.className = 'status err';
            const lang = $('.lang .active')?.dataset.lang || 'en';
            const msg = ({ en: 'Could not send the form: ', es: 'No se pudo enviar el formulario: ', pt: 'Não foi possível enviar o formulário: ', ru: 'Не удалось отправить форму: ' })[lang];
            status.textContent = msg + (err.message || err);
        } finally {
            btn.disabled = false;
            btn.textContent = ({ en: 'Send', es: 'Enviar', pt: 'Enviar', ru: 'Отправить' })[$('.lang .active')?.dataset.lang || 'en'];
        }
    });
}

// Main initialization function
function initialize() {
    initializeYear();
    initializeSmoothScroll();
    initializeLanguageSwitching();
    initializeRouter();
    initializeDevGuard();
    initializeFormSubmission();
    
    // Apply initial language
    applyI18n(getInitialLang());
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}
