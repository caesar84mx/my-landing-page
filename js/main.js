document.documentElement.classList.add('js');

const I18N = {
    en: {
        meta: {
            title: 'Mobile Consultant & Full-Stack Mobile App Developer — Max Dymnoff',
            description: 'Mobile consulting and end-to-end app development—from backend and APIs to native or cross-platform Android and iOS apps, modernization, and store launch.',
            socialTitle: 'Mobile products, owned from backend to launch.',
            socialDescription: 'Mobile consulting and full-stack app development across backend, native or cross-platform clients, modernization, and store delivery.'
        },
        a11y: {skip: 'Skip to content', language: 'Language'},
        brand: {role: 'Mobile consultant · Full-stack mobile app developer'},
        nav: {services: 'Services', work: 'Case studies', journal: 'Journal', engagement: 'Ways to work', cta: 'Discuss a project'},
        hero: {
            eyebrow: 'Mobile consulting · End-to-end app development',
            title: 'I take on <em>complex</em> mobile products end to end.',
            lead: 'I plan, build, and modernize complete mobile products—from backend and APIs to native or cross-platform Android and iOS apps, including store launch.',
            ctaPrimary: 'Discuss your project',
            ctaSecondary: 'Explore services',
            trustLabel: 'Engineering experience across'
        },
        visual: {
            live: 'Product delivery system', core: 'Backend to mobile', native: 'Native apps', platform: 'Cross-platform',
            backend: 'Backend', release: 'Release', footer: 'Strategy → backend → apps → launch',
            ai: 'AI-assisted engineering', builder: 'One accountable owner'
        },
        impact: {
            years: 'years shipping production software',
            performance: 'performance improvement on iFIT modernization',
            duplication: 'code duplication on a cross-platform product',
            fullstack: 'backend, mobile clients, and store launch'
        },
        services: {read: 'Explore service'},
        expertise: {
            kicker: 'Services',
            title: 'The right level of ownership for the whole mobile product.',
            lead: 'Start with a technical decision, a complete build, or a difficult product already in motion. I connect business goals to architecture, backend, mobile clients, and release.',
            consulting: {
                title: 'Mobile product consulting',
                text: 'Technical discovery, architecture reviews, technology choices, and modernization roadmaps that turn uncertainty into a practical delivery plan.',
                chip1: 'Architecture review', chip2: 'Delivery roadmap', chip3: 'Risk reduction'
            },
            fullstack: {
                title: 'Build the whole mobile product',
                text: 'Backend APIs, data, authentication, notifications, and integrations, plus native Android and iOS or cross-platform clients—through store release.',
                chip1: 'Backend + APIs', chip2: 'Native or KMP', chip3: 'Store launch'
            },
            modernize: {
                title: 'Modernize and unblock complex mobile',
                text: 'Legacy migrations, performance and architecture work, plus camera, BLE, media, maps, geofencing, and other platform-heavy features.',
                chip1: 'Legacy rescue', chip2: 'Platform depth', chip3: 'Release stability'
            }
        },
        fit: {
            kicker: 'When to bring me in',
            title: 'When the app is only one part of the product system.',
            lead: 'These are the moments when one senior owner across product, backend, mobile, and release removes the most risk.',
            new: {
                title: 'A new product needs a technical path',
                text: 'You have a business goal, but still need the architecture, delivery plan, backend, and mobile clients.'
            },
            legacy: {
                title: 'The current product slows every release',
                text: 'Legacy code, performance, or architecture is turning routine changes into expensive risk.'
            },
            platform: {
                title: 'A feature runs into platform limits',
                text: 'BLE, media, camera, maps, background execution, or store policy needs deeper mobile experience.'
            },
            leadership: {
                title: 'The team needs senior mobile ownership',
                text: 'You need someone to make cross-stack decisions, unblock delivery, and leave the team in control.'
            }
        },
        work: {
            kicker: 'Case studies', title: 'Evidence across the whole mobile stack.',
            lead: 'Backend-to-app product delivery, native modernization, public SDKs, and cross-platform builds—each with clear technical ownership and measurable outcomes.'
        },
        cases: {
            read: 'Read case study',
            ifit: {
                type: 'Native modernization', label: 'Connected fitness · Android',
                title: 'Moving a mature fitness platform from Xamarin toward modern native Android.',
                text: 'Worked across performance, media playback, captions, BLE-connected equipment, Health Connect, code review, and release support.',
                metric1: 'performance improvement', metric2: 'technical-debt reduction'
            },
            clear: {
                type: 'Identity · SDK', label: 'Public SDK → flagship app',
                title: 'Authentication infrastructure first. High-stakes consumer flows next.',
                text: 'Worked on CLEAR’s public authentication SDK before joining the flagship app, improving camera and scanning flows while helping modernize the codebase.',
                metric: 'technical-debt reduction'
            },
            surfcast: {
                type: 'Zero-to-one · Cross-platform', label: 'Android + iOS from scratch',
                title: 'A product built across platforms, seasons, and architecture changes.',
                text: 'Built Android and iOS apps with Kotlin Multiplatform, then helped evolve the product toward React Native/Expo while mentoring a junior engineer.',
                metric1: 'faster feature delivery', metric2: 'code duplication', metric3: 'first-season revenue'
            },
            hailme: {
                type: 'Founder · Solo product engineer', label: 'Backend-to-app product delivery',
                title: 'One product, owned from backend to both mobile clients.',
                text: 'I built and launched the Android and iOS apps and backend, then handled geofencing, maps, authentication, push/SMS/WhatsApp, store review, vendor coordination, and messaging compliance.',
                link: 'Visit HailMe'
            }
        },
        journal: {
            kicker: 'Journal',
            heading: 'What changed—and what to do about it.',
            lead: 'A weekly engineering signal on Android and cross-platform development: source-backed changes, their maturity and risk, and a practical decision for the week.',
            issueLabel: 'Latest issue · 001',
            date: '27 July 2026 · 10 min read',
            issueTitle: 'Mobile changes worth making decisions about.',
            issueLead: 'Kotlin improves Swift export, Media3 fixes a high-risk memory behavior, Nearby Connections changes radio-state handling, and Android’s AI stack starts to look like an execution layer.',
            read: 'Read issue 001',
            signalMeta: '8 sources · 7 signals'
        },
        engagement: {
            kicker: 'Ways to work',
            title: 'Start with the level of ownership you need.',
            lead: 'A focused technical decision, a complete product build, or ongoing senior leadership. The engagement matches the problem instead of forcing every client into the same process.',
            audit: {
                title: 'Audit and delivery roadmap',
                text: 'For architecture, technology, performance, or modernization decisions. You leave with risks, recommendations, and a prioritized plan.'
            },
            delivery: {
                title: 'End-to-end product delivery',
                text: 'From discovery and backend to mobile clients and store launch, with visible milestones, working increments, and a clean handover.'
            },
            leadership: {
                title: 'Mobile technical leadership',
                text: 'Senior direction, reviews, architecture, and delivery support for project, contract, or full-time roles.'
            }
        },
        approach: {
            kicker: 'How I work', title: 'Senior judgment.<br/><em>Product ownership.</em>',
            lead: 'I can work independently across the product stack and involve focused specialists when deeper infrastructure or design work calls for them.',
            ai: 'I use AI to accelerate analysis, planning, debugging, and documentation. Architecture, security, and product decisions remain reviewed and owned by me.',
            p1: {title: 'Align on the outcome and constraints', text: 'Make the business goal, technical risks, trade-offs, and definition of success explicit before committing to a build.'},
            p2: {title: 'Deliver in verifiable slices', text: 'Working increments and regular demonstrations keep feedback fast and delivery risk visible.'},
            p3: {title: 'Leave the team in control', text: 'Clear architecture, documentation, source ownership, and a practical handover make the product maintainable after the engagement.'}
        },
        contact: {
            kicker: 'Building or fixing a mobile product?', title: 'Let’s choose the<br/><em>right next step.</em>',
            lead: 'Tell me what you are planning, building, or trying to unblock. I will respond with the questions and engagement shape that fit the problem.',
            calendar: 'Book an intro call', availability: 'Remote worldwide · Contracts through Dymnoff Software Labs SAS (Uruguay)'
        },
        form: {
            name: 'Your name', namePlaceholder: 'How should I address you?', email: 'Work email',
            company: 'Company / product', companyPlaceholder: 'Optional, but helpful',
            service: 'What kind of help do you need?', servicePlaceholder: 'Choose the closest option',
            serviceConsulting: 'Consulting or technical audit', serviceDevelopment: 'End-to-end app development',
            serviceModernization: 'Modernization or complex mobile work', serviceLeadership: 'Mobile technical leadership',
            brief: 'What do you need help with?', briefPlaceholder: 'The product, its current state, your goal, and any important constraints',
            submit: 'Send the brief', note: 'I usually reply within one business day with a useful next step.', sending: 'Sending…',
            success: 'Thanks—your message is in. I’ll reply shortly.'
        },
        footer: {company: 'Working through Dymnoff Software Labs SAS', tagline: 'From backend to mobile. One accountable delivery.'}
    },
    es: {
        meta: {
            title: 'Consultor móvil y desarrollador full-stack de apps — Max Dymnoff',
            description: 'Consultoría móvil y desarrollo integral de aplicaciones: backend y APIs, clientes nativos o multiplataforma para Android e iOS, modernización y publicación.',
            socialTitle: 'Productos móviles, del backend al lanzamiento.',
            socialDescription: 'Consultoría móvil y desarrollo full-stack: backend, clientes nativos o multiplataforma, modernización y publicación en tiendas.'
        },
        a11y: {skip: 'Ir al contenido', language: 'Idioma'},
        brand: {role: 'Consultor móvil · Desarrollador full-stack de apps móviles'},
        nav: {services: 'Servicios', work: 'Casos', journal: 'Revista', engagement: 'Formas de trabajo', cta: 'Hablemos del proyecto'},
        hero: {
            eyebrow: 'Consultoría móvil · Desarrollo integral de apps',
            title: 'Me hago cargo de productos móviles <em>complejos</em>, de principio a fin.',
            lead: 'Planifico, desarrollo y modernizo productos móviles completos: desde el backend y las APIs hasta apps nativas o multiplataforma para Android e iOS, incluida su publicación.',
            ctaPrimary: 'Hablemos de tu proyecto',
            ctaSecondary: 'Ver servicios',
            trustLabel: 'Experiencia de ingeniería en'
        },
        visual: {
            live: 'Sistema de entrega', core: 'Del backend a las apps', native: 'Apps nativas', platform: 'Multiplataforma',
            backend: 'Backend', release: 'Publicación', footer: 'Estrategia → backend → apps → lanzamiento',
            ai: 'IA aplicada a ingeniería', builder: 'Un responsable de principio a fin'
        },
        impact: {
            years: 'años entregando software en producción',
            performance: 'de mejora de rendimiento en la modernización de iFIT',
            duplication: 'de código duplicado en un producto multiplataforma',
            fullstack: 'backend, clientes móviles y publicación en tiendas'
        },
        services: {read: 'Ver servicio'},
        expertise: {
            kicker: 'Servicios',
            title: 'La responsabilidad técnica que necesita todo el producto móvil.',
            lead: 'Podemos empezar por una decisión técnica, un desarrollo completo o un producto existente que necesita avanzar. Conecto los objetivos del negocio con la arquitectura, el backend, las apps y la publicación.',
            consulting: {
                title: 'Consultoría de producto móvil',
                text: 'Descubrimiento técnico, revisión de arquitectura, elección de tecnologías y planes de modernización que convierten la incertidumbre en un plan viable.',
                chip1: 'Revisión de arquitectura', chip2: 'Hoja de ruta', chip3: 'Menos riesgo'
            },
            fullstack: {
                title: 'Desarrollo del producto móvil completo',
                text: 'APIs, datos, autenticación, notificaciones e integraciones en el backend, junto con apps nativas para Android e iOS o clientes multiplataforma, hasta su publicación.',
                chip1: 'Backend + APIs', chip2: 'Nativo o KMP', chip3: 'Publicación'
            },
            modernize: {
                title: 'Modernización y problemas móviles complejos',
                text: 'Migraciones desde sistemas heredados, rendimiento y arquitectura, además de cámara, BLE, multimedia, mapas, geolocalización y otras funciones que exigen conocimiento profundo de la plataforma.',
                chip1: 'Rescate de sistemas', chip2: 'Experiencia de plataforma', chip3: 'Lanzamientos estables'
            }
        },
        fit: {
            kicker: 'Cuándo puedo ayudar',
            title: 'Cuando la app es solo una parte de un producto más grande.',
            lead: 'Son situaciones en las que un único responsable senior para producto, backend, apps y publicación reduce gran parte del riesgo.',
            new: {
                title: 'Un producto nuevo necesita un camino técnico',
                text: 'Tienes un objetivo de negocio, pero aún faltan la arquitectura, el plan de entrega, el backend y las apps.'
            },
            legacy: {
                title: 'El producto actual frena cada lanzamiento',
                text: 'El código heredado, el rendimiento o la arquitectura convierten cambios habituales en riesgos costosos.'
            },
            platform: {
                title: 'Una función choca con los límites de la plataforma',
                text: 'BLE, multimedia, cámara, mapas, ejecución en segundo plano o las reglas de las tiendas exigen más experiencia móvil.'
            },
            leadership: {
                title: 'El equipo necesita liderazgo móvil senior',
                text: 'Hace falta alguien que tome decisiones entre distintas capas, destrabe la entrega y deje al equipo en control.'
            }
        },
        work: {
            kicker: 'Casos', title: 'Resultados en todas las capas del producto móvil.',
            lead: 'Desarrollo desde el backend hasta las apps, modernización nativa, SDKs públicos y productos multiplataforma, siempre con responsabilidad técnica clara y resultados medibles.'
        },
        cases: {
            read: 'Ver caso',
            ifit: {
                type: 'Modernización nativa', label: 'Fitness conectado · Android',
                title: 'Modernización de una plataforma fitness madura desde Xamarin hacia Android nativo.',
                text: 'Trabajo en rendimiento, reproducción multimedia, subtítulos, equipos conectados por BLE, Health Connect, revisión de código y soporte de lanzamientos.',
                metric1: 'de mejora de rendimiento', metric2: 'menos deuda técnica'
            },
            clear: {
                type: 'Identidad · SDK', label: 'SDK público → app principal',
                title: 'Primero, infraestructura de autenticación. Después, flujos de consumo de alta exigencia.',
                text: 'Trabajé en el SDK público de autenticación de CLEAR antes de pasar a su app principal, mejorando flujos de cámara y escaneo y ayudando a modernizar el código.',
                metric: 'menos deuda técnica'
            },
            surfcast: {
                type: 'Desde cero · Multiplataforma', label: 'Android + iOS desde cero',
                title: 'Un producto construido a través de plataformas, temporadas y cambios de arquitectura.',
                text: 'Desarrollé las apps Android e iOS con Kotlin Multiplatform y luego ayudé a evolucionar el producto hacia React Native/Expo, además de mentorizar a un desarrollador junior.',
                metric1: 'entrega más rápida', metric2: 'duplicación de código', metric3: 'ingresos de la primera temporada'
            },
            hailme: {
                type: 'Fundador · Único ingeniero de producto', label: 'Del backend a las apps',
                title: 'Un solo producto, desde el backend hasta ambos clientes móviles.',
                text: 'Construí y lancé las apps para Android e iOS y el backend; además resolví geolocalización, mapas, autenticación, push/SMS/WhatsApp, revisión de las tiendas, coordinación de proveedores y cumplimiento normativo de la mensajería.',
                link: 'Visitar HailMe'
            }
        },
        journal: {
            kicker: 'Revista',
            heading: 'Qué cambió y qué conviene hacer al respecto.',
            lead: 'Un resumen semanal de ingeniería sobre Android y desarrollo multiplataforma: cambios respaldados por fuentes, su madurez y sus riesgos, y una decisión práctica para la semana.',
            issueLabel: 'Última edición · 001',
            date: '27 de julio de 2026 · 10 min de lectura',
            issueTitle: 'Cambios en el desarrollo móvil que exigen tomar decisiones.',
            issueLead: 'Kotlin mejora la exportación a Swift, Media3 corrige un problema grave de memoria, Nearby Connections cambia la gestión de Wi-Fi y Bluetooth, y la IA en Android empieza a tomar forma como una capa de ejecución propia.',
            read: 'Leer la edición 001',
            signalMeta: '8 fuentes · 7 señales'
        },
        engagement: {
            kicker: 'Formas de trabajo',
            title: 'Empecemos con el nivel de responsabilidad que necesitas.',
            lead: 'Una decisión técnica concreta, el desarrollo completo de un producto o liderazgo senior continuo. El formato se adapta al problema, no al revés.',
            audit: {
                title: 'Auditoría y hoja de ruta',
                text: 'Para decisiones de arquitectura, tecnología, rendimiento o modernización. Recibirás los riesgos, las recomendaciones y un plan priorizado.'
            },
            delivery: {
                title: 'Desarrollo integral del producto',
                text: 'Desde el descubrimiento y el backend hasta las apps y la publicación, con hitos visibles, entregas funcionales y una transferencia ordenada.'
            },
            leadership: {
                title: 'Liderazgo técnico móvil',
                text: 'Dirección senior, revisiones, arquitectura y apoyo a la entrega por proyecto, bajo contrato o a tiempo completo.'
            }
        },
        approach: {
            kicker: 'Cómo trabajo', title: 'Criterio senior.<br/><em>Responsabilidad de producto.</em>',
            lead: 'Puedo trabajar de forma autónoma en todas las capas del producto y sumar especialistas cuando la infraestructura o el diseño requieren una profundidad adicional.',
            ai: 'Uso IA para acelerar el análisis, la planificación, la depuración y la documentación. Las decisiones de arquitectura, seguridad y producto siguen bajo mi revisión y responsabilidad.',
            p1: {title: 'Acordar el objetivo y las restricciones', text: 'Definir con claridad el objetivo de negocio, los riesgos técnicos, las alternativas y los criterios de éxito antes de comprometer el desarrollo.'},
            p2: {title: 'Entregar en incrementos verificables', text: 'Las entregas funcionales y las demostraciones periódicas mantienen rápido el aprendizaje y visible el riesgo.'},
            p3: {title: 'Dejar al equipo en control', text: 'Una arquitectura clara, documentación, propiedad del código y una transferencia práctica facilitan el mantenimiento después del proyecto.'}
        },
        contact: {
            kicker: '¿Estás creando o corrigiendo un producto móvil?', title: 'Definamos el<br/><em>siguiente paso adecuado.</em>',
            lead: 'Cuéntame qué estás planificando, desarrollando o intentando destrabar. Responderé con las preguntas y el formato de trabajo que mejor se ajusten al problema.',
            calendar: 'Agendar una llamada inicial', availability: 'Trabajo remoto en todo el mundo · Contratos mediante Dymnoff Software Labs SAS (Uruguay)'
        },
        form: {
            name: 'Tu nombre', namePlaceholder: '¿Cómo debería dirigirme a ti?', email: 'Email laboral',
            company: 'Empresa / producto', companyPlaceholder: 'Opcional, pero útil',
            service: '¿Qué tipo de ayuda necesitas?', servicePlaceholder: 'Elige la opción más cercana',
            serviceConsulting: 'Consultoría o auditoría técnica', serviceDevelopment: 'Desarrollo integral de una app',
            serviceModernization: 'Modernización o trabajo móvil complejo', serviceLeadership: 'Liderazgo técnico móvil',
            brief: '¿En qué necesitas ayuda?', briefPlaceholder: 'El producto, su estado actual, el objetivo y cualquier restricción importante',
            submit: 'Enviar el resumen', note: 'Normalmente respondo en un día hábil con un siguiente paso útil.', sending: 'Enviando…',
            success: 'Gracias, recibí tu mensaje. Responderé pronto.'
        },
        footer: {company: 'Servicios mediante Dymnoff Software Labs SAS', tagline: 'Del backend a las apps. Una entrega bajo una sola responsabilidad.'}
    },
    pt: {
        meta: {
            title: 'Consultor mobile e desenvolvedor full-stack de aplicativos — Max Dymnoff',
            description: 'Consultoria mobile e desenvolvimento completo de aplicativos: backend e APIs, clientes nativos ou multiplataforma para Android e iOS, modernização e publicação.',
            socialTitle: 'Produtos mobile, do backend ao lançamento.',
            socialDescription: 'Consultoria mobile e desenvolvimento full-stack com backend, aplicativos nativos ou multiplataforma, modernização e publicação nas lojas.'
        },
        a11y: {skip: 'Ir para o conteúdo', language: 'Idioma'},
        brand: {role: 'Consultor mobile · Desenvolvedor full-stack de apps mobile'},
        nav: {services: 'Serviços', work: 'Projetos', journal: 'Revista', engagement: 'Formas de trabalho', cta: 'Falar sobre o projeto'},
        hero: {
            eyebrow: 'Consultoria mobile · Desenvolvimento completo de apps',
            title: 'Assumo produtos mobile <em>complexos</em> de ponta a ponta.',
            lead: 'Planejo, desenvolvo e modernizo produtos mobile completos: do backend e das APIs aos aplicativos nativos ou multiplataforma para Android e iOS, incluindo a publicação.',
            ctaPrimary: 'Falar sobre seu projeto',
            ctaSecondary: 'Ver serviços',
            trustLabel: 'Experiência de engenharia em'
        },
        visual: {
            live: 'Sistema de entrega', core: 'Do backend aos apps', native: 'Apps nativos', platform: 'Multiplataforma',
            backend: 'Backend', release: 'Publicação', footer: 'Estratégia → backend → apps → lançamento',
            ai: 'IA aplicada à engenharia', builder: 'Um responsável de ponta a ponta'
        },
        impact: {
            years: 'anos entregando software em produção',
            performance: 'de ganho de desempenho na modernização do iFIT',
            duplication: 'de código duplicado em um produto multiplataforma',
            fullstack: 'backend, clientes mobile e publicação nas lojas'
        },
        services: {read: 'Ver serviço'},
        expertise: {
            kicker: 'Serviços',
            title: 'A responsabilidade técnica certa para todo o produto mobile.',
            lead: 'Podemos começar por uma decisão técnica, um desenvolvimento completo ou um produto em andamento que precisa avançar. Conecto os objetivos de negócio à arquitetura, ao backend, aos aplicativos e à publicação.',
            consulting: {
                title: 'Consultoria de produto mobile',
                text: 'Descoberta técnica, revisão de arquitetura, escolha de tecnologias e planos de modernização que transformam incerteza em um caminho viável de entrega.',
                chip1: 'Revisão de arquitetura', chip2: 'Plano de entrega', chip3: 'Redução de risco'
            },
            fullstack: {
                title: 'Desenvolvimento do produto completo',
                text: 'APIs, dados, autenticação, notificações e integrações no backend, junto com aplicativos nativos para Android e iOS ou clientes multiplataforma, até a publicação.',
                chip1: 'Backend + APIs', chip2: 'Nativo ou KMP', chip3: 'Publicação'
            },
            modernize: {
                title: 'Modernização e desafios mobile complexos',
                text: 'Migrações de sistemas legados, desempenho e arquitetura, além de câmera, BLE, mídia, mapas, geolocalização e outros recursos que exigem conhecimento profundo da plataforma.',
                chip1: 'Resgate de sistemas', chip2: 'Experiência de plataforma', chip3: 'Lançamentos estáveis'
            }
        },
        fit: {
            kicker: 'Quando posso ajudar',
            title: 'Quando o aplicativo é apenas uma parte de um produto maior.',
            lead: 'São situações em que um único responsável sênior por produto, backend, aplicativos e publicação reduz a maior parte do risco.',
            new: {
                title: 'Um novo produto precisa de um caminho técnico',
                text: 'Existe um objetivo de negócio, mas ainda faltam a arquitetura, o plano de entrega, o backend e os aplicativos.'
            },
            legacy: {
                title: 'O produto atual atrasa cada lançamento',
                text: 'Código legado, desempenho ou arquitetura transformam mudanças comuns em riscos caros.'
            },
            platform: {
                title: 'Um recurso esbarra nos limites da plataforma',
                text: 'BLE, mídia, câmera, mapas, execução em segundo plano ou regras das lojas exigem mais experiência mobile.'
            },
            leadership: {
                title: 'O time precisa de liderança mobile sênior',
                text: 'É preciso alguém para tomar decisões entre as camadas, destravar a entrega e deixar o time no controle.'
            }
        },
        work: {
            kicker: 'Projetos', title: 'Resultados em todas as camadas do produto mobile.',
            lead: 'Desenvolvimento do backend aos aplicativos, modernização nativa, SDKs públicos e produtos multiplataforma, sempre com responsabilidade técnica clara e resultados mensuráveis.'
        },
        cases: {
            read: 'Ver projeto',
            ifit: {
                type: 'Modernização nativa', label: 'Fitness conectado · Android',
                title: 'Modernização de uma plataforma fitness madura do Xamarin para Android nativo.',
                text: 'Trabalho em desempenho, reprodução de mídia, legendas, equipamentos conectados por BLE, Health Connect, revisão de código e suporte a lançamentos.',
                metric1: 'de ganho de desempenho', metric2: 'menos dívida técnica'
            },
            clear: {
                type: 'Identidade · SDK', label: 'SDK público → app principal',
                title: 'Primeiro, infraestrutura de autenticação. Depois, fluxos de consumo críticos.',
                text: 'Trabalhei no SDK público de autenticação da CLEAR antes de ir para o app principal, melhorando fluxos de câmera e leitura e ajudando a modernizar o código.',
                metric: 'menos dívida técnica'
            },
            surfcast: {
                type: 'Do zero · Multiplataforma', label: 'Android + iOS do zero',
                title: 'Um produto construído entre plataformas, temporadas e mudanças de arquitetura.',
                text: 'Criei os apps Android e iOS com Kotlin Multiplatform e depois ajudei o produto a evoluir para React Native/Expo, além de orientar um desenvolvedor júnior.',
                metric1: 'entrega mais rápida', metric2: 'duplicação de código', metric3: 'receita na primeira temporada'
            },
            hailme: {
                type: 'Fundador · Único engenheiro de produto', label: 'Do backend aos aplicativos',
                title: 'Um único produto, do backend aos dois clientes mobile.',
                text: 'Construí e lancei os aplicativos para Android e iOS e o backend; também cuidei de geolocalização, mapas, autenticação, push/SMS/WhatsApp, revisão nas lojas, coordenação de fornecedores e conformidade de mensageria.',
                link: 'Visitar o HailMe'
            }
        },
        journal: {
            kicker: 'Revista',
            heading: 'O que mudou e o que fazer a respeito.',
            lead: 'Um resumo semanal de engenharia sobre Android e desenvolvimento multiplataforma: mudanças respaldadas por fontes, seu grau de maturidade e risco, e uma decisão prática para a semana.',
            issueLabel: 'Edição mais recente · 001',
            date: '27 de julho de 2026 · 10 min de leitura',
            issueTitle: 'Mudanças no desenvolvimento mobile que exigem decisões.',
            issueLead: 'Kotlin melhora a exportação para Swift, Media3 corrige um problema grave de memória, Nearby Connections muda o controle de Wi-Fi e Bluetooth, e a IA no Android começa a tomar forma como uma camada própria de execução.',
            read: 'Ler a edição 001',
            signalMeta: '8 fontes · 7 sinais'
        },
        engagement: {
            kicker: 'Formas de trabalho',
            title: 'Comece pelo nível de responsabilidade de que você precisa.',
            lead: 'Uma decisão técnica específica, o desenvolvimento completo de um produto ou liderança sênior contínua. O formato se adapta ao problema, e não o contrário.',
            audit: {
                title: 'Auditoria e plano de execução',
                text: 'Para decisões de arquitetura, tecnologia, desempenho ou modernização. Você recebe os riscos, as recomendações e um plano priorizado.'
            },
            delivery: {
                title: 'Desenvolvimento de ponta a ponta',
                text: 'Da descoberta e do backend aos aplicativos e à publicação, com marcos visíveis, entregas funcionais e uma transição organizada.'
            },
            leadership: {
                title: 'Liderança técnica mobile',
                text: 'Direção sênior, revisões, arquitetura e apoio à entrega em projeto, contrato ou posição em tempo integral.'
            }
        },
        approach: {
            kicker: 'Como trabalho', title: 'Critério sênior.<br/><em>Responsabilidade pelo produto.</em>',
            lead: 'Posso trabalhar com autonomia em todas as camadas do produto e envolver especialistas quando infraestrutura ou design exigem uma profundidade adicional.',
            ai: 'Uso IA para acelerar análise, planejamento, depuração e documentação. As decisões de arquitetura, segurança e produto continuam sob minha revisão e responsabilidade.',
            p1: {title: 'Alinhar o objetivo e as restrições', text: 'Definir o objetivo de negócio, os riscos técnicos, as alternativas e os critérios de sucesso antes de assumir o desenvolvimento.'},
            p2: {title: 'Entregar em etapas verificáveis', text: 'Entregas funcionais e demonstrações frequentes mantêm o aprendizado rápido e o risco visível.'},
            p3: {title: 'Deixar o time no controle', text: 'Arquitetura clara, documentação, propriedade do código e uma transição prática facilitam a manutenção depois do projeto.'}
        },
        contact: {
            kicker: 'Está criando ou modernizando um produto mobile?', title: 'Vamos definir o<br/><em>próximo passo certo.</em>',
            lead: 'Conte o que está planejando, desenvolvendo ou tentando resolver. Responderei com as perguntas e o formato de trabalho mais adequados ao problema.',
            calendar: 'Agendar uma conversa inicial', availability: 'Trabalho remoto em todo o mundo · Contratos por meio da Dymnoff Software Labs SAS (Uruguai)'
        },
        form: {
            name: 'Seu nome', namePlaceholder: 'Como devo me dirigir a você?', email: 'E-mail profissional',
            company: 'Empresa / produto', companyPlaceholder: 'Opcional, mas ajuda',
            service: 'Que tipo de ajuda você procura?', servicePlaceholder: 'Escolha a opção mais próxima',
            serviceConsulting: 'Consultoria ou auditoria técnica', serviceDevelopment: 'Desenvolvimento completo de aplicativo',
            serviceModernization: 'Modernização ou trabalho mobile complexo', serviceLeadership: 'Liderança técnica mobile',
            brief: 'Em que você precisa de ajuda?', briefPlaceholder: 'O produto, o estado atual, o objetivo e qualquer restrição importante',
            submit: 'Enviar o resumo', note: 'Normalmente respondo em um dia útil com um próximo passo útil.', sending: 'Enviando…',
            success: 'Obrigado, recebi sua mensagem. Responderei em breve.'
        },
        footer: {company: 'Serviços por meio da Dymnoff Software Labs SAS', tagline: 'Do backend aos aplicativos. Uma entrega sob uma única responsabilidade.'}
    },
    ru: {
        meta: {
            title: 'Консультант и full-stack разработчик мобильных приложений — Max Dymnoff',
            description: 'Мобильный консалтинг и разработка под ключ: серверная часть, API, приложения для Android и iOS, модернизация и публикация.',
            socialTitle: 'Мобильный продукт — от серверной части до запуска.',
            socialDescription: 'Мобильный консалтинг и full-stack разработка: серверная часть, нативные или кроссплатформенные приложения, модернизация и публикация.'
        },
        a11y: {skip: 'Перейти к содержанию', language: 'Язык'},
        brand: {role: 'Мобильный консультант · Full-stack разработчик мобильных приложений'},
        nav: {services: 'Услуги', work: 'Кейсы', journal: 'Журнал', engagement: 'Форматы работы', cta: 'Обсудить проект'},
        hero: {
            eyebrow: 'Мобильный консалтинг · Разработка под ключ',
            title: 'Беру <em>сложные</em> мобильные продукты целиком.',
            lead: 'Проектирую, создаю и модернизирую мобильные продукты целиком — от серверной части и API до нативных или кроссплатформенных приложений для Android и iOS.',
            ctaPrimary: 'Обсудить проект',
            ctaSecondary: 'Посмотреть услуги',
            trustLabel: 'Работал над продуктами'
        },
        visual: {
            live: 'Контур разработки', core: 'От сервера до приложений', native: 'Нативные приложения', platform: 'Кроссплатформа',
            backend: 'Серверная часть', release: 'Публикация', footer: 'Стратегия → сервер → приложения → запуск',
            ai: 'Инженерная работа с ИИ', builder: 'Один ответственный за результат'
        },
        impact: {
            years: 'лет разрабатываю и выпускаю программные продукты',
            performance: 'прирост производительности при модернизации iFIT',
            duplication: 'дублирования кода в кроссплатформенном продукте',
            fullstack: 'серверная часть, мобильные приложения и публикация'
        },
        services: {read: 'Подробнее об услуге'},
        expertise: {
            kicker: 'Услуги',
            title: 'Ответственность за мобильный продукт в нужном вам объёме.',
            lead: 'Можно начать с одного технического решения, разработки под ключ или сложного продукта, который уже находится в работе. Я связываю бизнес-цели с архитектурой, серверной частью, мобильными приложениями и публикацией.',
            consulting: {
                title: 'Консалтинг по мобильным продуктам',
                text: 'Предпроектный анализ, аудит архитектуры, выбор технологий и план модернизации, который превращает неопределённость в выполнимый план работ.',
                chip1: 'Аудит архитектуры', chip2: 'План разработки', chip3: 'Снижение рисков'
            },
            fullstack: {
                title: 'Разработка продукта целиком',
                text: 'API, данные, авторизация, уведомления и интеграции на сервере, а также нативные приложения для Android и iOS или кроссплатформенные клиенты — вплоть до публикации.',
                chip1: 'Сервер + API', chip2: 'Нативно или KMP', chip3: 'Публикация'
            },
            modernize: {
                title: 'Модернизация и сложные мобильные задачи',
                text: 'Миграции с устаревших решений, производительность и архитектура, а также камера, BLE, мультимедиа, карты, геозоны и другие функции, требующие глубокого знания платформы.',
                chip1: 'Обновление кодовой базы', chip2: 'Сложные интеграции', chip3: 'Стабильные релизы'
            }
        },
        fit: {
            kicker: 'Когда я особенно полезен',
            title: 'Когда приложение — только часть большого продукта.',
            lead: 'В этих ситуациях один опытный специалист, отвечающий за продукт, серверную часть, приложения и публикацию, снимает больше всего рисков.',
            new: {
                title: 'Новому продукту нужен технический путь',
                text: 'Есть бизнес-цель, но ещё предстоит определить архитектуру, план разработки, серверную часть и мобильные приложения.'
            },
            legacy: {
                title: 'Текущий продукт тормозит каждый релиз',
                text: 'Устаревший код, низкая производительность или архитектура превращают обычные изменения в дорогой риск.'
            },
            platform: {
                title: 'Функция упирается в ограничения платформы',
                text: 'BLE, мультимедиа, камера, карты, фоновая работа или правила магазинов требуют более глубокой мобильной экспертизы.'
            },
            leadership: {
                title: 'Команде не хватает технического лидера',
                text: 'Нужен человек, который примет решения на стыке систем, разблокирует разработку и оставит управление команде.'
            }
        },
        work: {
            kicker: 'Кейсы', title: 'Результаты на всех уровнях мобильного продукта.',
            lead: 'Разработка от серверной части до приложений, нативная модернизация, публичные SDK и кроссплатформенные продукты — с понятной зоной ответственности и измеримыми результатами.'
        },
        cases: {
            read: 'Читать кейс',
            ifit: {
                type: 'Нативная модернизация', label: 'Подключённый фитнес · Android',
                title: 'Переход зрелой фитнес-платформы с Xamarin на современную нативную Android-разработку.',
                text: 'Работал над производительностью, воспроизведением мультимедиа, субтитрами, BLE-оборудованием, Health Connect, проверкой кода и поддержкой релизов.',
                metric1: 'прирост производительности', metric2: 'сокращение техдолга'
            },
            clear: {
                type: 'Идентификация · SDK', label: 'Публичный SDK → основное приложение',
                title: 'Сначала инфраструктура аутентификации. Затем — критичные пользовательские сценарии.',
                text: 'Сначала работал над публичным SDK аутентификации CLEAR, затем над основным приложением: улучшал работу камеры и сканирования и помогал модернизировать кодовую базу.',
                metric: 'сокращение техдолга'
            },
            surfcast: {
                type: 'С нуля · Кроссплатформа', label: 'Android + iOS с нуля',
                title: 'Продукт, прошедший через несколько платформ, сезонов и смену архитектуры.',
                text: 'Создал приложения для Android и iOS на Kotlin Multiplatform, затем помогал переводить продукт на React Native/Expo и поддерживал младшего разработчика.',
                metric1: 'быстрее выпуск функций', metric2: 'дублирование кода', metric3: 'выручка первого сезона'
            },
            hailme: {
                type: 'Основатель · Единственный инженер продукта', label: 'От серверной части до приложений',
                title: 'Один продукт — от серверной части до двух мобильных приложений.',
                text: 'Создал и запустил приложения для Android и iOS и серверную часть, а также отвечал за геозоны, карты, авторизацию, push/SMS/WhatsApp, проверки App Store и Google Play, подрядчиков и требования к рассылкам.',
                link: 'Открыть HailMe'
            }
        },
        journal: {
            kicker: 'Журнал',
            heading: 'Что изменилось и что с этим делать.',
            lead: 'Еженедельный инженерный дайджест об Android и кроссплатформенной разработке: изменения с опорой на первоисточники, оценка их зрелости и рисков и практическое решение на неделю.',
            issueLabel: 'Свежий выпуск · 001',
            date: '27 июля 2026 · 10 минут чтения',
            issueTitle: 'Изменения в мобильной разработке, которые требуют решений.',
            issueLead: 'Kotlin улучшает экспорт в Swift, Media3 исправляет опасную работу с памятью, Nearby Connections меняет управление Wi-Fi и Bluetooth, а ИИ в Android начинает превращаться в отдельный слой выполнения.',
            read: 'Читать выпуск 001',
            signalMeta: '8 источников · 7 сигналов'
        },
        engagement: {
            kicker: 'Форматы работы',
            title: 'Начнём с той зоны ответственности, которая вам нужна.',
            lead: 'Отдельное техническое решение, разработка продукта целиком или постоянная поддержка команды опытным специалистом. Формат подстраивается под задачу, а не наоборот.',
            audit: {
                title: 'Аудит и план работ',
                text: 'Для решений по архитектуре, технологиям, производительности или модернизации. На выходе — риски, рекомендации и план с приоритетами.'
            },
            delivery: {
                title: 'Разработка под ключ',
                text: 'От предпроектного анализа и серверной части до мобильных приложений и публикации — с понятными этапами, рабочими версиями и передачей результата.'
            },
            leadership: {
                title: 'Техническое лидерство мобильной команды',
                text: 'Экспертное руководство, ревью, архитектура и поддержка разработки в проектном, контрактном или full-time формате.'
            }
        },
        approach: {
            kicker: 'Как я работаю', title: 'Инженерная зрелость.<br/><em>Ответственность за продукт.</em>',
            lead: 'Могу самостоятельно работать со всеми уровнями продукта и подключать профильных специалистов, когда инфраструктуре или дизайну требуется дополнительная глубина.',
            ai: 'Использую ИИ, чтобы ускорить анализ, планирование, отладку и документацию. Решения по архитектуре, безопасности и продукту остаются под моей проверкой и ответственностью.',
            p1: {title: 'Согласовать результат и ограничения', text: 'До начала разработки сделать явными бизнес-цель, технические риски, возможные компромиссы и критерии успеха.'},
            p2: {title: 'Двигаться проверяемыми этапами', text: 'Рабочие версии и регулярные демонстрации ускоряют обратную связь и позволяют постоянно видеть риски.'},
            p3: {title: 'Оставить управление команде', text: 'Понятная архитектура, документация, права на исходный код и практическая передача позволяют поддерживать продукт после завершения работы.'}
        },
        contact: {
            kicker: 'Создаёте или модернизируете мобильный продукт?', title: 'Определим правильный<br/><em>следующий шаг.</em>',
            lead: 'Расскажите, что вы планируете, разрабатываете или пытаетесь сдвинуть с места. Я отвечу по существу и предложу подходящий формат работы.',
            calendar: 'Назначить вводный звонок', availability: 'Удалённая работа по всему миру · Договоры через Dymnoff Software Labs SAS (Уругвай)'
        },
        form: {
            name: 'Ваше имя', namePlaceholder: 'Как к вам обращаться?', email: 'Рабочая почта',
            company: 'Компания / продукт', companyPlaceholder: 'Необязательно, но полезно',
            service: 'Какая помощь вам нужна?', servicePlaceholder: 'Выберите ближайший вариант',
            serviceConsulting: 'Консалтинг или технический аудит', serviceDevelopment: 'Разработка приложения под ключ',
            serviceModernization: 'Модернизация или сложная мобильная задача', serviceLeadership: 'Техническое лидерство мобильной команды',
            brief: 'С чем нужно помочь?', briefPlaceholder: 'Продукт, его текущее состояние, ваша цель и важные ограничения',
            submit: 'Отправить описание', note: 'Обычно отвечаю в течение одного рабочего дня и предлагаю следующий шаг.', sending: 'Отправляю…',
            success: 'Спасибо, сообщение получено. Скоро отвечу.'
        },
        footer: {company: 'Работа через Dymnoff Software Labs SAS', tagline: 'От серверной части до приложений. Один ответственный за результат.'}
    }
};

