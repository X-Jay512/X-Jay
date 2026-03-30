// ===== ICON SVGs =====
const ICONS = {
  mesh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
};

const DOWNLOAD_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

const isAdmin = localStorage.getItem('xjay_admin') === 'true';
let siteData = null;

if (isAdmin) {
  const s = document.createElement('style');
  s.textContent = `
    .admin-bar{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(10,10,20,0.95);border-bottom:1px solid var(--neon-cyan);padding:8px 20px;display:flex;align-items:center;gap:10px;backdrop-filter:blur(12px)}
    .admin-bar__label{font-size:.75rem;font-weight:700;color:var(--neon-cyan);text-transform:uppercase;letter-spacing:1px;margin-right:auto}
    .admin-bar__btn{padding:6px 14px;border-radius:var(--radius-xs);font-size:.78rem;font-weight:600;cursor:pointer;font-family:inherit;border:none;transition:var(--transition-fast)}
    .admin-bar__btn--publish{background:var(--accent-gradient);color:#fff}
    .admin-bar__btn--token{background:rgba(255,255,255,.08);color:var(--text-secondary);font-size:.9rem;padding:6px 10px}
    .admin-bar__btn--logout{background:transparent;border:1px solid rgba(255,77,106,.3);color:#ff4d6a}
    .admin-bar__btn:hover{opacity:.85;transform:translateY(-1px)}
    body.is-admin{padding-top:44px}
    .admin-add-btn{display:flex;align-items:center;justify-content:center;gap:6px;padding:8px;background:transparent;border:1px dashed var(--neon-cyan);border-radius:var(--radius-sm);color:var(--neon-cyan);font-size:.78rem;font-weight:600;cursor:pointer;font-family:inherit;margin-bottom:10px;transition:var(--transition-fast);opacity:.6}
    .admin-add-btn:hover{opacity:1;background:rgba(0,212,255,.05)}
    .product-wrapper{position:relative}
    .admin-controls{position:absolute;top:8px;right:8px;display:none;gap:4px;z-index:5}
    .product-wrapper:hover .admin-controls{display:flex}
    .admin-ctrl-btn{width:26px;height:26px;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;font-size:.7rem;transition:var(--transition-fast)}
    .admin-ctrl-btn--edit{background:rgba(0,212,255,.15);color:var(--neon-cyan)}
    .admin-ctrl-btn--del{background:rgba(255,77,106,.15);color:#ff4d6a}
    .admin-ctrl-btn:hover{transform:scale(1.1)}
    .overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:1999}
    .inline-edit{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2000;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius);padding:24px;width:480px;max-width:92vw;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.5)}
    .inline-edit__title{font-size:.95rem;font-weight:700;margin-bottom:16px}
    .inline-edit .form-group{margin-bottom:12px}
    .inline-edit .form-label{display:block;font-size:.7rem;color:var(--text-muted);margin-bottom:5px;text-transform:uppercase;letter-spacing:1px;font-weight:600}
    .inline-edit .form-input{width:100%;padding:9px 12px;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:var(--radius-sm);color:var(--text-primary);font-size:.85rem;font-family:inherit;outline:none}
    .inline-edit .form-input:focus{border-color:var(--neon-cyan)}
    .inline-edit textarea.form-input{resize:vertical;min-height:80px}
    .inline-edit select.form-input{appearance:auto}
    .inline-edit__row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .inline-edit__actions{display:flex;gap:8px;margin-top:16px}
    .inline-edit__btn{flex:1;padding:10px;border-radius:var(--radius-sm);font-size:.82rem;font-weight:600;cursor:pointer;font-family:inherit;border:none}
    .inline-edit__btn--apply{background:var(--accent-gradient);color:#fff}
    .inline-edit__btn--cancel{background:transparent;border:1px solid var(--border-color);color:var(--text-secondary)}
    .inline-edit__btn--delete{background:rgba(255,77,106,.1);border:1px solid rgba(255,77,106,.2);color:#ff4d6a;flex:0 0 auto;width:42px}
    .inline-edit__btn:hover{opacity:.9}
    .picker-grid{display:flex;gap:5px;flex-wrap:wrap}
    .picker-item{width:36px;height:36px;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px solid transparent;background:var(--bg-primary);transition:var(--transition-fast)}
    .picker-item:hover{border-color:var(--border-hover)}
    .picker-item.active{border-color:var(--neon-cyan)}
    .picker-item svg{width:16px;height:16px;color:var(--neon-cyan)}
    .color-dot{width:18px;height:18px;border-radius:50%}
    .color-dot--cyan{background:var(--neon-cyan)}
    .color-dot--pink{background:var(--neon-pink)}
    .color-dot--indigo{background:#5865F2}
    .social-btn.editable{cursor:pointer}
    .social-btn.editable:hover{border-color:var(--neon-cyan)}
    .admin-toast{position:fixed;bottom:20px;right:20px;padding:12px 20px;background:var(--bg-card);border:1px solid var(--neon-cyan);border-radius:var(--radius-sm);color:var(--neon-cyan);font-size:.82rem;font-weight:500;z-index:3000;opacity:0;transform:translateY(20px);transition:all .3s ease;pointer-events:none}
    .admin-toast.show{opacity:1;transform:translateY(0)}
    .product-item--empty{display:none!important}
    .product-item__download{display:none!important}
    .admin-desc-edit{width:100%;padding:10px 12px;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:var(--radius-xs);color:var(--text-primary);font-size:.82rem;font-family:inherit;resize:vertical;min-height:60px;outline:none;line-height:1.6}
    .admin-desc-edit:focus{border-color:var(--neon-cyan)}
    .admin-img-actions{display:flex;gap:6px;margin-top:10px;flex-wrap:wrap}
    .admin-img-btn{padding:6px 12px;background:rgba(0,212,255,.08);border:1px dashed var(--neon-cyan);border-radius:var(--radius-xs);color:var(--neon-cyan);font-size:.75rem;cursor:pointer;font-family:inherit;transition:var(--transition-fast)}
    .admin-img-btn:hover{background:rgba(0,212,255,.15)}
    .admin-img-remove{position:absolute;top:4px;right:4px;width:20px;height:20px;border-radius:50%;background:rgba(255,77,106,.9);border:none;color:#fff;font-size:.65rem;cursor:pointer;z-index:4;display:flex;align-items:center;justify-content:center}
    .carousel__slide{position:relative}
    .admin-file-input{display:none}
  `;
  document.head.appendChild(s);
}

