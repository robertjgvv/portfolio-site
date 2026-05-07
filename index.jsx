import React from "react";

const focus_items = [
  { label: "Focus", value: "Automation · Controls · Software · Data" },
  { label: "Industry", value: "Manufacturing · Automotive" },
  { label: "Location", value: "Warren / Royal Oak, Michigan" },
  { label: "Education", value: "B.S. Software Engineering · Penn State" },
];

const skill_groups = [
  {
    title: "Software",
    items: "C#, Java, Python, C++, JavaScript, SQL",
  },
  {
    title: "Controls & Hardware",
    items: "PLCs, HMIs, robotics, IO-Link, Raspberry Pi",
  },
  {
    title: "Tools & Platforms",
    items: ".NET, Visual Studio, Git, SolidWorks, AutoCAD",
  },
  {
    title: "Focus Areas",
    items: "Automation, process improvement, data integration, traceability",
  },
];

const projects = [
  {
    number: "01",
    title: "Manufacturing Automation Systems",
    label: "Manufacturing automation · standards development",
    description:
      "Automation-focused systems work centred on FANUC cobots, Rockwell PLC platforms, and repeatable manufacturing standards for electrical production environments.",
    impact:
      "Focused on setting clearer technical standards, improving process visibility, and turning complex automation requirements into scalable engineering workflows.",
    stack: "FANUC Cobots · Rockwell PLCs · C# · .NET · SQL · Controls · Manufacturing Systems",
  },
  {
    number: "02",
    title: "K-12 Integrated System",
    label: "Full-stack platform · Penn State",
    description:
      "A web platform for class scheduling, inventory requests, checkout workflows, request tracking, and administrative reporting.",
    impact:
      "Built to replace manual coordination with a cleaner workflow for teachers, administrators, inventory staff, and outreach programme operations.",
    stack: "ASP.NET Core · SQL Server · EF Core · Razor · JavaScript",
  },
  {
    number: "03",
    title: "VINsight",
    label: "Applied AI concept · Automotive inspection",
    description:
      "A vehicle inspection concept using images and VIN data to generate structured condition reports, repair insights, and condition scoring.",
    impact:
      "Designed around dealership workflows where fast, consistent vehicle evaluation can support appraisal, reconditioning, and resale decisions.",
    stack: "Applied AI · Automotive Data · Computer Vision · Product Strategy",
  },
];

const timeline = [
  {
    role: "Manufacturing Electrical & Controls Engineer",
    company: "General Motors",
    date: "Aug 2025 — Present",
    body: "Building software-driven manufacturing automation solutions that connect engineering requirements, controls systems, hardware, and production workflows.",
  },
  {
    role: "Manufacturing Engineer",
    company: "General Motors",
    date: "Jun 2025 — Aug 2025",
    body: "Supported manufacturing operations, continuous improvement, and technical development across automation-focused initiatives.",
  },
  {
    role: "Controls Engineer Intern",
    company: "General Motors",
    date: "May 2023 — Aug 2024",
    body: "Developed controls solutions, prototyped hardware/software systems, and supported production reliability through diagnostics and system improvements.",
  },
];

function run_content_tests() {
  console.assert(focus_items.length === 4, "Expected four hero focus items.");
  console.assert(skill_groups.length === 4, "Expected four skill groups.");
  console.assert(projects.length >= 3, "Expected at least three selected projects.");
  console.assert(projects.every((project) => project.number && project.title && project.label && project.description && project.impact && project.stack), "Every project should have complete editorial row content.");
  console.assert(timeline.length >= 3, "Expected at least three timeline entries.");
}

function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.76 2.72 1.25 3.38.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.28-5.27-5.72 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19A10.94 10.94 0 0 1 12 6.07c.98.01 1.96.13 2.88.39 2.2-1.5 3.17-1.19 3.17-1.19.64 1.59.24 2.77.12 3.06.75.81 1.2 1.85 1.2 3.11 0 4.45-2.71 5.42-5.29 5.71.42.36.78 1.07.78 2.16v3.03c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.75h4v10.75H3V9.75Zm6.25 0h3.84v1.47h.05c.53-.96 1.84-1.98 3.79-1.98 4.05 0 4.8 2.67 4.8 6.14v5.12h-4v-4.54c0-1.08-.02-2.48-1.51-2.48-1.51 0-1.74 1.18-1.74 2.4v4.62h-4V9.75Z" />
    </svg>
  );
}

