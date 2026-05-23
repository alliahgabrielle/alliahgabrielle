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

  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const msg     = document.getElementById('msg').value.trim();

  if (!fname || !email || !msg) {
    alert('Please fill in at least your name, email, and message.');
    return;
  }

  btn.textContent = 'Sending...';
  btn.disabled = true;

  emailjs.init(EMAILJS_PUBLIC_KEY);

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name:  fname + ' ' + lname,
    from_email: email,
    subject:    subject || 'No subject',
    message:    msg,
  })
  .then(() => {
    btn.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  })
  .catch((error) => {
    console.error('EmailJS error:', error);
    btn.textContent = 'Send Message ✦';
    btn.disabled = false;
    alert('Something went wrong. Please try again or email me directly.');
  });
}
