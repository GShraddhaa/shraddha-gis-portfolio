import { PROFILE, SKILLS, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from "./data.js";

/* ─── UTILS ──────────────────────────────────────────── */
function setActiveNav() {
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    if (a.getAttribute("href") === file) a.classList.add("active");
  });
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function esc(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function skillName(id) {
  return SKILLS.find(s => s.id === id)?.label || SKILLS.find(s => s.id === id)?.name || id;
}

function projectsForSkill(skillId) {
  return PROJECTS.filter(p => (p.skills || []).includes(skillId));
}

/* ─── HOME ───────────────────────────────────────────── */
function initHome() {
  const mount = document.getElementById("homeProfile");
  if (!mount) return;

  const highlightsHtml = (PROFILE.highlights || []).map(h => `
    <a href="projects.html#${h.target}" class="highlight-item">
      <div class="highlight-dot"></div>
      <span class="highlight-text">${esc(h.text)}</span>
    </a>
  `).join("");

  const photoHtml = PROFILE.profileImage
    ? `<img src="${esc(PROFILE.profileImage)}" alt="Shraddha Gourishetty" class="profile-photo" />`
    : `<div class="profile-photo" style="display:flex;align-items:center;justify-content:center;color:var(--ink-3);font-size:13px;">No photo</div>`;

  const statsHtml = (PROFILE.stats || []).map(s => `
  
    <div class="stat-item">
      <div class="stat-number">${esc(s.value)}</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>
  `).join("");

  mount.innerHTML = `
    <div class="home-grid stagger">
      <div class="hero-card">
        <p class="kicker">${esc(PROFILE.location)}</p>
        <h1 class="hero-headline">${esc(PROFILE.name)}</h1>
        <p class="hero-body">${esc(PROFILE.shortOverview)}</p>
        <div class="hero-ctas">
          <a class="button" href="projects.html">View Projects</a>
          <a class="button ghost" href="skills.html">Skills</a>
          <a class="button ghost" href="about.html">About Me</a>
        </div>

        ${statsHtml ? `<div class="stats-row">${statsHtml}</div>` : ""}

        <div class="highlights">
          <h3>Selected highlights</h3>
          ${highlightsHtml}
        </div>
      </div>

      <div class="sidebar-card stagger">
        ${photoHtml}
        <div class="coord-tag">Kitchener, ON</div>

        <div>
          <h3>Connect</h3>
          <div class="contact-links">
            <a class="contact-link" href="${esc(PROFILE.resumeUrl)}" target="_blank" rel="noopener">
              <span class="contact-link-label">Resume / CV</span>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a class="contact-link" href="${esc(PROFILE.linkedinUrl)}" target="_blank" rel="noopener">
              <span class="contact-link-label">LinkedIn</span>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a class="contact-link" href="${esc(PROFILE.githubUrl)}" target="_blank" rel="noopener">
              <span class="contact-link-label">GitHub</span>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a class="contact-link" href="${esc(PROFILE.blogUrl)}" target="_blank" rel="noopener">
              <span class="contact-link-label">Blog</span>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a class="contact-link" href="mailto:${esc(PROFILE.email)}">
              <span class="contact-link-label">${esc(PROFILE.email)}</span>
              <span class="contact-link-arrow">✉</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ─── ABOUT ──────────────────────────────────────────── */
function initAbout() {
  const mount = document.getElementById("aboutProfile");
  if (!mount) return;

  const storyParas = (PROFILE.aboutStory || "")
    .trim()
    .split("\n\n")
    .filter(Boolean)
    .map(p => `<p class="about-paragraph">${esc(p)}</p>`)
    .join("");

  const whatHtml = (PROFILE.whatIBring || [])
    .map(x => `<li>${esc(x)}</li>`)
    .join("");

  mount.innerHTML = `
    <div class="about-grid stagger">
      <div class="card" style="padding: 36px 40px;">
        <p class="kicker">About</p>
        <h1 style="margin-bottom: 20px;">${esc(PROFILE.name)}</h1>

        <p class="about-intro">${esc(PROFILE.aboutIntro)}</p>

        ${storyParas}

        <div style="margin-top: 24px;">
          <h3>What I bring</h3>
          <ul class="what-i-bring">${whatHtml}</ul>
        </div>

        ${PROFILE.endLine ? `<p class="about-endline">${esc(PROFILE.endLine)}</p>` : ""}
      </div>

      <div style="display:flex; flex-direction:column; gap:14px;">
        <div class="card" style="padding: 24px;">
          <h3>Links</h3>
          <div class="contact-links" style="gap:8px; display:grid;">
            <a class="contact-link" href="${esc(PROFILE.resumeUrl)}" target="_blank" rel="noopener">
              <span class="contact-link-label">Resume / CV</span>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a class="contact-link" href="${esc(PROFILE.linkedinUrl)}" target="_blank" rel="noopener">
              <span class="contact-link-label">LinkedIn</span>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a class="contact-link" href="${esc(PROFILE.githubUrl)}" target="_blank" rel="noopener">
              <span class="contact-link-label">GitHub</span>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a class="contact-link" href="${esc(PROFILE.blogUrl)}" target="_blank" rel="noopener">
              <span class="contact-link-label">Blog</span>
              <span class="contact-link-arrow">↗</span>
            </a>
            <a class="contact-link" href="mailto:${esc(PROFILE.email)}">
              <span class="contact-link-label">${esc(PROFILE.email)}</span>
              <span class="contact-link-arrow">✉</span>
            </a>
          </div>
        </div>

        <div class="card" style="padding: 24px;">
          <h3>Certifications</h3>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${(CERTIFICATIONS || []).map(c => `
              <div style="padding: 10px 14px; background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 13px; color: var(--ink-2);">
                <span style="color:var(--accent); margin-right:8px;">◈</span>${esc(c.label)}
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ─── SKILLS ─────────────────────────────────────────── */
function initSkills() {
  const listMount = document.getElementById("skillsList");
  const relatedMount = document.getElementById("relatedProjects");
  if (!listMount || !relatedMount) return;

  listMount.innerHTML = "";

  SKILL_CATEGORIES.forEach(cat => {
    const section = el(`<div class="skill-section"></div>`);
    section.innerHTML = `<div class="skill-section-title">${esc(cat.title)}</div><div class="skill-bubbles" id="cat-${cat.id}"></div>`;
    const bubbleWrap = section.querySelector(`#cat-${cat.id}`);

    (cat.skills || []).forEach(skillId => {
      const label = skillName(skillId);
      const count = projectsForSkill(skillId).length;

      const bubble = el(`
        <button class="skill-bubble" type="button">
          <span class="skill-label">${label}</span>
          <span class="skill-meta">${count}</span>
        </button>
      `);

      const showRelated = () => {
        // Active state
        document.querySelectorAll(".skill-bubble").forEach(b => b.classList.remove("active"));
        bubble.classList.add("active");

        const related = projectsForSkill(skillId);

        if (related.length === 0) {
          relatedMount.innerHTML = `
            <div>
              <div style="font-size:13px; font-weight:700; color:var(--ink); margin-bottom:4px;">${esc(label)}</div>
              <p class="small" style="margin-top:8px;">No projects linked yet.</p>
            </div>
          `;
          return;
        }

        relatedMount.innerHTML = `
          <div>
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
              <div>
                <div style="font-family:var(--font-display); font-size:20px; color:var(--ink);">${esc(label)}</div>
                <div class="small" style="margin-top:2px;">${related.length} project${related.length !== 1 ? "s" : ""} use this skill</div>
              </div>
              <span class="badge badge-accent">${related.length}</span>
            </div>
            <div id="skillProjectsList"></div>
            <div id="skillProjectDetail" class="project-detail-box"></div>
          </div>
        `;

        const listEl = document.getElementById("skillProjectsList");

        related.forEach((p, i) => {
          const subtitle = (p.context ?? p.overview ?? "").trim();
          const item = el(`
            <button class="related-project-item ${i === 0 ? "active-item" : ""}" type="button">
              <div class="related-project-title">${esc(p.title)}</div>
              <div class="related-project-sub">${esc(subtitle)}</div>
            </button>
          `);
          item.addEventListener("click", () => {
            document.querySelectorAll(".related-project-item").forEach(x => x.classList.remove("active-item"));
            item.classList.add("active-item");
            renderProjectDetail(p.id, "skillProjectDetail");
          });
          listEl.appendChild(item);
        });

        renderProjectDetail(related[0].id, "skillProjectDetail");
      };

      bubble.addEventListener("mouseenter", showRelated);
      bubble.addEventListener("click", showRelated);
      bubbleWrap.appendChild(bubble);
    });

    listMount.appendChild(section);
  });

  // Certifications
  const certSection = el(`<div class="skill-section"></div>`);
  certSection.innerHTML = `<div class="skill-section-title">Certifications</div><div class="skill-bubbles" id="cert-bubbles"></div>`;
  const certWrap = certSection.querySelector("#cert-bubbles");

  (CERTIFICATIONS || []).forEach(c => {
    certWrap.appendChild(el(`
      <div class="skill-bubble cert-bubble">
        <span class="skill-label">${esc(c.label)}</span>
      </div>
    `));
  });

  listMount.appendChild(certSection);
}

function statusBadgeClass(status) {
  if (!status) return "badge";
  if (status === "Completed") return "badge badge-green";
  if (status === "In Progress") return "badge badge-yellow";
  return "badge";
}

/* ─── PROJECT DETAIL ─────────────────────────────────── */
function renderProjectDetail(projectId, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  const p = PROJECTS.find(x => x.id === projectId);
  if (!p) {
    mount.innerHTML = `<p class="small">Select a project to see details.</p>`;
    return;
  }

  const skillBadges = (p.skills || [])
    .map(id => `<span class="badge">${esc(skillName(id))}</span>`)
    .join("");

  const approachHtml = Array.isArray(p.approach) && p.approach.length
    ? `<ul class="detail-bullets">${p.approach.map(a => `<li>${esc(a)}</li>`).join("")}</ul>`
    : "";

  const impactHtml = Array.isArray(p.impact) && p.impact.length
    ? `<div class="detail-impact-grid">${p.impact.map(i => `<div class="impact-item">${esc(i)}</div>`).join("")}</div>`
    : "";

  const artifactHtml = p.reportUrl
    ? `<a class="inline" href="${esc(p.reportUrl)}" target="_blank" rel="noopener">Open report / results ↗</a>`
    : `<span class="small">No report linked yet.</span>`;

  // Map image — shown prominently if provided
  const imageHtml = p.image
    ? `<div class="detail-map-image">
        <img src="${esc(p.image)}" alt="${esc(p.title)} map output" />
        ${p.imageCaption ? `<div class="detail-map-caption">${esc(p.imageCaption)}</div>` : ""}
      </div>`
    : "";

  // Before / After — show as a two-column comparison if provided
  const beforeAfterHtml = p.beforeAfter
    ? `<div class="detail-section">
        <div class="detail-section-label">Before vs. After</div>
        <div class="before-after-grid">
          <div class="before-after-box before-box">
            <div class="before-after-label">Before</div>
            <p>${esc(p.beforeAfter.before)}</p>
          </div>
          <div class="before-after-box after-box">
            <div class="before-after-label">After</div>
            <p>${esc(p.beforeAfter.after)}</p>
          </div>
        </div>
      </div>`
    : "";

  mount.innerHTML = `
    <div class="project-detail-card">
      <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:16px; flex-wrap:wrap;">
        <div>
          <p class="kicker" style="margin-bottom:6px;">${esc(p.context || "")}</p>
          <h2 style="margin-bottom:0;">${esc(p.title || "Untitled")}</h2>
        </div>
        <span class="${statusBadgeClass(p.status)}">${esc(p.status || "")}</span>
      </div>

      ${imageHtml}

      ${p.problem ? `
        <div class="detail-section">
          <div class="detail-section-label">Problem</div>
          <p class="detail-outcome">${esc(p.problem)}</p>
        </div>
      ` : ""}

      ${approachHtml ? `
        <div class="detail-section">
          <div class="detail-section-label">Approach</div>
          ${approachHtml}
        </div>
      ` : ""}

      ${beforeAfterHtml}

      ${p.outcome ? `
        <div class="detail-section">
          <div class="detail-section-label">Outcome</div>
          <p class="detail-outcome">${esc(p.outcome)}</p>
        </div>
      ` : ""}

      ${impactHtml ? `
        <div class="detail-section">
          <div class="detail-section-label">Impact</div>
          ${impactHtml}
        </div>
      ` : ""}

      <div class="detail-section">
        <div class="detail-section-label">Artifacts</div>
        ${artifactHtml}
      </div>

      <div class="detail-section">
        <div class="detail-section-label">Skills Used</div>
        <div class="skills-chips">${skillBadges}</div>
      </div>
    </div>
  `;
}

/* ─── PROJECTS ───────────────────────────────────────── */
function initProjects() {
  const gridMount = document.getElementById("projectsGrid");
  const detailMount = document.getElementById("projectDetailBottom");
  if (!gridMount || !detailMount) return;

  gridMount.innerHTML = "";

  const professional = PROJECTS.filter(p => p.type === "professional");
  const academic = PROJECTS.filter(p => p.type !== "professional");

  renderProjectSection("Professional Experience", professional, gridMount, detailMount);
  renderProjectSection("Academic & Independent Projects", academic, gridMount, detailMount);

  const first = professional[0] || academic[0];
  if (first) renderProjectDetail(first.id, "projectDetailBottom");

  // Hash routing
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const target = PROJECTS.find(p => p.anchor === hash);
    if (target) {
      const cardEl = document.getElementById(`project-${hash}`);
      if (cardEl) {
        setTimeout(() => {
          cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
          cardEl.classList.add("highlighted");
          setTimeout(() => cardEl.classList.remove("highlighted"), 2000);
        }, 100);
      }
      renderProjectDetail(target.id, "projectDetailBottom");
    }
  }
}