// ===== LOAD & RENDER =====
// SHA-256 hash
async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function showLoginModal() {
  const overlay = document.createElement('div');
  overlay.id = 'loginOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px)';
  overlay.innerHTML = `
    <div style="max-width:360px;width:90%;padding:36px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius);text-align:center;">
      <h2 style="font-size:1.3rem;margin-bottom:24px;color:var(--text-primary)">🔒 Admin Login</h2>
      <div style="margin-bottom:16px;text-align:left;">
        <label style="display:block;font-size:.75rem;color:var(--text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;font-weight:600">Username</label>
        <input type="text" id="loginUser" placeholder="Username" autocomplete="off" style="width:100%;padding:10px 14px;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:var(--radius-sm);color:var(--text-primary);font-size:.9rem;font-family:inherit;outline:none">
      </div>
      <div style="margin-bottom:16px;text-align:left;">
        <label style="display:block;font-size:.75rem;color:var(--text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;font-weight:600">Password</label>
        <input type="password" id="loginPass" placeholder="Password" style="width:100%;padding:10px 14px;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:var(--radius-sm);color:var(--text-primary);font-size:.9rem;font-family:inherit;outline:none">
      </div>
      <p id="loginErr" style="color:#ff4d6a;font-size:.8rem;margin-bottom:12px;display:none">Wrong username or password</p>
      <button id="loginBtn" style="width:100%;padding:12px;background:var(--accent-gradient);color:#fff;border:none;border-radius:var(--radius-sm);font-size:.9rem;font-weight:600;cursor:pointer;font-family:inherit">Login</button>
      <button id="loginClose" style="width:100%;padding:8px;background:transparent;color:var(--text-muted);border:none;font-size:.8rem;cursor:pointer;margin-top:10px;font-family:inherit">Cancel</button>
    </div>
  `;
  document.body.appendChild(overlay);

  const _u = '87e885298ec4bd60ddf1aa6cf19cfb898e4b2d8886edaf1d8380029462033569';
  const _p = 'b245b46180c2ec88da98e109b5cc8d036198aa1fd8d05027512ed51be846cb31';

  async function tryLogin() {
    const uh = await sha256(document.getElementById('loginUser').value);
    const ph = await sha256(document.getElementById('loginPass').value);
    if (uh === _u && ph === _p) {
      localStorage.setItem('xjay_admin', 'true');
      overlay.remove();
      window.location.hash = '';
      location.reload();
    } else {
      document.getElementById('loginErr').style.display = 'block';
    }
  }

  document.getElementById('loginBtn').addEventListener('click', tryLogin);
  document.querySelectorAll('#loginUser,#loginPass').forEach(el => el.addEventListener('keydown', e => { if (e.key === 'Enter') tryLogin(); }));
  document.getElementById('loginClose').addEventListener('click', () => { overlay.remove(); window.location.hash = ''; });
  setTimeout(() => document.getElementById('loginUser').focus(), 100);
}

