export const CASE_LOCALES = {
    es: {
        languageName: 'ES',
        htmlLanguage: 'es',
        ogLocale: 'es_ES',
        skip: 'Ir al contenido',
        home: 'Inicio',
        allCases: 'Todos los casos',
        discuss: 'Hablemos del proyecto',
        navigation: 'Navegación del caso',
        breadcrumb: 'Ruta de navegación',
        brandRole: 'Consultor móvil · Desarrollador full-stack de apps móviles',
        footerCompany: 'Servicios a través de Dymnoff Software Labs SAS',
        footerTagline: 'Del backend a las apps. Un responsable de principio a fin.',
        technologies: 'Tecnologías y áreas de trabajo',
        socialImageAlt: 'Max Dymnoff — ingeniero senior de aplicaciones móviles para productos complejos',
        next: 'Siguiente'
    },
    pt: {
        languageName: 'PT',
        htmlLanguage: 'pt',
        ogLocale: 'pt_BR',
        skip: 'Ir para o conteúdo',
        home: 'Início',
        allCases: 'Todos os projetos',
        discuss: 'Falar sobre um projeto',
        navigation: 'Navegação do projeto',
        breadcrumb: 'Caminho de navegação',
        brandRole: 'Consultor mobile · Desenvolvedor full-stack de aplicativos mobile',
        footerCompany: 'Serviços por meio da Dymnoff Software Labs SAS',
        footerTagline: 'Do backend aos aplicativos. Um responsável pela entrega.',
        technologies: 'Tecnologias e áreas de trabalho',
        socialImageAlt: 'Max Dymnoff — engenheiro sênior de aplicativos mobile para produtos complexos',
        next: 'Próximo'
    },
    ru: {
        languageName: 'RU',
        htmlLanguage: 'ru',
        ogLocale: 'ru_RU',
        skip: 'Перейти к содержанию',
        home: 'Главная',
        allCases: 'Все кейсы',
        discuss: 'Обсудить проект',
        navigation: 'Навигация по кейсу',
        breadcrumb: 'Навигационная цепочка',
        brandRole: 'Мобильный консультант · Full-stack-разработчик мобильных приложений',
        footerCompany: 'Работа через Dymnoff Software Labs SAS',
        footerTagline: 'От серверной части до приложений. Один ответственный за результат.',
        technologies: 'Технологии и направления работы',
        socialImageAlt: 'Max Dymnoff — ведущий инженер мобильной разработки для сложных продуктов',
        next: 'Далее'
    }
};

