import { createFileRoute, Link } from "@tanstack/react-router";
import { PROFILE, PROJECTS } from "@/lib/portfolio-data";
import ogImage from "@/assets/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shraddha Gourishetty - GIS Analyst" },
      { name: "description", content: PROFILE.shortOverview.slice(0, 158) },
      { property: "og:title", content: "Shraddha Gourishetty - GIS Analyst" },
      { property: "og:description", content: PROFILE.shortOverview.slice(0, 158) },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const initials = PROFILE.name.split(" ").map((n) => n[0]).join("");

  return (
    <main className="container fade-in">
      <div className="home-grid stagger">
        <div className="hero-card">
          <div className="status-row">
            <span className="status-dot" />
            <span>OPEN TO GIS ROLES · ANYWHERE AND REMOTE</span>
          </div>
          <p className="kicker">{PROFILE.location}</p>
          <h1 className="hero-headline">{PROFILE.name}</h1>
          <p className="hero-body">{PROFILE.shortOverview}</p>
          <div className="hero-ctas">
            <Link to="/projects" className="button">View Projects</Link>
            <Link to="/methodology" className="button ghost">How I Work</Link>
            <a className="button ghost" href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          </div>

          <div className="stats-row">
            {PROFILE.stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="highlights">
            <h3>Selected highlights</h3>
            {PROFILE.highlights.map((h, i) => (
              <Link key={i} to="/projects" hash={h.target} className="highlight-item">
                <div className="highlight-dot" />
                <span className="highlight-text">{h.text}</span>
              </Link>
            ))}
          </div>

          <div className="exploring">
            <div className="exploring-label">Currently exploring</div>
            <div className="exploring-body">{PROFILE.exploring}</div>
          </div>
        </div>

        <div className="sidebar-card">
          <div className="profile-photo profile-monogram">{initials}</div>
          <div className="coord-tag">43.4516° N, 80.4925° W</div>

          <div>
            <h3>Connect</h3>
            <div className="contact-links">
              <a className="contact-link" href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">Resume / CV</span><span className="contact-link-arrow">↗</span>
              </a>
              <a className="contact-link" href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">LinkedIn</span><span className="contact-link-arrow">↗</span>
              </a>
              <a className="contact-link" href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">GitHub</span><span className="contact-link-arrow">↗</span>
              </a>
              <a className="contact-link" href={PROFILE.blogUrl} target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">Blog</span><span className="contact-link-arrow">↗</span>
              </a>
              <a className="contact-link" href={`mailto:${PROFILE.email}`}>
                <span className="contact-link-label">{PROFILE.email}</span><span className="contact-link-arrow">✉</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="selected-work">
        <div className="selected-work-title">Selected work</div>
        <div className="selected-work-grid stagger">
          {featured.map((p) => (
            <Link key={p.id} to="/projects" hash={p.anchor || p.id} className="project-card">
              {p.image && (
                <div className="project-card-image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
              )}
              <div>
                <div className="project-title">{p.title}</div>
                <p className="project-subtitle">{p.context}</p>
              </div>
              <div className="project-tags">
                {p.impact.slice(0, 1).map((i, idx) => <span className="badge badge-green" key={idx}>{i.split(" ").slice(0, 6).join(" ")}…</span>)}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="testimonial">
        <p className="testimonial-quote">{PROFILE.testimonial.quote}</p>
        <p className="testimonial-attr">{PROFILE.testimonial.attribution}</p>
              </section> */}
    </main>
  );
}