const _ah = '4de365d763d059f16773d597405a2de103137a37135708322059a83d47492c52';
async function checkAdminHash() {
  if (!isAdmin && window.location.hash.length > 1) {
    const h = await sha256(window.location.hash.slice(1));
    if (h === _ah) showLoginModal();
  }
}
window.addEventListener('hashchange', checkAdminHash);

async function loadSite() {
  const saved = localStorage.getItem('xjay_data');
  if (saved) { try { siteData = JSON.parse(saved); } catch(e) { siteData = null; } }
  if (!siteData) {
    try { const r = await fetch('data.json'); siteData = await r.json(); }
    catch(e) { console.error('Could not load data.json', e); return; }
  }
  siteData.products.forEach(p => { if (!p.description) p.description = ''; if (!p.images) p.images = []; });

  const discordLink = document.getElementById('discord-link');
  const emailLink = document.getElementById('email-link');
  if (discordLink) discordLink.href = siteData.contact.discord;
  if (emailLink) emailLink.href = 'mailto:' + siteData.contact.email;

  renderProducts();
  if (isAdmin) setupAdmin();
  checkAdminHash();
}

function renderProducts() {
  const grid = document.getElementById('contentGrid');
  if (!grid) return;

  const unity = siteData.products.filter(p => p.category === 'unity');
  const other = siteData.products.filter(p => p.category === 'other');

  grid.innerHTML = `
    <div class="content-col" id="colUnity">
      <div class="content-col__header">
        <h2 class="content-col__title">UNITY ASSETS</h2>
        <span class="badge badge--store">STORE</span>
      </div>
      ${isAdmin ? '<button class="admin-add-btn" data-addcat="unity">+ Add Unity Asset</button>' : ''}
      ${unity.map(p => renderProduct(p, siteData.products.indexOf(p))).join('')}
    </div>
    <div class="content-col" id="colOther">
      <div class="content-col__header">
        <h2 class="content-col__title">OTHER PROJECTS</h2>
        <span class="badge badge--more">MORE</span>
      </div>
      ${isAdmin ? '<button class="admin-add-btn" data-addcat="other">+ Add Project</button>' : ''}
      ${other.map(p => renderProduct(p, siteData.products.indexOf(p))).join('')}
    </div>
  `;

  bindEvents();
  bindSearch();
}

