import { createFileRoute } from "@tanstack/react-router";
import { PROFILE, CERTIFICATIONS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Shraddha Gourishetty" },
      { name: "description", content: PROFILE.aboutIntro.slice(0, 158) },
      { property: "og:title", content: "About Shraddha Gourishetty" },
      { property: "og:description", content: PROFILE.aboutIntro.slice(0, 158) },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="container fade-in">
      <div className="about-grid stagger">
        <div className="card" style={{ padding: "36px 40px" }}>
          <p className="kicker">About</p>
          <h1 style={{ marginBottom: 20 }}>{PROFILE.name}</h1>
          <p className="about-intro">{PROFILE.aboutIntro}</p>
          {PROFILE.aboutStory.map((p, i) => <p className="about-paragraph" key={i}>{p}</p>)}

          <div style={{ marginTop: 24 }}>
            <h3>What I bring</h3>
            <ul className="what-i-bring">
              {PROFILE.whatIBring.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </div>

          <p className="about-endline">{PROFILE.endLine}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card" style={{ padding: 24 }}>
            <h3>Links</h3>
            <div className="contact-links" style={{ gap: 8, display: "grid" }}>
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

          <div className="card" style={{ padding: 24 }}>
            <h3>Certifications</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} style={{ padding: "10px 14px", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: 13, color: "var(--ink-2)" }}>
                  <span style={{ color: "var(--accent)", marginRight: 8 }}>◈</span>{c.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
