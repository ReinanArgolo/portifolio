import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Download,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Microscope,
  Network,
  Radar,
  Quote as QuoteIcon,
  Search,
  Waves,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const whaleImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAJjkM6b6QwauLN11mlUjjHWHFpFSQ32f10Cd-MeVWRco906mcPOk5h-UanrNgrGdNGQkGnNJxcerZng_c0vw7zGrB4j9i2QhDS2H0v9DbL9iA_a53cYjL3YLGjbSqkFYd1NrK0ARwrY0zMACo0Ot19Fg4KSqn6z_y6-Kg60bC26uwlhbv3DBMFQe1yw9Fa1vWCEO6k6LQ8jnrRw3d8x30i6OF909fPFknFKEGVtHxVa2IJECgnySGft3wY__OGTeeoAxtfC7WYGOY3';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  variants: fadeUp,
};

const navItems = [
  ['Sobre', 'about'],
  ['Projetos', 'projects'],
  ['Pesquisa', 'research'],
  ['Publicações', 'publications'],
  ['Skills', 'skills'],
  ['Contato', 'contact'],
];

const interests = [
  ['Machine Learning', BrainCircuit],
  ['Deep Learning', Network],
  ['Computer Vision', Radar],
  ['Object Detection', Search],
  ['Multi-Object Tracking', Waves],
  ['Scientific Computing', Database],
  ['Embedded Systems', Cpu],
  ['Research Methods', Microscope],
];

const projects = [
  {
    title: 'Projeto Baleias Jubarte',
    label: 'Research',
    description:
      'Detecção e análise automática de relações mãe-filhote-escorta em imagens aéreas com modelos de visão computacional.',
    tags: ['YOLO', 'RT-DETR', 'UAV Imagery'],
    featured: true,
  },
  {
    title: 'WhaleTracker',
    label: 'Pipeline',
    description:
      'Processamento de vídeos brutos para gerar trajetórias, persistência de identidade e métricas de conservação marinha.',
    tags: ['Python', 'MOT', 'OpenCV'],
  },
  {
    title: 'Fermentação do Cacau',
    label: 'IoT',
    description:
      'Sistema embarcado para monitoramento térmico e químico aplicado à agricultura de precisão no sul da Bahia.',
    tags: ['Embedded', 'Sensors', 'Linux'],
  },
  {
    title: 'Motor de Busca de Filmes',
    label: 'Web',
    description:
      'Aplicação React para descoberta de conteúdo, integração com APIs REST e experiência responsiva de busca.',
    tags: ['React', 'REST API', 'UX'],
  },
  {
    title: 'Ferramenta de Compilação em C',
    label: 'Tooling',
    description:
      'Automação em shell script para compilar, testar e linkar projetos C com fluxo reproduzível em Linux.',
    tags: ['Shell', 'GCC', 'Automation'],
  },
];

const models = ['YOLO v8/v10', 'RT-DETR', 'DeepSORT', 'ByteTrack', 'OC-SORT', 'StrongSORT'];

const publications = [
  {
    title: 'Automatic Detection of Humpback Whales in UAV Images using Deep Learning',
    authors: 'Reinan Lopes Argolo, et al.',
    venue: 'International Journal of Marine Science & Technology',
    year: '2024',
    description:
      'Este trabalho propõe uma abordagem baseada em Redes Neurais Convolucionais para a detecção automatizada de baleias-jubarte em imagens capturadas por drones, otimizando o tempo de processamento em levantamentos populacionais.',
  },
  {
    title: 'Multi-Object Tracking for Marine Conservation: Challenges and Opportunities',
    authors: 'Reinan Lopes Argolo',
    venue: 'Latin American Conference on Computer Vision',
    year: '2023',
    description:
      'Uma análise aprofundada dos desafios técnicos envolvidos no rastreamento de múltiplos objetos em ambientes marinhos dinâmicos, explorando o uso de algoritmos de MOT para monitoramento ambiental.',
  },
];