export const CASE_STUDIES = {
    hailme: {
        slug: 'hailme',
        technologies: ['Kotlin', 'Compose Multiplatform', 'Ktor', 'PostgreSQL', 'Redis', 'Geofencing', 'Maps', 'Push', 'SMS', 'WhatsApp'],
        next: 'ifit',
        externalUrl: 'https://hailme.app',
        locales: {
            es: {
                seoTitle: 'Caso HailMe — Desarrollo full-stack de producto móvil | Max Dymnoff',
                seoDescription: 'Cómo Max Dymnoff llevó HailMe de la idea al lanzamiento: backend en Ktor, apps Android e iOS con Compose Multiplatform, infraestructura y publicación.',
                socialTitle: 'HailMe: un producto móvil full-stack de principio a fin',
                socialDescription: 'Un producto de alertas de llegada desarrollado desde el backend hasta Android, iOS, infraestructura, cumplimiento y lanzamiento.',
                caseName: 'HailMe',
                kicker: 'Fundador · Desarrollo full-stack de producto móvil',
                title: 'Un producto móvil bajo una sola responsabilidad: <em>de la idea al lanzamiento.</em>',
                summary: 'HailMe es un producto de alertas de llegada basadas en geolocalización. Lo fundé y construí todo el sistema: apps móviles, backend, infraestructura, publicación, cumplimiento y operación.',
                facts: [
                    ['Rol', 'Fundador y único ingeniero de producto'],
                    ['Alcance', 'Producto · Backend · Android · iOS · Entrega'],
                    ['Stack', 'Compose Multiplatform · Ktor · PostgreSQL · Redis'],
                    ['Producto', 'Alertas de llegada por geolocalización']
                ],
                sections: [
                    {
                        label: '01 · Contexto',
                        title: 'La app era solo una parte del sistema.',
                        paragraphs: [
                            'El producto debía detectar llegadas en segundo plano, facilitar la búsqueda de lugares, autenticar usuarios y enviar alertas útiles por varios canales. Además, tenía que superar la revisión de las tiendas, cumplir las reglas de los proveedores de mensajería y funcionar con costes reales de infraestructura.',
                            'Por eso el reto no era simplemente crear una app para Android o iOS, sino diseñar y operar un producto completo.'
                        ]
                    },
                    {
                        label: '02 · Responsabilidad',
                        title: 'Un único camino técnico para producto, backend y aplicaciones móviles.',
                        subsections: [
                            ['Producto y arquitectura', 'Llevé HailMe desde la definición inicial hasta el lanzamiento. Me ocupé del producto, la arquitectura móvil y de backend, la infraestructura, las tiendas, los proveedores y la operación diaria.'],
                            ['Apps para Android e iOS', 'Construí la experiencia compartida con Compose Multiplatform, incluidos geofencing en segundo plano, mapas, búsqueda de direcciones, autenticación y los flujos de monitorización de llegadas.'],
                            ['Backend y entrega', 'Desarrollé el backend en Ktor y los canales de entrega mediante push, SMS y WhatsApp. También gestioné las políticas de las tiendas, los requisitos de mensajería, las decisiones de lanzamiento y los costes de infraestructura.']
                        ]
                    },
                    {
                        label: '03 · Resultado',
                        title: 'Un producto en producción con un único responsable técnico.',
                        paragraphs: [
                            'El resultado es un producto lanzado cuya arquitectura, experiencia de usuario, backend, canales de entrega y decisiones operativas se desarrollaron como un solo sistema, no como piezas aisladas entre distintos equipos.'
                        ],
                        outcomes: [['E2E', 'responsabilidad desde la idea hasta la operación'], ['2', 'plataformas móviles con lógica de producto compartida'], ['1', 'camino técnico entre backend, apps y lanzamiento']]
                    }
                ],
                ctaKicker: '¿Necesitas el mismo nivel de responsabilidad?',
                ctaTitle: 'Diseñemos el producto móvil completo.',
                ctaBody: 'Podemos empezar con una auditoría de arquitectura y entrega o asumir el desarrollo completo.',
                ctaPrimary: 'Hablemos de tu proyecto',
                ctaExternal: 'Visitar HailMe',
                nextLabel: 'iFIT'
            },
            pt: {
                seoTitle: 'Projeto HailMe — Desenvolvimento mobile full-stack | Max Dymnoff',
                seoDescription: 'Como Max Dymnoff levou o HailMe da ideia ao lançamento: backend em Ktor, apps Android e iOS com Compose Multiplatform, infraestrutura e publicação.',
                socialTitle: 'HailMe: um produto mobile full-stack de ponta a ponta',
                socialDescription: 'Um produto de alertas de chegada desenvolvido do backend aos apps, infraestrutura, conformidade e lançamento.',
                caseName: 'HailMe',
                kicker: 'Fundador · Desenvolvimento mobile full-stack',
                title: 'Um produto mobile sob uma única responsabilidade: <em>da ideia ao lançamento.</em>',
                summary: 'O HailMe é um produto de alertas de chegada baseados em geolocalização. Eu o fundei e construí todo o sistema: aplicativos, backend, infraestrutura, publicação, conformidade e operação.',
                facts: [
                    ['Papel', 'Fundador e único engenheiro de produto'],
                    ['Escopo', 'Produto · Backend · Android · iOS · Entrega'],
                    ['Stack', 'Compose Multiplatform · Ktor · PostgreSQL · Redis'],
                    ['Produto', 'Alertas de chegada por geolocalização']
                ],
                sections: [
                    {
                        label: '01 · Contexto',
                        title: 'O aplicativo era apenas uma parte do sistema.',
                        paragraphs: [
                            'O produto precisava reconhecer chegadas em segundo plano, facilitar a busca de lugares, autenticar usuários e enviar alertas úteis por vários canais. Também precisava passar pela revisão das lojas, atender às regras dos provedores de mensageria e operar com custos reais de infraestrutura.',
                            'Por isso, o desafio não era apenas implementar um app para Android ou iOS, mas construir e operar um produto completo.'
                        ]
                    },
                    {
                        label: '02 · Responsabilidade',
                        title: 'Um único caminho técnico para produto, backend e mobile.',
                        subsections: [
                            ['Produto e arquitetura', 'Levei o HailMe da definição inicial ao lançamento, cuidando do produto, da arquitetura mobile e de backend, da infraestrutura, das lojas, dos fornecedores e da operação diária.'],
                            ['Aplicativos Android e iOS', 'Construí a experiência compartilhada com Compose Multiplatform, incluindo geofencing em segundo plano, mapas, busca de endereços, autenticação e os fluxos de monitoramento de chegada.'],
                            ['Backend e entrega', 'Desenvolvi o backend em Ktor e os canais de entrega por push, SMS e WhatsApp. Também cuidei das políticas das lojas, da conformidade de mensageria, das decisões de lançamento e dos custos de infraestrutura.']
                        ]
                    },
                    {
                        label: '03 · Resultado',
                        title: 'Um produto em produção com um único responsável técnico.',
                        paragraphs: [
                            'O resultado é um produto lançado cuja arquitetura, experiência, backend, canais de entrega e decisões operacionais foram desenvolvidos como um único sistema, e não como partes isoladas entre equipes.'
                        ],
                        outcomes: [['E2E', 'responsabilidade da ideia à operação'], ['2', 'plataformas mobile com lógica de produto compartilhada'], ['1', 'caminho técnico entre backend, apps e lançamento']]
                    }
                ],
                ctaKicker: 'Precisa do mesmo nível de responsabilidade?',
                ctaTitle: 'Vamos desenhar o produto mobile completo.',
                ctaBody: 'Podemos começar com uma auditoria de arquitetura e entrega ou assumir o desenvolvimento completo.',
                ctaPrimary: 'Falar sobre seu projeto',
                ctaExternal: 'Visitar o HailMe',
                nextLabel: 'iFIT'
            },
            ru: {
                seoTitle: 'Кейс HailMe — мобильный продукт от backend до релиза | Max Dymnoff',
                seoDescription: 'Как Max Dymnoff создал и запустил HailMe: backend на Ktor, приложения Android и iOS на Compose Multiplatform, инфраструктура и публикация.',
                socialTitle: 'HailMe: мобильный продукт от идеи до запуска',
                socialDescription: 'Геолокационный сервис целиком: серверная часть, Android, iOS, инфраструктура, требования провайдеров и публикация.',
                caseName: 'HailMe',
                kicker: 'Основатель · Full-stack-разработка мобильного продукта',
                title: 'Мобильный продукт под одной ответственностью: <em>от идеи до запуска.</em>',
                summary: 'HailMe — сервис геолокационных уведомлений о прибытии. Я основал продукт и построил всю систему: мобильные приложения, серверную часть, инфраструктуру, публикацию, соответствие требованиям и дальнейшую эксплуатацию.',
                facts: [
                    ['Роль', 'Основатель и единственный инженер продукта'],
                    ['Объём', 'Продукт · Backend · Android · iOS · Релиз'],
                    ['Стек', 'Compose Multiplatform · Ktor · PostgreSQL · Redis'],
                    ['Продукт', 'Уведомления о прибытии по геолокации']
                ],
                sections: [
                    {
                        label: '01 · Контекст',
                        title: 'Приложение было лишь частью системы.',
                        paragraphs: [
                            'Продукт должен был определять прибытие в фоновом режиме, помогать находить места, авторизовывать пользователей и отправлять уведомления по нескольким каналам. Одновременно нужно было пройти ревью в сторах, выполнить требования провайдеров сообщений и уложиться в реальные инфраструктурные расходы.',
                            'Поэтому задача заключалась не просто в разработке приложения для Android или iOS, а в создании и эксплуатации целого продукта.'
                        ]
                    },
                    {
                        label: '02 · Ответственность',
                        title: 'Единый технический контур для продукта, серверной части и мобильных приложений.',
                        subsections: [
                            ['Продукт и архитектура', 'Я провёл HailMe от первоначальной концепции до запуска: определял продукт, проектировал мобильную и серверную архитектуру, настраивал инфраструктуру, работал со сторами и поставщиками и отвечал за ежедневную эксплуатацию.'],
                            ['Приложения Android и iOS', 'Я построил общую мобильную часть на Compose Multiplatform: фоновый geofencing, карты, поиск адресов, авторизацию и пользовательские сценарии мониторинга прибытия.'],
                            ['Серверная часть и доставка уведомлений', 'Я разработал серверную часть на Ktor и каналы доставки через push, SMS и WhatsApp, а также занимался правилами сторов, требованиями провайдеров, релизными компромиссами и стоимостью инфраструктуры.']
                        ]
                    },
                    {
                        label: '03 · Результат',
                        title: 'Работающий продукт с единым техническим владельцем.',
                        paragraphs: [
                            'Архитектура, пользовательский опыт, серверная часть, каналы доставки и операционные решения развивались как одна система, а не передавались между разрозненными командами.'
                        ],
                        outcomes: [['E2E', 'ответственность от идеи до эксплуатации'], ['2', 'мобильные платформы с общей продуктовой логикой'], ['1', 'технический контур для серверной части, приложений и запуска']]
                    }
                ],
                ctaKicker: 'Нужен такой же уровень ответственности?',
                ctaTitle: 'Спроектируем мобильный продукт целиком.',
                ctaBody: 'Можно начать с аудита архитектуры и плана разработки или сразу взять продукт в полноценную реализацию.',
                ctaPrimary: 'Обсудить проект',
                ctaExternal: 'Открыть HailMe',
                nextLabel: 'iFIT'
            }
        }
    },
    ifit: {
        slug: 'ifit',
        technologies: ['Android', 'Kotlin', 'ExoPlayer', 'Bluetooth LE', 'Health Connect', 'Kotlin Multiplatform', 'Connected equipment'],
        next: 'clear',
        locales: {
            es: {
                seoTitle: 'Caso iFIT — Modernización de Android nativo | Max Dymnoff',
                seoDescription: 'Modernización Android con más de 580 PRs integrados: ExoPlayer, equipos BLE, Health Connect, Kotlin Multiplatform y mejoras medibles de rendimiento.',
                socialTitle: 'iFIT: modernización de Android nativo a escala',
                socialDescription: 'Modernización desde Xamarin hacia Android nativo en móviles, tablets y consolas de equipos conectados.',
                caseName: 'iFIT',
                kicker: 'Modernización de Android nativo',
                title: 'Modernizar experiencias fitness a <em>escala de producto.</em>',
                summary: 'Una contribución de varios años a la transición de iFIT desde Xamarin hacia Android nativo en teléfonos, tablets y consolas de equipos conectados.',
                facts: [['Rol', 'Senior Android Engineer · Contrato'], ['Periodo', 'Julio de 2023 – Enero de 2026'], ['Alcance', 'Móvil · Tablet · Consolas de equipos'], ['Ruta', 'Xamarin → Android nativo']],
                sections: [
                    {label: '01 · Contexto', title: 'Una plataforma madura con más de una superficie Android.', paragraphs: ['La modernización abarcó experiencias móviles de consumo y equipos de fitness conectados. Los cambios debían funcionar en distintos tamaños de pantalla, integraciones de hardware, reproducción multimedia y ciclos de lanzamiento mientras el producto existente seguía evolucionando.']},
                    {label: '02 · Contribución', title: 'Trabajo profundo de plataforma dentro de una migración prolongada.', subsections: [
                        ['Fiabilidad multimedia', 'Mejoré ExoPlayer mediante correcciones de reproducción, soporte de subtítulos y modos personalizados de escalado de vídeo para móviles y consolas.'],
                        ['Equipos conectados', 'Desarrollé de principio a fin la integración de consolas por Bluetooth LE y la sincronización con Health Connect. También contribuí a componentes de un SDK en Kotlin Multiplatform para telemetría en vivo.'],
                        ['Entrega de la modernización', 'A través de más de 580 pull requests integrados, contribuí con implementación, revisiones, soporte de lanzamientos y reducción de deuda técnica durante la transición hacia Android nativo.']
                    ]},
                    {label: '03 · Impacto', title: 'Mejoras medibles respaldadas por una entrega sostenida.', paragraphs: ['El trabajo contribuyó a mejoras importantes de rendimiento y deuda técnica en las experiencias móviles y de consolas.'], outcomes: [['580+', 'pull requests integrados'], ['~50%', 'mejora de rendimiento'], ['~50%', 'reducción de deuda técnica']]}
                ],
                ctaKicker: '¿Estás modernizando una plataforma móvil compleja?',
                ctaTitle: 'Empieza por los límites del sistema con más riesgo.',
                ctaBody: 'Puedo auditar arquitectura, rendimiento, multimedia, hardware y la ruta de migración antes del próximo compromiso de entrega.',
                ctaPrimary: 'Hablemos de la modernización',
                nextLabel: 'CLEAR'
            },
            pt: {
                seoTitle: 'Projeto iFIT — Modernização para Android nativo | Max Dymnoff',
                seoDescription: 'Modernização Android em mais de 580 PRs integrados: ExoPlayer, equipamentos BLE, Health Connect, Kotlin Multiplatform e ganhos mensuráveis.',
                socialTitle: 'iFIT: modernização para Android nativo em escala',
                socialDescription: 'Evolução do Xamarin para Android nativo em celulares, tablets e consoles de equipamentos conectados.',
                caseName: 'iFIT',
                kicker: 'Modernização para Android nativo',
                title: 'Modernização de experiências fitness em <em>escala de produto.</em>',
                summary: 'Uma contribuição de vários anos para a migração do iFIT de Xamarin para Android nativo em celulares, tablets e consoles de equipamentos conectados.',
                facts: [['Papel', 'Senior Android Engineer · Contrato'], ['Período', 'Julho de 2023 – Janeiro de 2026'], ['Escopo', 'Mobile · Tablet · Consoles de equipamentos'], ['Caminho', 'Xamarin → Android nativo']],
                sections: [
                    {label: '01 · Contexto', title: 'Uma plataforma madura com mais de uma superfície Android.', paragraphs: ['A modernização envolvia experiências mobile para consumidores e equipamentos fitness conectados. As mudanças precisavam funcionar em diferentes telas, integrações de hardware, reprodução de mídia e ciclos de lançamento enquanto o produto continuava evoluindo.']},
                    {label: '02 · Contribuição', title: 'Trabalho profundo de plataforma dentro de uma migração de longo prazo.', subsections: [
                        ['Confiabilidade de mídia', 'Melhorei o ExoPlayer com correções de reprodução, suporte a legendas e modos personalizados de escala de vídeo para dispositivos móveis e consoles.'],
                        ['Equipamentos conectados', 'Desenvolvi de ponta a ponta a integração de consoles por Bluetooth LE e a sincronização com o Health Connect. Também contribuí com componentes de um SDK em Kotlin Multiplatform para telemetria ao vivo.'],
                        ['Entrega da modernização', 'Ao longo de mais de 580 pull requests integrados, contribuí com implementação, revisão, suporte a lançamentos e redução de dívida técnica durante a migração para Android nativo.']
                    ]},
                    {label: '03 · Impacto', title: 'Melhorias mensuráveis apoiadas por uma entrega contínua.', paragraphs: ['O trabalho contribuiu para ganhos relevantes de desempenho e redução de dívida técnica nas experiências mobile e nos consoles.'], outcomes: [['580+', 'pull requests integrados'], ['~50%', 'ganho de desempenho'], ['~50%', 'redução de dívida técnica']]}
                ],
                ctaKicker: 'Está modernizando uma plataforma mobile complexa?',
                ctaTitle: 'Comece pelos limites do sistema com maior risco.',
                ctaBody: 'Posso auditar arquitetura, desempenho, mídia, integrações de hardware e a estratégia de migração antes do próximo compromisso de entrega.',
                ctaPrimary: 'Falar sobre a modernização',
                nextLabel: 'CLEAR'
            },
            ru: {
                seoTitle: 'Кейс iFIT — переход на нативный Android | Max Dymnoff',
                seoDescription: 'Модернизация Android в 580+ принятых PR: ExoPlayer, BLE-оборудование, Health Connect, Kotlin Multiplatform и измеримый рост производительности.',
                socialTitle: 'iFIT: масштабная модернизация нативного Android',
                socialDescription: 'Переход с Xamarin на нативный Android для телефонов, планшетов и консолей фитнес-оборудования.',
                caseName: 'iFIT',
                kicker: 'Модернизация нативного Android',
                title: 'Развитие фитнес-платформы в <em>масштабе продукта.</em>',
                summary: 'Многолетний вклад в переход iFIT с Xamarin на нативный Android для телефонов, планшетов и консолей подключённого фитнес-оборудования.',
                facts: [['Роль', 'Senior Android Engineer · Контракт'], ['Период', 'Июль 2023 – Январь 2026'], ['Объём', 'Телефоны · Планшеты · Консоли'], ['Переход', 'Xamarin → Нативный Android']],
                sections: [
                    {label: '01 · Контекст', title: 'Зрелая платформа с несколькими Android-устройствами.', paragraphs: ['Модернизация охватывала пользовательские приложения и подключённое фитнес-оборудование. Изменения должны были работать на разных экранах, с аппаратными интеграциями и медиасценариями, не останавливая регулярные релизы существующего продукта.']},
                    {label: '02 · Вклад', title: 'Глубокая платформенная работа внутри длительной миграции.', subsections: [
                        ['Надёжность воспроизведения', 'Я улучшал ExoPlayer: исправлял воспроизведение, добавлял поддержку субтитров и специальные режимы масштабирования видео для мобильных устройств и консолей.'],
                        ['Подключённое оборудование', 'Я реализовал интеграцию консолей по Bluetooth LE и синхронизацию с Health Connect, а также участвовал в разработке компонентов Kotlin Multiplatform SDK для телеметрии в реальном времени.'],
                        ['Поставка изменений', 'В рамках более чем 580 влитых PR я занимался реализацией, ревью, поддержкой релизов и сокращением технического долга в ходе перехода на нативный Android.']
                    ]},
                    {label: '03 · Эффект', title: 'Измеримые улучшения благодаря системной работе.', paragraphs: ['Работа помогла заметно повысить производительность и сократить технический долг в мобильных приложениях и консолях оборудования.'], outcomes: [['580+', 'влитых PR'], ['~50%', 'рост производительности'], ['~50%', 'сокращение технического долга']]}
                ],
                ctaKicker: 'Модернизируете сложную мобильную платформу?',
                ctaTitle: 'Начните с самых рискованных границ системы.',
                ctaBody: 'Я могу проверить архитектуру, производительность, медиастек, аппаратные интеграции и план миграции до следующего обязательства по срокам.',
                ctaPrimary: 'Обсудить модернизацию',
                nextLabel: 'CLEAR'
            }
        }
    },
    clear: {
        slug: 'clear',
        technologies: ['Android', 'Kotlin', 'Public SDK', 'Authentication', 'Camera', 'Scanning', 'Legacy modernization'],
        next: 'surfcast',
        locales: {
            es: {
                seoTitle: 'Caso CLEAR — SDK de autenticación y app Android | Max Dymnoff',
                seoDescription: 'Ingeniería Android en el SDK público de autenticación de CLEAR, su app principal, flujos de cámara y escaneo y modernización de código legado.',
                socialTitle: 'CLEAR: del SDK de autenticación a los flujos principales de Android',
                socialDescription: 'Ingeniería Android en autenticación pública, cámara, escaneo y modernización de la aplicación.',
                caseName: 'CLEAR',
                kicker: 'Identidad · SDK público · App Android principal',
                title: 'Primero la infraestructura de autenticación. <em>Después, la experiencia de usuario.</em>',
                summary: 'Trabajo de ingeniería Android que comenzó en el SDK público de autenticación de CLEAR y continuó en los flujos de cámara, escaneo y modernización de la aplicación principal.',
                facts: [['Rol', 'Android Engineer'], ['Periodo', '2021 – 2023'], ['Alcance', 'SDK público · Aplicación principal'], ['Foco', 'Autenticación · Cámara · Escaneo']],
                sections: [
                    {label: '01 · Contexto', title: 'Los flujos de identidad toleran muy pocos fallos.', paragraphs: ['La infraestructura pública de autenticación debe integrarse con claridad en otras aplicaciones, mientras que la app de consumo necesita que la cámara y el escaneo sean fiables y directos. El trabajo abarcó ambos lados de esa experiencia.']},
                    {label: '02 · Contribución', title: 'Experiencia a ambos lados del límite del SDK.', paragraphs: ['Trabajé primero en el SDK público de autenticación de CLEAR y después en la aplicación Android principal. Esa transición permitió conectar el contrato de integración con la experiencia real del usuario.', 'Dentro de la app mejoré los flujos de cámara y escaneo y contribuí a la modernización y reducción de deuda técnica.']},
                    {label: '03 · Impacto', title: 'El conocimiento de infraestructura llegó hasta los flujos de usuario.', paragraphs: ['El resultado combinó experiencia en autenticación a nivel de SDK con mejoras en flujos críticos y una reducción aproximada del 30% de la deuda técnica.'], outcomes: [['SDK', 'infraestructura pública de autenticación'], ['App', 'mejoras de cámara y escaneo'], ['~30%', 'reducción de deuda técnica']]}
                ],
                ctaKicker: '¿Estás creando un SDK móvil o un flujo de identidad?',
                ctaTitle: 'Haz que la integración y la experiencia hablen el mismo idioma.',
                ctaBody: 'Puedo ayudar a definir los límites del SDK, revisar la experiencia de la app integradora y modernizar la implementación Android.',
                ctaPrimary: 'Hablemos del proyecto',
                nextLabel: 'SurfCast'
            },
            pt: {
                seoTitle: 'Projeto CLEAR — SDK de autenticação e app Android | Max Dymnoff',
                seoDescription: 'Engenharia Android no SDK público de autenticação da CLEAR, aplicativo principal, fluxos de câmera e leitura e modernização de código legado.',
                socialTitle: 'CLEAR: do SDK de autenticação aos fluxos principais no Android',
                socialDescription: 'Engenharia Android em autenticação pública, câmera, leitura e modernização do aplicativo.',
                caseName: 'CLEAR',
                kicker: 'Identidade · SDK público · Aplicativo Android principal',
                title: 'Primeiro, a infraestrutura de autenticação. <em>Depois, a experiência do usuário.</em>',
                summary: 'Trabalho de engenharia Android que começou no SDK público de autenticação da CLEAR e continuou nos fluxos de câmera, leitura e modernização do aplicativo principal.',
                facts: [['Papel', 'Android Engineer'], ['Período', '2021 – 2023'], ['Escopo', 'SDK público · Aplicativo principal'], ['Foco', 'Autenticação · Câmera · Leitura']],
                sections: [
                    {label: '01 · Contexto', title: 'Fluxos de identidade têm pouca tolerância a falhas.', paragraphs: ['Uma infraestrutura pública de autenticação precisa integrar-se com clareza a outros aplicativos, enquanto o app de consumo deve tornar câmera e leitura confiáveis e diretas. O trabalho atravessou os dois lados dessa experiência.']},
                    {label: '02 · Contribuição', title: 'Experiência dos dois lados da fronteira do SDK.', paragraphs: ['Trabalhei primeiro no SDK público de autenticação da CLEAR e depois no aplicativo Android principal. Essa sequência conectou o contrato de integração à experiência real do usuário.', 'No aplicativo, melhorei os fluxos de câmera e leitura e contribuí para a modernização e a redução de dívida técnica.']},
                    {label: '03 · Impacto', title: 'O conhecimento de infraestrutura chegou aos fluxos do usuário.', paragraphs: ['O resultado combinou experiência de autenticação no nível do SDK com melhorias em fluxos críticos e uma redução de aproximadamente 30% da dívida técnica.'], outcomes: [['SDK', 'infraestrutura pública de autenticação'], ['App', 'melhorias de câmera e leitura'], ['~30%', 'redução de dívida técnica']]}
                ],
                ctaKicker: 'Está criando um SDK mobile ou um fluxo de identidade?',
                ctaTitle: 'Faça a integração e a experiência trabalharem juntas.',
                ctaBody: 'Posso ajudar a definir os limites do SDK, revisar a experiência do aplicativo integrador e modernizar a implementação Android.',
                ctaPrimary: 'Falar sobre o projeto',
                nextLabel: 'SurfCast'
            },
            ru: {
                seoTitle: 'Кейс CLEAR — SDK авторизации и Android-приложение | Max Dymnoff',
                seoDescription: 'Android-разработка публичного SDK авторизации CLEAR и основного приложения: камера, сканирование и модернизация legacy-кода.',
                socialTitle: 'CLEAR: от SDK авторизации до ключевых Android-сценариев',
                socialDescription: 'Android-разработка публичной авторизации, камеры, сканирования и модернизации основного приложения.',
                caseName: 'CLEAR',
                kicker: 'Идентификация · Публичный SDK · Основное Android-приложение',
                title: 'Сначала инфраструктура авторизации. <em>Затем пользовательские сценарии.</em>',
                summary: 'Работа над Android началась с публичного SDK авторизации CLEAR и продолжилась в основном приложении: камера, сканирование и модернизация кодовой базы.',
                facts: [['Роль', 'Android Engineer'], ['Период', '2021 – 2023'], ['Объём', 'Публичный SDK · Основное приложение'], ['Фокус', 'Авторизация · Камера · Сканирование']],
                sections: [
                    {label: '01 · Контекст', title: 'В сценариях идентификации почти нет права на ошибку.', paragraphs: ['Публичная инфраструктура авторизации должна предсказуемо встраиваться в другие приложения, а основное пользовательское приложение — надёжно работать с камерой и сканированием. Работа охватывала обе стороны этой системы.']},
                    {label: '02 · Вклад', title: 'Опыт по обе стороны границы SDK.', paragraphs: ['Сначала я работал над публичным SDK авторизации CLEAR, а затем перешёл в команду основного Android-приложения. Это позволило связать интеграционный контракт с реальным пользовательским опытом.', 'В приложении я улучшал сценарии камеры и сканирования и участвовал в модернизации кодовой базы и сокращении технического долга.']},
                    {label: '03 · Эффект', title: 'Знание инфраструктуры дошло до пользовательских сценариев.', paragraphs: ['Результат объединил опыт разработки SDK авторизации, улучшение критичных пользовательских сценариев и сокращение технического долга примерно на 30%.'], outcomes: [['SDK', 'публичная инфраструктура авторизации'], ['App', 'улучшения камеры и сканирования'], ['~30%', 'сокращение технического долга']]}
                ],
                ctaKicker: 'Разрабатываете мобильный SDK или авторизацию?',
                ctaTitle: 'Интеграция и пользовательский опыт должны работать как одно целое.',
                ctaBody: 'Я могу помочь определить границы SDK, проверить опыт приложения-интегратора и модернизировать Android-реализацию.',
                ctaPrimary: 'Обсудить проект',
                nextLabel: 'SurfCast'
            }
        }
    },
    surfcast: {
        slug: 'surfcast',
        technologies: ['Kotlin Multiplatform', 'Jetpack Compose', 'SwiftUI', 'React Native', 'Expo', 'Android', 'iOS'],
        next: 'hailme',
        locales: {
            es: {
                seoTitle: 'Caso SurfCast — Desarrollo móvil multiplataforma | Max Dymnoff',
                seoDescription: 'Apps Android e iOS desde cero con Kotlin Multiplatform, Jetpack Compose y SwiftUI, y evolución posterior hacia React Native y Expo.',
                socialTitle: 'SurfCast: producto móvil multiplataforma desde cero',
                socialDescription: 'Android e iOS con lógica compartida en Kotlin Multiplatform, interfaces nativas y una evolución posterior hacia React Native y Expo.',
                caseName: 'SurfCast',
                kicker: 'De cero a producto · Desarrollo móvil multiplataforma',
                title: 'Dos plataformas móviles construidas <em>desde cero.</em>',
                summary: 'Apps Android e iOS creadas desde cero con lógica compartida en Kotlin Multiplatform e interfaces nativas, y después adaptadas con el producto hacia React Native y Expo.',
                facts: [['Rol', 'Mobile Engineer · Contrato'], ['Periodo', 'Septiembre de 2020 – Octubre de 2024'], ['Alcance', 'Android · iOS · Arquitectura · Lanzamiento'], ['Producto', 'OttoConnect / SurfCast']],
                sections: [
                    {label: '01 · Contexto', title: 'Un producto nuevo necesitaba dos plataformas sin duplicar toda la lógica.', paragraphs: ['La primera versión utilizó Kotlin Multiplatform para compartir la lógica de producto y mantuvo interfaces nativas con Jetpack Compose y SwiftUI. Cuando cambiaron el producto y el equipo, la arquitectura evolucionó hacia React Native y Expo.']},
                    {label: '02 · Contribución', title: 'Entrega entre plataformas, temporadas y cambios de arquitectura.', subsections: [
                        ['Desarrollo móvil desde cero', 'Construí las apps Android e iOS desde el inicio, compartiendo lógica con Kotlin Multiplatform y desarrollando interfaces nativas con Jetpack Compose y SwiftUI.'],
                        ['Evolución de la arquitectura', 'Más adelante ayudé a llevar SurfCast desde su implementación basada en KMP hacia React Native y Expo cuando cambiaron las necesidades de entrega.'],
                        ['Responsabilidad de producto', 'El trabajo también incluyó refinamiento de requisitos, preparación de lanzamientos y mentoría a un desarrollador junior.']
                    ]},
                    {label: '03 · Impacto', title: 'Entrega más rápida con menos lógica duplicada.', paragraphs: ['El trabajo multiplataforma redujo la duplicación y ayudó a acelerar el desarrollo de funcionalidades. El producto generó aproximadamente un millón de dólares en su primera temporada.'], outcomes: [['~20%', 'entrega de funcionalidades más rápida'], ['−30%', 'duplicación de código'], ['~$1M', 'ingresos en la primera temporada']]}
                ],
                ctaKicker: '¿Estás eligiendo una estrategia multiplataforma?',
                ctaTitle: 'Elige según el producto, no según la moda del framework.',
                ctaBody: 'Puedo evaluar Kotlin Multiplatform, desarrollo nativo, React Native y las restricciones reales que deben decidir entre ellos.',
                ctaPrimary: 'Hablemos de tu producto',
                nextLabel: 'HailMe'
            },
            pt: {
                seoTitle: 'Projeto SurfCast — Desenvolvimento mobile multiplataforma | Max Dymnoff',
                seoDescription: 'Apps Android e iOS do zero com Kotlin Multiplatform, Jetpack Compose e SwiftUI, seguidos por uma evolução para React Native e Expo.',
                socialTitle: 'SurfCast: produto mobile multiplataforma do zero',
                socialDescription: 'Android e iOS com lógica compartilhada em Kotlin Multiplatform, interfaces nativas e evolução posterior para React Native e Expo.',
                caseName: 'SurfCast',
                kicker: 'Do zero ao produto · Mobile multiplataforma',
                title: 'Duas plataformas mobile construídas <em>do zero.</em>',
                summary: 'Aplicativos Android e iOS criados do zero com lógica compartilhada em Kotlin Multiplatform e interfaces nativas, depois evoluídos com o produto para React Native e Expo.',
                facts: [['Papel', 'Mobile Engineer · Contrato'], ['Período', 'Setembro de 2020 – Outubro de 2024'], ['Escopo', 'Android · iOS · Arquitetura · Lançamento'], ['Produto', 'OttoConnect / SurfCast']],
                sections: [
                    {label: '01 · Contexto', title: 'Um novo produto precisava das duas plataformas sem duplicar toda a lógica.', paragraphs: ['A primeira entrega usou Kotlin Multiplatform para compartilhar a lógica de produto e manteve interfaces nativas com Jetpack Compose e SwiftUI. Quando o produto e a equipe mudaram, a arquitetura evoluiu para React Native e Expo.']},
                    {label: '02 · Contribuição', title: 'Entrega entre plataformas, temporadas e mudanças de arquitetura.', subsections: [
                        ['Desenvolvimento mobile do zero', 'Construí os aplicativos Android e iOS desde o início, compartilhando lógica com Kotlin Multiplatform e criando interfaces nativas com Jetpack Compose e SwiftUI.'],
                        ['Evolução da arquitetura', 'Mais tarde, ajudei a levar o SurfCast de sua implementação baseada em KMP para React Native e Expo quando as necessidades de entrega mudaram.'],
                        ['Responsabilidade pelo produto', 'O trabalho também incluiu refinamento de requisitos, preparação de lançamentos e mentoria de um desenvolvedor júnior.']
                    ]},
                    {label: '03 · Impacto', title: 'Entrega mais rápida com menos lógica duplicada.', paragraphs: ['O trabalho multiplataforma reduziu a duplicação e ajudou a acelerar a entrega de funcionalidades. O produto gerou aproximadamente um milhão de dólares em sua primeira temporada.'], outcomes: [['~20%', 'entrega mais rápida de funcionalidades'], ['−30%', 'duplicação de código'], ['~$1M', 'receita na primeira temporada']]}
                ],
                ctaKicker: 'Está escolhendo uma estratégia multiplataforma?',
                ctaTitle: 'Escolha de acordo com o produto, não com a moda do framework.',
                ctaBody: 'Posso avaliar Kotlin Multiplatform, desenvolvimento nativo, React Native e as restrições reais que devem orientar a decisão.',
                ctaPrimary: 'Falar sobre seu produto',
                nextLabel: 'HailMe'
            },
            ru: {
                seoTitle: 'Кейс SurfCast — кроссплатформенная мобильная разработка | Max Dymnoff',
                seoDescription: 'Android и iOS с нуля на Kotlin Multiplatform, Jetpack Compose и SwiftUI, а затем развитие продукта в сторону React Native и Expo.',
                socialTitle: 'SurfCast: кроссплатформенный мобильный продукт с нуля',
                socialDescription: 'Android и iOS с общей логикой на Kotlin Multiplatform, нативными интерфейсами и последующим переходом к React Native и Expo.',
                caseName: 'SurfCast',
                kicker: 'С нуля до продукта · Кроссплатформенная разработка',
                title: 'Две мобильные платформы, созданные <em>с нуля.</em>',
                summary: 'Приложения Android и iOS были созданы с нуля с общей логикой на Kotlin Multiplatform и нативными интерфейсами, а затем развивались вместе с продуктом в сторону React Native и Expo.',
                facts: [['Роль', 'Mobile Engineer · Контракт'], ['Период', 'Сентябрь 2020 – Октябрь 2024'], ['Объём', 'Android · iOS · Архитектура · Релизы'], ['Продукт', 'OttoConnect / SurfCast']],
                sections: [
                    {label: '01 · Контекст', title: 'Новому продукту требовались две платформы без полного дублирования логики.', paragraphs: ['Первая версия использовала Kotlin Multiplatform для общей продуктовой логики и нативные интерфейсы на Jetpack Compose и SwiftUI. Когда изменились продукт и команда, архитектура начала развиваться в сторону React Native и Expo.']},
                    {label: '02 · Вклад', title: 'Разработка на двух платформах, через сезоны и смену архитектуры.', subsections: [
                        ['Мобильные приложения с нуля', 'Я создал приложения Android и iOS с общей логикой на Kotlin Multiplatform и нативными интерфейсами на Jetpack Compose и SwiftUI.'],
                        ['Развитие архитектуры', 'Позже я участвовал в переходе SurfCast от реализации на KMP к React Native и Expo, когда изменились требования к скорости и организации разработки.'],
                        ['Ответственность за продукт', 'Работа также включала уточнение требований, подготовку релизов и наставничество младшего разработчика.']
                    ]},
                    {label: '03 · Эффект', title: 'Более быстрая разработка при меньшем дублировании кода.', paragraphs: ['Кроссплатформенный подход помог сократить дублирование и ускорить выпуск функций. За первый сезон продукт принёс около одного миллиона долларов выручки.'], outcomes: [['~20%', 'ускорение разработки функций'], ['−30%', 'дублирование кода'], ['~$1M', 'выручка за первый сезон']]}
                ],
                ctaKicker: 'Выбираете кроссплатформенную стратегию?',
                ctaTitle: 'Выбирайте под продукт, а не под моду на фреймворк.',
                ctaBody: 'Я могу сравнить Kotlin Multiplatform, нативную разработку и React Native с учётом реальных ограничений продукта и команды.',
                ctaPrimary: 'Обсудить продукт',
                nextLabel: 'HailMe'
            }
        }
    }
};