function renderProduct(p, di) {
  const iconSVG = ICONS[p.icon] || ICONS.box;
  const imgs = p.images || [];

  const downloadBtn = !isAdmin ? `
    <a href="${p.link || '#'}" ${p.link && p.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="product-item__download" onclick="event.stopPropagation();">
      ${DOWNLOAD_SVG}
    </a>` : '';

  const adminBtns = isAdmin ? `
    <div class="admin-controls">
      <button class="admin-ctrl-btn admin-ctrl-btn--edit" data-editidx="${di}">✏️</button>
      <button class="admin-ctrl-btn admin-ctrl-btn--del" data-delidx="${di}">✕</button>
    </div>` : '';

  // Carousel (no admin remove buttons - managed in Edit popup)
  let carouselHTML = '';
  if (imgs.length > 0) {
    carouselHTML = `
      <div class="carousel" data-carousel="${di}">
        <div class="carousel__track">
          ${imgs.map((img, i) => `<div class="carousel__slide">
            <img src="${img}" alt="Screenshot ${i+1}">
          </div>`).join('')}
        </div>
        ${imgs.length > 1 ? `
          <button class="carousel__btn carousel__btn--prev" data-cprev="${di}">‹</button>
          <button class="carousel__btn carousel__btn--next" data-cnext="${di}">›</button>
          <div class="carousel__dots">
            ${imgs.map((_, i) => `<button class="carousel__dot ${i===0?'active':''}" data-cdot="${di}" data-slide="${i}"></button>`).join('')}
          </div>` : ''}
      </div>`;
  }

  // Description - always a paragraph (editing is in the Edit popup)
  const descHTML = p.description ? `<p class="product-detail__desc">${p.description}</p>` : '';

  return `
    <div class="product-wrapper" data-wrapidx="${di}" data-name="${p.name.toLowerCase()}" data-tags="${(p.subtitle + ' ' + (p.description||'')).toLowerCase()}">
      ${adminBtns}
      <div class="product-item" data-idx="${di}">
        <div class="product-item__icon product-item__icon--${p.color}">${iconSVG}</div>
        <div class="product-item__info">
          <span class="product-item__name">${p.name}</span>
          <span class="product-item__sub">${p.subtitle}</span>
        </div>
        ${downloadBtn}
      </div>
      <div class="product-detail" id="detail${di}">
        <div class="product-detail__inner">
          ${carouselHTML}
          ${descHTML}
        </div>
      </div>
    </div>`;
}

// ===== EVENTS =====
function bindEvents() {
  const grid = document.getElementById('contentGrid');
  if (!grid) return;

  // Remove old listeners by cloning
  const fresh = grid.cloneNode(true);
  grid.parentNode.replaceChild(fresh, grid);

  fresh.addEventListener('click', handleClick);
}

function handleClick(e) {
  // Admin: Edit button
  const editBtn = e.target.closest('[data-editidx]');
  if (editBtn && isAdmin) { e.preventDefault(); e.stopPropagation(); showProductEdit(parseInt(editBtn.dataset.editidx)); return; }

  // Admin: Delete button
  const delBtn = e.target.closest('[data-delidx]');
  if (delBtn && isAdmin) { e.preventDefault(); e.stopPropagation(); deleteProduct(parseInt(delBtn.dataset.delidx)); return; }

  // Admin: Add product
  const addBtn = e.target.closest('[data-addcat]');
  if (addBtn && isAdmin) { e.stopPropagation(); addProduct(addBtn.dataset.addcat); return; }


  // Carousel prev/next/dot
  const prevBtn = e.target.closest('[data-cprev]');
  if (prevBtn) { e.stopPropagation(); moveCarousel(parseInt(prevBtn.dataset.cprev), -1); return; }
  const nextBtn = e.target.closest('[data-cnext]');
  if (nextBtn) { e.stopPropagation(); moveCarousel(parseInt(nextBtn.dataset.cnext), 1); return; }
  const dot = e.target.closest('[data-cdot]');
  if (dot) { e.stopPropagation(); goToSlide(parseInt(dot.dataset.cdot), parseInt(dot.dataset.slide)); return; }

  // Don't expand if clicking inside detail area (textarea, buttons)
  if (e.target.closest('.product-detail')) return;
  if (e.target.closest('.product-item__download')) return;

  // Toggle expand
  const item = e.target.closest('.product-item[data-idx]');
  if (item) {
    e.preventDefault();
    const isExpanded = item.classList.contains('expanded');
    // Close all
    document.querySelectorAll('.product-item.expanded').forEach(el => el.classList.remove('expanded'));
    if (!isExpanded) item.classList.add('expanded');
  }
}



