document.documentElement.classList.add('js');

const I18N = {
    en: {
        meta: {
            title: 'Senior Mobile Engineer for Complex Products — Max Dymnoff',
            description: 'Senior Android and full-stack mobile engineer who modernizes complex products, builds platform-heavy features, and owns delivery from architecture to launch.',
            socialTitle: 'I make hard mobile products feel easy.',
            socialDescription: 'Senior Android and full-stack mobile engineering—from architecture and platform integrations to backend, release, and modernization.'
        },
        a11y: {skip: 'Skip to content', language: 'Language'},
        brand: {role: 'Senior mobile engineer'},
        nav: {proof: 'Proof', expertise: 'Expertise', work: 'Selected work', cta: 'Let’s talk'},
        hero: {
            eyebrow: 'Available for select remote projects · UTC−3',
            title: 'I make <em>hard</em> mobile products feel easy.',
            lead: 'From legacy rescue and platform-heavy features to launch-ready apps, I own the path from architecture to store delivery—Android first, full-stack when the product needs it.',
            ctaPrimary: 'Start a conversation',
            ctaSecondary: 'See the proof',
            trustLabel: 'Engineering experience across'
        },
        visual: {
            live: 'Delivery system live', core: 'Owned end to end', native: 'Native UX', platform: 'Platform depth',
            backend: 'Backend', release: 'Release', footer: 'Architecture → delivery → launch',
            ai: 'AI-powered workflow', builder: 'Founder-level ownership'
        },
        impact: {
            years: 'years shipping production software',
            performance: 'performance improvement on iFIT modernization',
            duplication: 'code duplication on a cross-platform product',
            languages: 'languages for global collaboration'
        },
        expertise: {
            kicker: 'Bring me the hard part',
            title: 'The value is not more code. It’s less uncertainty.',
            lead: 'I work where product decisions meet platform constraints—turning ambiguous mobile problems into systems that can ship, scale, and survive the next release.',
            modernize: {
                title: 'Modernize without stopping the product',
                text: 'Native migrations, modularization, performance work, architecture cleanup, and technical-debt reduction—with production continuity in mind.',
                chip1: 'Production continuity', chip2: 'Measured progress', chip3: 'Lower change risk'
            },
            platform: {
                title: 'Solve the platform-heavy features',
                text: 'Camera and scanning, BLE device integrations, media playback, maps, geofencing, and reliable behavior under OS constraints.',
                chip1: 'Real-device behavior', chip2: 'Failure-aware flows', chip3: 'OS constraints'
            },
            own: {
                title: 'Own the whole delivery path',
                text: 'Mobile, shared code, backend, authentication, messaging, store policy, analytics, and launch—plus the judgment to bring in specialists when deeper DevOps work is needed.',
                chip1: 'One accountable owner', chip2: 'Fewer handoffs', chip3: 'Launch-ready'
            }
        },
        work: {
            kicker: 'Selected work', title: 'Proof, not promises.',
            lead: 'Mature products, greenfield builds, public SDKs, and founder-led delivery. Different contexts; the same bias toward clarity and outcomes.'
        },
        cases: {
            ifit: {
                type: 'Native modernization', label: 'Connected fitness · Android',
                title: 'Moving a mature fitness platform from Xamarin toward modern native Android.',
                text: 'Material engineering contribution across performance, media playback, captions, BLE-connected equipment, Health Connect, reviews, and release support.',
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
                type: 'Founder · Solo product engineer', label: 'Product ownership without the handoffs',
                title: 'A real product is more than its app.',
                text: 'I built and launched the mobile apps and backend, then handled geofencing, maps, authentication, push/SMS/WhatsApp, store review, vendor coordination, and messaging compliance.',
                link: 'Visit HailMe'
            }
        },
        approach: {
            kicker: 'How I work', title: 'Senior judgment.<br/><em>Founder urgency.</em>',
            lead: 'I bring the discipline of large production teams and the practical ownership of someone who has shipped his own product through code, vendors, policies, and stores.',
            ai: 'My workflow is AI-powered for faster codebase analysis, planning, debugging, and documentation—while engineering decisions stay accountable and human.',
            p1: {title: 'Clarity before code', text: 'Make the risk, trade-offs, and definition of success visible first.'},
            p2: {title: 'Ship in useful slices', text: 'Reduce feedback time without compromising the system underneath.'},
            p3: {title: 'Leave it stronger', text: 'Better architecture, clearer docs, lower operational risk, and a team that can continue.'}
        },
        contact: {
            kicker: 'Have a difficult mobile problem?', title: 'Let’s turn it into<br/><em>a product advantage.</em>',
            lead: 'Tell me what you’re building, modernizing, or trying to unblock. I’ll reply with useful questions—not a generic sales pitch.',
            calendar: 'Book a 30-minute call', availability: 'Remote worldwide · B2B/C2C through a Uruguayan company'
        },
        form: {
            name: 'Your name', namePlaceholder: 'How should I address you?', email: 'Work email',
            company: 'Company / product', companyPlaceholder: 'Optional, but helpful',
            brief: 'What is the hard part?', briefPlaceholder: 'The product, challenge, timeline, and where you need senior ownership',
            submit: 'Send the brief', note: 'Usually replies within one business day.', sending: 'Sending…',
            success: 'Thanks—your message is in. I’ll reply shortly.'
        },
        footer: {tagline: 'Complex mobile. Clear outcomes.'}
    },
    es: {
        meta: {
            title: 'Ingeniero Mobile Senior para productos complejos — Max Dymnoff',
            description: 'Ingeniero Android y mobile full-stack senior que moderniza productos complejos y se encarga de la entrega desde la arquitectura hasta el lanzamiento.',
            socialTitle: 'Hago que los productos mobile difíciles parezcan simples.',
            socialDescription: 'Ingeniería Android y mobile full-stack: arquitectura, integraciones, backend, publicación y modernización.'
        },
        a11y: {skip: 'Ir al contenido', language: 'Idioma'},
        brand: {role: 'Ingeniero mobile senior'},
        nav: {proof: 'Resultados', expertise: 'Especialidad', work: 'Proyectos', cta: 'Hablemos'},
        hero: {
            eyebrow: 'Disponible para proyectos remotos seleccionados · UTC−3',
            title: 'Hago que los productos mobile <em>difíciles</em> parezcan simples.',
            lead: 'Desde rescatar código legacy y resolver integraciones complejas hasta lanzar apps listas para producción: me encargo del camino completo, de la arquitectura a las tiendas. Android como núcleo; full-stack cuando el producto lo requiere.',
            ctaPrimary: 'Iniciar una conversación',
            ctaSecondary: 'Ver resultados',
            trustLabel: 'Experiencia de ingeniería en'
        },
        visual: {
            live: 'Sistema de entrega activo', core: 'Responsabilidad integral', native: 'UX nativa', platform: 'Profundidad de plataforma',
            backend: 'Backend', release: 'Publicación', footer: 'Arquitectura → entrega → lanzamiento',
            ai: 'Flujo potenciado por IA', builder: 'Ownership de fundador'
        },
        impact: {
            years: 'años publicando software en producción',
            performance: 'de mejora de rendimiento en la modernización de iFIT',
            duplication: 'de duplicación de código en un producto cross-platform',
            languages: 'idiomas para colaborar globalmente'
        },
        expertise: {
            kicker: 'Tráeme la parte difícil',
            title: 'El valor no está en escribir más código. Está en reducir la incertidumbre.',
            lead: 'Trabajo donde las decisiones de producto se encuentran con las restricciones de plataforma, convirtiendo problemas mobile ambiguos en sistemas capaces de publicarse, escalar y sobrevivir al siguiente release.',
            modernize: {
                title: 'Modernizar sin detener el producto',
                text: 'Migraciones nativas, modularización, rendimiento, saneamiento de arquitectura y reducción de deuda técnica, sin perder continuidad en producción.',
                chip1: 'Continuidad en producción', chip2: 'Progreso medible', chip3: 'Menor riesgo de cambio'
            },
            platform: {
                title: 'Resolver lo complejo de la plataforma',
                text: 'Cámara y escaneo, integraciones con dispositivos BLE, reproducción multimedia, mapas, geofencing y comportamiento confiable bajo las restricciones del sistema operativo.',
                chip1: 'Comportamiento real', chip2: 'Flujos tolerantes a fallos', chip3: 'Restricciones del SO'
            },
            own: {
                title: 'Asumir todo el camino hasta producción',
                text: 'Mobile, código compartido, backend, autenticación, mensajería, políticas de stores, analítica y lanzamiento, con el criterio para sumar especialistas cuando hace falta trabajo DevOps más profundo.',
                chip1: 'Un responsable', chip2: 'Menos handoffs', chip3: 'Listo para lanzar'
            }
        },
        work: {
            kicker: 'Proyectos seleccionados', title: 'Resultados, no promesas.',
            lead: 'Productos maduros, proyectos desde cero, SDKs públicos y entrega como fundador. Contextos distintos; la misma obsesión por la claridad y los resultados.'
        },
        cases: {
            ifit: {
                type: 'Modernización nativa', label: 'Fitness conectado · Android',
                title: 'Modernización de una plataforma fitness madura desde Xamarin hacia Android nativo.',
                text: 'Contribución sustancial en rendimiento, reproducción multimedia, subtítulos, equipos conectados por BLE, Health Connect, revisiones y soporte de releases.',
                metric1: 'de mejora de rendimiento', metric2: 'menos deuda técnica'
            },
            clear: {
                type: 'Identidad · SDK', label: 'SDK público → app principal',
                title: 'Primero, infraestructura de autenticación. Después, flujos de consumo de alta exigencia.',
                text: 'Trabajé en el SDK público de autenticación de CLEAR antes de pasar a su app principal, mejorando flujos de cámara y escaneo y ayudando a modernizar el código.',
                metric: 'menos deuda técnica'
            },
            surfcast: {
                type: 'Desde cero · Cross-platform', label: 'Android + iOS desde cero',
                title: 'Un producto construido a través de plataformas, temporadas y cambios de arquitectura.',
                text: 'Desarrollé las apps Android e iOS con Kotlin Multiplatform y luego ayudé a evolucionar el producto hacia React Native/Expo, además de mentorizar a un desarrollador junior.',
                metric1: 'entrega más rápida', metric2: 'duplicación de código', metric3: 'ingresos de la primera temporada'
            },
            hailme: {
                type: 'Fundador · Único ingeniero de producto', label: 'Ownership sin handoffs',
                title: 'Un producto real es mucho más que su app.',
                text: 'Construí y lancé las apps y el backend; además resolví geofencing, mapas, autenticación, push/SMS/WhatsApp, revisión de stores, coordinación de proveedores y cumplimiento de mensajería.',
                link: 'Visitar HailMe'
            }
        },
        approach: {
            kicker: 'Cómo trabajo', title: 'Criterio senior.<br/><em>Urgencia de fundador.</em>',
            lead: 'Combino la disciplina de grandes equipos de producción con el ownership práctico de quien ha llevado su propio producto por código, proveedores, políticas y tiendas.',
            ai: 'Mi flujo está potenciado por IA para acelerar análisis de código, planificación, debugging y documentación, manteniendo las decisiones de ingeniería humanas y responsables.',
            p1: {title: 'Claridad antes que código', text: 'Hacer visibles primero los riesgos, los trade-offs y la definición de éxito.'},
            p2: {title: 'Entregar en incrementos útiles', text: 'Acortar el ciclo de feedback sin comprometer el sistema que sostiene el producto.'},
            p3: {title: 'Dejarlo más fuerte', text: 'Mejor arquitectura, documentación clara, menos riesgo operativo y un equipo capaz de continuar.'}
        },
        contact: {
            kicker: '¿Tienes un problema mobile difícil?', title: 'Convirtámoslo en<br/><em>una ventaja de producto.</em>',
            lead: 'Cuéntame qué estás construyendo, modernizando o intentando desbloquear. Responderé con preguntas útiles, no con un discurso comercial genérico.',
            calendar: 'Agendar una llamada de 30 minutos', availability: 'Remoto global · B2B/C2C mediante empresa uruguaya'
        },
        form: {
            name: 'Tu nombre', namePlaceholder: '¿Cómo debería dirigirme a ti?', email: 'Email laboral',
            company: 'Empresa / producto', companyPlaceholder: 'Opcional, pero útil',
            brief: '¿Cuál es la parte difícil?', briefPlaceholder: 'El producto, el desafío, los plazos y dónde necesitas ownership senior',
            submit: 'Enviar el resumen', note: 'Normalmente respondo en un día hábil.', sending: 'Enviando…',
            success: 'Gracias, recibí tu mensaje. Responderé pronto.'
        },
        footer: {tagline: 'Mobile complejo. Resultados claros.'}
    },
    pt: {
        meta: {
            title: 'Engenheiro Mobile Sênior para produtos complexos — Max Dymnoff',
            description: 'Engenheiro Android e mobile full-stack sênior que moderniza produtos complexos e assume a entrega da arquitetura ao lançamento.',
            socialTitle: 'Faço produtos mobile difíceis parecerem simples.',
            socialDescription: 'Engenharia Android e mobile full-stack: arquitetura, integrações, backend, publicação e modernização.'
        },
        a11y: {skip: 'Ir para o conteúdo', language: 'Idioma'},
        brand: {role: 'Engenheiro mobile sênior'},
        nav: {proof: 'Resultados', expertise: 'Especialidade', work: 'Projetos', cta: 'Vamos conversar'},
        hero: {
            eyebrow: 'Disponível para projetos remotos selecionados · UTC−3',
            title: 'Faço produtos mobile <em>difíceis</em> parecerem simples.',
            lead: 'De resgatar código legado e resolver integrações complexas até lançar apps prontas para produção: assumo todo o caminho, da arquitetura às lojas. Android como base; full-stack quando o produto precisa.',
            ctaPrimary: 'Iniciar uma conversa',
            ctaSecondary: 'Ver resultados',
            trustLabel: 'Experiência de engenharia em'
        },
        visual: {
            live: 'Sistema de entrega ativo', core: 'Ownership ponta a ponta', native: 'UX nativa', platform: 'Profundidade de plataforma',
            backend: 'Backend', release: 'Publicação', footer: 'Arquitetura → entrega → lançamento',
            ai: 'Fluxo potencializado por IA', builder: 'Ownership de fundador'
        },
        impact: {
            years: 'anos entregando software em produção',
            performance: 'de melhoria de performance na modernização do iFIT',
            duplication: 'de duplicação de código em um produto cross-platform',
            languages: 'idiomas para colaboração global'
        },
        expertise: {
            kicker: 'Traga a parte difícil',
            title: 'O valor não está em mais código. Está em menos incerteza.',
            lead: 'Trabalho onde decisões de produto encontram restrições de plataforma, transformando problemas mobile ambíguos em sistemas que podem ser lançados, escalar e sobreviver ao próximo release.',
            modernize: {
                title: 'Modernizar sem parar o produto',
                text: 'Migrações nativas, modularização, performance, saneamento de arquitetura e redução de dívida técnica, preservando a continuidade em produção.',
                chip1: 'Continuidade em produção', chip2: 'Progresso mensurável', chip3: 'Menor risco de mudança'
            },
            platform: {
                title: 'Resolver os recursos pesados de plataforma',
                text: 'Câmera e leitura, integrações com dispositivos BLE, reprodução de mídia, mapas, geofencing e comportamento confiável sob as restrições do sistema operacional.',
                chip1: 'Comportamento real', chip2: 'Fluxos resilientes', chip3: 'Restrições do SO'
            },
            own: {
                title: 'Assumir todo o caminho até a entrega',
                text: 'Mobile, código compartilhado, backend, autenticação, mensageria, políticas das lojas, analytics e lançamento, com o critério para envolver especialistas quando é necessário um trabalho DevOps mais profundo.',
                chip1: 'Um responsável', chip2: 'Menos handoffs', chip3: 'Pronto para lançar'
            }
        },
        work: {
            kicker: 'Projetos selecionados', title: 'Resultados, não promessas.',
            lead: 'Produtos maduros, projetos do zero, SDKs públicos e entrega como fundador. Contextos diferentes; o mesmo foco em clareza e resultados.'
        },
        cases: {
            ifit: {
                type: 'Modernização nativa', label: 'Fitness conectado · Android',
                title: 'Modernização de uma plataforma fitness madura do Xamarin para Android nativo.',
                text: 'Contribuição relevante em performance, reprodução de mídia, legendas, equipamentos conectados por BLE, Health Connect, reviews e suporte a releases.',
                metric1: 'de melhoria de performance', metric2: 'menos dívida técnica'
            },
            clear: {
                type: 'Identidade · SDK', label: 'SDK público → app principal',
                title: 'Primeiro, infraestrutura de autenticação. Depois, fluxos de consumo críticos.',
                text: 'Trabalhei no SDK público de autenticação da CLEAR antes de ir para o app principal, melhorando fluxos de câmera e leitura e ajudando a modernizar o código.',
                metric: 'menos dívida técnica'
            },
            surfcast: {
                type: 'Do zero · Cross-platform', label: 'Android + iOS do zero',
                title: 'Um produto construído entre plataformas, temporadas e mudanças de arquitetura.',
                text: 'Criei os apps Android e iOS com Kotlin Multiplatform e depois ajudei o produto a evoluir para React Native/Expo, além de orientar um desenvolvedor júnior.',
                metric1: 'entrega mais rápida', metric2: 'duplicação de código', metric3: 'receita na primeira temporada'
            },
            hailme: {
                type: 'Fundador · Único engenheiro de produto', label: 'Ownership sem handoffs',
                title: 'Um produto real é muito mais do que seu app.',
                text: 'Construí e lancei os apps e o backend; também cuidei de geofencing, mapas, autenticação, push/SMS/WhatsApp, revisão nas lojas, coordenação de fornecedores e conformidade de mensageria.',
                link: 'Visitar o HailMe'
            }
        },
        approach: {
            kicker: 'Como trabalho', title: 'Critério sênior.<br/><em>Urgência de fundador.</em>',
            lead: 'Combino a disciplina de grandes equipes de produção com o ownership prático de quem levou o próprio produto por código, fornecedores, políticas e lojas.',
            ai: 'Meu fluxo é potencializado por IA para acelerar análise de código, planejamento, debugging e documentação, mantendo as decisões de engenharia humanas e responsáveis.',
            p1: {title: 'Clareza antes do código', text: 'Tornar visíveis primeiro os riscos, trade-offs e a definição de sucesso.'},
            p2: {title: 'Entregar em incrementos úteis', text: 'Reduzir o tempo de feedback sem comprometer o sistema por baixo.'},
            p3: {title: 'Deixar o produto mais forte', text: 'Melhor arquitetura, documentação clara, menos risco operacional e uma equipe capaz de continuar.'}
        },
        contact: {
            kicker: 'Tem um problema mobile difícil?', title: 'Vamos transformá-lo em<br/><em>vantagem de produto.</em>',
            lead: 'Conte o que está construindo, modernizando ou tentando destravar. Responderei com perguntas úteis, não com um discurso comercial genérico.',
            calendar: 'Agendar uma conversa de 30 minutos', availability: 'Remoto global · B2B/C2C por meio de empresa uruguaia'
        },
        form: {
            name: 'Seu nome', namePlaceholder: 'Como devo me dirigir a você?', email: 'E-mail profissional',
            company: 'Empresa / produto', companyPlaceholder: 'Opcional, mas ajuda',
            brief: 'Qual é a parte difícil?', briefPlaceholder: 'O produto, o desafio, o prazo e onde você precisa de ownership sênior',
            submit: 'Enviar o resumo', note: 'Normalmente respondo em um dia útil.', sending: 'Enviando…',
            success: 'Obrigado, recebi sua mensagem. Responderei em breve.'
        },
        footer: {tagline: 'Mobile complexo. Resultados claros.'}
    },
    ru: {
        meta: {
            title: 'Senior Mobile Engineer для сложных продуктов — Max Dymnoff',
            description: 'Senior Android и full-stack mobile engineer: модернизация сложных продуктов и ответственность за результат от архитектуры до релиза.',
            socialTitle: 'Сложные мобильные продукты могут выглядеть просто.',
            socialDescription: 'Senior Android и full-stack mobile engineering: архитектура, платформенные интеграции, backend, релизы и модернизация.'
        },
        a11y: {skip: 'Перейти к содержанию', language: 'Язык'},
        brand: {role: 'Senior mobile engineer'},
        nav: {proof: 'Результаты', expertise: 'Экспертиза', work: 'Проекты', cta: 'Обсудим'},
        hero: {
            eyebrow: 'Доступен для отдельных удалённых проектов · UTC−3',
            title: 'Делаю так, чтобы <em>сложные</em> mobile-продукты выглядели просто.',
            lead: 'От спасения legacy-кода и сложных платформенных интеграций до готовых к запуску приложений: отвечаю за весь путь от архитектуры до публикации в сторах. Android — ядро, full-stack — когда этого требует продукт.',
            ctaPrimary: 'Начать разговор',
            ctaSecondary: 'Посмотреть результаты',
            trustLabel: 'Инженерный опыт в продуктах'
        },
        visual: {
            live: 'Система поставки активна', core: 'Ответственность целиком', native: 'Нативный UX', platform: 'Глубина платформы',
            backend: 'Backend', release: 'Релиз', footer: 'Архитектура → поставка → запуск',
            ai: 'AI-powered процесс', builder: 'Ownership основателя'
        },
        impact: {
            years: 'лет выпускаю production-софт',
            performance: 'прирост производительности при модернизации iFIT',
            duplication: 'дублирование кода в cross-platform продукте',
            languages: 'языка для международной работы'
        },
        expertise: {
            kicker: 'Дайте мне сложную часть',
            title: 'Ценность не в большем количестве кода. Она в меньшей неопределённости.',
            lead: 'Работаю там, где продуктовые решения сталкиваются с ограничениями платформы, и превращаю неоднозначные mobile-задачи в системы, которые можно выпустить, масштабировать и развивать.',
            modernize: {
                title: 'Модернизировать, не останавливая продукт',
                text: 'Нативные миграции, модуляризация, производительность, оздоровление архитектуры и сокращение технического долга с сохранением production-ритма.',
                chip1: 'Без остановки production', chip2: 'Измеримый прогресс', chip3: 'Ниже риск изменений'
            },
            platform: {
                title: 'Решить платформенно сложные фичи',
                text: 'Камера и сканирование, интеграции с BLE-устройствами, воспроизведение медиа, карты, geofencing и надёжная работа в условиях ограничений ОС.',
                chip1: 'Поведение на устройствах', chip2: 'Устойчивые сценарии', chip3: 'Ограничения ОС'
            },
            own: {
                title: 'Взять на себя весь путь до релиза',
                text: 'Mobile, общий код, backend, аутентификация, messaging, правила сторов, аналитика и запуск, а для глубоких DevOps-задач — умение вовремя подключить профильных специалистов.',
                chip1: 'Единая ответственность', chip2: 'Меньше handoff', chip3: 'Готово к запуску'
            }
        },
        work: {
            kicker: 'Избранные проекты', title: 'Факты вместо обещаний.',
            lead: 'Зрелые продукты, greenfield-разработка, публичные SDK и работа основателя. Контексты разные; фокус на ясности и результате одинаковый.'
        },
        cases: {
            ifit: {
                type: 'Нативная модернизация', label: 'Connected fitness · Android',
                title: 'Переход зрелой фитнес-платформы с Xamarin на современный native Android.',
                text: 'Существенный инженерный вклад в производительность, media playback, субтитры, BLE-оборудование, Health Connect, code review и поддержку релизов.',
                metric1: 'прирост производительности', metric2: 'сокращение техдолга'
            },
            clear: {
                type: 'Identity · SDK', label: 'Публичный SDK → основное приложение',
                title: 'Сначала инфраструктура аутентификации. Затем — критичные пользовательские сценарии.',
                text: 'Сначала работал над публичным SDK аутентификации CLEAR, затем над основным приложением: улучшал camera/scanning flows и помогал модернизировать кодовую базу.',
                metric: 'сокращение техдолга'
            },
            surfcast: {
                type: 'С нуля · Cross-platform', label: 'Android + iOS с нуля',
                title: 'Продукт, прошедший через платформы, сезоны и смену архитектуры.',
                text: 'Создал Android- и iOS-приложения на Kotlin Multiplatform, затем помогал развивать продукт в сторону React Native/Expo и менторил junior-разработчика.',
                metric1: 'быстрее выпуск фич', metric2: 'дублирование кода', metric3: 'выручка первого сезона'
            },
            hailme: {
                type: 'Основатель · Единственный product engineer', label: 'Ownership без handoff',
                title: 'Настоящий продукт — это намного больше, чем приложение.',
                text: 'Создал и запустил приложения и backend, а также отвечал за geofencing, карты, аутентификацию, push/SMS/WhatsApp, review в сторах, координацию подрядчиков и messaging compliance.',
                link: 'Открыть HailMe'
            }
        },
        approach: {
            kicker: 'Как я работаю', title: 'Senior-решения.<br/><em>Скорость основателя.</em>',
            lead: 'Соединяю дисциплину крупных production-команд с практическим ownership человека, который провёл собственный продукт через код, подрядчиков, правила и сторы.',
            ai: 'Использую AI-powered процесс для ускорения анализа кодовой базы, планирования, debugging и документации, сохраняя человеческую ответственность за инженерные решения.',
            p1: {title: 'Сначала ясность, потом код', text: 'Сначала сделать видимыми риски, компромиссы и критерии успеха.'},
            p2: {title: 'Поставлять полезными частями', text: 'Сокращать цикл обратной связи, не подрывая фундамент продукта.'},
            p3: {title: 'Оставлять систему сильнее', text: 'Лучше архитектура, яснее документация, ниже операционный риск, команда готова продолжать.'}
        },
        contact: {
            kicker: 'Есть сложная mobile-задача?', title: 'Превратим её в<br/><em>преимущество продукта.</em>',
            lead: 'Расскажите, что вы создаёте, модернизируете или пытаетесь разблокировать. Я отвечу полезными вопросами, а не шаблонным коммерческим предложением.',
            calendar: 'Назначить 30-минутный звонок', availability: 'Удалённо по всему миру · B2B/C2C через уругвайскую компанию'
        },
        form: {
            name: 'Ваше имя', namePlaceholder: 'Как к вам обращаться?', email: 'Рабочая почта',
            company: 'Компания / продукт', companyPlaceholder: 'Необязательно, но полезно',
            brief: 'В чём сложность?', briefPlaceholder: 'Продукт, задача, сроки и где нужен senior ownership',
            submit: 'Отправить описание', note: 'Обычно отвечаю в течение одного рабочего дня.', sending: 'Отправляю…',
            success: 'Спасибо, сообщение получено. Скоро отвечу.'
        },
        footer: {tagline: 'Сложный mobile. Ясный результат.'}
    }
};

const SUPPORTED_LANGUAGES = Object.keys(I18N);
const languageSelect = document.getElementById('languageSelect');
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

function applyLanguage(language, updateUrl = true) {
    const nextLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
    currentLanguage = nextLanguage;
    document.documentElement.lang = nextLanguage;
    languageSelect.value = nextLanguage;

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

    try {
        localStorage.setItem('preferred-language', nextLanguage);
    } catch (_) {
        // Language selection still works when storage is unavailable.
    }

    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', nextLanguage);
        history.replaceState({}, '', url);
    }
}

function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (SUPPORTED_LANGUAGES.includes(fromUrl)) return fromUrl;

    try {
        const saved = localStorage.getItem('preferred-language');
        if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
    } catch (_) {
        // Fall through to browser preference.
    }

    const browserLanguage = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : 'en';
}

languageSelect.addEventListener('change', (event) => {
    applyLanguage(event.target.value);
    configureFormRedirect();
});
applyLanguage(getInitialLanguage(), false);

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
