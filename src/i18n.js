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
      status: 'Bolsista CNPq ITI-A | Pesquisa ativa',
      name: 'Reinan Lopes Argolo',
      kicker: 'Graduando em Ciencia da Computacao na UESC | Pesquisador em IA, Visao Computacional e Sistemas Embarcados',
      description:
        'Atuo no PPGMC-UESC com processamento de imagens, redes neurais e visao computacional aplicada a cetaceos, conectando pesquisa cientifica, codigo e conservacao marinha.',
      primaryAction: 'Ver projetos',
      secondaryAction: 'Ver pesquisa',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Pesquisa aplicada entre ciencia, codigo e conservacao.',
      body:
        'Sou graduando em Ciencia da Computacao pela Universidade Estadual de Santa Cruz (UESC) e bolsista de Iniciacao Tecnologica e Industrial do CNPq. Tenho experiencia com C, Python, Java, JavaScript, React, Linux e sistemas embarcados. Atualmente integro um projeto de pesquisa com o Programa de Pos-Graduacao em Modelagem Computacional da UESC, usando redes neurais e processamento de imagens para analise automatizada de baleias-jubarte em videos aereos.',
      metrics: [
        ['2024', 'inicio da graduacao na UESC'],
        ['2025+', 'pesquisa no PPGMC-UESC'],
        ['2', 'trabalhos completos em anais'],
      ],
    },
    interests: {
      eyebrow: 'Foco',
      title: 'Areas de interesse',
      items: [
        'Inteligencia Artificial',
        'Deep Learning',
        'Visao Computacional',
        'Processamento de Imagens',
        'Object Detection',
        'Multi-Object Tracking',
        'Modelagem de Ambientes Maritimos',
        'Sistemas Embarcados',
      ],
    },
    projects: {
      eyebrow: 'Projetos',
      title: 'Projetos em destaque',
      items: [
        {
          title: 'Modelo Computacional para Dinamicas Sociais em Cetaceos',
          label: 'Pesquisa',
          description:
            'Projeto em andamento na UESC/PPGMC para inferir dinamicas sociais de baleias-jubarte a partir de dados videograficos aereos, combinando deteccao, rastreamento e analise de distancias entre individuos.',
          tags: ['YOLOv8', 'DeepSORT', 'UAV'],
          featured: true,
        },
        {
          title: 'Pipeline de Rastreamento de Cetaceos em UAV',
          label: 'ICPRS 2025',
          description:
            'Pipeline de deep learning para deteccao, rastreamento multiobjeto e analise de interacoes de cetaceos em imagens aereas, publicado no IEEE ICPRS 2025.',
          tags: ['Deep Learning', 'MOT', 'IEEE'],
        },
        {
          title: 'Deteccao de Baleias Jubarte em Imagens de Drone',
          label: 'SOLAMAC',
          description:
            'Trabalho em colaboracao com o grupo de pesquisa sobre uso de inteligencia artificial para detectar baleias-jubarte em imagens de drone.',
          tags: ['Computer Vision', 'Drone', 'Conservacao'],
        },
        {
          title: 'Hackathon de Areas Queimadas',
          label: 'WorCAP 25',
          description:
            'Apresentacao de trabalho sobre deteccao de areas queimadas a partir de imagens de satelite, conectando sensoriamento remoto e aprendizado de maquina.',
          tags: ['Satellites', 'ML', 'Remote Sensing'],
        },
        {
          title: 'Residencia EmbarcaTech',
          label: 'Sistemas Embarcados',
          description:
            'Formacao de 160 horas em sistemas embarcados pelo CEPEDI, com foco em desenvolvimento tecnologico, automacao e computacao aplicada.',
          tags: ['Embedded', 'CEPEDI', 'Linux'],
        },
      ],
    },
    research: {
      eyebrow: 'Pesquisa',
      title: 'Pesquisa Cientifica',
      modelsTitle: 'Modelos & Frameworks',
      status: 'status: ativo',
      items: [
        'Deteccao de baleias-jubarte em imagens aereas',
        'Rastreamento multiobjeto em ambientes marinhos',
        'Inferencia de dinamicas sociais em cetaceos',
        'Transformacao de videos de VANTs em series temporais de posicoes e distancias',
      ],
    },
    publications: {
      eyebrow: 'Artigos',
      title: 'Publicacoes Cientificas',
      read: 'Ler artigo',
      cite: 'Citar',
      items: [
        {
          title: 'Modelo computacional para inferencia de dinamicas sociais em cetaceos a partir de dados videograficos aereos',
          authors: 'Reinan Lopes Argolo, Lucas Santiago Carmo dos Santos, Susana Marrero Iglesias, Paulo Eduardo Ambrosio, Bianca Machado Righi',
          venue: 'XXVIII Encontro Nacional de Modelagem Computacional e XVI Encontro de Ciencia e Tecnologia de Materiais',
          year: '2026',
          url: 'https://www.even3.com.br/anais/enmc-2025/1268156-modelo-computacional-para-inferencia-de-dinamicas-sociais-em-cetaceos-a-partir-de-dados-videograficos-aereos',
          description:
            'Trabalho sobre a extracao automatica de dinamicas espaco-temporais de baleias-jubarte a partir de filmagens aereas, articulando YOLOv8 para deteccao e DeepSORT para reconstrucao de trajetorias. DOI: 10.5281/zenodo.18938636.',
        },
        {
          title: 'An Integrated Deep Learning Pipeline for Multi-Object Tracking and Interaction Analysis of Cetaceans in UAV Imagery',
          authors: 'Reinan Lopes Argolo, Paulo Eduardo Ambrosio, Bianca Machado Righi, Susana Marrero Iglesias',
          venue: '2025 15th IEEE International Conference on Pattern Recognition Systems (ICPRS)',
          year: '2025',
          url: 'https://doi.org/10.1109/ICPRS66293.2025.11302860',
          description:
            'Artigo publicado no IEEE ICPRS 2025 propondo um pipeline de visao computacional para deteccao, rastreamento multiobjeto e analise de interacoes de cetaceos em imagens de VANTs. DOI: 10.1109/ICPRS66293.2025.11302860.',
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technical Skills',
      groups: [
        ['Languages', ['Python', 'C', 'C++', 'Java', 'JavaScript']],
        ['AI Stack', ['PyTorch', 'OpenCV', 'Ultralytics', 'NumPy', 'Pandas']],
        ['Engineering', ['React', 'Linux', 'Git', 'LaTeX', 'Sistemas Embarcados']],
      ],
    },
    timeline: {
      eyebrow: 'Trajetoria',
      title: 'Timeline',
      items: [
        ['2021-2023', 'Ensino Medio e lideranca estudantil', 'Formacao no Colegio Estadual Libia Tinoco Melo, com experiencias em lideranca estudantil e monitoria.'],
        ['2024', 'Ciencia da Computacao na UESC', 'Inicio da graduacao em Ciencia da Computacao e desenvolvimento de base em programacao, matematica e engenharia de software.'],
        ['2025+', 'Pesquisa em conservacao computacional', 'Atuacao como bolsista CNPq ITI-A em projeto do PPGMC-UESC sobre redes neurais, visao computacional e dinamicas sociais de cetaceos.'],
      ],
    },
    quote: {
      main: '"Was wir wissen ist ein Tropfen; was wir nicht wissen, ein Ozean."',
      translation:
        '"O que sabemos e uma gota; o que ignoramos e um oceano."',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar sobre pesquisa, codigo ou colaboracao.',
      description:
        'Preencha a mensagem e seu cliente de email sera aberto com tudo pronto para envio. Em um site estatico no GitHub Pages, essa e a forma mais direta sem adicionar backend ou servico externo.',
      defaultSubject: 'Contato pelo portfolio',
      fields: {
        name: 'Nome',
        email: 'Email',
        subject: 'Assunto',
        message: 'Mensagem',
      },
      emailBody: {
        name: 'Nome',
        email: 'Email',
      },
      submit: 'Enviar mensagem',
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
      status: 'CNPq ITI-A Fellow | Active research',
      name: 'Reinan Lopes Argolo',
      kicker: 'Computer Science Undergraduate at UESC | AI, Computer Vision and Embedded Systems Researcher',
      description:
        'I work with PPGMC-UESC on image processing, neural networks, and computer vision applied to cetaceans, connecting scientific research, code, and marine conservation.',
      primaryAction: 'View projects',
      secondaryAction: 'View research',
    },
    about: {
      eyebrow: 'About',
      title: 'Applied research across science, code, and conservation.',
      body:
        'I am a Computer Science undergraduate at the State University of Santa Cruz (UESC) and a CNPq Technological and Industrial Initiation fellow. I have experience with C, Python, Java, JavaScript, React, Linux, and embedded systems. I currently take part in a research project with UESC Graduate Program in Computational Modeling, using neural networks and image processing for automated analysis of humpback whales in aerial videos.',
      metrics: [
        ['2024', 'started Computer Science at UESC'],
        ['2025+', 'research at PPGMC-UESC'],
        ['2', 'full papers in proceedings'],
      ],
    },
    interests: {
      eyebrow: 'Focus',
      title: 'Areas of interest',
      items: [
        'Artificial Intelligence',
        'Deep Learning',
        'Computer Vision',
        'Image Processing',
        'Object Detection',
        'Multi-Object Tracking',
        'Maritime Environment Modeling',
        'Embedded Systems',
      ],
    },
    projects: {
      eyebrow: 'Builds',
      title: 'Featured projects',
      items: [
        {
          title: 'Computational Model for Social Dynamics in Cetaceans',
          label: 'Research',
          description:
            'Ongoing UESC/PPGMC project for inferring humpback whale social dynamics from aerial video data by combining detection, tracking, and distance analysis between individuals.',
          tags: ['YOLOv8', 'DeepSORT', 'UAV'],
          featured: true,
        },
        {
          title: 'Cetacean Tracking Pipeline in UAV Imagery',
          label: 'ICPRS 2025',
          description:
            'Deep learning pipeline for detection, multi-object tracking, and interaction analysis of cetaceans in aerial imagery, published at IEEE ICPRS 2025.',
          tags: ['Deep Learning', 'MOT', 'IEEE'],
        },
        {
          title: 'Humpback Whale Detection in Drone Images',
          label: 'SOLAMAC',
          description:
            'Collaborative research on artificial intelligence for detecting humpback whales in drone images.',
          tags: ['Computer Vision', 'Drone', 'Conservation'],
        },
        {
          title: 'Burned Area Detection Hackathon',
          label: 'WorCAP 25',
          description:
            'Work presentation on detecting burned areas from satellite imagery, connecting remote sensing and machine learning.',
          tags: ['Satellites', 'ML', 'Remote Sensing'],
        },
        {
          title: 'EmbarcaTech Residency',
          label: 'Embedded Systems',
          description:
            'A 160-hour training program in embedded systems through CEPEDI, focused on technological development, automation, and applied computing.',
          tags: ['Embedded', 'CEPEDI', 'Linux'],
        },
      ],
    },
    research: {
      eyebrow: 'Research',
      title: 'Scientific Research',
      modelsTitle: 'Models & Frameworks',
      status: 'status: active',
      items: [
        'Humpback whale detection in aerial images',
        'Multi-object tracking in marine environments',
        'Inference of cetacean social dynamics',
        'Transformation of UAV videos into time series of positions and distances',
      ],
    },
    publications: {
      eyebrow: 'Papers',
      title: 'Scientific Publications',
      read: 'Read Paper',
      cite: 'Cite',
      items: [
        {
          title: 'Modelo computacional para inferencia de dinamicas sociais em cetaceos a partir de dados videograficos aereos',
          authors: 'Reinan Lopes Argolo, Lucas Santiago Carmo dos Santos, Susana Marrero Iglesias, Paulo Eduardo Ambrosio, Bianca Machado Righi',
          venue: 'XXVIII National Meeting on Computational Modeling and XVI Meeting on Materials Science and Technology',
          year: '2026',
          url: 'https://www.even3.com.br/anais/enmc-2025/1268156-modelo-computacional-para-inferencia-de-dinamicas-sociais-em-cetaceos-a-partir-de-dados-videograficos-aereos',
          description:
            'A paper on automated extraction of spatio-temporal dynamics of humpback whales from aerial footage, combining YOLOv8 for detection and DeepSORT for trajectory reconstruction. DOI: 10.5281/zenodo.18938636.',
        },
        {
          title: 'An Integrated Deep Learning Pipeline for Multi-Object Tracking and Interaction Analysis of Cetaceans in UAV Imagery',
          authors: 'Reinan Lopes Argolo, Paulo Eduardo Ambrosio, Bianca Machado Righi, Susana Marrero Iglesias',
          venue: '2025 15th IEEE International Conference on Pattern Recognition Systems (ICPRS)',
          year: '2025',
          url: 'https://doi.org/10.1109/ICPRS66293.2025.11302860',
          description:
            'IEEE ICPRS 2025 paper proposing a computer vision pipeline for detection, multi-object tracking, and interaction analysis of cetaceans in UAV imagery. DOI: 10.1109/ICPRS66293.2025.11302860.',
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technical Skills',
      groups: [
        ['Languages', ['Python', 'C', 'C++', 'Java', 'JavaScript']],
        ['AI Stack', ['PyTorch', 'OpenCV', 'Ultralytics', 'NumPy', 'Pandas']],
        ['Engineering', ['React', 'Linux', 'Git', 'LaTeX', 'Embedded Systems']],
      ],
    },
    timeline: {
      eyebrow: 'Trajectory',
      title: 'Timeline',
      items: [
        ['2021-2023', 'High school and student leadership', 'Education at Colegio Estadual Libia Tinoco Melo, with experience in student leadership and tutoring.'],
        ['2024', 'Computer Science at UESC', 'Started the Computer Science degree and built foundations in programming, mathematics, and software engineering.'],
        ['2025+', 'Research in computational conservation', 'CNPq ITI-A fellow in a PPGMC-UESC project on neural networks, computer vision, and cetacean social dynamics.'],
      ],
    },
    quote: {
      main: '"Was wir wissen ist ein Tropfen; was wir nicht wissen, ein Ozean."',
      translation:
        '"What we know is a drop; what we do not know is an ocean."',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us talk about research, code, or collaboration.',
      description:
        'Fill in the message and your email client will open with everything ready to send. On a static GitHub Pages site, this is the most direct path without adding a backend or external service.',
      defaultSubject: 'Portfolio contact',
      fields: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
      },
      emailBody: {
        name: 'Name',
        email: 'Email',
      },
      submit: 'Send message',
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
      status: 'Becario CNPq ITI-A | Investigacion activa',
      name: 'Reinan Lopes Argolo',
      kicker: 'Estudiante de Ciencias de la Computacion en UESC | Investigador en IA, Vision Computacional y Sistemas Embebidos',
      description:
        'Trabajo con PPGMC-UESC en procesamiento de imagenes, redes neuronales y vision computacional aplicada a cetaceos, conectando investigacion cientifica, codigo y conservacion marina.',
      primaryAction: 'Ver proyectos',
      secondaryAction: 'Ver investigacion',
    },
    about: {
      eyebrow: 'Sobre mi',
      title: 'Investigacion aplicada entre ciencia, codigo y conservacion.',
      body:
        'Soy estudiante de Ciencias de la Computacion en la Universidade Estadual de Santa Cruz (UESC) y becario de Iniciacion Tecnologica e Industrial del CNPq. Tengo experiencia con C, Python, Java, JavaScript, React, Linux y sistemas embebidos. Actualmente participo en un proyecto de investigacion con el Programa de Posgrado en Modelado Computacional de la UESC, usando redes neuronales y procesamiento de imagenes para el analisis automatizado de ballenas jorobadas en videos aereos.',
      metrics: [
        ['2024', 'inicio de la carrera en UESC'],
        ['2025+', 'investigacion en PPGMC-UESC'],
        ['2', 'trabajos completos en anales'],
      ],
    },
    interests: {
      eyebrow: 'Foco',
      title: 'Areas de interes',
      items: [
        'Inteligencia Artificial',
        'Deep Learning',
        'Vision Computacional',
        'Procesamiento de Imagenes',
        'Object Detection',
        'Multi-Object Tracking',
        'Modelado de Ambientes Maritimos',
        'Sistemas Embebidos',
      ],
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Proyectos destacados',
      items: [
        {
          title: 'Modelo Computacional para Dinamicas Sociales en Cetaceos',
          label: 'Investigacion',
          description:
            'Proyecto en curso en UESC/PPGMC para inferir dinamicas sociales de ballenas jorobadas a partir de datos videograficos aereos, combinando deteccion, rastreo y analisis de distancias entre individuos.',
          tags: ['YOLOv8', 'DeepSORT', 'UAV'],
          featured: true,
        },
        {
          title: 'Pipeline de Rastreo de Cetaceos en UAV',
          label: 'ICPRS 2025',
          description:
            'Pipeline de deep learning para deteccion, rastreo multiobjeto y analisis de interacciones de cetaceos en imagenes aereas, publicado en IEEE ICPRS 2025.',
          tags: ['Deep Learning', 'MOT', 'IEEE'],
        },
        {
          title: 'Deteccion de Ballenas Jorobadas en Imagenes de Drone',
          label: 'SOLAMAC',
          description:
            'Investigacion colaborativa sobre el uso de inteligencia artificial para detectar ballenas jorobadas en imagenes de drone.',
          tags: ['Computer Vision', 'Drone', 'Conservacion'],
        },
        {
          title: 'Hackathon de Areas Quemadas',
          label: 'WorCAP 25',
          description:
            'Presentacion de trabajo sobre deteccion de areas quemadas a partir de imagenes satelitales, conectando sensoriamento remoto y aprendizaje automatico.',
          tags: ['Satellites', 'ML', 'Remote Sensing'],
        },
        {
          title: 'Residencia EmbarcaTech',
          label: 'Sistemas Embebidos',
          description:
            'Formacion de 160 horas en sistemas embebidos por CEPEDI, con foco en desarrollo tecnologico, automatizacion y computacion aplicada.',
          tags: ['Embedded', 'CEPEDI', 'Linux'],
        },
      ],
    },
    research: {
      eyebrow: 'Investigacion',
      title: 'Investigacion Cientifica',
      modelsTitle: 'Modelos & Frameworks',
      status: 'status: activo',
      items: [
        'Deteccion de ballenas jorobadas en imagenes aereas',
        'Multi-object tracking en ambientes marinos',
        'Inferencia de dinamicas sociales en cetaceos',
        'Transformacion de videos de VANTs en series temporales de posiciones y distancias',
      ],
    },
    publications: {
      eyebrow: 'Articulos',
      title: 'Publicaciones Cientificas',
      read: 'Leer articulo',
      cite: 'Citar',
      items: [
        {
          title: 'Modelo computacional para inferencia de dinamicas sociais em cetaceos a partir de dados videograficos aereos',
          authors: 'Reinan Lopes Argolo, Lucas Santiago Carmo dos Santos, Susana Marrero Iglesias, Paulo Eduardo Ambrosio, Bianca Machado Righi',
          venue: 'XXVIII Encuentro Nacional de Modelado Computacional y XVI Encuentro de Ciencia y Tecnologia de Materiales',
          year: '2026',
          url: 'https://www.even3.com.br/anais/enmc-2025/1268156-modelo-computacional-para-inferencia-de-dinamicas-sociais-em-cetaceos-a-partir-de-dados-videograficos-aereos',
          description:
            'Trabajo sobre la extraccion automatizada de dinamicas espacio-temporales de ballenas jorobadas a partir de filmaciones aereas, combinando YOLOv8 para deteccion y DeepSORT para reconstruccion de trayectorias. DOI: 10.5281/zenodo.18938636.',
        },
        {
          title: 'An Integrated Deep Learning Pipeline for Multi-Object Tracking and Interaction Analysis of Cetaceans in UAV Imagery',
          authors: 'Reinan Lopes Argolo, Paulo Eduardo Ambrosio, Bianca Machado Righi, Susana Marrero Iglesias',
          venue: '2025 15th IEEE International Conference on Pattern Recognition Systems (ICPRS)',
          year: '2025',
          url: 'https://doi.org/10.1109/ICPRS66293.2025.11302860',
          description:
            'Articulo publicado en IEEE ICPRS 2025 que propone un pipeline de vision computacional para deteccion, rastreo multiobjeto y analisis de interacciones de cetaceos en imagenes de VANTs. DOI: 10.1109/ICPRS66293.2025.11302860.',
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technical Skills',
      groups: [
        ['Languages', ['Python', 'C', 'C++', 'Java', 'JavaScript']],
        ['AI Stack', ['PyTorch', 'OpenCV', 'Ultralytics', 'NumPy', 'Pandas']],
        ['Engineering', ['React', 'Linux', 'Git', 'LaTeX', 'Sistemas Embebidos']],
      ],
    },
    timeline: {
      eyebrow: 'Trayectoria',
      title: 'Timeline',
      items: [
        ['2021-2023', 'Escuela secundaria y liderazgo estudiantil', 'Formacion en el Colegio Estadual Libia Tinoco Melo, con experiencia en liderazgo estudiantil y monitoria.'],
        ['2024', 'Ciencias de la Computacion en UESC', 'Inicio de la carrera y construccion de bases en programacion, matematica e ingenieria de software.'],
        ['2025+', 'Investigacion en conservacion computacional', 'Becario CNPq ITI-A en un proyecto del PPGMC-UESC sobre redes neuronales, vision computacional y dinamicas sociales de cetaceos.'],
      ],
    },
    quote: {
      main: '"Was wir wissen ist ein Tropfen; was wir nicht wissen, ein Ozean."',
      translation:
        '"Lo que sabemos es una gota; lo que ignoramos es un oceano."',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos sobre investigacion, codigo o colaboracion.',
      description:
        'Completa el mensaje y tu cliente de email se abrira con todo listo para enviar. En un sitio estatico en GitHub Pages, esta es la forma mas directa sin agregar backend o servicio externo.',
      defaultSubject: 'Contacto desde el portfolio',
      fields: {
        name: 'Nombre',
        email: 'Email',
        subject: 'Asunto',
        message: 'Mensaje',
      },
      emailBody: {
        name: 'Nombre',
        email: 'Email',
      },
      submit: 'Enviar mensaje',
    },
    footer: {
      copyright: 'Ciencia, codigo y curiosidad',
      research: 'Research',
    },
  },
};