// ===== CAROUSEL =====
const carouselState = {};
function moveCarousel(idx, dir) {
  if (!carouselState[idx]) carouselState[idx] = 0;
  const total = siteData.products[idx].images.length;
  carouselState[idx] = (carouselState[idx] + dir + total) % total;
  updateCarousel(idx);
}
function goToSlide(idx, slide) { carouselState[idx] = slide; updateCarousel(idx); }
function updateCarousel(idx) {
  const c = document.querySelector(`[data-carousel="${idx}"]`);
  if (!c) return;
  const track = c.querySelector('.carousel__track');
  const dots = c.querySelectorAll('.carousel__dot');
  const cur = carouselState[idx] || 0;
  track.style.transform = `translateX(-${cur * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === cur));
}

// ===== SEARCH =====
function bindSearch() {
  const si = document.getElementById('searchInput');
  if (!si) return;
  const fresh = si.cloneNode(true);
  si.parentNode.replaceChild(fresh, si);
  fresh.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.product-wrapper').forEach(w => {
      const name = w.dataset.name || '';
      const tags = w.dataset.tags || '';
      w.classList.toggle('hidden', q && !name.includes(q) && !tags.includes(q));
    });
  });
}

const GH_OWNER = 'X-Jay512';
const GH_REPO = 'X-Jay';
const GH_BRANCH = 'main';

function getToken() { return localStorage.getItem('xjay_gh_token'); }

async function ghAPI(path, method = 'GET', body = null) {
  const token = getToken();
  if (!token) throw new Error('No token');
  const opts = {
    method,
    headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json' }
  };
  if (body) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
  const res = await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${path}`, opts);
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  return res.json();
}

async function publishToGitHub() {
  const btn = document.getElementById('adminPublish');
  const origText = btn.innerHTML;
  btn.innerHTML = '⏳ Publishing...';
  btn.disabled = true;

  try {
    // Upload any base64 images to repo first
    const updatedProducts = await Promise.all(siteData.products.map(async (p) => {
      if (!p.images) return p;
      const newImages = [];
      for (let i = 0; i < p.images.length; i++) {
        const img = p.images[i];
        if (img.startsWith('data:')) {
          // Upload base64 image to GitHub
          const ext = img.match(/data:image\/(\w+)/)?.[1] || 'png';
          const fileName = `images/${p.id}_${Date.now()}_${i}.${ext}`;
          const base64 = img.split(',')[1];
          try {
            await ghAPI(fileName, 'PUT', {
              message: `Upload image: ${fileName}`,
              content: base64,
              branch: GH_BRANCH
            });
            newImages.push(fileName);
          } catch(e) {
            console.error('Image upload failed:', e);
            newImages.push(img); // keep base64 as fallback
          }
        } else {
          newImages.push(img);
        }
      }
      return { ...p, images: newImages };
    }));

    siteData.products = updatedProducts;
    localStorage.setItem('xjay_data', JSON.stringify(siteData));

    // Get current data.json SHA
    let sha = '';
    try {
      const current = await ghAPI('data.json');
      sha = current.sha;
    } catch(e) { /* file doesn't exist yet */ }

    // Push data.json
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(siteData, null, 2))));
    await ghAPI('data.json', 'PUT', {
      message: '📦 Update site data via Admin',
      content,
      sha,
      branch: GH_BRANCH
    });

    showToast('🚀 Published to GitHub!');
    renderProducts();
  } catch(e) {
    console.error('Publish failed:', e);
    if (e.message.includes('401') || e.message.includes('403')) {
      showToast('❌ Token invalid! Check settings.');
    } else {
      showToast('❌ Publish failed: ' + e.message);
    }
  } finally {
    btn.innerHTML = origText;
    btn.disabled = false;
  }
}