function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapPinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.34em] text-slate-500">
      <span>{children}</span>
      <span className="h-px w-12 bg-slate-300" />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#home" className="text-2xl font-medium tracking-tight text-slate-950">
          RB
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
          <a className="transition hover:text-slate-950" href="#about">About</a>
          <a className="transition hover:text-slate-950" href="#experience">Experience</a>
          <a className="transition hover:text-slate-950" href="#projects">Projects</a>
          <a className="transition hover:text-slate-950" href="#skills">Skills</a>
          <a className="transition hover:text-slate-950" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-4 text-slate-900">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/robert--billings/" target="_blank" rel="noreferrer" className="transition hover:text-blue-700">
            <LinkedinIcon />
          </a>
          <a aria-label="GitHub" href="https://github.com/robertjgvv" target="_blank" rel="noreferrer" className="transition hover:text-blue-700">
            <GithubIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_34%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute left-1/2 top-24 h-px w-[40rem] -rotate-12 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1.45fr_1fr] md:px-10 md:py-32">
        <div>
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.42em] text-slate-500">
            Robert Billings
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
            Software Engineer building automation, manufacturing systems, and applied tools.
          </h1>

          <p className="mt-9 max-w-2xl text-xl leading-8 text-slate-600">
            I build software and controls solutions that connect hardware, data, and industrial workflows to improve efficiency and drive real-world impact.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#projects" className="inline-flex items-center gap-3 bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800">
              View My Work
              <ArrowIcon />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 border-b border-slate-950 px-1 py-4 text-sm font-semibold text-slate-950 transition hover:text-blue-700">
              Get in Touch
              <ArrowIcon />
            </a>
          </div>
        </div>

        <aside className="relative border-l border-slate-300 pl-8 md:mt-24">
          <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-slate-500" />
          <div className="space-y-10">
            {focus_items.map((item) => (
              <div key={item.label}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
                <p className="text-base font-medium leading-7 text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-slate-950 md:text-5xl">
            Engineer. Problem solver. System builder.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            I am driven by the challenge of turning complex engineering problems into simple, reliable systems. Whether I am developing software tools, designing controls systems, or integrating data into operational workflows, I focus on building solutions that create measurable impact.
          </p>
          <p>
            My background combines software engineering, controls, electrical systems, and manufacturing operations. That blend gives me a practical view of how software should work when it has to support real people, physical equipment, and production environments.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionLabel>Skills & Focus</SectionLabel>
        <div className="grid gap-8 md:grid-cols-4">
          {skill_groups.map((group) => (
            <div key={group.title} className="border-t border-slate-300 pt-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-slate-500">{group.title}</h3>
              <p className="text-lg leading-8 text-slate-900">{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Selected Systems</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-slate-950 md:text-5xl">
              Work that connects software to real-world engineering.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-slate-600">
            A few of the systems and concepts that best represent how I think: practical software, physical processes, clean workflows, and engineering judgement.
          </p>
        </div>

        <div className="border-y border-slate-200">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group grid gap-8 py-10 transition hover:bg-slate-50 md:grid-cols-[0.28fr_1fr_0.9fr] md:px-6 ${index !== projects.length - 1 ? "border-b border-slate-200" : ""}`}
            >
              <div>
                <span className="font-serif text-5xl text-slate-300 transition group-hover:text-slate-500 md:text-6xl">
                  {project.number}
                </span>
              </div>

              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {project.label}
                </p>
                <h3 className="font-serif text-4xl leading-tight text-slate-950 md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-8 md:pt-11">
                <p className="text-base leading-7 text-slate-600">
                  {project.impact}
                </p>
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Stack / Focus
                  </p>
                  <p className="text-sm font-medium leading-7 text-slate-900">
                    {project.stack}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionLabel>Experience</SectionLabel>
        <div className="space-y-0 border-y border-slate-200">
          {timeline.map((item) => (
            <article key={item.role} className="grid gap-6 border-b border-slate-200 py-8 last:border-b-0 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{item.company}</p>
                <p className="mt-2 text-sm text-slate-500">{item.date}</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-slate-950">{item.role}</h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1fr] md:px-10">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-slate-950 md:text-5xl">
            Let’s build something useful.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            I am always interested in meaningful engineering problems, especially where software meets automation, manufacturing, hardware, or data.
          </p>
        </div>

        <div className="grid content-end gap-5 text-slate-900">
          <a className="flex items-center gap-4 border-b border-slate-200 py-4 transition hover:text-blue-700" href="mailto:robert.billings.dev@gmail.com">
            <MailIcon />
            robert.billings.dev@gmail.com
          </a>
          <a className="flex items-center gap-4 border-b border-slate-200 py-4 transition hover:text-blue-700" href="https://github.com/robertjgvv" target="_blank" rel="noreferrer">
            <GithubIcon />
            github.com/robertjgvv
          </a>
          <a className="flex items-center gap-4 border-b border-slate-200 py-4 transition hover:text-blue-700" href="https://www.linkedin.com/in/robert--billings/" target="_blank" rel="noreferrer">
            <LinkedinIcon />
            linkedin.com/in/robert--billings
          </a>
          <div className="flex items-center gap-4 py-4 text-slate-600">
            <MapPinIcon />
            Royal Oak, Michigan
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioHomepage() {
  if (typeof console !== "undefined") {
    run_content_tests();
  }

  return (
    <main className="min-h-screen bg-white font-sans text-slate-950">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Robert Billings. Built with care, engineering judgment, and a bias toward useful systems.
      </footer>
    </main>
  );
}
