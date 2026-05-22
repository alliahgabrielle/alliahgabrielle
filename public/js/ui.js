// ═══════════════════════════════════════════
//  ui.js — Cursor, theme toggle, scroll reveal, contact form
// ═══════════════════════════════════════════

// ── Custom cursor
function initCursor() {
  const cur  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  document.addEventListener('mousemove', e => {
    cur.style.left  = e.clientX + 'px';
    cur.style.top   = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  });
}

// ── Dark / Light theme
function initTheme() {
  const saved = localStorage.getItem('gab-theme');
  if (saved === 'light') document.body.classList.add('light');
  updateThemeIcons();
  document.getElementById('themeBtn').addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('gab-theme', document.body.classList.contains('light') ? 'light' : 'dark');
    updateThemeIcons();
  });
}

function updateThemeIcons() {
  const light = document.body.classList.contains('light');
  document.getElementById('moonIco').style.display = light ? 'none'  : 'block';
  document.getElementById('sunIco').style.display  = light ? 'block' : 'none';
}

// ── Scroll reveal (IntersectionObserver)
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── Contact form submission (simulated)
function submitForm() {
  const btn = document.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }, 1200);
}
