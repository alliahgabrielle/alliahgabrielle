// ═══════════════════════════════════════════
//  main.js — Entry point: wires everything together on DOMContentLoaded
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // ── Build dynamic DOM sections (from data.js + init.js)
  buildTechRows();
  buildWorksGrids();
  buildBlogs();
  buildCerts();

  // ── UI features (from ui.js)
  initCursor();
  initTheme();
  initReveal();

  // ── Navigation (from navigation.js)
  initNav();

  // ── Modals & keyboard (from modals.js)
  initWorksModal();
  initBlogModal();
  initKeyboardEscape();
});