function showTokenSetup() {
  const currentToken = getToken() || '';
  const masked = currentToken ? currentToken.slice(0, 12) + '...' + currentToken.slice(-4) : '';
  showPopup('🔑 GitHub Token Setup', `
    <div class="form-group">
      <label class="form-label">Personal Access Token</label>
      <input type="password" class="form-input" id="tokenInput" value="${currentToken}" placeholder="github_pat_...">
      <p style="color:var(--text-muted);font-size:0.72rem;margin-top:6px;">
        ${masked ? '✅ Token saved: ' + masked : '⚠️ No token set — Publish won\'t work'}
      </p>
      <p style="color:var(--text-muted);font-size:0.72rem;margin-top:4px;">
        Get it from: GitHub → Settings → Developer settings → Personal access tokens
      </p>
    </div>
  `, () => {
    const val = document.getElementById('tokenInput').value.trim();
    if (val) {
      localStorage.setItem('xjay_gh_token', val);
      showToast('🔑 Token saved!');
    } else {
      localStorage.removeItem('xjay_gh_token');
      showToast('🔑 Token removed.');
    }
  });
}

function setupAdmin() {
  document.body.classList.add('is-admin');

  const bar = document.createElement('div');
  bar.className = 'admin-bar';
  bar.innerHTML = `
    <span class="admin-bar__label">🔧 Admin Mode</span>
    <button class="admin-bar__btn admin-bar__btn--publish" id="adminPublish">🚀 Publish</button>
    <button class="admin-bar__btn admin-bar__btn--token" id="adminToken">🔑</button>
    <button class="admin-bar__btn admin-bar__btn--logout" id="adminLogout">Logout</button>
  `;
  document.body.prepend(bar);

  const toast = document.createElement('div');
  toast.className = 'admin-toast'; toast.id = 'adminToast';
  document.body.appendChild(toast);

  const dc = document.getElementById('discord-link');
  const em = document.getElementById('email-link');
  if (dc) { dc.classList.add('editable'); dc.addEventListener('click', (e) => { e.preventDefault(); showSocialEdit('discord'); }); }
  if (em) { em.classList.add('editable'); em.addEventListener('click', (e) => { e.preventDefault(); showSocialEdit('email'); }); }

  document.getElementById('adminPublish').addEventListener('click', () => {
    if (!getToken()) { showTokenSetup(); return; }
    publishToGitHub();
  });

  document.getElementById('adminToken').addEventListener('click', showTokenSetup);

  document.getElementById('adminLogout').addEventListener('click', () => {
    localStorage.removeItem('xjay_admin');
    location.reload();
  });

  if (!getToken()) {
    setTimeout(() => {
      showToast('🔑 Set your GitHub token first! Click 🔑');
    }, 1000);
  }
}

// ===== POPUPS =====
function showSocialEdit(type) {
  const isD = type === 'discord';
  const val = isD ? siteData.contact.discord : siteData.contact.email;
  const label = isD ? 'Discord Invite Link' : 'Email Address';
  showPopup(`Edit ${label}`, `
    <div class="form-group"><label class="form-label">${label}</label><input type="text" class="form-input" id="popupInput" value="${val}"></div>
  `, () => {
    const v = document.getElementById('popupInput').value;
    if (isD) { siteData.contact.discord = v; document.getElementById('discord-link').href = v; }
    else { siteData.contact.email = v; document.getElementById('email-link').href = 'mailto:' + v; }
    localStorage.setItem('xjay_data', JSON.stringify(siteData));
    showToast('✅ Updated!');
  });
}

