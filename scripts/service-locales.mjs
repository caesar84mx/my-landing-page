export const SERVICE_LOCALES = {
    es: {
        allServices: 'Todos los servicios',
        services: 'Servicios',
        navigation: 'Navegación del servicio'
    },
    pt: {
        allServices: 'Todos os serviços',
        services: 'Serviços',
        navigation: 'Navegação do serviço'
    },
    ru: {
        allServices: 'Все услуги',
        services: 'Услуги',
        navigation: 'Навигация по услуге'
    }
};

export const SERVICES = {
    consulting: {
        slug: 'mobile-product-consulting',
        proofCase: 'ifit',
        locales: {
            es: {
                seoTitle: 'Consultor de producto móvil para arquitectura y desarrollo | Max Dymnoff',
                seoDescription: 'Consultoría senior para productos móviles: arquitectura, elección de tecnologías, planificación, modernización, rendimiento y desarrollo Android/iOS.',
                socialTitle: 'Consultoría de producto móvil para decisiones técnicas difíciles',
                socialDescription: 'Revisiones de arquitectura y planes de desarrollo que conectan los objetivos de negocio con backend, Android, iOS, restricciones de plataforma y riesgos de lanzamiento.',
                serviceName: 'Consultoría de producto móvil',
                serviceType: 'Revisión de arquitectura móvil y planificación del desarrollo',
                structuredDescription: 'Consultoría de arquitectura, tecnología, modernización, rendimiento y desarrollo para productos Android e iOS.',
                kicker: 'Arquitectura · Tecnología · Desarrollo',
                title: 'Consultoría de producto móvil para <em>decisiones difíciles.</em>',
                summary: 'Una revisión senior y enfocada del producto, la arquitectura, las restricciones de plataforma y el plan de desarrollo, antes de que la incertidumbre se convierta en una implementación costosa.',
                facts: [
                    ['Entrada', 'Objetivo · Código · Restricciones · Equipo'],
                    ['Revisión', 'Arquitectura · Riesgos · Ruta de desarrollo'],
                    ['Entrega', 'Hallazgos · Decisiones · Plan priorizado'],
                    ['Formato', 'Auditoría puntual o asesoría continua']
                ],
                technologiesLabel: 'Áreas de la consultoría',
                technologies: ['Arquitectura', 'Nativo o multiplataforma', 'Rendimiento', 'Modernización de sistemas legacy', 'Límites del backend', 'APIs de plataforma', 'Riesgos de lanzamiento', 'Responsabilidad del equipo'],
                sections: [
                    {
                        label: '01 · Cuándo',
                        title: 'Incorpora a un consultor antes de que la decisión sea difícil de cambiar.',
                        list: [
                            'Un producto nuevo necesita definir su arquitectura y elegir entre desarrollo nativo y multiplataforma.',
                            'Una app legacy hace que cada trimestre las entregas sean más lentas y arriesgadas.',
                            'El rendimiento, multimedia, BLE, cámara, mapas, ejecución en segundo plano o las políticas de las tiendas bloquean al equipo.',
                            'Los equipos de backend y mobile no coinciden en los límites, la responsabilidad o el orden realista de desarrollo.'
                        ]
                    },
                    {
                        label: '02 · Revisión',
                        title: 'Análisis técnico vinculado a un resultado de negocio.',
                        paragraphs: [
                            'El trabajo parte del objetivo y las restricciones. Después reviso la arquitectura, la implementación actual, las capacidades del equipo, las dependencias de plataforma, los límites entre datos y backend, el proceso de lanzamiento y las hipótesis con mayor riesgo.',
                            'El resultado no es un informe genérico de buenas prácticas. Las recomendaciones se priorizan por impacto, coste, dependencias y por el orden en que el equipo puede aplicarlas con seguridad.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Entregable',
                        title: 'Decisiones documentadas y un siguiente paso ejecutable.',
                        paragraphs: [
                            'Según el problema, la entrega puede incluir hallazgos de arquitectura, clasificación de riesgos, recomendaciones tecnológicas, límites objetivo, etapas de migración, criterios de validación y una hoja de ruta ajustada al equipo real.'
                        ],
                        outcomes: [
                            ['Riesgos', 'ordenados por impacto y probabilidad'],
                            ['Decisiones', 'con compromisos y restricciones explícitos'],
                            ['Plan', 'priorizado en etapas de desarrollo verificables']
                        ]
                    }
                ],
                ctaKicker: '¿Necesitas una ruta técnica clara?',
                ctaTitle: 'Empieza por la decisión que condiciona todo lo demás.',
                ctaBody: 'Comparte el contexto del producto, su estado actual y la decisión o el problema de desarrollo que genera más incertidumbre.',
                ctaPrimary: 'Solicitar una auditoría móvil',
                ctaProof: 'Ver un caso de modernización'
            },
            pt: {
                seoTitle: 'Consultoria de produto mobile para arquitetura e entrega | Max Dymnoff',
                seoDescription: 'Consultoria sênior para produtos mobile: arquitetura, escolha de tecnologia, planejamento, modernização, desempenho e execução em Android e iOS.',
                socialTitle: 'Consultoria de produto mobile para decisões técnicas difíceis',
                socialDescription: 'Revisões de arquitetura e planos de entrega que conectam objetivos de negócio a backend, Android, iOS, restrições de plataforma e riscos de lançamento.',
                serviceName: 'Consultoria de produto mobile',
                serviceType: 'Revisão de arquitetura mobile e planejamento de entrega',
                structuredDescription: 'Consultoria de arquitetura, tecnologia, modernização, desempenho e entrega para produtos Android e iOS.',
                kicker: 'Arquitetura · Tecnologia · Entrega',
                title: 'Consultoria de produto mobile para <em>decisões difíceis.</em>',
                summary: 'Uma avaliação sênior e objetiva do produto, da arquitetura, das restrições de plataforma e do plano de entrega, antes que a incerteza se transforme em uma implementação cara.',
                facts: [
                    ['Entrada', 'Objetivo · Código · Restrições · Equipe'],
                    ['Revisão', 'Arquitetura · Riscos · Caminho de entrega'],
                    ['Entrega', 'Achados · Decisões · Plano priorizado'],
                    ['Formato', 'Auditoria pontual ou assessoria contínua']
                ],
                technologiesLabel: 'Áreas avaliadas na consultoria',
                technologies: ['Arquitetura', 'Nativo ou multiplataforma', 'Desempenho', 'Modernização de legado', 'Limites do backend', 'APIs de plataforma', 'Riscos de lançamento', 'Responsabilidade da equipe'],
                sections: [
                    {
                        label: '01 · Quando',
                        title: 'Traga um consultor antes que a decisão fique cara demais para mudar.',
                        list: [
                            'Um novo produto precisa definir a arquitetura e escolher entre desenvolvimento nativo e multiplataforma.',
                            'Um aplicativo legado torna as entregas mais lentas e arriscadas a cada trimestre.',
                            'Desempenho, mídia, BLE, câmera, mapas, execução em segundo plano ou políticas das lojas estão bloqueando a equipe.',
                            'As equipes de backend e mobile discordam sobre limites, responsabilidades ou a sequência realista de entrega.'
                        ]
                    },
                    {
                        label: '02 · Revisão',
                        title: 'Análise técnica ligada a um resultado de negócio.',
                        paragraphs: [
                            'O trabalho começa pelo objetivo e pelas restrições. Depois, avalio a arquitetura, a implementação atual, a capacidade da equipe, as dependências de plataforma, os limites de dados e backend, o processo de lançamento e as premissas de maior risco.',
                            'O resultado não é um relatório genérico de boas práticas. As recomendações são priorizadas por impacto, custo, dependências e pela ordem em que a equipe pode agir com segurança.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Entrega',
                        title: 'Decisões registradas e um próximo passo executável.',
                        paragraphs: [
                            'Dependendo do problema, a entrega pode incluir achados de arquitetura, classificação de riscos, recomendações de tecnologia, limites desejados, etapas de migração, critérios de validação e um roteiro dimensionado para a equipe real.'
                        ],
                        outcomes: [
                            ['Riscos', 'classificados por impacto e probabilidade'],
                            ['Decisões', 'com concessões e restrições explícitas'],
                            ['Plano', 'priorizado em etapas de entrega verificáveis']
                        ]
                    }
                ],
                ctaKicker: 'Precisa de um caminho técnico claro?',
                ctaTitle: 'Comece pela decisão que muda tudo o que vem depois.',
                ctaBody: 'Envie o contexto do produto, o estado atual e a decisão ou o problema de entrega que está gerando mais incerteza.',
                ctaPrimary: 'Solicitar uma auditoria mobile',
                ctaProof: 'Ver um caso de modernização'
            },
            ru: {
                seoTitle: 'Консультант по архитектуре и разработке мобильных продуктов | Max Dymnoff',
                seoDescription: 'Консалтинг по мобильным продуктам: архитектура, выбор технологий, план разработки, модернизация, производительность и реализация Android/iOS.',
                socialTitle: 'Консалтинг по мобильному продукту для сложных технических решений',
                socialDescription: 'Аудит архитектуры и план разработки, связывающий цели бизнеса с backend, Android, iOS, ограничениями платформ и рисками релиза.',
                serviceName: 'Консалтинг по мобильному продукту',
                serviceType: 'Аудит мобильной архитектуры и планирование разработки',
                structuredDescription: 'Консалтинг по архитектуре, технологиям, модернизации, производительности и разработке продуктов для Android и iOS.',
                kicker: 'Архитектура · Технологии · Разработка',
                title: 'Консалтинг по мобильному продукту для <em>сложных решений.</em>',
                summary: 'Сфокусированная экспертная оценка продукта, архитектуры, платформенных ограничений и плана разработки — до того, как неопределённость превратится в дорогостоящую реализацию.',
                facts: [
                    ['На входе', 'Цель · Код · Ограничения · Команда'],
                    ['Проверка', 'Архитектура · Риски · План разработки'],
                    ['Результат', 'Выводы · Решения · Приоритетный план'],
                    ['Формат', 'Разовый аудит или регулярный консалтинг']
                ],
                technologiesLabel: 'Направления аудита',
                technologies: ['Архитектура', 'Нативная или кроссплатформенная разработка', 'Производительность', 'Модернизация legacy-систем', 'Границы backend', 'Платформенные API', 'Риски релиза', 'Ответственность команды'],
                sections: [
                    {
                        label: '01 · Когда',
                        title: 'Привлекайте консультанта, пока решение ещё можно изменить.',
                        list: [
                            'Новому продукту нужны архитектура и обоснованный выбор между нативной и кроссплатформенной разработкой.',
                            'Legacy-приложение с каждым кварталом делает обычные изменения медленнее и рискованнее.',
                            'Производительность, мультимедиа, BLE, камера, карты, фоновая работа или правила сторов блокируют команду.',
                            'Команды backend и mobile расходятся в границах ответственности или реалистичной последовательности разработки.'
                        ]
                    },
                    {
                        label: '02 · Аудит',
                        title: 'Технический анализ, привязанный к результату для бизнеса.',
                        paragraphs: [
                            'Работа начинается с цели и ограничений. Затем я проверяю архитектуру, текущую реализацию, возможности команды, платформенные зависимости, границы данных и backend, релизный процесс и самые рискованные допущения.',
                            'Результат — не общий отчёт с набором лучших практик. Рекомендации расставляются по влиянию, стоимости, зависимостям и безопасному порядку внедрения.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Результат',
                        title: 'Зафиксированное решение и следующий выполнимый шаг.',
                        paragraphs: [
                            'В зависимости от задачи результат может включать выводы по архитектуре, ранжирование рисков, рекомендации по технологиям, целевые границы системы, этапы миграции, критерии проверки и дорожную карту, рассчитанную на реальную команду.'
                        ],
                        outcomes: [
                            ['Риски', 'по влиянию и вероятности'],
                            ['Решения', 'с явными компромиссами и ограничениями'],
                            ['План', 'из проверяемых этапов разработки']
                        ]
                    }
                ],
                ctaKicker: 'Нужен понятный технический путь?',
                ctaTitle: 'Начните с решения, от которого зависит всё остальное.',
                ctaBody: 'Пришлите контекст продукта, его текущее состояние и решение или проблему разработки, в которой сейчас больше всего неопределённости.',
                ctaPrimary: 'Запросить мобильный аудит',
                ctaProof: 'Посмотреть кейс модернизации'
            }
        }
    },
    fullStack: {
        slug: 'full-stack-mobile-app-development',
        proofCase: 'hailme',
        locales: {
            es: {
                seoTitle: 'Desarrollador full-stack de apps Android e iOS | Max Dymnoff',
                seoDescription: 'Desarrollo full-stack de aplicaciones móviles: backend, APIs, datos, autenticación e integraciones, clientes Android/iOS y publicación en las tiendas.',
                socialTitle: 'Desarrollo full-stack de apps móviles, del backend al lanzamiento',
                socialDescription: 'Una única responsabilidad técnica para backend, Android, iOS, integraciones, releases y publicación en las tiendas.',
                serviceName: 'Desarrollo full-stack de aplicaciones móviles',
                serviceType: 'Desarrollo integral de productos para Android e iOS',
                structuredDescription: 'Backend, APIs, datos, autenticación e integraciones junto con clientes Android e iOS nativos o multiplataforma, releases y publicación.',
                kicker: 'Backend · Android · iOS · Lanzamiento',
                title: 'Desarrollo full-stack de aplicaciones móviles, <em>no full-stack web.</em>',
                summary: 'Construyo productos móviles completos: servicios backend y APIs, clientes Android e iOS nativos o multiplataforma, integraciones, sistemas de release y publicación en las tiendas.',
                facts: [
                    ['Backend', 'APIs · Datos · Autenticación · Notificaciones'],
                    ['Mobile', 'Android/iOS nativos · Kotlin Multiplatform'],
                    ['Entrega', 'CI/CD · App Store · Google Play'],
                    ['Modelo', 'Un único responsable técnico']
                ],
                technologiesLabel: 'Tecnologías full-stack para mobile',
                technologies: ['Kotlin', 'Android', 'iOS', 'Kotlin Multiplatform', 'Compose Multiplatform', 'Ktor', 'PostgreSQL', 'Redis', 'Notificaciones push', 'CI/CD'],
                sections: [
                    {
                        label: '01 · Definición',
                        title: '“Full-stack” significa backend más clientes móviles.',
                        paragraphs: [
                            'Este servicio es específico para productos móviles. El stack abarca datos y servicios del lado del servidor, APIs, autenticación, notificaciones e integraciones, además de las aplicaciones Android e iOS, el comportamiento de cada plataforma, la automatización de releases y el lanzamiento en las tiendas.',
                            'El desarrollo de front-end web no forma parte de la oferta. Si el producto necesita un sitio web o una capa de infraestructura especializada, coordino ese límite sin presentarlo como mi disciplina principal.'
                        ]
                    },
                    {
                        label: '02 · Alcance',
                        title: 'Un camino técnico completo para el producto móvil.',
                        subsections: [
                            ['Producto y arquitectura', 'Convierto el objetivo de negocio en un plan de desarrollo, defino los límites del sistema, elijo entre tecnología nativa o multiplataforma y hago visibles los riesgos antes de ampliar la implementación.'],
                            ['Backend e integraciones', 'El alcance del servidor puede incluir APIs, modelos de datos, autenticación, pagos, entrega de notificaciones, proveedores de mensajería, límites de analítica y el comportamiento operativo del que dependen las apps.'],
                            ['Aplicaciones Android e iOS', 'Desarrollo experiencias nativas para Android e iOS o uso Kotlin Multiplatform cuando compartir lógica ofrece una ventaja real. El comportamiento propio de cada plataforma sigue siendo una parte esencial de la arquitectura.'],
                            ['Release y traspaso', 'La entrega incluye CI/CD, firma, preparación para las tiendas, soporte durante la revisión, estabilidad de releases, documentación y un traspaso práctico.']
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Encaje',
                        title: 'Ideal cuando el producto necesita responsabilidad entre todas las capas.',
                        list: [
                            'Un producto móvil nuevo necesita arquitectura, backend y desarrollo para Android e iOS.',
                            'Las apps actuales dependen de un comportamiento del backend que ningún equipo controla de principio a fin.',
                            'La decisión multiplataforma debe tener en cuenta las APIs de cada sistema, el riesgo de release y el mantenimiento futuro.',
                            'El producto necesita un responsable técnico senior sin formar primero un equipo permanente completo.'
                        ],
                        outcomes: [
                            ['Backend', 'servicios diseñados alrededor del comportamiento móvil'],
                            ['Android + iOS', 'nativos o multiplataforma por una razón concreta'],
                            ['Lanzamiento', 'release y publicación en tiendas incluidos']
                        ]
                    }
                ],
                ctaKicker: 'Pruebas en un producto real',
                ctaTitle: 'Mira cómo funciona la entrega completa en la práctica.',
                ctaBody: 'HailMe cubre todo el camino: definición del producto, backend en Ktor, Android, iOS, mensajería, cumplimiento y lanzamiento.',
                ctaPrimary: 'Hablemos de tu producto',
                ctaProof: 'Leer el caso HailMe'
            },
            pt: {
                seoTitle: 'Desenvolvedor full-stack de apps Android e iOS | Max Dymnoff',
                seoDescription: 'Desenvolvimento full-stack de aplicativos mobile: backend, APIs, dados, autenticação e integrações, clientes Android/iOS e publicação nas lojas.',
                socialTitle: 'Desenvolvimento full-stack de apps mobile, do backend ao lançamento',
                socialDescription: 'Uma única responsabilidade técnica por backend, Android, iOS, integrações, releases e publicação nas lojas.',
                serviceName: 'Desenvolvimento full-stack de aplicativos mobile',
                serviceType: 'Desenvolvimento completo de produtos Android e iOS',
                structuredDescription: 'Backend, APIs, dados, autenticação e integrações junto com clientes Android e iOS nativos ou multiplataforma, releases e publicação.',
                kicker: 'Backend · Android · iOS · Lançamento',
                title: 'Desenvolvimento full-stack de aplicativos mobile, <em>não full-stack web.</em>',
                summary: 'Construo produtos mobile completos: serviços de backend e APIs, clientes Android e iOS nativos ou multiplataforma, integrações, processos de release e publicação nas lojas.',
                facts: [
                    ['Backend', 'APIs · Dados · Autenticação · Notificações'],
                    ['Mobile', 'Android/iOS nativos · Kotlin Multiplatform'],
                    ['Entrega', 'CI/CD · App Store · Google Play'],
                    ['Modelo', 'Um único responsável técnico']
                ],
                technologiesLabel: 'Tecnologias full-stack para mobile',
                technologies: ['Kotlin', 'Android', 'iOS', 'Kotlin Multiplatform', 'Compose Multiplatform', 'Ktor', 'PostgreSQL', 'Redis', 'Notificações push', 'CI/CD'],
                sections: [
                    {
                        label: '01 · Definição',
                        title: '“Full-stack” significa backend mais clientes mobile.',
                        paragraphs: [
                            'Este serviço é específico para produtos mobile. O stack vai de dados e serviços do lado do servidor, APIs, autenticação, notificações e integrações até os aplicativos Android e iOS, o comportamento de cada plataforma, a automação de releases e o lançamento nas lojas.',
                            'Desenvolvimento de front-end web não faz parte da oferta. Quando o produto precisa de um site ou de uma camada especializada de infraestrutura, coordeno essa fronteira sem apresentá-la como minha principal área de atuação.'
                        ]
                    },
                    {
                        label: '02 · Escopo',
                        title: 'Um caminho técnico completo para o produto mobile.',
                        subsections: [
                            ['Produto e arquitetura', 'Transformo o objetivo de negócio em um plano de entrega, defino os limites do sistema, escolho entre tecnologia nativa e multiplataforma e torno os riscos visíveis antes de ampliar a implementação.'],
                            ['Backend e integrações', 'O escopo do servidor pode incluir APIs, modelos de dados, autenticação, cobrança, entrega de notificações, provedores de mensagens, limites de analytics e o comportamento operacional do qual os aplicativos dependem.'],
                            ['Aplicativos Android e iOS', 'Desenvolvo experiências nativas para Android e iOS ou uso Kotlin Multiplatform quando compartilhar lógica traz uma vantagem real. O comportamento específico de cada plataforma continua sendo parte essencial da arquitetura.'],
                            ['Release e transição', 'A entrega inclui CI/CD, assinatura, preparação para as lojas, suporte durante a revisão, estabilidade de releases, documentação e uma transição prática para a equipe.']
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Encaixe',
                        title: 'Ideal quando o produto precisa de responsabilidade entre todas as camadas.',
                        list: [
                            'Um novo produto mobile precisa de arquitetura, backend e desenvolvimento para Android e iOS.',
                            'Os aplicativos atuais dependem de um comportamento do backend que nenhuma equipe controla de ponta a ponta.',
                            'A decisão multiplataforma precisa considerar APIs de plataforma, riscos de release e manutenção futura.',
                            'O produto precisa de um responsável técnico sênior sem montar primeiro uma equipe permanente completa.'
                        ],
                        outcomes: [
                            ['Backend', 'serviços desenhados para o comportamento mobile'],
                            ['Android + iOS', 'nativos ou multiplataforma por uma razão concreta'],
                            ['Lançamento', 'release e publicação nas lojas incluídos']
                        ]
                    }
                ],
                ctaKicker: 'Prova em um produto real',
                ctaTitle: 'Veja a entrega completa funcionando na prática.',
                ctaBody: 'O HailMe cobre todo o caminho: definição do produto, backend em Ktor, Android, iOS, mensageria, conformidade e lançamento.',
                ctaPrimary: 'Falar sobre seu produto',
                ctaProof: 'Ler o projeto HailMe'
            },
            ru: {
                seoTitle: 'Full-stack-разработчик мобильных приложений Android и iOS | Max Dymnoff',
                seoDescription: 'Full-stack-разработка мобильных приложений: backend, API, данные, авторизация и интеграции, клиенты Android/iOS и публикация в сторах.',
                socialTitle: 'Full-stack-разработка мобильных приложений от backend до релиза',
                socialDescription: 'Единая техническая ответственность за backend, Android, iOS, интеграции, релизы и публикацию в сторах.',
                serviceName: 'Full-stack-разработка мобильных приложений',
                serviceType: 'Комплексная разработка продуктов для Android и iOS',
                structuredDescription: 'Backend, API, данные, авторизация и интеграции вместе с нативными или кроссплатформенными клиентами Android и iOS, релизами и публикацией.',
                kicker: 'Backend · Android · iOS · Запуск',
                title: 'Full-stack-разработка мобильных приложений, <em>а не веб-фулстек.</em>',
                summary: 'Я создаю мобильные продукты целиком: серверные сервисы и API, нативные или кроссплатформенные приложения Android и iOS, интеграции, релизные процессы и публикацию в сторах.',
                facts: [
                    ['Backend', 'API · Данные · Авторизация · Уведомления'],
                    ['Mobile', 'Нативные Android/iOS · Kotlin Multiplatform'],
                    ['Релиз', 'CI/CD · App Store · Google Play'],
                    ['Модель', 'Единый технический владелец']
                ],
                technologiesLabel: 'Технологии full-stack mobile',
                technologies: ['Kotlin', 'Android', 'iOS', 'Kotlin Multiplatform', 'Compose Multiplatform', 'Ktor', 'PostgreSQL', 'Redis', 'Push-уведомления', 'CI/CD'],
                sections: [
                    {
                        label: '01 · Определение',
                        title: '“Full-stack” означает backend плюс мобильные клиенты.',
                        paragraphs: [
                            'Эта услуга предназначена именно для мобильных продуктов. Стек включает серверные данные и сервисы, API, авторизацию, уведомления и интеграции, приложения Android и iOS, платформенное поведение, автоматизацию релизов и публикацию в сторах.',
                            'Веб-фронтенд не входит в услугу. Если продукту нужен сайт или специализированная инфраструктура, я координирую эту границу, не выдавая её за свою основную специализацию.'
                        ]
                    },
                    {
                        label: '02 · Объём',
                        title: 'Полный технический контур мобильного продукта.',
                        subsections: [
                            ['Продукт и архитектура', 'Я превращаю бизнес-цель в план разработки, определяю границы системы, выбираю нативный или кроссплатформенный подход и выявляю риски до расширения реализации.'],
                            ['Backend и интеграции', 'Серверная часть может включать API, модели данных, авторизацию, биллинг, доставку уведомлений, провайдеров сообщений, границы аналитики и операционное поведение, от которого зависят приложения.'],
                            ['Приложения Android и iOS', 'Я разрабатываю нативные приложения для Android и iOS либо использую Kotlin Multiplatform, когда общая логика действительно ускоряет поставку. Специфика каждой платформы остаётся полноценной частью архитектуры.'],
                            ['Релиз и передача', 'Работа включает CI/CD, подпись, подготовку сторов, поддержку ревью, стабильность релизов, документацию и практическую передачу команде.']
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Когда подходит',
                        title: 'Лучший вариант, когда продукту нужен владелец всех технических границ.',
                        list: [
                            'Новому мобильному продукту нужны архитектура, backend и разработка для Android и iOS.',
                            'Текущие приложения зависят от поведения backend, за которое ни одна команда не отвечает целиком.',
                            'Кроссплатформенное решение должно учитывать платформенные API, релизные риски и будущую поддержку.',
                            'Продукту нужен сильный технический владелец без предварительного найма полной постоянной команды.'
                        ],
                        outcomes: [
                            ['Backend', 'сервисы, спроектированные под поведение мобильных приложений'],
                            ['Android + iOS', 'нативные или осознанно кроссплатформенные'],
                            ['Запуск', 'релиз и публикация в сторах включены']
                        ]
                    }
                ],
                ctaKicker: 'Подтверждение на реальном продукте',
                ctaTitle: 'Посмотрите, как полный цикл работает на практике.',
                ctaBody: 'HailMe охватывает весь путь: проработка продукта, backend на Ktor, Android, iOS, интеграции сообщений, требования провайдеров и запуск.',
                ctaPrimary: 'Обсудить продукт',
                ctaProof: 'Читать кейс HailMe'
            }
        }
    },
    modernization: {
        slug: 'mobile-app-modernization',
        proofCase: 'ifit',
        locales: {
            es: {
                seoTitle: 'Modernización de apps móviles Android e iOS | Max Dymnoff',
                seoDescription: 'Modernización de aplicaciones Android e iOS: arquitectura, rendimiento, migración nativa, multimedia, BLE, APIs de plataforma y estabilidad de releases.',
                socialTitle: 'Modernización de apps móviles sin detener el desarrollo del producto',
                socialDescription: 'Una ruta gradual para modernizar arquitectura legacy, rendimiento, integraciones de plataforma, migración y estabilidad de releases.',
                serviceName: 'Modernización de aplicaciones móviles',
                serviceType: 'Modernización de aplicaciones legacy para Android e iOS',
                structuredDescription: 'Arquitectura, rendimiento, migración, integraciones de plataforma y estabilidad de releases para productos móviles existentes.',
                kicker: 'Arquitectura · Rendimiento · Migración',
                title: 'Moderniza el producto móvil sin <em>detener las entregas.</em>',
                summary: 'Una ruta gradual de modernización para productos Android e iOS cuya arquitectura, rendimiento o integraciones de plataforma hacen que cada release sea más difícil de lo necesario.',
                facts: [
                    ['Revisión', 'Arquitectura · Rendimiento · Riesgos de release'],
                    ['Profundidad', 'Multimedia · BLE · Cámara · Mapas · Segundo plano'],
                    ['Ruta', 'Migración gradual con incrementos funcionales'],
                    ['Objetivo', 'Entregas más rápidas y seguras']
                ],
                technologiesLabel: 'Áreas de modernización',
                technologies: ['Arquitectura legacy', 'Migración nativa', 'Rendimiento', 'ExoPlayer', 'Bluetooth LE', 'Health Connect', 'Kotlin Multiplatform', 'Estabilidad de releases'],
                sections: [
                    {
                        label: '01 · Síntomas',
                        title: 'La modernización empieza donde las entregas fallan una y otra vez.',
                        list: [
                            'Las funcionalidades pequeñas exigen cambios en varios módulos estrechamente acoplados.',
                            'Los problemas de rendimiento son visibles, pero nadie tiene una responsabilidad clara sobre ellos.',
                            'El framework legacy o antiguas decisiones de plataforma bloquean las capacidades actuales de Android e iOS.',
                            'Multimedia, Bluetooth, cámara, mapas o ejecución en segundo plano fallan en casos extremos de producción.',
                            'El riesgo de release impide que el equipo sustituya toda la arquitectura de una vez.'
                        ]
                    },
                    {
                        label: '02 · Enfoque',
                        title: 'Sustituye el riesgo por etapas, no con una reescritura heroica.',
                        paragraphs: [
                            'Empiezo por identificar los recorridos del producto, los límites de arquitectura y las integraciones de plataforma con mayor coste de cambio. Después, la arquitectura objetivo se convierte en etapas de migración que mantienen releases funcionales y generan evidencia desde el principio.',
                            'Cuando la dificultad está en una plataforma concreta, trabajo directamente en esa capa: multimedia en Android, BLE, Health Connect, cámara, ciclo de vida, ejecución en segundo plano o la frontera entre código compartido y nativo.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Evidencia',
                        title: 'Experiencia modernizando productos maduros.',
                        paragraphs: [
                            'En iFIT, el trabajo contribuyó a la migración de Xamarin a Android nativo en aplicaciones móviles y equipos conectados, con multimedia, BLE, Health Connect y componentes de telemetría en Kotlin Multiplatform.',
                            'En CLEAR, el trabajo abarcó el SDK público y la aplicación principal, mejorando los flujos de cámara y escaneo mientras se reducía la deuda técnica.'
                        ],
                        outcomes: [
                            ['580+', 'pull requests integrados en iFIT'],
                            ['~50%', 'mejora de rendimiento en iFIT'],
                            ['~30%', 'reducción de deuda técnica en CLEAR']
                        ]
                    }
                ],
                ctaKicker: '¿Una app legacy ralentiza cada release?',
                ctaTitle: 'Encuentra la primera etapa de migración que demuestre el camino.',
                ctaBody: 'Empieza con una auditoría de arquitectura y entregas. Después decidimos si el equipo necesita una hoja de ruta, apoyo en la implementación o responsabilidad directa.',
                ctaPrimary: 'Hablemos de la modernización',
                ctaProof: 'Leer el caso iFIT'
            },
            pt: {
                seoTitle: 'Modernização de aplicativos Android e iOS | Max Dymnoff',
                seoDescription: 'Modernização de aplicativos Android e iOS: arquitetura, desempenho, migração nativa, mídia, BLE, APIs de plataforma e estabilidade de releases.',
                socialTitle: 'Modernização de apps mobile sem interromper a evolução do produto',
                socialDescription: 'Um caminho gradual para modernizar arquitetura legada, desempenho, integrações de plataforma, migração e estabilidade de releases.',
                serviceName: 'Modernização de aplicativos mobile',
                serviceType: 'Modernização de aplicativos legados para Android e iOS',
                structuredDescription: 'Arquitetura, desempenho, migração, integrações de plataforma e estabilidade de releases para produtos mobile existentes.',
                kicker: 'Arquitetura · Desempenho · Migração',
                title: 'Modernize o produto mobile sem <em>interromper as entregas.</em>',
                summary: 'Um caminho gradual de modernização para produtos Android e iOS cuja arquitetura, desempenho ou integrações de plataforma tornam cada release mais difícil do que deveria.',
                facts: [
                    ['Revisão', 'Arquitetura · Desempenho · Riscos de release'],
                    ['Profundidade', 'Mídia · BLE · Câmera · Mapas · Segundo plano'],
                    ['Caminho', 'Migração gradual com incrementos funcionais'],
                    ['Objetivo', 'Entregas mais rápidas e seguras']
                ],
                technologiesLabel: 'Áreas de modernização',
                technologies: ['Arquitetura legada', 'Migração nativa', 'Desempenho', 'ExoPlayer', 'Bluetooth LE', 'Health Connect', 'Kotlin Multiplatform', 'Estabilidade de releases'],
                sections: [
                    {
                        label: '01 · Sintomas',
                        title: 'A modernização começa onde a entrega falha repetidamente.',
                        list: [
                            'Funcionalidades pequenas exigem mudanças em vários módulos fortemente acoplados.',
                            'Os problemas de desempenho são visíveis, mas ninguém tem responsabilidade clara sobre eles.',
                            'O framework legado ou decisões antigas de plataforma bloqueiam recursos atuais de Android e iOS.',
                            'Mídia, Bluetooth, câmera, mapas ou execução em segundo plano falham em casos extremos de produção.',
                            'O risco de release impede a equipe de substituir toda a arquitetura de uma só vez.'
                        ]
                    },
                    {
                        label: '02 · Abordagem',
                        title: 'Substitua o risco em etapas, não com uma reescrita heroica.',
                        paragraphs: [
                            'Começo identificando os fluxos do produto, os limites da arquitetura e as integrações de plataforma com maior custo de mudança. A arquitetura desejada é então organizada em etapas de migração que preservam releases funcionais e produzem evidências desde cedo.',
                            'Quando a parte difícil é específica da plataforma, trabalho diretamente nessa camada: mídia no Android, BLE, Health Connect, câmera, ciclo de vida, execução em segundo plano ou a fronteira entre código compartilhado e nativo.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Evidências',
                        title: 'Experiência em modernização de produtos maduros.',
                        paragraphs: [
                            'No iFIT, o trabalho contribuiu para a migração de Xamarin para Android nativo em aplicativos mobile e equipamentos conectados, incluindo mídia, BLE, Health Connect e componentes de telemetria em Kotlin Multiplatform.',
                            'Na CLEAR, o trabalho atravessou o SDK público e o aplicativo principal, melhorando fluxos de câmera e leitura enquanto reduzia a dívida técnica.'
                        ],
                        outcomes: [
                            ['580+', 'pull requests integrados no iFIT'],
                            ['~50%', 'ganho de desempenho no iFIT'],
                            ['~30%', 'redução de dívida técnica na CLEAR']
                        ]
                    }
                ],
                ctaKicker: 'Um aplicativo legado está atrasando cada release?',
                ctaTitle: 'Encontre a primeira etapa de migração que comprove o caminho.',
                ctaBody: 'Comece com uma auditoria de arquitetura e entrega. Depois, decidimos se a equipe precisa de um roteiro, apoio na implementação ou responsabilidade direta.',
                ctaPrimary: 'Falar sobre a modernização',
                ctaProof: 'Ler o projeto iFIT'
            },
            ru: {
                seoTitle: 'Модернизация мобильных приложений Android и iOS | Max Dymnoff',
                seoDescription: 'Модернизация Android- и iOS-приложений: архитектура, производительность, нативная миграция, мультимедиа, BLE, платформенные API и релизы.',
                socialTitle: 'Модернизация мобильного приложения без остановки разработки',
                socialDescription: 'Поэтапная модернизация legacy-архитектуры, производительности, платформенных интеграций и релизного процесса.',
                serviceName: 'Модернизация мобильных приложений',
                serviceType: 'Модернизация существующих приложений Android и iOS',
                structuredDescription: 'Архитектура, производительность, миграция, платформенные интеграции и стабильность релизов для существующих мобильных продуктов.',
                kicker: 'Архитектура · Производительность · Миграция',
                title: 'Модернизация мобильного продукта <em>без остановки разработки.</em>',
                summary: 'Поэтапная модернизация Android- и iOS-продуктов, в которых архитектура, производительность или платформенные интеграции излишне усложняют каждый релиз.',
                facts: [
                    ['Аудит', 'Архитектура · Производительность · Риски релиза'],
                    ['Глубина', 'Мультимедиа · BLE · Камера · Карты · Фоновая работа'],
                    ['Путь', 'Поэтапная миграция рабочими инкрементами'],
                    ['Цель', 'Более быстрая и безопасная разработка']
                ],
                technologiesLabel: 'Направления модернизации',
                technologies: ['Legacy-архитектура', 'Нативная миграция', 'Производительность', 'ExoPlayer', 'Bluetooth LE', 'Health Connect', 'Kotlin Multiplatform', 'Стабильность релизов'],
                sections: [
                    {
                        label: '01 · Симптомы',
                        title: 'Модернизация начинается там, где регулярно ломается разработка.',
                        list: [
                            'Небольшие функции требуют изменений в нескольких тесно связанных модулях.',
                            'Проблемы производительности видны, но не имеют явного технического владельца.',
                            'Legacy-фреймворк или старые платформенные решения блокируют современные возможности Android и iOS.',
                            'Мультимедиа, Bluetooth, камера, карты или фоновая работа ломаются в пограничных производственных сценариях.',
                            'Релизные риски не позволяют команде заменить всю архитектуру сразу.'
                        ]
                    },
                    {
                        label: '02 · Подход',
                        title: 'Устраняйте риски по частям, а не одной героической переписью.',
                        paragraphs: [
                            'Сначала я определяю продуктовые сценарии, архитектурные границы и платформенные интеграции с самой высокой стоимостью изменений. Затем целевая архитектура разбивается на этапы миграции, которые сохраняют рабочие релизы и как можно раньше дают проверяемый результат.',
                            'Если сложность находится на конкретной платформе, я работаю непосредственно на этом уровне: мультимедиа Android, BLE, Health Connect, камера, жизненный цикл, фоновая работа или граница между общим и нативным кодом.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Опыт',
                        title: 'Модернизация зрелых продуктов на практике.',
                        paragraphs: [
                            'В iFIT работа помогла перейти с Xamarin на нативный Android в мобильных приложениях и подключённом оборудовании, включая мультимедиа, BLE, Health Connect и компоненты телеметрии на Kotlin Multiplatform.',
                            'В CLEAR работа охватывала публичный SDK и основное приложение: улучшение камеры и сканирования одновременно с сокращением технического долга.'
                        ],
                        outcomes: [
                            ['580+', 'влитых PR в iFIT'],
                            ['~50%', 'рост производительности iFIT'],
                            ['~30%', 'сокращение техдолга CLEAR']
                        ]
                    }
                ],
                ctaKicker: 'Legacy-приложение замедляет каждый релиз?',
                ctaTitle: 'Найдите первый этап миграции, который подтвердит выбранный путь.',
                ctaBody: 'Начните с аудита архитектуры и разработки. Затем решим, нужна ли команде дорожная карта, помощь с реализацией или прямое техническое руководство.',
                ctaPrimary: 'Обсудить модернизацию',
                ctaProof: 'Читать кейс iFIT'
            }
        }
    },
    lead: {
        slug: 'fractional-mobile-lead',
        proofCase: 'surfcast',
        locales: {
            es: {
                seoTitle: 'Liderazgo técnico móvil a tiempo parcial para equipos Android/iOS | Max Dymnoff',
                seoDescription: 'Liderazgo móvil flexible para equipos Android e iOS: arquitectura, revisiones, planificación, mentoría, decisiones entre capas y soporte de releases.',
                socialTitle: 'Liderazgo móvil senior cuando el equipo necesita dirección técnica',
                socialDescription: 'Arquitectura, revisiones, planificación, mentoría y decisiones entre capas sin contratar otro responsable a tiempo completo.',
                serviceName: 'Liderazgo técnico móvil a tiempo parcial',
                serviceType: 'Dirección técnica móvil integrada a tiempo parcial',
                structuredDescription: 'Arquitectura, revisión de código, planificación, decisiones entre capas, mentoría y soporte de releases para equipos Android e iOS.',
                kicker: 'Arquitectura · Revisiones · Dirección técnica',
                title: 'Liderazgo móvil senior con <em>la dedicación que necesitas.</em>',
                summary: 'Dirección técnica continua para un equipo que necesita arquitectura, revisiones, mentoría y responsabilidad sobre las entregas, pero no otro puesto directivo a tiempo completo.',
                facts: [
                    ['Dirección', 'Arquitectura · Tecnología · Estándares'],
                    ['Entrega', 'Planificación · Revisión · Preparación del release'],
                    ['Equipo', 'Mentoría · Decisiones · Traspaso'],
                    ['Ritmo', 'Colaboración integrada a tiempo parcial']
                ],
                technologiesLabel: 'Responsabilidades del liderazgo móvil',
                technologies: ['Arquitectura', 'Revisión de código', 'Planificación', 'Descubrimiento técnico', 'Mentoría', 'Preparación de releases', 'Decisiones entre capas', 'Traspaso'],
                sections: [
                    {
                        label: '01 · Encaje',
                        title: 'Cuando el equipo sabe construir, pero le falta una dirección técnica común.',
                        list: [
                            'Las decisiones de Android, iOS, backend y producto se toman por separado.',
                            'Las revisiones senior llegan demasiado tarde para cambiar la arquitectura con seguridad.',
                            'Un equipo en crecimiento necesita estándares, mentoría y responsabilidades más claras.',
                            'Una migración o un programa de releases necesita criterio técnico constante durante varios meses.'
                        ]
                    },
                    {
                        label: '02 · Función',
                        title: 'El liderazgo se mantiene cerca de la implementación.',
                        paragraphs: [
                            'Trabajo con el equipo en arquitectura, alcance, revisiones de código y diseño, preparación de releases, riesgos de plataforma y decisiones que cruzan los límites entre mobile y backend.',
                            'La función puede incluir mentoría, refinamiento de requisitos antes de implementar, revisión de cambios complejos, definición de estándares de validación y documentación de los criterios que el equipo necesitará después.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Resultado',
                        title: 'El equipo conserva la capacidad, no solo las decisiones.',
                        paragraphs: [
                            'La colaboración deja una arquitectura explícita, mejores hábitos de revisión, criterios de entrega visibles y profesionales capaces de tomar de forma autónoma decisiones del mismo nivel.'
                        ],
                        outcomes: [
                            ['Claridad', 'una dirección técnica para todas las capas'],
                            ['Calidad', 'revisiones antes de que el riesgo llegue al release'],
                            ['Control', 'el conocimiento y la responsabilidad quedan en el equipo']
                        ]
                    }
                ],
                ctaKicker: '¿Necesitas liderazgo móvil senior?',
                ctaTitle: 'Empieza por las decisiones que hoy esperan a un responsable.',
                ctaBody: 'Podemos definir un ritmo semanal enfocado en arquitectura, revisiones, planificación y el trabajo móvil con mayor riesgo para el producto.',
                ctaPrimary: 'Hablemos de las necesidades del equipo',
                ctaProof: 'Ver experiencia de entrega y mentoría'
            },
            pt: {
                seoTitle: 'Liderança técnica mobile fracionada para equipes Android/iOS | Max Dymnoff',
                seoDescription: 'Liderança mobile flexível para equipes Android e iOS: arquitetura, revisões, planejamento, mentoria, decisões entre camadas e suporte a releases.',
                socialTitle: 'Liderança mobile sênior quando a equipe precisa de direção técnica',
                socialDescription: 'Arquitetura, revisões, planejamento, mentoria e decisões entre camadas sem contratar outra liderança em tempo integral.',
                serviceName: 'Liderança técnica mobile fracionada',
                serviceType: 'Liderança técnica mobile integrada em tempo parcial',
                structuredDescription: 'Arquitetura, revisão de código, planejamento, decisões entre camadas, mentoria e suporte a releases para equipes Android e iOS.',
                kicker: 'Arquitetura · Revisões · Liderança de entrega',
                title: 'Liderança mobile sênior <em>na medida certa para a equipe.</em>',
                summary: 'Direção técnica contínua para uma equipe que precisa de arquitetura, revisões, mentoria e responsabilidade pela entrega, mas não de outra liderança em tempo integral.',
                facts: [
                    ['Direção', 'Arquitetura · Tecnologia · Padrões'],
                    ['Entrega', 'Planejamento · Revisão · Preparação de release'],
                    ['Equipe', 'Mentoria · Apoio a decisões · Transição'],
                    ['Cadência', 'Atuação integrada em tempo parcial']
                ],
                technologiesLabel: 'Atividades da liderança mobile',
                technologies: ['Arquitetura', 'Revisão de código', 'Planejamento de entrega', 'Descoberta técnica', 'Mentoria', 'Preparação de releases', 'Decisões entre camadas', 'Transição'],
                sections: [
                    {
                        label: '01 · Encaixe',
                        title: 'Quando a equipe consegue construir, mas não tem uma direção técnica comum.',
                        list: [
                            'As decisões de Android, iOS, backend e produto são tomadas de forma isolada.',
                            'As revisões técnicas chegam tarde demais para mudar a arquitetura com segurança.',
                            'Uma equipe em crescimento precisa de padrões, mentoria e responsabilidades mais claras.',
                            'Uma migração ou um programa de releases precisa de critério técnico consistente por vários meses.'
                        ]
                    },
                    {
                        label: '02 · Papel',
                        title: 'A liderança permanece próxima da implementação.',
                        paragraphs: [
                            'Trabalho com a equipe em arquitetura, escopo, revisões de código e design, preparação de releases, riscos de plataforma e decisões que atravessam os limites entre mobile e backend.',
                            'O papel pode incluir mentoria, refinamento de requisitos antes da implementação, revisão de mudanças complexas, definição de padrões de validação e documentação do raciocínio que a equipe precisará depois.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Resultado',
                        title: 'A equipe mantém a capacidade, não apenas as decisões.',
                        paragraphs: [
                            'A atuação deixa uma arquitetura explícita, hábitos de revisão mais fortes, critérios de entrega visíveis e profissionais capazes de continuar tomando decisões do mesmo nível com autonomia.'
                        ],
                        outcomes: [
                            ['Clareza', 'uma direção técnica para todas as camadas'],
                            ['Qualidade', 'revisões antes que o risco vire trabalho de release'],
                            ['Controle', 'conhecimento e responsabilidade permanecem com a equipe']
                        ]
                    }
                ],
                ctaKicker: 'Precisa de liderança mobile sênior?',
                ctaTitle: 'Comece pelas decisões que hoje estão esperando por uma liderança.',
                ctaBody: 'Podemos definir uma cadência semanal focada em arquitetura, revisões, planejamento e no trabalho mobile de maior risco para o produto.',
                ctaPrimary: 'Falar sobre as necessidades da equipe',
                ctaProof: 'Ver experiência de entrega e mentoria'
            },
            ru: {
                seoTitle: 'Внешний технический лидер для команд Android и iOS | Max Dymnoff',
                seoDescription: 'Техническое лидерство для мобильных команд: архитектура, ревью, планирование, наставничество, решения между слоями и поддержка релизов.',
                socialTitle: 'Внешний мобильный техлид, когда команде нужна единая техническая ответственность',
                socialDescription: 'Архитектура, ревью, планирование, наставничество и сквозные решения без найма ещё одного штатного руководителя.',
                serviceName: 'Внешний технический лидер мобильной команды',
                serviceType: 'Техническое лидерство в мобильной команде с частичной занятостью',
                structuredDescription: 'Архитектура, ревью кода, планирование, сквозные технические решения, наставничество и поддержка релизов для команд Android и iOS.',
                kicker: 'Архитектура · Ревью · Руководство разработкой',
                title: 'Сильное техническое лидерство <em>в нужном объёме.</em>',
                summary: 'Регулярное техническое руководство для команды, которой нужны архитектура, ревью, наставничество и ответственность за разработку, но не ещё один штатный руководитель.',
                facts: [
                    ['Направление', 'Архитектура · Технологии · Стандарты'],
                    ['Разработка', 'Планирование · Ревью · Готовность релиза'],
                    ['Команда', 'Наставничество · Решения · Передача знаний'],
                    ['Формат', 'Работа внутри команды с частичной занятостью']
                ],
                technologiesLabel: 'Задачи мобильного техлида',
                technologies: ['Архитектура', 'Ревью кода', 'Планирование разработки', 'Техническое исследование', 'Наставничество', 'Подготовка релизов', 'Сквозные решения', 'Передача знаний'],
                sections: [
                    {
                        label: '01 · Когда подходит',
                        title: 'Когда команда умеет разрабатывать, но ей не хватает единого технического направления.',
                        list: [
                            'Решения по Android, iOS, backend и продукту принимаются изолированно.',
                            'Экспертное ревью приходит слишком поздно, чтобы безопасно изменить архитектуру.',
                            'Растущей команде нужны стандарты, наставничество и более чёткие зоны ответственности.',
                            'Программе миграции или серии релизов на протяжении нескольких месяцев нужен единый технический взгляд.'
                        ]
                    },
                    {
                        label: '02 · Роль',
                        title: 'Техническое лидерство остаётся рядом с реализацией.',
                        paragraphs: [
                            'Я работаю с командой над архитектурой, объёмом задач, ревью кода и дизайна, готовностью релизов, платформенными рисками и решениями на границе mobile и backend.',
                            'В работу могут входить наставничество, уточнение требований до реализации, проверка сложных изменений, настройка стандартов валидации и документирование решений, которые понадобятся команде после завершения сотрудничества.'
                        ],
                        showTechnologies: true
                    },
                    {
                        label: '03 · Результат',
                        title: 'В команде остаются не только решения, но и способность принимать их дальше.',
                        paragraphs: [
                            'После работы остаются явно описанная архитектура, более сильные практики ревью, прозрачные критерии готовности и инженеры, способные самостоятельно принимать решения того же уровня.'
                        ],
                        outcomes: [
                            ['Ясность', 'единое техническое направление для всех слоёв продукта'],
                            ['Качество', 'ревью до того, как риск превратится в релизную проблему'],
                            ['Контроль', 'знания и ответственность остаются внутри команды']
                        ]
                    }
                ],
                ctaKicker: 'Нужен сильный мобильный техлид?',
                ctaTitle: 'Начните с решений, которые сейчас ждут технического владельца.',
                ctaBody: 'Можно выстроить еженедельный ритм вокруг архитектуры, ревью, планирования и самых рискованных мобильных задач продукта.',
                ctaPrimary: 'Обсудить потребности команды',
                ctaProof: 'Посмотреть опыт разработки и наставничества'
            }
        }
    }
};
