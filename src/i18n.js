export const languageOptions = [
  { code: 'ptBR', label: 'PT-BR', htmlLang: 'pt-BR' },
  { code: 'en', label: 'EN', htmlLang: 'en' },
  { code: 'es', label: 'ES', htmlLang: 'es' },
];

export const content = {
  ptBR: {
    aria: {
      home: 'Ir para o inicio',
      mainNavigation: 'Navegacao principal',
      mobileNavigation: 'Navegacao mobile',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      language: 'Selecionar idioma',
      neuralFlow: 'Fluxo de rede neural',
      heroVisual: 'Visualizacao tecnica de visao computacional',
      whaleImage: 'Baleia-jubarte em imagem aerea para monitoramento cientifico',
      models: 'Modelos e frameworks',
      readPaper: 'Ler artigo',
      citePaper: 'Citar artigo',
    },
    nav: [
      ['Sobre', 'about'],
      ['Projetos', 'projects'],
      ['Pesquisa', 'research'],
      ['Publicacoes', 'publications'],
      ['Skills', 'skills'],
      ['Contato', 'contact'],
    ],
    cvButton: 'CV / Resume',
    hero: {
      status: 'Aberto a colaboracoes',
      name: 'Reinan Lopes Argolo',
      kicker: 'Cientista da Computacao em formacao | Pesquisador em Machine Learning e Visao Computacional',
      description:
        'Desenvolvo solucoes que conectam ciencia, inteligencia artificial e impacto real, com foco em visao computacional aplicada a pesquisa e conservacao.',
      primaryAction: 'Ver projetos',
      secondaryAction: 'Ver pesquisa',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Pesquisa aplicada com rigor de engenharia.',
      body:
        'Sou estudante de Ciencia da Computacao interessado em construir sistemas inteligentes capazes de interpretar dados visuais complexos. Minha atuacao combina aprendizado de maquina, visao computacional e automacao para transformar pixels em evidencia cientifica.',
      metrics: [
        ['8+', 'areas tecnicas'],
        ['6', 'frameworks de tracking'],
        ['100%', 'foco em impacto real'],
      ],
    },
    interests: {
      eyebrow: 'Foco',
      title: 'Areas de interesse',
      items: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Object Detection',
        'Multi-Object Tracking',
        'Scientific Computing',
        'Embedded Systems',
        'Research Methods',
      ],
    },
    projects: {
      eyebrow: 'Projetos',
      title: 'Projetos em destaque',
      items: [
        {
          title: 'Projeto Baleias Jubarte',
          label: 'Research',
          description:
            'Deteccao e analise automatica de relacoes mae-filhote-escolta em imagens aereas com modelos de visao computacional.',
          tags: ['YOLO', 'RT-DETR', 'UAV Imagery'],
          featured: true,
        },
        {
          title: 'WhaleTracker',
          label: 'Pipeline',
          description:
            'Processamento de videos brutos para gerar trajetorias, persistencia de identidade e metricas de conservacao marinha.',
          tags: ['Python', 'MOT', 'OpenCV'],
        },
        {
          title: 'Fermentacao do Cacau',
          label: 'IoT',
          description:
            'Sistema embarcado para monitoramento termico e quimico aplicado a agricultura de precisao no sul da Bahia.',
          tags: ['Embedded', 'Sensors', 'Linux'],
        },
        {
          title: 'Motor de Busca de Filmes',
          label: 'Web',
          description:
            'Aplicacao React para descoberta de conteudo, integracao com APIs REST e experiencia responsiva de busca.',
          tags: ['React', 'REST API', 'UX'],
        },
        {
          title: 'Ferramenta de Compilacao em C',
          label: 'Tooling',
          description:
            'Automacao em shell script para compilar, testar e linkar projetos C com fluxo reproduzivel em Linux.',
          tags: ['Shell', 'GCC', 'Automation'],
        },
      ],
    },
    research: {
      eyebrow: 'Pesquisa',
      title: 'Pesquisa Cientifica',
      modelsTitle: 'Modelos & Frameworks',
      status: 'status: ativo',
      items: [
        'Deteccao de baleias em imagens aereas',
        'Multi-Object Tracking em ambientes marinhos',
        'Persistencia de identidade durante oclusoes',
        'Metricas de conservacao orientadas por IA',
      ],
    },
    publications: {
      eyebrow: 'Artigos',
      title: 'Publicacoes Cientificas',
      read: 'Ler artigo',
      cite: 'Citar',
      items: [
        {
          title: 'Automatic Detection of Humpback Whales in UAV Images using Deep Learning',
          authors: 'Reinan Lopes Argolo, et al.',
          venue: 'International Journal of Marine Science & Technology',
          year: '2024',
          description:
            'Este trabalho propoe uma abordagem baseada em Redes Neurais Convolucionais para a deteccao automatizada de baleias-jubarte em imagens capturadas por drones, otimizando o tempo de processamento em levantamentos populacionais.',
        },
        {
          title: 'Multi-Object Tracking for Marine Conservation: Challenges and Opportunities',
          authors: 'Reinan Lopes Argolo',
          venue: 'Latin American Conference on Computer Vision',
          year: '2023',
          description:
            'Uma analise aprofundada dos desafios tecnicos envolvidos no rastreamento de multiplos objetos em ambientes marinhos dinamicos, explorando o uso de algoritmos de MOT para monitoramento ambiental.',
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technical Skills',
      groups: [
        ['Languages', ['Python', 'C', 'C++', 'Java', 'JavaScript']],
        ['AI Stack', ['PyTorch', 'OpenCV', 'Ultralytics', 'NumPy', 'Pandas']],
        ['Engineering', ['React', 'Docker', 'Linux', 'Git', 'LaTeX']],
      ],
    },
    timeline: {
      eyebrow: 'Trajetoria',
      title: 'Timeline',
      items: [
        ['START', 'CS Fundamentals', 'Algoritmos, estruturas de dados, sistemas operacionais e bases matematicas.'],
        ['EXPLORATION', 'Artificial Intelligence', 'Primeiros projetos com ML, redes neurais e interfaces para dados.'],
        ['CURRENT', 'Conservation Tech', 'Visao computacional para rastreamento de baleias e metricas ambientais.'],
      ],
    },
    quote: {
      main: '"Was wir wissen ist ein Tropfen; was wir nicht wissen, ein Ozean."',
      translation:
        '"Nao sei o que posso parecer para o mundo, mas para mim mesmo pareco ter sido apenas como um menino brincando na beira-mar, divertindo-me em encontrar de vez em quando uma pedra mais lisa ou uma concha mais bonita do que o normal, enquanto o grande oceano da verdade permanecia totalmente por descobrir diante de mim."',
    },
    footer: {
      copyright: 'Ciencia, codigo e curiosidade',
      research: 'Research',
    },
  },
  en: {
    aria: {
      home: 'Go to start',
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Select language',
      neuralFlow: 'Neural network flow',
      heroVisual: 'Technical computer vision visualization',
      whaleImage: 'Humpback whale in aerial imagery for scientific monitoring',
      models: 'Models and frameworks',
      readPaper: 'Read paper',
      citePaper: 'Cite paper',
    },
    nav: [
      ['About', 'about'],
      ['Projects', 'projects'],
      ['Research', 'research'],
      ['Publications', 'publications'],
      ['Skills', 'skills'],
      ['Contact', 'contact'],
    ],
    cvButton: 'CV / Resume',
    hero: {
      status: 'Open for Collaboration',
      name: 'Reinan Lopes Argolo',
      kicker: 'Computer Scientist in Training | Machine Learning & Computer Vision Researcher',
      description:
        'I build solutions that connect science, artificial intelligence, and real-world impact, focused on computer vision applied to research and conservation.',
      primaryAction: 'View projects',
      secondaryAction: 'View research',
    },
    about: {
      eyebrow: 'About',
      title: 'Applied research with engineering rigor.',
      body:
        'I am a Computer Science student interested in building intelligent systems capable of interpreting complex visual data. My work combines machine learning, computer vision, and automation to turn pixels into scientific evidence.',
      metrics: [
        ['8+', 'technical areas'],
        ['6', 'tracking frameworks'],
        ['100%', 'real impact focus'],
      ],
    },
    interests: {
      eyebrow: 'Focus',
      title: 'Areas of interest',
      items: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Object Detection',
        'Multi-Object Tracking',
        'Scientific Computing',
        'Embedded Systems',
        'Research Methods',
      ],
    },
    projects: {
      eyebrow: 'Builds',
      title: 'Featured projects',
      items: [
        {
          title: 'Humpback Whale Project',
          label: 'Research',
          description:
            'Automatic detection and analysis of mother-calf-escort relationships in aerial imagery using computer vision models.',
          tags: ['YOLO', 'RT-DETR', 'UAV Imagery'],
          featured: true,
        },
        {
          title: 'WhaleTracker',
          label: 'Pipeline',
          description:
            'Raw video processing to generate trajectories, identity persistence, and marine conservation metrics.',
          tags: ['Python', 'MOT', 'OpenCV'],
        },
        {
          title: 'Cocoa Fermentation',
          label: 'IoT',
          description:
            'Embedded system for thermal and chemical monitoring applied to precision agriculture in southern Bahia.',
          tags: ['Embedded', 'Sensors', 'Linux'],
        },
        {
          title: 'Movie Search Engine',
          label: 'Web',
          description:
            'React application for content discovery, REST API integration, and responsive search experience.',
          tags: ['React', 'REST API', 'UX'],
        },
        {
          title: 'C Build Tool',
          label: 'Tooling',
          description:
            'Shell automation for compiling, testing, and linking C projects with reproducible Linux workflows.',
          tags: ['Shell', 'GCC', 'Automation'],
        },
      ],
    },
    research: {
      eyebrow: 'Research',
      title: 'Scientific Research',
      modelsTitle: 'Models & Frameworks',
      status: 'status: active',
      items: [
        'Whale detection in aerial images',
        'Multi-Object Tracking in marine environments',
        'Identity persistence across occlusions',
        'AI-driven conservation metrics',
      ],
    },
    publications: {
      eyebrow: 'Papers',
      title: 'Scientific Publications',
      read: 'Read Paper',
      cite: 'Cite',
      items: [
        {
          title: 'Automatic Detection of Humpback Whales in UAV Images using Deep Learning',
          authors: 'Reinan Lopes Argolo, et al.',
          venue: 'International Journal of Marine Science & Technology',
          year: '2024',
          description:
            'This work proposes a convolutional neural network approach for automated humpback whale detection in drone imagery, reducing processing time for population surveys.',
        },
        {
          title: 'Multi-Object Tracking for Marine Conservation: Challenges and Opportunities',
          authors: 'Reinan Lopes Argolo',
          venue: 'Latin American Conference on Computer Vision',
          year: '2023',
          description:
            'An in-depth analysis of the technical challenges involved in multi-object tracking in dynamic marine environments, exploring MOT algorithms for environmental monitoring.',
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technical Skills',
      groups: [
        ['Languages', ['Python', 'C', 'C++', 'Java', 'JavaScript']],
        ['AI Stack', ['PyTorch', 'OpenCV', 'Ultralytics', 'NumPy', 'Pandas']],
        ['Engineering', ['React', 'Docker', 'Linux', 'Git', 'LaTeX']],
      ],
    },
    timeline: {
      eyebrow: 'Trajectory',
      title: 'Timeline',
      items: [
        ['START', 'CS Fundamentals', 'Algorithms, data structures, operating systems, and mathematical foundations.'],
        ['EXPLORATION', 'Artificial Intelligence', 'First projects with ML, neural networks, and data interfaces.'],
        ['CURRENT', 'Conservation Tech', 'Computer vision for whale tracking and environmental metrics.'],
      ],
    },
    quote: {
      main: '"Was wir wissen ist ein Tropfen; was wir nicht wissen, ein Ozean."',
      translation:
        '"I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, amusing myself by finding now and then a smoother pebble or a prettier shell than ordinary, while the great ocean of truth lay all undiscovered before me."',
    },
    footer: {
      copyright: 'Science, code, and curiosity',
      research: 'Research',
    },
  },
  es: {
    aria: {
      home: 'Ir al inicio',
      mainNavigation: 'Navegacion principal',
      mobileNavigation: 'Navegacion movil',
      openMenu: 'Abrir menu',
      closeMenu: 'Cerrar menu',
      language: 'Seleccionar idioma',
      neuralFlow: 'Flujo de red neuronal',
      heroVisual: 'Visualizacion tecnica de vision computacional',
      whaleImage: 'Ballena jorobada en imagen aerea para monitoreo cientifico',
      models: 'Modelos y frameworks',
      readPaper: 'Leer articulo',
      citePaper: 'Citar articulo',
    },
    nav: [
      ['Sobre mi', 'about'],
      ['Proyectos', 'projects'],
      ['Investigacion', 'research'],
      ['Publicaciones', 'publications'],
      ['Skills', 'skills'],
      ['Contacto', 'contact'],
    ],
    cvButton: 'CV / Resume',
    hero: {
      status: 'Abierto a colaboraciones',
      name: 'Reinan Lopes Argolo',
      kicker: 'Cientifico de Computacion en formacion | Investigador en Machine Learning y Vision Computacional',
      description:
        'Desarrollo soluciones que conectan ciencia, inteligencia artificial e impacto real, con foco en vision computacional aplicada a la investigacion y conservacion.',
      primaryAction: 'Ver proyectos',
      secondaryAction: 'Ver investigacion',
    },
    about: {
      eyebrow: 'Sobre mi',
      title: 'Investigacion aplicada con rigor de ingenieria.',
      body:
        'Soy estudiante de Ciencia de la Computacion interesado en construir sistemas inteligentes capaces de interpretar datos visuales complejos. Mi trabajo combina aprendizaje automatico, vision computacional y automatizacion para transformar pixeles en evidencia cientifica.',
      metrics: [
        ['8+', 'areas tecnicas'],
        ['6', 'frameworks de tracking'],
        ['100%', 'foco en impacto real'],
      ],
    },
    interests: {
      eyebrow: 'Foco',
      title: 'Areas de interes',
      items: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Object Detection',
        'Multi-Object Tracking',
        'Scientific Computing',
        'Embedded Systems',
        'Research Methods',
      ],
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Proyectos destacados',
      items: [
        {
          title: 'Proyecto Ballenas Jorobadas',
          label: 'Research',
          description:
            'Deteccion y analisis automatico de relaciones madre-cria-escolta en imagenes aereas con modelos de vision computacional.',
          tags: ['YOLO', 'RT-DETR', 'UAV Imagery'],
          featured: true,
        },
        {
          title: 'WhaleTracker',
          label: 'Pipeline',
          description:
            'Procesamiento de videos crudos para generar trayectorias, persistencia de identidad y metricas de conservacion marina.',
          tags: ['Python', 'MOT', 'OpenCV'],
        },
        {
          title: 'Fermentacion del Cacao',
          label: 'IoT',
          description:
            'Sistema embebido para monitoreo termico y quimico aplicado a agricultura de precision en el sur de Bahia.',
          tags: ['Embedded', 'Sensors', 'Linux'],
        },
        {
          title: 'Buscador de Peliculas',
          label: 'Web',
          description:
            'Aplicacion React para descubrimiento de contenido, integracion con APIs REST y experiencia de busqueda responsiva.',
          tags: ['React', 'REST API', 'UX'],
        },
        {
          title: 'Herramienta de Compilacion en C',
          label: 'Tooling',
          description:
            'Automatizacion en shell para compilar, probar y enlazar proyectos C con flujos reproducibles en Linux.',
          tags: ['Shell', 'GCC', 'Automation'],
        },
      ],
    },
    research: {
      eyebrow: 'Investigacion',
      title: 'Investigacion Cientifica',
      modelsTitle: 'Modelos & Frameworks',
      status: 'status: activo',
      items: [
        'Deteccion de ballenas en imagenes aereas',
        'Multi-Object Tracking en ambientes marinos',
        'Persistencia de identidad durante oclusiones',
        'Metricas de conservacion impulsadas por IA',
      ],
    },
    publications: {
      eyebrow: 'Articulos',
      title: 'Publicaciones Cientificas',
      read: 'Leer articulo',
      cite: 'Citar',
      items: [
        {
          title: 'Automatic Detection of Humpback Whales in UAV Images using Deep Learning',
          authors: 'Reinan Lopes Argolo, et al.',
          venue: 'International Journal of Marine Science & Technology',
          year: '2024',
          description:
            'Este trabajo propone un enfoque basado en redes neuronales convolucionales para la deteccion automatizada de ballenas jorobadas en imagenes capturadas por drones, optimizando el tiempo de procesamiento en censos poblacionales.',
        },
        {
          title: 'Multi-Object Tracking for Marine Conservation: Challenges and Opportunities',
          authors: 'Reinan Lopes Argolo',
          venue: 'Latin American Conference on Computer Vision',
          year: '2023',
          description:
            'Un analisis profundo de los desafios tecnicos del rastreo de multiples objetos en ambientes marinos dinamicos, explorando algoritmos de MOT para monitoreo ambiental.',
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technical Skills',
      groups: [
        ['Languages', ['Python', 'C', 'C++', 'Java', 'JavaScript']],
        ['AI Stack', ['PyTorch', 'OpenCV', 'Ultralytics', 'NumPy', 'Pandas']],
        ['Engineering', ['React', 'Docker', 'Linux', 'Git', 'LaTeX']],
      ],
    },
    timeline: {
      eyebrow: 'Trayectoria',
      title: 'Timeline',
      items: [
        ['START', 'CS Fundamentals', 'Algoritmos, estructuras de datos, sistemas operativos y fundamentos matematicos.'],
        ['EXPLORATION', 'Artificial Intelligence', 'Primeros proyectos con ML, redes neuronales e interfaces de datos.'],
        ['CURRENT', 'Conservation Tech', 'Vision computacional para rastreo de ballenas y metricas ambientales.'],
      ],
    },
    quote: {
      main: '"Was wir wissen ist ein Tropfen; was wir nicht wissen, ein Ozean."',
      translation:
        '"No se que puedo parecerle al mundo, pero para mi mismo parezco haber sido solo como un nino jugando en la orilla del mar, divirtiendome al encontrar de vez en cuando una piedra mas lisa o una concha mas bonita de lo normal, mientras el gran oceano de la verdad permanecia totalmente por descubrir delante de mi."',
    },
    footer: {
      copyright: 'Ciencia, codigo y curiosidad',
      research: 'Research',
    },
  },
};
