import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SKILL_CATEGORIES, CERTIFICATIONS, projectsForSkill, skillName } from "@/lib/portfolio-data";
import { ProjectDetail } from "@/components/ProjectDetail";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills - Shraddha Gourishetty" },
      { name: "description", content: "Enterprise GIS, spatial & network analysis, Python automation, remote sensing, and visualization - each skill linked to live project evidence." },
      { property: "og:title", content: "Skills - Shraddha Gourishetty" },
      { property: "og:description", content: "Each skill linked to the projects where it was applied." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const related = activeSkill ? projectsForSkill(activeSkill) : [];
  const activeProject = activeProjectId ? related.find((p) => p.id === activeProjectId) : related[0];

  return (
    <main className="container fade-in">
      <div style={{ marginBottom: 24 }}>
        <p className="kicker">Technical Expertise</p>
        <h1 style={{ marginBottom: 8 }}>Skills</h1>
        <p style={{ maxWidth: "52ch" }}>Click a skill to see the projects where it was applied.</p>
      </div>

      <div className="skills-layout">
        <div>
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-section" key={cat.id}>
              <div className="skill-section-title">{cat.title}</div>
              <div className="skill-bubbles">
                {cat.skills.map((id) => {
                  const count = projectsForSkill(id).length;
                  return (
                    <button
                      key={id}
                      type="button"
                      className={`skill-bubble ${activeSkill === id ? "active" : ""}`}
                      onClick={() => { setActiveSkill(id); setActiveProjectId(null); }}
                      onMouseEnter={() => { setActiveSkill(id); setActiveProjectId(null); }}
                    >
                      <span className="skill-label">{skillName(id)}</span>
                      <span className="skill-meta">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="skill-section">
            <div className="skill-section-title">Certifications</div>
            <div className="skill-bubbles">
              {CERTIFICATIONS.map((c) => (
                <div className="skill-bubble cert-bubble" key={c.id}>
                  <span className="skill-label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-panel">
          <div className="skills-panel-inner">
            {!activeSkill ? (
              <div className="panel-empty">
                <div>
                  <div style={{ fontSize: 28, marginBottom: 8, opacity: 0.3 }}>◈</div>
                  Hover or click a skill to see<br />related projects
                </div>
              </div>
            ) : related.length === 0 ? (
              <p className="small">No projects linked to this skill yet.</p>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ink)" }}>{skillName(activeSkill)}</div>
                    <div className="small" style={{ marginTop: 2 }}>{related.length} project{related.length !== 1 ? "s" : ""} use this skill</div>
                  </div>
                  <span className="badge badge-accent">{related.length}</span>
                </div>
                <div>
                  {related.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className={`related-project-item ${(activeProject?.id === p.id) ? "active-item" : ""}`}
                      onClick={() => setActiveProjectId(p.id)}
                    >
                      <div className="related-project-title">{p.title}</div>
                      <div className="related-project-sub">{p.context}</div>
                    </button>
                  ))}
                </div>
                {activeProject && (
                  <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                    <ProjectDetail project={activeProject} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