function showProductEdit(idx) {
  const p = siteData.products[idx];
  if (!p) return;
  if (!p.images) p.images = [];
  // Temp copy of images for editing in popup
  let tempImages = [...p.images];

  const iconOpts = Object.keys(ICONS).map(k => `<div class="picker-item ${p.icon===k?'active':''}" data-pickicon="${k}">${ICONS[k]}</div>`).join('');
  const colorOpts = ['cyan','pink','indigo'].map(c => `<div class="picker-item ${p.color===c?'active':''}" data-pickcolor="${c}"><div class="color-dot color-dot--${c}"></div></div>`).join('');

  function buildImagesHTML() {
    let thumbs = '';
    if (tempImages.length > 0) {
      thumbs = tempImages.map((img, i) => `
        <div style="position:relative;display:inline-block;margin:3px;">
          <img src="${img}" style="width:60px;height:60px;object-fit:cover;border-radius:4px;border:1px solid var(--border-color);">
          <button class="popup-img-rm" data-poprmidx="${i}" style="position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:#ff4d6a;color:#fff;border:none;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
        </div>
      `).join('');
    }
    return `
      <div class="form-group">
        <label class="form-label">Images (${tempImages.length})</label>
        <div id="editImgThumbs" style="margin-bottom:8px;min-height:20px;">${thumbs || '<span style="color:var(--text-muted);font-size:0.78rem;">No images yet</span>'}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <input type="text" class="form-input" id="editImgUrlInput" placeholder="https://image-url..." style="flex:1;min-width:150px;">
          <button class="admin-img-btn" id="editImgUrlAdd" style="white-space:nowrap;">🔗 Add URL</button>
          <button class="admin-img-btn" id="editImgFileAdd" style="white-space:nowrap;">📁 Local</button>
          <input type="file" id="editImgFileInput" accept="image/*" multiple style="display:none;">
        </div>
      </div>
    `;
  }

  showPopup(`Edit: ${p.name}`, `
    <div class="inline-edit__row">
      <div class="form-group"><label class="form-label">Name</label><input type="text" class="form-input" id="editName" value="${p.name}"></div>
      <div class="form-group"><label class="form-label">Subtitle</label><input type="text" class="form-input" id="editSub" value="${p.subtitle}"></div>
    </div>
    <div class="inline-edit__row">
      <div class="form-group"><label class="form-label">Link / URL</label><input type="text" class="form-input" id="editLink" value="${p.link}"></div>
      <div class="form-group"><label class="form-label">Category</label>
        <select class="form-input" id="editCat">
          <option value="unity" ${p.category==='unity'?'selected':''}>Unity Assets</option>
          <option value="other" ${p.category==='other'?'selected':''}>Other Projects</option>
        </select>
      </div>
    </div>
    <div class="form-group"><label class="form-label">Description</label><textarea class="form-input" id="editDesc" style="resize:vertical;min-height:80px">${p.description || ''}</textarea></div>
    <div class="inline-edit__row">
      <div class="form-group"><label class="form-label">Icon</label><div class="picker-grid" id="editIconGrid">${iconOpts}</div></div>
      <div class="form-group"><label class="form-label">Color</label><div class="picker-grid" id="editColorGrid">${colorOpts}</div></div>
    </div>
    <div id="editImgSection">${buildImagesHTML()}</div>
  `, () => {
    p.name = document.getElementById('editName').value;
    p.subtitle = document.getElementById('editSub').value;
    p.link = document.getElementById('editLink').value;
    p.category = document.getElementById('editCat').value;
    p.description = document.getElementById('editDesc').value;
    p.images = tempImages;
    p.id = p.name.toLowerCase().replace(/\s+/g, '-');
    const ai = document.querySelector('#editIconGrid .picker-item.active');
    if (ai) p.icon = ai.dataset.pickicon;
    const ac = document.querySelector('#editColorGrid .picker-item.active');
    if (ac) p.color = ac.dataset.pickcolor;
    localStorage.setItem('xjay_data', JSON.stringify(siteData));
    renderProducts();
    showToast('✅ Updated!');
  }, true, idx);

  // After popup is created, bind image controls
  setTimeout(() => {
    function refreshImgSection() {
      const sec = document.getElementById('editImgSection');
      if (sec) sec.innerHTML = buildImagesHTML();
      bindImgControls();
    }

    function bindImgControls() {
      // Remove image buttons
      document.querySelectorAll('.popup-img-rm').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          tempImages.splice(parseInt(btn.dataset.poprmidx), 1);
          refreshImgSection();
        });
      });

      // Add URL button
      const urlAddBtn = document.getElementById('editImgUrlAdd');
      if (urlAddBtn) {
        urlAddBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const input = document.getElementById('editImgUrlInput');
          const url = input ? input.value.trim() : '';
          if (url) {
            tempImages.push(url);
            refreshImgSection();
          }
        });
      }

      // Add Local file button
      const fileAddBtn = document.getElementById('editImgFileAdd');
      const fileInput = document.getElementById('editImgFileInput');
      if (fileAddBtn && fileInput) {
        fileAddBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          fileInput.click();
        });
        fileInput.addEventListener('change', () => {
          for (const file of fileInput.files) {
            const reader = new FileReader();
            reader.onload = (ev) => {
              tempImages.push(ev.target.result);
              refreshImgSection();
            };
            reader.readAsDataURL(file);
          }
        });
      }
    }

    bindImgControls();
  }, 50);
}