const skillGroups = [
  ['Languages', ['Python', 'C', 'C++', 'Java', 'JavaScript']],
  ['AI Stack', ['PyTorch', 'OpenCV', 'Ultralytics', 'NumPy', 'Pandas']],
  ['Engineering', ['React', 'Docker', 'Linux', 'Git', 'LaTeX']],
];

const timeline = [
  ['START', 'CS Fundamentals', 'Algoritmos, estruturas de dados, sistemas operacionais e bases matemáticas.'],
  ['EXPLORATION', 'Artificial Intelligence', 'Primeiros projetos com ML, redes neurais e interfaces para dados.'],
  ['CURRENT', 'Conservation Tech', 'Visão computacional para rastreamento de baleias e métricas ambientais.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <Header active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Interests />
        <Projects />
        <Research />
        <Publications />
        <Skills />
        <Timeline />
        <Quote />
      </main>
      <Footer year={year} />
    </>
  );
}

function Header({ active, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ir para o início">
        <span className="brand-mark">RA</span>
        <span>Reinan Argolo</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map(([label, id]) => (
          <a className={active === id ? 'active' : ''} href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-action" href="#contact">
        <Download size={17} />
        CV / Resume
      </a>

      <button
        className="icon-button mobile-menu-button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section section-shell" id="top">
      <motion.div className="hero-copy" {...revealProps}>
        <div className="status-chip">
          <span />
          Open for Collaboration
        </div>
        <h1>Reinan Lopes Argolo</h1>
        <p className="hero-kicker">
          Computer Scientist in Training | Machine Learning & Computer Vision Researcher
        </p>
        <p className="hero-description">
          Desenvolvo soluções que conectam ciência, inteligência artificial e impacto real,
          com foco em visão computacional aplicada à pesquisa e conservação.
        </p>
        <div className="button-row">
          <a className="primary-button" href="#projects">
            Ver projetos
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-button" href="#research">
            Ver pesquisa
          </a>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        aria-label="Visualização técnica de visão computacional"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      >
        <NeuralVisualizer />
        <div className="scan-panel">
          <div className="scan-header">
            <span>CV::TRACKING</span>
            <span>0.98 conf</span>
          </div>
          <div className="scan-frame">
            <img src={whaleImageUrl} alt="Baleia-jubarte em imagem aérea para monitoramento científico" />
            <span className="scan-box scan-box-a" />
            <span className="scan-box scan-box-b" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function NeuralVisualizer() {
  const nodes = [
    [8, 24],
    [8, 52],
    [8, 80],
    [34, 18],
    [34, 45],
    [34, 72],
    [60, 30],
    [60, 60],
    [86, 45],
  ];

  return (
    <div className="neural-visual">
      <svg viewBox="0 0 100 100" role="img" aria-label="Fluxo de rede neural">
        {nodes.slice(0, -1).map(([x1, y1], index) => {
          const [x2, y2] = nodes[(index + 3) % nodes.length];
          return <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {nodes.map(([cx, cy], index) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index === nodes.length - 1 ? 3.4 : 2.6} />
        ))}
      </svg>
    </div>
  );
}

function About() {
  return (
    <motion.section className="section-shell split-section" id="about" {...revealProps}>
      <SectionLabel eyebrow="About" title="Pesquisa aplicada com rigor de engenharia." />
      <div className="section-copy">
        <p>
          Sou estudante de Ciência da Computação interessado em construir sistemas inteligentes
          capazes de interpretar dados visuais complexos. Minha atuação combina aprendizado de
          máquina, visão computacional e automação para transformar pixels em evidência científica.
        </p>
        <div className="metric-row">
          <Metric value="8+" label="áreas técnicas" />
          <Metric value="6" label="frameworks de tracking" />
          <Metric value="100%" label="foco em impacto real" />
        </div>
      </div>
    </motion.section>
  );
}

function SectionLabel({ eyebrow, title }) {
  return (
    <div className="section-label">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Interests() {
  return (
    <motion.section className="band-section" aria-labelledby="interests-title" {...revealProps}>
      <div className="section-shell">
        <SectionLabel eyebrow="Focus" title="Áreas de interesse" />
        <div className="interest-grid" id="interests-title">
          {interests.map(([label, Icon], index) => (
            <motion.article
              className="glass-card interest-card"
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <Icon size={28} />
              <h3>{label}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Projects() {
  return (
    <motion.section className="section-shell" id="projects" {...revealProps}>
      <SectionLabel eyebrow="Builds" title="Projetos em destaque" />
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`glass-card project-card ${project.featured ? 'featured-project' : ''}`}
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="project-topline">
              <span>{project.label}</span>
              <ArrowUpRight size={18} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Research() {
  return (
    <motion.section className="band-section research-section" id="research" {...revealProps}>
      <div className="section-shell research-grid">
        <div>
          <SectionLabel eyebrow="Research" title="Scientific Research" />
          <ul className="research-list">
            <li>Whale detection in aerial images</li>
            <li>Multi-Object Tracking in marine environments</li>
            <li>Identity persistence across occlusions</li>
            <li>AI-driven conservation metrics</li>
          </ul>
        </div>
        <div className="model-table" aria-label="Modelos e frameworks">
          <div className="model-table-header">
            <span>Models & Frameworks</span>
            <span>status: active</span>
          </div>
          {models.map((model) => (
            <div className="model-row" key={model}>
              <Code2 size={16} />
              <span>{model}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Publications() {
  return (
    <motion.section className="section-shell publications-section" id="publications" {...revealProps}>
      <SectionLabel eyebrow="Papers" title="Scientific Publications" />
      <div className="publication-list">
        {publications.map((publication, index) => (
          <motion.article
            className="glass-card publication-card"
            key={publication.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="publication-main">
              <div className="publication-meta">
                <span>{publication.venue}</span>
                <span>{publication.year}</span>
              </div>
              <h3>{publication.title}</h3>
              <p className="publication-authors">
                <strong>{publication.authors.split(',')[0]}</strong>
                {publication.authors.includes(',') ? ', et al.' : ''}
              </p>
              <p>{publication.description}</p>
            </div>
            <div className="publication-actions">
              <a href="#" aria-label={`Ler artigo: ${publication.title}`}>
                <FileText size={17} />
                Read Paper
              </a>
              <button type="button" aria-label={`Citar artigo: ${publication.title}`}>
                <QuoteIcon size={17} />
                Cite
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Skills() {
  return (
    <motion.section className="section-shell" id="skills" {...revealProps}>
      <SectionLabel eyebrow="Stack" title="Technical Skills" />
      <div className="skills-layout">
        {skillGroups.map(([group, skills]) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <div className="tag-row">
              {skills.map((skill) => (
                <span className="tag secondary-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function Timeline() {
  return (
    <motion.section className="section-shell timeline-section" {...revealProps}>
      <SectionLabel eyebrow="Trajectory" title="Timeline" />
      <div className="timeline">
        {timeline.map(([stage, title, description], index) => (
          <article className={`timeline-item ${index % 2 === 1 ? 'timeline-item-right' : ''}`} key={stage}>
            <span>{stage}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

function Quote() {
  return (
    <motion.section className="quote-section section-shell" {...revealProps}>
      <blockquote>
        "Não sei o que posso parecer para o mundo, mas para mim mesmo pareço ter sido apenas como um menino brincando na beira-mar, divertindo-me em encontrar de vez em quando uma pedra mais lisa ou uma concha mais bonita do que o normal, enquanto o grande oceano da verdade permanecia totalmente por descobrir diante de mim."
      </blockquote>
    </motion.section>
  );
}

function Footer({ year }) {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <h2>Reinan Argolo</h2>
        <p>© {year} Reinan Lopes Argolo · Ciência, código e curiosidade</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a href="mailto:reinan@example.com">
          <Mail size={18} />
          Email
        </a>
        <a href="#research">
          <GraduationCap size={18} />
          Research
        </a>
      </div>
    </footer>
  );
}

export default App;
