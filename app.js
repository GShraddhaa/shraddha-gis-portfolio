import { PROFILE, SKILLS, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from "./data.js";

function setActiveNav() {
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === file) a.classList.add("active");
  });
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function findProjectsBySkill(skillId) {
  return PROJECTS.filter(p => p.skills.includes(skillId));
}

function skillName(skillId) {
  return SKILLS.find(s => s.id === skillId)?.name || skillId;
}

function escapeHtml(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderBullets(items = []) {
  if (!Array.isArray(items) || items.length === 0) return "";
  const lis = items.map(x => `<li>${escapeHtml(x)}</li>`).join("");
  return `<ul style="margin:8px 0 0; padding-left:18px; color:#333;">${lis}</ul>`;
}

function renderSection(title, bodyHtml) {
  if (!bodyHtml || bodyHtml.trim() === "") return "";
  return `
    <div style="margin-top:14px;">
      <div class="small" style="font-weight:700; color:#111; margin-bottom:6px;">${escapeHtml(title)}</div>
      ${bodyHtml}
    </div>
  `;
}

function renderProjectDetail(projectId, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  const p = PROJECTS.find(x => x.id === projectId);
  if (!p) {
    mount.innerHTML = `<div class="card">Select a project to see details.</div>`;
    return;
  }

  const skillsBadges = (p.skills || [])
    .map(id => `<span class="badge">${escapeHtml(skillName(id))}</span>`)
    .join(" ");

  // Support BOTH structured case study fields and older "overview" field
  const context = p.context ? `<p class="small" style="margin:6px 0 0;">${escapeHtml(p.context)}</p>` : "";

  const problemHtml = p.problem
    ? `<p style="margin:0; color:#333;">${escapeHtml(p.problem)}</p>`
    : "";

  const approachHtml = renderBullets(p.approach);

  const outcomeHtml = p.outcome
    ? `<p style="margin:0; color:#333;">${escapeHtml(p.outcome)}</p>`
    : (p.overview ? `<p style="margin:0; color:#333;">${escapeHtml(p.overview)}</p>` : "");

  const impactHtml = renderBullets(p.impact);

  const reportHtml = p.reportUrl
    ? `<a class="inline" href="${escapeHtml(p.reportUrl)}" target="_blank" rel="noopener">View report/results</a>`
    : `<span class="small">No report link yet.</span>`;

  mount.innerHTML = `
    <div class="card">
      <div class="row">
        <div>
          <h2 style="margin:0;">${escapeHtml(p.title || "Untitled Project")}</h2>
          ${context}
        </div>
        <span class="badge">${escapeHtml(p.status || "Status")}</span>
      </div>

      ${renderSection("Problem", problemHtml)}
      ${renderSection("Approach", approachHtml)}
      ${renderSection("Outcome", outcomeHtml)}
      ${renderSection("Impact", impactHtml)}

      <div style="margin-top:14px;">
        <div class="small" style="font-weight:700; color:#111; margin-bottom:6px;">Artifacts</div>
        ${reportHtml}
      </div>

      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:14px;">
        ${skillsBadges}
      </div>
    </div>
  `;
}

function initHome() {
  const mount = document.getElementById("homeProfile");
  if (!mount) return;

  

  const highlightsHtml = (PROFILE.highlights || [])
  .map(h => `
    <li>
      <a
        href="projects.html#${h.target}"
        class="highlight-link"
      >
        ${escapeHtml(h.text)}
      </a>
    </li>
  `)
  .join("");

  
  const photoHtml = PROFILE.profileImage
  ? `
    <div class="map-card">
      <img
        src="${escapeHtml(PROFILE.profileImage)}"
        alt="Profile photo of ${escapeHtml(PROFILE.name)}"
        class="profile-photo"
      />
      <div class="map-caption">
        43.4516° N, 80.4925° W · Kitchener, ON
      </div>
    </div>
  `
  : "";
  

  mount.innerHTML = `
    <div class="card">
      <p class="kicker">${escapeHtml(PROFILE.location || "")}</p>
      <h1 style="margin:0 0 8px;">${escapeHtml(PROFILE.name || "")}</h1>
      <p class="small" style="margin:0 0 10px;"><strong>${escapeHtml(PROFILE.role || "")}</strong></p>

      <p class="tagline" style="margin:0 0 10px;">${escapeHtml(PROFILE.headline || "")}</p>
      <p class="tagline" style="margin:0 0 14px;">${escapeHtml(PROFILE.shortOverview || "")}</p>

      <div class="card" style="padding:14px; border-radius:14px; background:#fafafa;">
        <div class="small" style="font-weight:700; color:#111; margin-bottom:6px;">Highlights</div>
        <ul style="margin:0; padding-left:18px;">
          ${highlightsHtml}
        </ul>
      </div>

      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top: 14px;">
        <a class="button" href="projects.html">Projects</a>
        <a class="button ghost" href="skills.html">Skills</a>
        <a class="button ghost" href="about.html">About</a>
      </div>

    </div>
  `;
}

function initAbout() {
  const mount = document.getElementById("aboutProfile");
  if (!mount) return;

  const storyParas = (PROFILE.aboutStory || "")
    .trim()
    .split("\n\n")
    .filter(Boolean)
    .map(p => `<p class="about-paragraph">${escapeHtml(p)}</p>`)
    .join("");

  const whatHtml = (PROFILE.whatIBring || [])
    .map(x => `<li>${escapeHtml(x)}</li>`)
    .join("");

  const endLineHtml = PROFILE.endLine
  ? `<p class="about-endline">${escapeHtml(PROFILE.endLine)}</p>`
  : "";
  
  mount.innerHTML = `
    <div class="card">
      <p class="kicker">About</p>
      <h1 style="margin:0 0 8px;">${escapeHtml(PROFILE.name || "")}</h1>

      <p class="about-paragraph" style="font-weight:600;">
        ${escapeHtml(PROFILE.aboutIntro || "")}
      </p>

      ${storyParas}

      <div style="margin-top:14px;">
        <div class="small" style="font-weight:700; color:#111; margin-bottom:6px;">What I bring</div>
        <ul style="margin:0; padding-left:18px;">
          ${whatHtml}
        </ul>
      </div>

      ${endLineHtml}

      <hr/>

      <div class="list">
        <div class="item">
          <div class="row">
            <span><strong>Resume</strong></span>
            <a class="inline" href="${escapeHtml(PROFILE.resumeUrl || "#")}" target="_blank" rel="noopener">Open</a>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <span><strong>LinkedIn</strong></span>
            <a class="inline" href="${escapeHtml(PROFILE.linkedinUrl || "#")}" target="_blank" rel="noopener">Visit</a>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <span><strong>GitHub</strong></span>
            <a class="inline" href="${escapeHtml(PROFILE.githubUrl || "#")}" target="_blank" rel="noopener">Visit</a>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <span><strong>Blog</strong></span>
            <a class="inline" href="${escapeHtml(PROFILE.blogUrl || "#")}" target="_blank" rel="noopener">Visit</a>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <span><strong>Email</strong></span>
            <a class="inline" href="mailto:${escapeHtml(PROFILE.email || "")}">${escapeHtml(PROFILE.email || "")}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initSkills() {
  const listMount = document.getElementById("skillsList");
  const relatedMount = document.getElementById("relatedProjects");
  if (!listMount || !relatedMount) return;

  // Render the right panel default state
  relatedMount.innerHTML = `<div class="card">Hover or click a skill to see related projects.</div>`;

  // Helper: projects that use a skill
  function projectsForSkill(skillId) {
    return PROJECTS.filter(p => (p.skills || []).includes(skillId));
  }

  // Build the left panel: categories + bubbles
  listMount.innerHTML = "";

  SKILL_CATEGORIES.forEach(cat => {
    const section = el(`
      <div class="skill-section">
        <div class="skill-section-title">${cat.title}</div>
        <div class="skill-bubbles" id="cat-${cat.id}"></div>
      </div>
    `);

    const bubbleWrap = section.querySelector(`#cat-${cat.id}`);

    (cat.skills || []).forEach(skillId => {
      const label = skillName(skillId);
      const count = projectsForSkill(skillId).length;

      const bubble = el(`
        <button class="skill-bubble" type="button" aria-label="${label}">
          <span class="skill-label">${label}</span>
          <span class="skill-meta">${count}</span>
        </button>
      `);

      const showRelated = () => {
        const related = projectsForSkill(skillId);

        relatedMount.innerHTML = `
          <div class="card">
            <div class="row">
              <h2 style="margin:0;">${label}</h2>
              <span class="badge">${related.length} project(s)</span>
            </div>
            <p class="small">Click a project to view the case study.</p>
            <div id="skillProjectsList" class="list"></div>
            <hr/>
            <div id="skillProjectDetail"></div>
          </div>
        `;

        const skillProjectsList = document.getElementById("skillProjectsList");

        if (related.length === 0) {
          skillProjectsList.innerHTML = `<div class="item"><div class="small">No projects linked yet.</div></div>`;
          document.getElementById("skillProjectDetail").innerHTML =
            `<div class="card">Add this skill to a project’s <code>skills</code> array to show it here.</div>`;
          return;
        }

        related.forEach(p => {
          const subtitle = (p.context ?? p.overview ?? "").trim();

          const item = el(`
            <button class="item" style="text-align:left; cursor:pointer;">
              <div class="row">
                <div>
                  <div><strong>${p.title}</strong></div>
                  <div class="small">${subtitle}</div>
                </div>
                <span class="badge">${p.status || ""}</span>
              </div>
            </button>
          `);

          item.addEventListener("click", () => renderProjectDetail(p.id, "skillProjectDetail"));
          skillProjectsList.appendChild(item);
        });

        // default project detail
        renderProjectDetail(related[0].id, "skillProjectDetail");
      };

      // Hover = preview, Click = lock (same behavior, simple and intuitive)
      bubble.addEventListener("mouseenter", showRelated);
      bubble.addEventListener("click", showRelated);

      bubbleWrap.appendChild(bubble);
    });

    listMount.appendChild(section);
  });

  // Certifications section (separate)
  const certSection = el(`
    <div class="skill-section">
      <div class="skill-section-title">Certifications</div>
      <div class="skill-bubbles" id="cert-bubbles"></div>
    </div>
  `);

  const certWrap = certSection.querySelector("#cert-bubbles");

  (CERTIFICATIONS || []).forEach(c => {
    const bubble = el(`
      <div class="skill-bubble cert-bubble" role="note">
        <span class="skill-label">${c.label}</span>
      </div>
    `);
    certWrap.appendChild(bubble);
  });

  listMount.appendChild(certSection);
}

