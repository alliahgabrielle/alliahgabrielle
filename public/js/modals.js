// ═══════════════════════════════════════════
//  modals.js — Works modal (gallery), Blog modal, Cert accordion
// ═══════════════════════════════════════════

// ────────────────────────────────────────────
//  WORKS / PROJECT MODAL
// ────────────────────────────────────────────
let galImages = [];
let galIdx    = 0;

function openModal(i) {
  const p = PROJECTS[i];

  document.getElementById('mCat').textContent   = p.cat;
  document.getElementById('mTitle').textContent = p.title;
  document.getElementById('mDesc').textContent  = p.desc;
  document.getElementById('mTags').innerHTML    = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const linkEl = document.getElementById('mLiveLink');
  if (p.link) {
    linkEl.innerHTML = `<a href="${p.link}" target="_blank" rel="noopener" class="modal-live-btn">
      View Live
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor"
        stroke-width="2.5" viewBox="0 0 24 24">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>`;
  } else {
    linkEl.innerHTML = `<span class="modal-live-unavailable">🔒 Not available to public</span>`;
  }

  galImages = p.images.length ? p.images : [''];
  galIdx    = 0;
  updateGallery();

  document.getElementById('worksModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateGallery() {
  const img = document.getElementById('modalImg');
  const src = galImages[galIdx];

  if (!src) {
    img.style.display = 'none';
  } else {
    img.style.display = 'block';
    img.src = src;
    img.onerror = () => { img.style.background = 'var(--surface2)'; };
  }

  document.getElementById('galCount').textContent = (galIdx + 1) + '/' + galImages.length;
  document.getElementById('galPrev').style.display = galImages.length > 1 ? 'flex' : 'none';
  document.getElementById('galNext').style.display = galImages.length > 1 ? 'flex' : 'none';
}

function closeWorksModal() {
  document.getElementById('worksModal').classList.remove('open');
  document.body.style.overflow = '';
}

function initWorksModal() {
  document.getElementById('galPrev').addEventListener('click', e => {
    e.stopPropagation();
    galIdx = (galIdx - 1 + galImages.length) % galImages.length;
    updateGallery();
  });

  document.getElementById('galNext').addEventListener('click', e => {
    e.stopPropagation();
    galIdx = (galIdx + 1) % galImages.length;
    updateGallery();
  });

  document.getElementById('worksModalClose').addEventListener('click', closeWorksModal);

  document.getElementById('worksModal').addEventListener('click', e => {
    if (e.target === document.getElementById('worksModal')) closeWorksModal();
  });
}

// ────────────────────────────────────────────
//  BLOG MODAL
// ────────────────────────────────────────────
function openBlog(i) {
  const b = BLOGS[i];

  document.getElementById('bmTag').textContent     = b.tag;
  document.getElementById('bmDate').textContent    = b.date;
  document.getElementById('bmTitle').textContent   = b.title;
  document.getElementById('bmContent').innerHTML   = b.content;

  document.getElementById('blogModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
  document.getElementById('blogModal').classList.remove('open');
  document.body.style.overflow = '';
}

function initBlogModal() {
  document.getElementById('blogModalClose').addEventListener('click', closeBlogModal);

  document.getElementById('blogModal').addEventListener('click', e => {
    if (e.target === document.getElementById('blogModal')) closeBlogModal();
  });
}

// ────────────────────────────────────────────
//  CERT ACCORDION (acts like an inline modal)
// ────────────────────────────────────────────
function toggleCert(i) {
  const body  = document.getElementById('cb' + i);
  const arrow = document.getElementById('ca' + i);
  const isOpen = body.classList.contains('open');

  // Close all first
  document.querySelectorAll('.cert-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.cert-arrow').forEach(a => a.classList.remove('open'));

  // Open clicked one if it wasn't already open
  if (!isOpen) {
    body.classList.add('open');
    arrow.classList.add('open');
  }
}

// ────────────────────────────────────────────
//  GLOBAL KEYBOARD ESCAPE
// ────────────────────────────────────────────
function initKeyboardEscape() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeWorksModal();
      closeBlogModal();
    }
  });
}
