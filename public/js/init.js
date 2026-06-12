// ═══════════════════════════════════════════
//  init.js — DOM builders: tech rows, works grids, blogs, certs
// ═══════════════════════════════════════════

// ── Tech stack marquee rows
function buildTechRows() {
  const rows = [
    [TECH_ROW1, 'r1a', 'r1b'],
    [TECH_ROW2, 'r2a', 'r2b'],
    [TECH_ROW3, 'r3a', 'r3b'],
  ];

  rows.forEach(([data, idA, idB]) => {
    const html = data.map(t =>
      `<div class="tech-pill">
        <img src="${t.img}" alt="${t.name}" onerror="this.style.display='none'">
        <span>${t.name}</span>
      </div>`
    ).join('');
    document.getElementById(idA).innerHTML = html;
    document.getElementById(idB).innerHTML = html;
  });
}

// ── Works grids (one per tab)
function buildWorksGrids() {
  const tabs = {
    web: [],
    automation: [],
    graphic: [],
    video: []
  };
  PROJECTS.forEach((p, i) => tabs[p.tab].push({
    ...p,
    idx: i
  }));

  Object.entries(tabs).forEach(([tab, projs]) => {
    const grid = document.getElementById('grid-' + tab);
    if (!grid) return;

    if (projs.length === 0) {
      grid.innerHTML = `<div class="placeholder-card">
        <span style="font-size:2.5rem">✦</span>
        <p>Coming soon! Check back for updates.</p>
      </div>`;
      return;
    }

    grid.innerHTML = projs.map(p => {
      // Use coverImage for graphic/video, otherwise first image
      const thumbSrc = p.coverImage || (p.images && p.images[0]) || '';

      const imgHtml = thumbSrc ?
        `<img src="${thumbSrc}" alt="${p.title}"
            onerror="this.parentElement.innerHTML='<div class=work-img-placeholder>✦</div>'">` :
        `<div class="work-img-placeholder">✦</div>`;

      const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

      // Graphic and video get a "View Gallery" label on hover instead of arrow
      const overlayLabel = (tab === 'graphic' || tab === 'video') ?
        `<div class="work-overlay-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
              stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>` :
        `<div class="work-overlay-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
              stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>`;

      return `<div class="work-card" onclick="openModal(${p.idx})">
        <div class="work-card-img">
          ${imgHtml}
          <div class="work-card-overlay">${overlayLabel}</div>
        </div>
        <div class="work-card-body">
          <div class="work-cat">${p.cat}</div>
          <div class="work-title">${p.title}</div>
          <div class="work-desc">${p.desc.split('\n')[0].substring(0, 120)}...</div>
          <div class="work-tags">${tagsHtml}</div>
        </div>
      </div>`;
    }).join('');
  });
}

// ── Blog cards grid
function buildBlogs() {
  const grid = document.getElementById('blogsGrid');
  const emojis = ['✍️', '💻', '🌏', '🎨'];

  grid.innerHTML = BLOGS.map((b, i) => `
    <div class="blog-card" onclick="openBlog(${i})">
      <div class="blog-card-img">
        <div class="blog-img-placeholder"
          style="background:linear-gradient(135deg,
            hsl(${i * 45 + 10},30%,14%) 0%,
            hsl(${i * 45 + 30},20%,10%) 100%)">
          ${emojis[i] || '✦'}
        </div>
      </div>
      <div class="blog-card-body">
        <div class="blog-meta">
          <span class="blog-tag">${b.tag}</span>
          <span class="blog-date">${b.date}</span>
        </div>
        <div class="blog-title">${b.title}</div>
        <div class="blog-excerpt">${b.excerpt}</div>
        <button class="blog-read-more">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"
               stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>`).join('');
}

// ── Certifications accordion list
function buildCerts() {
  const list = document.getElementById('certList');

  list.innerHTML = CERTS.map((c, i) => `
    <div class="cert-item">
      <div class="cert-trigger" onclick="toggleCert(${i})">
        <div class="cert-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
               stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944
              a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9
              c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622
              0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
        <div class="cert-info">
          <div class="cert-name">${c.name}</div>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
        <svg class="cert-arrow" id="ca${i}" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
             fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="cert-body" id="cb${i}">
        <img src="${c.img}" alt="${c.name}" onerror="this.style.display='none'">
        <div class="cert-actions">
          <a href="${c.pdf}" download class="cert-action cert-action-primary">Download PDF</a>
          <button onclick="toggleCert(${i})" class="cert-action cert-action-ghost">Close</button>
        </div>
      </div>
    </div>`).join('');
}