function initProjects() {
  const gridMount = document.getElementById("projectsGrid");
  const detailMount = document.getElementById("projectDetailBottom");
  if (!gridMount || !detailMount) return;

  gridMount.innerHTML = "";

  const professional = PROJECTS.filter(p => p.type === "professional");
  const academic = PROJECTS.filter(p => p.type !== "professional");

  renderProjectSection("Professional Experience", professional, gridMount, detailMount);
  renderProjectSection("Academic & Independent Projects", academic, gridMount, detailMount);

  // Default detail: first professional project if available, else first academic project
  const first = professional[0] || academic[0];
  if (first) renderProjectDetail(first.id, "projectDetailBottom");

  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const targetProject = PROJECTS.find(p => p.anchor === hash);
    if (targetProject) {
      const cardEl = document.getElementById(`project-${hash}`);
      if (cardEl) {
        cardEl.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
  
        // 🔹 Highlight the card briefly
        cardEl.classList.add("highlighted");
        setTimeout(() => {
          cardEl.classList.remove("highlighted");
        }, 2000);
      }
  
      // Open the project details at the bottom
      renderProjectDetail(targetProject.id, "projectDetailBottom");
    }
  }  

}

function renderProjectSection(title, projects, gridMount, detailMount) {
  if (!projects || projects.length === 0) return;

  // Section header
  gridMount.appendChild(el(`<div class="project-section-title">${escapeHtml(title)}</div>`));

  // Section grid (3 per row via your .projects-grid CSS)
  const sectionGrid = el(`<div class="projects-grid"></div>`);
  gridMount.appendChild(sectionGrid);

  projects.forEach(p => {
    const subtitle = (p.context ?? p.overview ?? "").trim();
    const tagsHtml = (p.skills || [])
      .slice(0, 5)
      .map(id => `<span class="badge">${escapeHtml(skillName(id))}</span>`)
      .join(" ");

    const card = el(`
      <button class="project-card" id="project-${p.anchor}" type="button">
        <div class="row project-card-header">
          <div style="min-width:0;">
            <div class="project-title">${escapeHtml(p.title || "Untitled Project")}</div>
            <p class="project-subtitle">${escapeHtml(subtitle)}</p>
          </div>
          <span class="badge">${escapeHtml(p.status || "")}</span>
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


function initFooterYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initFooterYear();

  initHome();
  initAbout();
  initSkills();
  initProjects();
});
