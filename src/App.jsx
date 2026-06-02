import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  Microscope,
  Network,
  Radar,
  Quote as QuoteIcon,
  Search,
  Send,
  Waves,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { content, languageOptions } from './i18n';

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

const interestIcons = [
  BrainCircuit,
  Network,
  Radar,
  Search,
  Waves,
  Database,
  Cpu,
  Microscope,
];

const models = ['YOLO v8/v10', 'RT-DETR', 'DeepSORT', 'ByteTrack', 'OC-SORT', 'StrongSORT'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('about');
  const [language, setLanguage] = useState('ptBR');
  const glowRef = useRef(null);
  const t = content[language];

  useEffect(() => {
    const sections = t.nav
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
  }, [t.nav]);

  useEffect(() => {
    const languageMeta = languageOptions.find((option) => option.code === language);
    document.documentElement.lang = languageMeta?.htmlLang ?? 'pt-BR';
  }, [language]);

  useEffect(() => {
    let frameId = 0;

    const handlePointerMove = (event) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.setProperty('--cursor-x', `${event.clientX}px`);
        glowRef.current.style.setProperty('--cursor-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} />
      <Header
        active={active}
        language={language}
        menuOpen={menuOpen}
        setLanguage={setLanguage}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Interests t={t} />
        <Projects t={t} />
        <Research t={t} />
        <Publications t={t} />
        <Skills t={t} />
        <Timeline t={t} />
        <Quote t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} year={year} />
    </>
  );
}

function Header({ active, language, menuOpen, setLanguage, setMenuOpen, t }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={t.aria.home}>
        <span className="brand-mark">RA</span>
        <span>Reinan Argolo</span>
      </a>

      <nav className="desktop-nav" aria-label={t.aria.mainNavigation}>
        {t.nav.map(([label, id]) => (
          <a className={active === id ? 'active' : ''} href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-controls">
        <LanguageSwitcher language={language} setLanguage={setLanguage} t={t} />
        <a className="header-action" href="./reinan-lopes-argolo-cv.md" download>
          <Download size={17} />
          {t.cvButton}
        </a>
      </div>

      <button
        className="icon-button mobile-menu-button"
        aria-label={menuOpen ? t.aria.closeMenu : t.aria.openMenu}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen && (
        <nav className="mobile-nav" aria-label={t.aria.mobileNavigation}>
          {t.nav.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <div className="mobile-nav-actions">
            <LanguageSwitcher language={language} setLanguage={setLanguage} t={t} />
            <a className="header-action mobile-cv-action" href="./reinan-lopes-argolo-cv.md" download>
              <Download size={17} />
              {t.cvButton}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function LanguageSwitcher({ language, setLanguage, t }) {
  return (
    <div className="language-switcher" aria-label={t.aria.language} role="group">
      {languageOptions.map((option) => (
        <button
          className={language === option.code ? 'active' : ''}
          key={option.code}
          onClick={() => setLanguage(option.code)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Hero({ t }) {
  return (
    <section className="hero-section section-shell" id="top">
      <motion.div className="hero-copy" {...revealProps}>
        <div className="status-chip">
          <span />
          {t.hero.status}
        </div>
        <h1>{t.hero.name}</h1>
        <p className="hero-kicker">{t.hero.kicker}</p>
        <p className="hero-description">{t.hero.description}</p>
        <div className="button-row">
          <a className="primary-button" href="#projects">
            {t.hero.primaryAction}
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-button" href="#research">
            {t.hero.secondaryAction}
          </a>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        aria-label={t.aria.heroVisual}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      >
        <NeuralVisualizer label={t.aria.neuralFlow} />
        <div className="scan-panel">
          <div className="scan-header">
            <span>CV::TRACKING</span>
            <span>0.98 conf</span>
          </div>
          <div className="scan-frame">
            <img src={whaleImageUrl} alt={t.aria.whaleImage} />
            <span className="scan-box scan-box-a" />
            <span className="scan-box scan-box-b" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function NeuralVisualizer({ label }) {
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
      <svg viewBox="0 0 100 100" role="img" aria-label={label}>
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

function About({ t }) {
  return (
    <motion.section className="section-shell split-section" id="about" {...revealProps}>
      <SectionLabel eyebrow={t.about.eyebrow} title={t.about.title} />
      <div className="section-copy">
        <p>{t.about.body}</p>
        <div className="metric-row">
          {t.about.metrics.map(([value, label]) => (
            <Metric key={label} label={label} value={value} />
          ))}
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

function Interests({ t }) {
  return (
    <motion.section className="band-section" aria-labelledby="interests-title" {...revealProps}>
      <div className="section-shell">
        <SectionLabel eyebrow={t.interests.eyebrow} title={t.interests.title} />
        <div className="interest-grid" id="interests-title">
          {t.interests.items.map((label, index) => {
            const Icon = interestIcons[index];
            return (
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
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function Projects({ t }) {
  return (
    <motion.section className="section-shell" id="projects" {...revealProps}>
      <SectionLabel eyebrow={t.projects.eyebrow} title={t.projects.title} />
      <div className="project-grid">
        {t.projects.items.map((project, index) => (
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

function Research({ t }) {
  return (
    <motion.section className="band-section research-section" id="research" {...revealProps}>
      <div className="section-shell research-grid">
        <div>
          <SectionLabel eyebrow={t.research.eyebrow} title={t.research.title} />
          <ul className="research-list">
            {t.research.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="model-table" aria-label={t.aria.models}>
          <div className="model-table-header">
            <span>{t.research.modelsTitle}</span>
            <span>{t.research.status}</span>
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

function Publications({ t }) {
  return (
    <motion.section className="section-shell publications-section" id="publications" {...revealProps}>
      <SectionLabel eyebrow={t.publications.eyebrow} title={t.publications.title} />
      <div className="publication-list">
        {t.publications.items.map((publication, index) => (
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
              <a href={publication.url} target="_blank" rel="noreferrer" aria-label={`${t.aria.readPaper}: ${publication.title}`}>
                <FileText size={17} />
                {t.publications.read}
              </a>
              <button type="button" aria-label={`${t.aria.citePaper}: ${publication.title}`}>
                <QuoteIcon size={17} />
                {t.publications.cite}
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Skills({ t }) {
  return (
    <motion.section className="section-shell" id="skills" {...revealProps}>
      <SectionLabel eyebrow={t.skills.eyebrow} title={t.skills.title} />
      <div className="skills-layout">
        {t.skills.groups.map(([group, skills]) => (
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

function Timeline({ t }) {
  return (
    <motion.section className="section-shell timeline-section" {...revealProps}>
      <SectionLabel eyebrow={t.timeline.eyebrow} title={t.timeline.title} />
      <div className="timeline">
        {t.timeline.items.map(([stage, title, description], index) => (
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

function Quote({ t }) {
  return (
    <motion.section className="quote-section section-shell" {...revealProps}>
      <blockquote>{t.quote.main}</blockquote>
      <p>{t.quote.translation}</p>
    </motion.section>
  );
}

function Contact({ t }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || t.contact.defaultSubject);
    const body = encodeURIComponent(
      `${t.contact.emailBody.name}: ${form.name}\n${t.contact.emailBody.email}: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:rlargolo.cic@uesc.br?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section className="contact-section section-shell" id="contact" {...revealProps}>
      <SectionLabel eyebrow={t.contact.eyebrow} title={t.contact.title} />
      <div className="contact-layout">
        <div className="contact-copy">
          <p>{t.contact.description}</p>
          <a href="mailto:rlargolo.cic@uesc.br">rlargolo.cic@uesc.br</a>
        </div>
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <label>
            <span>{t.contact.fields.name}</span>
            <input onChange={updateField('name')} required type="text" value={form.name} />
          </label>
          <label>
            <span>{t.contact.fields.email}</span>
            <input onChange={updateField('email')} required type="email" value={form.email} />
          </label>
          <label>
            <span>{t.contact.fields.subject}</span>
            <input onChange={updateField('subject')} type="text" value={form.subject} />
          </label>
          <label>
            <span>{t.contact.fields.message}</span>
            <textarea onChange={updateField('message')} required rows="5" value={form.message} />
          </label>
          <button className="primary-button" type="submit">
            {t.contact.submit}
            <Send size={18} />
          </button>
        </form>
      </div>
    </motion.section>
  );
}

function Footer({ t, year }) {
  return (
    <footer className="site-footer">
      <div>
        <h2>Reinan Argolo</h2>
        <p>© {year} Reinan Lopes Argolo · {t.footer.copyright}</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/reinanargolo" target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/reinanargolo" target="_blank" rel="noreferrer">
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a href="mailto:rlargolo.cic@uesc.br">
          <Mail size={18} />
          Email
        </a>
        <a href="https://orcid.org/0009-0002-8336-0927" target="_blank" rel="noreferrer">
          <ExternalLink size={18} />
          ORCID
        </a>
      </div>
    </footer>
  );
}

export default App;
