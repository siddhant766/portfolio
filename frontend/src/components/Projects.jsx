import { useState } from "react";
import SplitText from "./SplitText";
import BorderGlow from "./BorderGlow";

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ChevronIcon = ({ expanded }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    style={{
      transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const projects = [
  {
    id: "git-workflow-visualizer",
    name: "Git Workflow Visualizer",
    date: "Mar 2025",
    tags: ["React", "D3.js", "JavaScript", "Vercel"],
    bullets: [
      "Interactive visual tool that animates Git branching strategies — including GitFlow, trunk-based development, and feature branching — helping developers intuitively understand complex workflows.",
      "Renders live commit graphs with branch lanes, merge arrows, and color-coded tags; users can step through each stage of a workflow to see exactly how commits propagate.",
    ],
    link: "https://git-workflow-visualizer.vercel.app/",
  },
  {
    id: "real-estate-platform",
    name: "Real Estate Platform",
    date: "May 2025",
    tags: ["React", "Node.js", "Tailwind", "Vercel"],
    bullets: [
      "Engineered a fully responsive real estate platform with property listing, advanced search & filters, and secure contact management.",
      "Deployed via CI/CD on Vercel; adopted by a local real estate firm demonstrating real-world commercial impact.",
    ],
    link: "https://realestatefrontend-sooty.vercel.app/",
  },
  {
    id: "leather-cad",
    name: "LeatherCAD",
    date: "Mar 2025",
    tags: ["React", "Node.js", "Canvas API", "Vercel"],
    bullets: [
      "Web-based CAD platform purpose-built for leather product design, enabling small entrepreneurs to sketch, measure, and iterate on patterns without expensive desktop software.",
      "Features an interactive canvas editor with real-time shape tools, dimension snapping, and export functionality — streamlining the design-to-production workflow.",
    ],
    link: "https://leather-cad.vercel.app/",
  },
  {
    id: "findme-on-github",
    name: "FindMeOnGithub",
    date: "Feb 2025",
    tags: ["React", "GitHub API", "JavaScript", "Vercel"],
    bullets: [
      "Web platform that lets you look up any GitHub user and instantly see their full profile — repos, followers, contributions, bio, and pinned projects — in a clean, card-based dashboard.",
      "Integrates with the GitHub REST API to surface real-time stats; designed for developers, recruiters, and open-source enthusiasts who want a quick, shareable profile snapshot.",
    ],
    link: "https://profile-finder-sid.vercel.app/",
  },
  {
    id: "ai-book-summarizer",
    name: "AIBookSummarizer",
    date: "Jan 2025",
    tags: ["React", "JavaScript", "C++", "Tailwind"],
    bullets: [
      "Dynamic platform providing concise, accurate summaries of published books for students seeking quick insights.",
      <>
        Led a cross-functional team to build a responsive UI. Won{" "}
        <strong style={{ color: "var(--ac2)" }}>Best Project of the Semester</strong>{" "}
        for innovation &amp; execution.
      </>,
    ],
    link: "#",
  },
  {
    id: "git-commands-reference",
    name: "Git Commands Reference",
    date: "Nov 2024",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    bullets: [
      "Interactive reference site for learning and practicing Git commands, with categorised sections covering branching, merging, rebasing, and remote workflows.",
      "Built as a quick-access cheatsheet for developers of all levels; each command includes usage examples, flags, and common pitfalls.",
    ],
    link: "https://git-commands-by-sid.vercel.app/",
  },
  {
    id: "careomatic",
    name: "CareOmatic",
    date: "Dec 2024",
    tags: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Centralized pet-care platform for managing accessories, grooming, shopping, and veterinary support.",
      "Architected product catalog, appointment scheduling, and user management modules with a fully responsive UI.",
    ],
    link: "https://careomatic.vercel.app/",
  },
];

const INITIAL_VISIBLE = 3;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hiddenCount = projects.length - INITIAL_VISIBLE;

  return (
    <section id="projects">
      <div className="sec-head reveal">
        <span className="sec-num">02</span>
        <h2 className="sec-title">
          <SplitText
            text="Projects"
            className=""
            delay={20}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
            tag="span"
          />
        </h2>
        <div className="sec-rule"></div>
      </div>

      <div className="proj-grid">
        {visibleProjects.map((proj) => (
          <BorderGlow
            key={proj.id}
            className="proj-card"
            backgroundColor="var(--bg1)"
            style={{ background: "transparent", border: "none" }}
          >
            <div className="proj-top">
              <h3 className="proj-name">{proj.name}</h3>
              <span className="proj-date">{proj.date}</span>
            </div>
            <div className="atags">
              {proj.tags.map((tag) => (
                <span key={tag} className="atag">{tag}</span>
              ))}
            </div>
            <div className="bullets">
              {proj.bullets.map((bullet, i) => (
                <div key={i} className="bullet">{bullet}</div>
              ))}
            </div>
            {proj.link !== "#" ? (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                View Project <ArrowIcon />
              </a>
            ) : (
              <a href="#" className="proj-link">
                View Project <ArrowIcon />
              </a>
            )}
          </BorderGlow>
        ))}
      </div>

      {/* View More / View Less button */}
      <div className="proj-toggle-wrap">
        <button
          className="proj-toggle-btn"
          onClick={() => {
            if (expanded) {
              // Scroll back into projects section smoothly before collapsing
              const section = document.getElementById("projects");
              if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
              setTimeout(() => setExpanded(false), 300);
            } else {
              setExpanded(true);
            }
          }}
          aria-expanded={expanded}
        >
          <span>
            {expanded ? `View Less` : `View ${hiddenCount} More Projects`}
          </span>
          <ChevronIcon expanded={expanded} />
        </button>
      </div>
    </section>
  );
}