const SUPPORTED_LANGUAGES = Object.keys(I18N);
const formStatus = document.getElementById('formStatus');
let currentLanguage = 'en';
let formStatusKey = '';

function getTranslation(language, path) {
    return path.split('.').reduce((value, key) => value && value[key], I18N[language]);
}

function setMeta(selector, value) {
    const element = document.querySelector(selector);
    if (element && value) element.setAttribute('content', value);
}

function applyLanguage(language) {
    const nextLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
    currentLanguage = nextLanguage;
    document.documentElement.lang = nextLanguage;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = getTranslation(nextLanguage, element.dataset.i18n);
        if (typeof value === 'string') element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        const value = getTranslation(nextLanguage, element.dataset.i18nHtml);
        if (typeof value === 'string') element.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const value = getTranslation(nextLanguage, element.dataset.i18nPlaceholder);
        if (typeof value === 'string') element.setAttribute('placeholder', value);
    });

    const meta = I18N[nextLanguage].meta;
    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.socialTitle);
    setMeta('meta[property="og:description"]', meta.socialDescription);
    setMeta('meta[name="twitter:title"]', meta.socialTitle);
    setMeta('meta[name="twitter:description"]', meta.socialDescription);

    if (formStatusKey) formStatus.textContent = getTranslation(nextLanguage, formStatusKey) || '';

}

