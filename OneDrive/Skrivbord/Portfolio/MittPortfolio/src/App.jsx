import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MewStore from './MewStore';
import OverTime from './OverTime';
import MyWeb from './MyWeb';

const ME = {
  name: 'Isaac Lindberg',
  role: 'Software Developer',
  tagline: (
    <>
      I build <em>thoughtful</em> things for the web
    </>
  ),
  subtitle:
    'Crafting clean, performant web experiences with a love for detail and purposeful design.',
  location: 'Stockholm, Sweden',
  availability: 'Open to opportunities',
  email: 'isaac.lindberg@edu.newton.se',
  github: 'https://github.com/GoGitIsaac',
  linkedin: 'https://www.linkedin.com/in/isaac-lindberg-946b35398/',
};

const ABOUT = [
  <>
    My name is Isaac Lindberg, and I'm a software developer who enjoys turning complex problems into simple,
    beautiful interfaces. I care deeply about the small details that make a big
    difference.
  </>,
  <>
    Outside of programming, I enjoy experimenting with new technologies, refining personal projects, and continuously improving my{' '}
    <strong>development skills</strong>.
  </>,
];

const PROJECTS = [
  {
    icon: '✦',
    title: 'MewStore',
    desc: 'A Cat Store built with JavaScript, React and Node.js. It was a fun project to learn these technologies.',
    tags: ['JavaScript', 'React', 'Node.js'],
    url: '/mewstore',
    external: false,
  },
  {
    icon: '◈',
    title: 'OverTime',
    desc: 'A forum I built with others in school. It was built with C#, Blazor and Asp.NET Core.',
    tags: ['C#', 'Blazor', 'Asp.NET Core'],
    url: '/overtime',
    external: false,
  },
  {
    icon: '⬡',
    title: 'MyWeb',
    desc: 'A personal reading log to save the books and quotes that stay with you. Built with TypeScript and Angular.',
    tags: ['TypeScript', 'Angular'],
    url: '/myweb',
    external: false,
  },
];

const SKILLS = [
  {
    group: 'Frontend',
    items: ['React / Blazor / Angular', 'HTML & CSS', 'JavaScript / TypeScript', 'Responsive Design'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'REST APIs', 'SQL / PostgreSQL'],
  },
  {
    group: 'Tooling',
    items: ['Git & GitHub', 'VS Code', 'Vite', 'Docker'],
  },
  {
    group: 'Soft skills',
    items: ['Problem solving', 'Attention to detail', 'Collaboration', 'Clear communication'],
  },
];

/* ─────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────── */

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          {ME.name.split(' ')[0]}.
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-orb hero-bg-orb-1" />
      <div className="hero-bg-orb hero-bg-orb-2" />
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow fade-in">{ME.role}</p>
          <h1 className="hero-title fade-in fade-in-delay-1">{ME.tagline}</h1>
          <p className="hero-subtitle fade-in fade-in-delay-2">{ME.subtitle}</p>
          <div className="hero-cta fade-in fade-in-delay-3">
            <a href="#projects" className="btn-primary">See my work</a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: '6rem' }}>
        <div className="section-header">
          <p className="section-label">About me</p>
          <h2 className="section-title">The person behind the code</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            {ABOUT.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about-details">
            <div className="about-detail-item">
              <span className="about-detail-label">Location</span>
              <span className="about-detail-value">{ME.location}</span>
            </div>
            <div className="about-detail-item">
              <span className="about-detail-label">Availability</span>
              <span className="about-detail-value">{ME.availability}</span>
            </div>
            <div className="about-detail-item">
              <span className="about-detail-label">Email</span>
              <span className="about-detail-value">{ME.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: '6rem' }}>
        <div className="section-header">
          <p className="section-label">Work</p>
          <h2 className="section-title">Recent Projects</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) =>
            p.external ? (
              <a key={i} className="project-card" href={p.url} target="_blank" rel="noreferrer">
                <div className="project-icon">{p.icon}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <span className="project-link">View project →</span>
              </a>
            ) : (
              <Link key={i} className="project-card" to={p.url}>
                <div className="project-icon">{p.icon}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <span className="project-link">View project →</span>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: '6rem' }}>
        <div className="section-header">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & tools</h2>
        </div>
        <div className="skills-layout">
          {SKILLS.map((group) => (
            <div key={group.group} className="skill-group">
              <p className="skill-group-title">{group.group}</p>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-item">
                    <span className="skill-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="section-divider" />
      <div className="container" style={{ paddingTop: '6rem' }}>
        <div className="section-header">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's work together</h2>
        </div>
        <div className="contact-wrap">
          <p className="contact-intro">
            Whether you have a project in mind, want to collaborate, or just want to say
            hello, I'd love to hear from you.
          </p>
          <div className="contact-links">
            <a href={`mailto:${ME.email}`} className="contact-link">
              <span className="contact-link-icon">✉</span>
              {ME.email}
              <span className="contact-link-label">Email</span>
            </a>
            <a href={ME.github} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">⌥</span>
              {ME.github.replace('https://', '')}
              <span className="contact-link-label">GitHub</span>
            </a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">↗</span>
              {ME.linkedin.replace('https://', '')}
              <span className="contact-link-label">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">© {new Date().getFullYear()} {ME.name}</span>
        <span className="footer-made">designed &amp; built with care</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </>
        } />
        <Route path="/mewstore" element={<MewStore />} />
        <Route path="/overtime" element={<OverTime />} />
        <Route path="/myweb" element={<MyWeb />} />
      </Routes>
    </BrowserRouter>
  );
}