function renderProjectSection(title, projects, gridMount, detailMount) {
  if (!projects || projects.length === 0) return;

  gridMount.appendChild(el(`<div class="project-section-title">${esc(title)}</div>`));

  const sectionGrid = el(`<div class="projects-grid stagger"></div>`);
  gridMount.appendChild(sectionGrid);

  projects.forEach(p => {
    const subtitle = (p.context ?? p.overview ?? "").trim();
    const tagsHtml = (p.skills || [])
      .slice(0, 4)
      .map(id => `<span class="badge">${esc(skillName(id))}</span>`)
      .join("");

    const card = el(`
      <button class="project-card" id="project-${p.anchor || p.id}" type="button">
        ${p.image ? `<div class="project-card-image"><img src="${esc(p.image)}" alt="${esc(p.title)}" /></div>` : ""}
        <div>
          <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:10px; margin-bottom:8px;">
            <div class="project-title">${esc(p.title || "Untitled")}</div>
            <span class="${statusBadgeClass(p.status)}" style="flex-shrink:0;">${esc(p.status || "")}</span>
          </div>
          <p class="project-subtitle">${esc(subtitle)}</p>
        </div>
        <div class="project-tags">${tagsHtml}</div>
      </button>
    `);

    card.addEventListener("click", () => {
      renderProjectDetail(p.id, "projectDetailBottom");
      detailMount.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    sectionGrid.appendChild(card);
  });
}

/* ─── FOOTER YEAR ────────────────────────────────────── */
function initFooterYear() {
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ─── INIT ───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initFooterYear();
  initHome();
  initAbout();
  initSkills();
  initProjects();
});
