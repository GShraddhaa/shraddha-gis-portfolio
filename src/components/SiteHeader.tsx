import { Link } from "@tanstack/react-router";
import { PROFILE } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="navbar">
        <Link to="/" className="brand">
          <span className="brand-name">{PROFILE.name}</span>
          <span className="brand-sub">GIS Analyst</span>
        </Link>
        <nav>
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>Home</Link>
          <Link to="/about" activeProps={{ className: "active" }}>About</Link>
          <Link to="/skills" activeProps={{ className: "active" }}>Skills</Link>
          <Link to="/projects" activeProps={{ className: "active" }}>Projects</Link>
          <Link to="/methodology" activeProps={{ className: "active" }}>Method</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="container footer">
      <span>© {new Date().getFullYear()} {PROFILE.name}</span>
      <span style={{ color: "var(--ink-3)", fontSize: 12 }}>{PROFILE.location}</span>
    </footer>
  );
}