function showImageURLPopup(idx) {
  showPopup('Add Image URL', `
    <div class="form-group"><label class="form-label">Image URL</label><input type="text" class="form-input" id="imgUrlInput" placeholder="https://..."></div>
  `, () => {
    const url = document.getElementById('imgUrlInput').value.trim();
    if (url) {
      siteData.products[idx].images.push(url);
      localStorage.setItem('xjay_data', JSON.stringify(siteData));
      reRenderExpanded(idx);
      showToast('🖼️ Image added!');
    }
  });
}

function addProduct(category) {
  siteData.products.push({
    id: 'new-' + Date.now(), name: 'New ' + (category === 'unity' ? 'Asset' : 'Project'),
    subtitle: 'Description', description: '', images: [],
    icon: category === 'unity' ? 'box' : 'code',
    color: category === 'unity' ? 'cyan' : 'pink',
    link: '#', category
  });
  localStorage.setItem('xjay_data', JSON.stringify(siteData));
  renderProducts();
  showToast('✅ Added!');
  setTimeout(() => showProductEdit(siteData.products.length - 1), 150);
}

function deleteProduct(idx) {
  const p = siteData.products[idx];
  showPopup(`Delete "${p.name}"?`, `<p style="color:var(--text-muted);font-size:.85rem;">This will remove the product.</p>`, () => {
    siteData.products.splice(idx, 1);
    localStorage.setItem('xjay_data', JSON.stringify(siteData));
    renderProducts();
    showToast('🗑️ Deleted!');
  });
}

// ===== POPUP SYSTEM =====
function showPopup(title, bodyHTML, onApply, showDelete = false, deleteIdx = null) {
  document.querySelectorAll('.overlay,.inline-edit').forEach(el => el.remove());
  const ov = document.createElement('div'); ov.className = 'overlay';
  const pop = document.createElement('div'); pop.className = 'inline-edit';
  pop.innerHTML = `
    <div class="inline-edit__title">${title}</div>
    ${bodyHTML}
    <div class="inline-edit__actions">
      <button class="inline-edit__btn inline-edit__btn--apply" id="popupApply">Apply</button>
      <button class="inline-edit__btn inline-edit__btn--cancel" id="popupCancel">Cancel</button>
      ${showDelete ? `<button class="inline-edit__btn inline-edit__btn--delete" id="popupDelete">🗑️</button>` : ''}
    </div>`;
  document.body.appendChild(ov);
  document.body.appendChild(pop);
  pop.addEventListener('click', (e) => {
    const pi = e.target.closest('.picker-item');
    if (pi) { pi.closest('.picker-grid').querySelectorAll('.picker-item').forEach(p => p.classList.remove('active')); pi.classList.add('active'); }
  });
  const close = () => { ov.remove(); pop.remove(); };
  ov.addEventListener('click', close);
  document.getElementById('popupCancel').addEventListener('click', close);
  document.getElementById('popupApply').addEventListener('click', () => { onApply(); close(); });
  if (showDelete && deleteIdx !== null) {
    document.getElementById('popupDelete').addEventListener('click', () => { close(); deleteProduct(deleteIdx); });
  }
}

function showToast(msg) {
  const t = document.getElementById('adminToast');
  if (!t) return;
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== YEAR =====
const yearEl = document.querySelector('.current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== INIT =====
loadSite();