applyLanguage(document.documentElement.lang.slice(0, 2).toLowerCase());

document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = [...document.querySelectorAll('.reveal')];

revealElements.forEach((element) => {
    const delay = Number(element.dataset.delay || 0);
    element.style.setProperty('--reveal-delay', `${delay}ms`);
});

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {threshold: 0.12, rootMargin: '0px 0px -5%'});
    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
}

const siteHeader = document.querySelector('.site-header');
const progressBar = document.querySelector('.scroll-progress span');
let scrollFrame = null;

function updateScrollState() {
    scrollFrame = null;
    const scrollTop = window.scrollY;
    const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    siteHeader.classList.toggle('is-scrolled', scrollTop > 18);
    progressBar.style.width = `${Math.min((scrollTop / scrollable) * 100, 100)}%`;
}

window.addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(updateScrollState);
}, {passive: true});
updateScrollState();

const finePointer = window.matchMedia('(pointer: fine)').matches;

if (finePointer && !prefersReducedMotion) {
    window.addEventListener('pointermove', (event) => {
        document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    }, {passive: true});

    document.querySelectorAll('[data-tilt]').forEach((card) => {
        card.addEventListener('pointermove', (event) => {
            const bounds = card.getBoundingClientRect();
            const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
            const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
            card.style.transform = `perspective(1200px) rotateX(${relativeY * -3}deg) rotateY(${relativeX * 4}deg) translateY(-2px)`;
        });
        card.addEventListener('pointerleave', () => {
            card.style.removeProperty('transform');
        });
    });
}

const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

function configureFormRedirect() {
    const redirectUrl = new URL(window.location.href);
    redirectUrl.searchParams.set('sent', '1');
    redirectUrl.hash = 'contact';
    let nextInput = contactForm.querySelector('input[name="_next"]');
    if (!nextInput) {
        nextInput = document.createElement('input');
        nextInput.type = 'hidden';
        nextInput.name = '_next';
        contactForm.appendChild(nextInput);
    }
    nextInput.value = redirectUrl.toString();
}

configureFormRedirect();

contactForm.addEventListener('submit', (event) => {
    if (contactForm.elements.website.value) {
        event.preventDefault();
        return;
    }
    submitButton.disabled = true;
    submitButton.querySelector('span').textContent = getTranslation(currentLanguage, 'form.sending');
});

const currentUrl = new URL(window.location.href);
if (currentUrl.searchParams.get('sent') === '1') {
    formStatusKey = 'form.success';
    formStatus.textContent = getTranslation(currentLanguage, formStatusKey);
    currentUrl.searchParams.delete('sent');
    history.replaceState({}, '', currentUrl);
}
