import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PROJECTS, skillName, type Project } from "@/lib/portfolio-data";
import { ProjectDetail } from "@/components/ProjectDetail";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - Shraddha Gourishetty" },
      { name: "description", content: "Case studies in enterprise GIS automation, climate-funding analysis, emergency-response network modeling, wildfire risk, and remote sensing." },
      { property: "og:title", content: "Projects - Shraddha Gourishetty" },
      { property: "og:description", content: "Problem, approach, outcome and measurable impact for each GIS case study." },
    ],
  }),
  component: ProjectsPage,
});

function statusClass(status?: string) {
  if (status === "Completed") return "badge badge-green";
  if (status === "In Progress") return "badge badge-yellow";
  return "badge";
}

function ProjectCard({ p, onClick, highlighted, anchorId }: { p: Project; onClick: () => void; highlighted: boolean; anchorId: string }) {
  return (
    <button id={`project-${anchorId}`} type="button" className={`project-card ${highlighted ? "highlighted" : ""}`} onClick={onClick}>
      {p.image && (
        <div className="project-card-image">
          <img src={p.image} alt={p.title} loading="lazy" />
        </div>
      )}
      <div>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }}>
          <div className="project-title">{p.title}</div>
          <span className={statusClass(p.status)} style={{ flexShrink: 0 }}>{p.status}</span>
        </div>
        <p className="project-subtitle">{p.context}</p>
      </div>
      <div className="project-tags">
        {p.skills.slice(0, 4).map((id) => <span className="badge" key={id}>{skillName(id)}</span>)}
      </div>
    </button>
  );
}

function ProjectsPage() {
  const professional = PROJECTS.filter((p) => p.type === "professional");
  const academic = PROJECTS.filter((p) => p.type !== "professional");

  const [selected, setSelected] = useState<Project>(professional[0] || academic[0]);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle hash routing on mount
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const target = PROJECTS.find((p) => (p.anchor || p.id) === hash);
    if (target) {
      setSelected(target);
      setHighlightId(hash);
      setTimeout(() => {
        const el = document.getElementById(`project-${hash}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => setHighlightId(null), 2000);
      }, 100);
    }
  }, [location.hash]);

  const select = (p: Project) => {
    setSelected(p);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <main className="container fade-in">
      <div className="projects-header">
        <p className="kicker">Case Studies</p>
        <h1 style={{ marginBottom: 10 }}>Projects</h1>
        <p style={{ maxWidth: "52ch", margin: 0 }}>
          Click any project to view the full case study below - problem, approach, outcome, and measurable impact.
        </p>
      </div>

      {professional.length > 0 && (
        <>
          <div className="project-section-title">Professional Experience</div>
          <div className="projects-grid stagger">
            {professional.map((p) => {
              const aid = p.anchor || p.id;
              return <ProjectCard key={p.id} p={p} onClick={() => select(p)} highlighted={highlightId === aid} anchorId={aid} />;
            })}
          </div>
        </>
      )}

      {academic.length > 0 && (
        <>
          <div className="project-section-title">Academic & Independent Projects</div>
          <div className="projects-grid stagger">
            {academic.map((p) => {
              const aid = p.anchor || p.id;
              return <ProjectCard key={p.id} p={p} onClick={() => select(p)} highlighted={highlightId === aid} anchorId={aid} />;
            })}
          </div>
        </>
      )}

      <div style={{ height: 20 }} />
      <div ref={detailRef}>
        <ProjectDetail project={selected} />
      </div>
    </main>
  );
}
