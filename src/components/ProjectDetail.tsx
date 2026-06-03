import type { Project } from "@/lib/portfolio-data";
import { skillName } from "@/lib/portfolio-data";
import { useState } from "react";

function statusClass(status?: string) {
  if (status === "Completed") return "badge badge-green";
  if (status === "In Progress") return "badge badge-yellow";
  return "badge";
}

function highlightPython(code: string) {
  // very small syntax-color pass for visual polish only
  return code
    .replace(/(#.*$)/gm, '<span class="cm">$1</span>')
    .replace(/("[^"]*"|'[^']*')/g, '<span class="str">$1</span>')
    .replace(/\b(import|from|def|return|with|as|for|in|if|None)\b/g, '<span class="kw">$1</span>');
}

export function ProjectDetail({ project }: { project: Project }) {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="project-detail-card">
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <p className="kicker" style={{ marginBottom: 6 }}>{project.context}</p>
          <h2 style={{ marginBottom: 0 }}>{project.title}</h2>
        </div>
        <span className={statusClass(project.status)}>{project.status}</span>
      </div>

      {project.image && (
        <div className="detail-map-image">
          <img src={project.image} alt={`${project.title} - map output`} loading="lazy" />
          {project.imageCaption && <div className="detail-map-caption">{project.imageCaption}</div>}
        </div>
      )}

      <div className="detail-section">
        <div className="detail-section-label">Problem</div>
        <p className="detail-outcome">{project.problem}</p>
      </div>

      <div className="detail-section">
        <div className="detail-section-label">Approach</div>
        <ul className="detail-bullets">
          {project.approach.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </div>

      {project.beforeAfter && (
        <div className="detail-section">
          <div className="detail-section-label">Before vs. After</div>
          <div className="before-after-grid">
            <div className="before-after-box before-box">
              <div className="before-after-label">Before</div>
              <p>{project.beforeAfter.before}</p>
            </div>
            <div className="before-after-box after-box">
              <div className="before-after-label">After</div>
              <p>{project.beforeAfter.after}</p>
            </div>
          </div>
        </div>
      )}

      {project.codeSnippet && (
        <div className="detail-section">
          <div className="detail-section-label">Code · proof of work</div>
          <button
            className="button ghost"
            type="button"
            onClick={() => setShowCode((s) => !s)}
            style={{ fontSize: 12, padding: "8px 16px" }}
          >
            {showCode ? "Hide" : "Show"} {project.codeSnippet.title}
          </button>
          {showCode && (
            <pre className="code-block" dangerouslySetInnerHTML={{ __html: highlightPython(project.codeSnippet.body) }} />
          )}
        </div>
      )}

      <div className="detail-section">
        <div className="detail-section-label">Outcome</div>
        <p className="detail-outcome">{project.outcome}</p>
      </div>

      <div className="detail-section">
        <div className="detail-section-label">Impact</div>
        <div className="detail-impact-grid">
          {project.impact.map((i, idx) => <div className="impact-item" key={idx}>{i}</div>)}
        </div>
      </div>

      <div className="detail-section">
        <div className="detail-section-label">Artifacts</div>
        {project.reportUrl ? (
          <a className="inline" href={project.reportUrl} target="_blank" rel="noopener noreferrer">
            {project.reportUrl.includes("storymaps") ? "View StoryMap ↗" : "Open report / results ↗"}
          </a>
        ) : (
          <span className="small">No report linked yet.</span>
        )}
      </div>

      <div className="detail-section">
        <div className="detail-section-label">Skills Used</div>
        <div className="skills-chips">
          {project.skills.map((id) => <span className="badge" key={id}>{skillName(id)}</span>)}
        </div>
      </div>
    </div>
  );
}
