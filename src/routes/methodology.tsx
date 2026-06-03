import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "How I Work - Shraddha Gourishetty" },
      { name: "description", content: "My GIS process: intake, validate, analyze, communicate, iterate - a transparent, scalable workflow built for decision-makers." },
      { property: "og:title", content: "How I Work - Shraddha Gourishetty" },
      { property: "og:description", content: "A transparent GIS workflow built for decision-makers." },
    ],
  }),
  component: MethodologyPage,
});

const STEPS = [
  { num: "01", title: "Intake", body: "Understand the decision the map needs to support. Pin the audience and the success metric before opening ArcGIS." },
  { num: "02", title: "Validate", body: "Automated QA on every dataset - schema, geometry, completeness - before any analysis touches it." },
  { num: "03", title: "Analyze", body: "Spatial joins, network analysis, raster workflows, ML where useful. Methods documented and reproducible." },
  { num: "04", title: "Communicate", body: "Maps + summaries that read in 30 seconds. Cartography that respects non-technical stakeholders." },
  { num: "05", title: "Iterate", body: "Capture what changed because of the work. Feed lessons back into the next QA script or template." },
];

const PRINCIPLES = [
  { title: "Validate before you visualize", body: "A pretty map of bad data is worse than no map. QA is the first deliverable, not the last." },
  { title: "Automate the boring stuff", body: "If I do it twice, it goes in a script. Every minute saved is a minute spent on analysis." },
  { title: "Default to defensible methods", body: "Public-sector and grant-funded work has to survive external review. Methods are documented end-to-end." },
  { title: "Maps are for decisions", body: "Every output is built backward from the question the stakeholder needs answered." },
];

function MethodologyPage() {
  return (
    <main className="container fade-in">
      <div className="projects-header">
        <p className="kicker">Process</p>
        <h1 style={{ marginBottom: 10 }}>How I Work</h1>
        <p style={{ maxWidth: "60ch", margin: 0 }}>
          A repeatable workflow that turns raw spatial data into decisions stakeholders can act on. Built from two years
          of government, climate-tech, and academic projects.
        </p>
      </div>

      <div className="method-grid stagger">
        {STEPS.map((s) => (
          <div className="method-step" key={s.num}>
            <div className="method-step-num">{s.num}</div>
            <div className="method-step-title">{s.title}</div>
            <div className="method-step-body">{s.body}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48 }}>
        <p className="kicker">Operating Principles</p>
        <h2 style={{ fontSize: 28 }}>What stays constant across projects</h2>
        <div className="principles">
          {PRINCIPLES.map((p) => (
            <div className="principle" key={p.title}>
              <div className="principle-title">{p.title}</div>
              <div className="principle-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 48 }}>
        <p className="kicker">Tooling</p>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>The stack I reach for</h2>
        <p style={{ marginBottom: 16, maxWidth: "60ch" }}>
          Not every project needs every tool. I pick the lightest one that meets the precision bar for the decision.
        </p>
        <div className="skills-chips">
          {["ArcGIS Pro", "ArcGIS Enterprise", "ArcPy / Python", "PostGIS", "Google Earth Engine", "QGIS", "FME", "SQL", "Tableau", "ArcGIS StoryMaps", "Adobe Creative Suite"].map((t) => (
            <span className="badge badge-accent" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
