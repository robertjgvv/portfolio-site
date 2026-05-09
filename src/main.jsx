import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Cpu, Factory, GraduationCap, Layers, Mail, MapPin, Sparkles, Wrench } from 'lucide-react';
import './styles.css';

const work_items = [
  {
    number: '01',
    eyebrow: 'Manufacturing automation',
    title: 'Automation systems for electrical manufacturing',
    body: 'Engineering practical automation workflows around FANUC cobots, Rockwell PLC systems, and production constraints. The focus is straightforward: cleaner processes, stronger standards, and tools that make manufacturing teams faster.',
    tags: ['Controls', 'Robotics', 'Manufacturing'],
  },
  {
    number: '02',
    eyebrow: 'Penn State',
    title: 'K-12 integrated resource system',
    body: 'A full-stack system for class scheduling, inventory checkout, request tracking, and admin workflows. Built to replace spreadsheet-heavy processes with a more reliable web application.',
    tags: ['ASP.NET Core', 'SQL', 'UX'],
  },
  {
    number: '03',
    eyebrow: 'Fleet systems',
    title: 'Fleet workflow and automation planning tools',
    body: 'A desktop application concept for turning complex workbook-driven planning into structured, database-backed workflows. It focuses on importing operational data, organising routes and assets, and generating cleaner reports for automation planning teams.',
    tags: ['WPF', 'SQLite', 'Excel import/export'],
  },
];

const skill_groups = [
  ['C# / .NET', 'ASP.NET Core MVC', 'Entity Framework', 'SQL Server'],
  ['WPF / MVVM', 'React', 'Vite', 'JavaScript', 'HTML / CSS'],
  ['C++', 'C', 'MIPS Assembly', 'pthreads', 'Systems programming'],
  ['Algorithms', 'Data structures', 'Software architecture', 'Design patterns'],
  ['Rockwell PLCs', 'FANUC cobots', 'Manufacturing systems', 'Excel automation'],
];

function App() {
  return (
    <main>
      <nav className="top_nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Robert Billings home">RB</a>
        <div className="nav_links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section_shell">
        <div className="hero_text">
          <p className="kicker">Software Engineer · Manufacturing Systems · Penn State</p>
          <h1>Building useful software for messy, real-world systems.</h1>
          <p className="hero_copy">
            I design and build applications that connect engineering, automation, and operations — from production tooling to inventory systems and fleet workflow software.
          </p>
          <div className="hero_actions">
            <a className="button primary" href="#work">View selected work <ArrowUpRight size={18} /></a>
            <a className="button secondary" href="mailto:rylenbillings@gmail.com">Contact me</a>
          </div>
        </div>
        <aside className="hero_card" aria-label="Profile summary">
          <div className="orb"><Sparkles size={28} /></div>
          <p className="label">Current focus</p>
          <h2>Automation tooling that raises the standard.</h2>
          <p>
            Practical systems for manufacturing teams: cleaner workflows, better visibility, and software that respects the realities of the floor.
          </p>
        </aside>
      </section>

      <section className="marquee" aria-label="Core disciplines">
        <span>Software Engineering</span>
        <span>Manufacturing Automation</span>
        <span>Controls</span>
        <span>Full-Stack Systems</span>
        <span>C++ / Systems Coursework</span>
        <span>UX for Operations</span>
      </section>

      <section id="work" className="section_shell section_gap">
        <div className="section_header">
          <p className="kicker">Selected work</p>
          <h2>Systems with purpose, not filler.</h2>
        </div>
        <div className="editorial_grid">
          {work_items.map((item) => (
            <article className="work_card" key={item.number}>
              <div className="work_number">{item.number}</div>
              <div className="work_content">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="tag_row">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section_shell section_gap split_section">
        <div>
          <p className="kicker">Capability</p>
          <h2>Where software meets engineering judgement.</h2>
          <p className="section_copy">
            I like building things that have to survive outside a classroom demo: clean data paths, understandable interfaces, and code that another team can actually pick up later.
          </p>
        </div>
        <div className="skill_panel">
          {skill_groups.map((group, index) => (
            <div className="skill_group" key={index}>
              {group.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          ))}
        </div>
      </section>

      <section className="section_shell section_gap cards_three">
        <div className="info_card">
          <Factory size={24} />
          <h3>Manufacturing-minded</h3>
          <p>Comfortable around production systems, electrical manufacturing, controls, and automation planning.</p>
        </div>
        <div className="info_card">
          <Layers size={24} />
          <h3>Full-stack capable</h3>
          <p>Builds practical web and desktop tools with database-backed workflows and role-aware user experiences.</p>
        </div>
        <div className="info_card">
          <Cpu size={24} />
          <h3>Systems-oriented</h3>
          <p>Interested in where software, hardware, vehicles, data, and operational process all overlap.</p>
        </div>
      </section>

      <section id="contact" className="section_shell contact_section">
        <div>
          <p className="kicker">Contact</p>
          <h2>Let’s build something that actually helps.</h2>
        </div>
        <div className="contact_links">
          <a href="mailto:rylenbillings@gmail.com"><Mail size={18} /> rylenbillings@gmail.com</a>
          <a href="https://www.linkedin.com/in/robert--billings" target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> LinkedIn</a>
          <span><MapPin size={18} /> Michigan · United States</span>
          <span><GraduationCap size={18} /> Penn State Software Engineering</span>
          <span><Wrench size={18} /> Manufacturing Electrical & Controls</span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
