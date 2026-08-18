const projects = [
  {
    number: "01",
    title: "A community growth engine",
    description:
      "Built an outreach system for Illumin8 Chiropractic that connects local business partnerships, events, lunch-and-learns, lead capture, and follow-up into one measurable pipeline.",
    tags: ["Partnerships", "Field sales", "Growth systems"],
    accent: "coral",
  },
  {
    number: "02",
    title: "A voice-first CRM concept",
    description:
      "Designed a practical, low-cost workflow to turn calls, texts, voicemails, and spoken ideas into organized records, tasks, reminders, and reporting—with less manual admin.",
    tags: ["AI automation", "CRM design", "Operations"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Creative that earns attention",
    description:
      "Developed campaign concepts, event materials, landing pages, and physical marketing pieces that make complex wellness offers feel clear, visual, and worth acting on.",
    tags: ["Creative direction", "Web", "Campaigns"],
    accent: "lilac",
  },
  {
    number: "04",
    title: "Marketing with a feedback loop",
    description:
      "Shaped a measurement framework that separates activity from outcomes and tracks audience, offer, source, show rate, conversion, revenue, and where leads get lost.",
    tags: ["Attribution", "Strategy", "Reporting"],
    accent: "green",
  },
];

const interests = [
  {
    icon: "✦",
    title: "Practical AI",
    copy: "Not AI for the demo. AI that gives people time back and makes a real workflow noticeably better.",
  },
  {
    icon: "↗",
    title: "Entrepreneurship",
    copy: "Turning observed problems into useful, sellable systems—starting with the work people already do every day.",
  },
  {
    icon: "◎",
    title: "Human connection",
    copy: "The conversations, partnerships, and trust that still sit underneath every good growth strategy.",
  },
  {
    icon: "▰",
    title: "Visual storytelling",
    copy: "Clear design, strong concepts, and creative that makes complicated ideas easy to feel and understand.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Carter Bogart, home">
          <span className="brand-mark">CB</span>
          <span className="brand-name">Carter Bogart</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#interests">Interests</a>
          <a href="#now">Now</a>
        </nav>

        <a className="nav-cta" href="mailto:carter@illumin8chiro.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#interests">Interests</a>
            <a href="#now">Now</a>
            <a href="mailto:carter@illumin8chiro.com">Let&apos;s talk ↗</a>
          </nav>
        </details>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Albuquerque, New Mexico</p>
            <h1>
              I build the <em>connective tissue</em> between people, ideas, and
              systems.
            </h1>
            <p className="hero-intro">
              I&apos;m Carter—a community growth operator, creative problem solver,
              and practical AI enthusiast. I like taking messy real-world work
              and making it clearer, smarter, and easier to scale.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#about">
                A little about me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hero-playground" aria-label="A playful map of Carter's work">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="center-piece">
              <span>BUILT AROUND</span>
              <strong>REAL<br />PEOPLE</strong>
            </div>
            <span className="floating-pill pill-ai">AI + systems</span>
            <span className="floating-pill pill-story">storytelling</span>
            <span className="floating-pill pill-growth">growth</span>
            <span className="spark spark-one">✦</span>
            <span className="spark spark-two">✦</span>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>
            <span>STRATEGY</span><i>✦</i><span>AUTOMATION</span><i>✦</i>
            <span>COMMUNITY</span><i>✦</i><span>DESIGN</span><i>✦</i>
            <span>STRATEGY</span><i>✦</i><span>AUTOMATION</span><i>✦</i>
            <span>COMMUNITY</span><i>✦</i><span>DESIGN</span><i>✦</i>
          </div>
        </div>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Ideas made <em>useful.</em></h2>
            </div>
            <p>
              A few examples of how I think: start with the real problem, connect
              the moving parts, and build something people will actually use.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label="Project disciplines">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="edit-note">
            <span>✎</span> Each project is ready to expand into a full case study with
            screenshots, results, and your exact role.
          </p>
        </section>

        <section className="section about-section" id="about">
          <div className="about-statement">
            <p className="section-kicker">About me</p>
            <h2>
              Equal parts <em>people person,</em> systems thinker, and restless
              builder.
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I&apos;m most energized when I can see the whole system: the person on
              the other end, the message that earns their attention, and the
              process that makes the next step effortless.
            </p>
            <p>
              In my current chapter with Illumin8 Chiropractic, I&apos;ve worked
              across community outreach, local partnerships, campaign planning,
              event strategy, creative production, and operational automation.
              That range taught me that growth rarely lives in one channel—it
              lives in how the pieces work together.
            </p>
            <p>
              Long term, I&apos;m interested in building practical AI-powered systems
              for small businesses: tools that remove repetitive work while
              preserving the human relationships that make a business matter.
            </p>
          </div>

          <div className="snapshot-card">
            <div>
              <span>Current chapter</span>
              <strong>Community Outreach &amp; Growth</strong>
              <p>Illumin8 Chiropractic · Albuquerque</p>
            </div>
            <div>
              <span>Working style</span>
              <strong>Curious, direct, iterative</strong>
              <p>Get close to the problem. Build. Test. Improve.</p>
            </div>
            <div>
              <span>Best at</span>
              <strong>Connecting the dots</strong>
              <p>People ↔ creative ↔ systems ↔ outcomes</p>
            </div>
          </div>
        </section>

        <section className="section interests-section" id="interests">
          <div className="section-heading light-heading">
            <div>
              <p className="section-kicker">What pulls me in</p>
              <h2>Current <em>obsessions.</em></h2>
            </div>
            <p>
              The themes I keep returning to—whether I&apos;m building a campaign,
              mapping a workflow, or thinking about what comes next.
            </p>
          </div>

          <div className="interest-list">
            {interests.map((interest, index) => (
              <article className="interest-row" key={interest.title}>
                <span className="interest-number">0{index + 1}</span>
                <span className="interest-icon" aria-hidden="true">{interest.icon}</span>
                <h3>{interest.title}</h3>
                <p>{interest.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section now-section" id="now">
          <div className="now-card">
            <div className="now-label">
              <span className="live-dot" />
              Now
            </div>
            <div className="now-copy">
              <h2>Building toward work that feels more like a calling.</h2>
              <p>
                Right now I&apos;m learning in public, turning real operating problems
                into repeatable systems, and collecting proof that practical AI
                can make small businesses meaningfully better—not just noisier.
              </p>
            </div>
            <div className="now-list">
              <span>Exploring</span>
              <p>Voice-first productivity</p>
              <p>Small-business automation</p>
              <p>AI-native creative</p>
              <p>Local growth systems</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker">Let&apos;s make something useful</p>
          <h2>Have a messy problem worth solving?</h2>
          <a href="mailto:carter@illumin8chiro.com">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">
            Albuquerque-based · Open to smart ideas, good people, and ambitious
            experiments.
          </p>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark">CB</span>
          <span className="brand-name">Carter Bogart</span>
        </a>
        <p>Built with curiosity. Ready to personalize.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
