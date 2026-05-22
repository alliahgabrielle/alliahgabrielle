// ═══════════════════════════════════════════
//  navigation.js — Page routing, tabs, mobile nav
// ═══════════════════════════════════════════

function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('[data-page]').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('[data-page="' + id + '"]').forEach(b => b.classList.add('active'));
  window.scrollTo({ top: 0, behavior: 'instant' });
  closeMob();
  // Re-trigger reveals on newly visible page
  setTimeout(() => {
    document.querySelectorAll('#page-' + id + ' .reveal:not(.visible)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('visible');
    });
  }, 100);
}

function switchTab(t) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const btn = document.querySelector('[data-tab="' + t + '"]');
  if (btn) btn.classList.add('active');
  const panel = document.getElementById('tab-' + t);
  if (panel) panel.classList.add('active');
}

function closeMob() {
  document.getElementById('mobNav').classList.remove('open');
}

function initNav() {
  // Hamburger open
  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('mobNav').classList.toggle('open');
  });

  // Mobile close button
  document.getElementById('mobClose').addEventListener('click', closeMob);

  // Works tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}
