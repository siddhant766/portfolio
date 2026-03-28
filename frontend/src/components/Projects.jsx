import SplitText from "./SplitText";
import BorderGlow from "./BorderGlow";

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Projects() {
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

        {/* Real Estate Platform */}
        <BorderGlow className="proj-card reveal" backgroundColor="var(--bg1)" style={{ background: 'transparent', border: 'none' }}>
          <div className="proj-top">
            <h3 className="proj-name">Real Estate Platform</h3>
            <span className="proj-date">May 2025</span>
          </div>
          <div className="atags">
            <span className="atag">React</span>
            <span className="atag">Node.js</span>
            <span className="atag">Tailwind</span>
            <span className="atag">Vercel</span>
          </div>
          <div className="bullets">
            <div className="bullet">
              Engineered a fully responsive real estate platform with property
              listing, advanced search &amp; filters, and secure contact management.
            </div>
            <div className="bullet">
              Deployed via CI/CD on Vercel; adopted by a local real estate firm
              demonstrating real-world commercial impact.
            </div>
          </div>
          <a href="https://realestatefrontend-sooty.vercel.app/" target="_blank" rel="noopener noreferrer" className="proj-link">
            View Project <ArrowIcon />
          </a>
        </BorderGlow>

        {/* LeatherCAD */}
        <BorderGlow className="proj-card reveal" backgroundColor="var(--bg1)" style={{ background: 'transparent', border: 'none' }}>
          <div className="proj-top">
            <h3 className="proj-name">LeatherCAD</h3>
            <span className="proj-date">Mar 2025</span>
          </div>
          <div className="atags">
            <span className="atag">React</span>
            <span className="atag">Node.js</span>
            <span className="atag">Canvas API</span>
            <span className="atag">Vercel</span>
          </div>
          <div className="bullets">
            <div className="bullet">
              Web-based CAD platform purpose-built for leather product design,
              enabling small entrepreneurs to sketch, measure, and iterate on
              patterns without expensive desktop software.
            </div>
            <div className="bullet">
              Features an interactive canvas editor with real-time shape tools,
              dimension snapping, and export functionality — streamlining the
              design-to-production workflow.
            </div>
          </div>
          <a href="https://leather-cad.vercel.app/" target="_blank" rel="noopener noreferrer" className="proj-link">
            View Project <ArrowIcon />
          </a>
        </BorderGlow>

        {/* FindMeOnGithub */}
        <BorderGlow className="proj-card reveal" backgroundColor="var(--bg1)" style={{ background: 'transparent', border: 'none' }}>
          <div className="proj-top">
            <h3 className="proj-name">FindMeOnGithub</h3>
            <span className="proj-date">Feb 2025</span>
          </div>
          <div className="atags">
            <span className="atag">React</span>
            <span className="atag">GitHub API</span>
            <span className="atag">JavaScript</span>
            <span className="atag">Vercel</span>
          </div>
          <div className="bullets">
            <div className="bullet">
              Web platform that lets you look up any GitHub user and instantly
              see their full profile — repos, followers, contributions, bio, and
              pinned projects — in a clean, card-based dashboard.
            </div>
            <div className="bullet">
              Integrates with the GitHub REST API to surface real-time stats;
              designed for developers, recruiters, and open-source enthusiasts
              who want a quick, shareable profile snapshot.
            </div>
          </div>
          <a href="https://profile-finder-sid.vercel.app/" target="_blank" rel="noopener noreferrer" className="proj-link">
            View Project <ArrowIcon />
          </a>
        </BorderGlow>

        {/* AIBookSummarizer */}
        <BorderGlow className="proj-card reveal" backgroundColor="var(--bg1)" style={{ background: 'transparent', border: 'none' }}>
          <div className="proj-top">
            <h3 className="proj-name">AIBookSummarizer</h3>
            <span className="proj-date">Jan 2025</span>
          </div>
          <div className="atags">
            <span className="atag">React</span>
            <span className="atag">JavaScript</span>
            <span className="atag">C++</span>
            <span className="atag">Tailwind</span>
          </div>
          <div className="bullets">
            <div className="bullet">
              Dynamic platform providing concise, accurate summaries of published
              books for students seeking quick insights.
            </div>
            <div className="bullet">
              Led a cross-functional team to build a responsive UI. Won{" "}
              <strong style={{ color: "var(--ac2)" }}>
                Best Project of the Semester
              </strong>{" "}
              for innovation &amp; execution.
            </div>
          </div>
          <a href="#" className="proj-link">
            View Project <ArrowIcon />
          </a>
        </BorderGlow>

        {/* Git Commands Reference */}
        <BorderGlow className="proj-card reveal" backgroundColor="var(--bg1)" style={{ background: 'transparent', border: 'none' }}>
          <div className="proj-top">
            <h3 className="proj-name">Git Commands Reference</h3>
            <span className="proj-date">Nov 2024</span>
          </div>
          <div className="atags">
            <span className="atag">HTML</span>
            <span className="atag">CSS</span>
            <span className="atag">JavaScript</span>
            <span className="atag">Vercel</span>
          </div>
          <div className="bullets">
            <div className="bullet">
              Interactive reference site for learning and practicing Git commands,
              with categorised sections covering branching, merging, rebasing,
              and remote workflows.
            </div>
            <div className="bullet">
              Built as a quick-access cheatsheet for developers of all levels;
              each command includes usage examples, flags, and common pitfalls.
            </div>
          </div>
          <a href="https://git-commands-by-sid.vercel.app/" target="_blank" rel="noopener noreferrer" className="proj-link">
            View Project <ArrowIcon />
          </a>
        </BorderGlow>

        {/* CareOmatic */}
        <BorderGlow className="proj-card reveal" backgroundColor="var(--bg1)" style={{ background: 'transparent', border: 'none' }}>
          <div className="proj-top">
            <h3 className="proj-name">CareOmatic</h3>
            <span className="proj-date">Dec 2024</span>
          </div>
          <div className="atags">
            <span className="atag">HTML</span>
            <span className="atag">CSS</span>
            <span className="atag">JavaScript</span>
          </div>
          <div className="bullets">
            <div className="bullet">
              Centralized pet-care platform for managing accessories, grooming,
              shopping, and veterinary support.
            </div>
            <div className="bullet">
              Architected product catalog, appointment scheduling, and user
              management modules with a fully responsive UI.
            </div>
          </div>
          <a href="https://careomatic.vercel.app/" target="_blank" rel="noopener noreferrer" className="proj-link">
            View Project <ArrowIcon />
          </a>
        </BorderGlow>

      </div>
    </section>
  );
}
