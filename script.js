// =====================================================
// Monogram SVG (signature element, reused across sections)
// =====================================================
function monogramSVG(size, ringColor, initials){
  return `<svg width="${size}" height="${size}" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="80" r="76" stroke="${ringColor}" stroke-width="1"/>
    <circle cx="80" cy="80" r="66" stroke="${ringColor}" stroke-width="1" stroke-dasharray="1 6"/>
    <path d="M80 22 L84 34 L80 30 L76 34 Z" fill="${ringColor}"/>
    <path d="M80 138 L84 126 L80 130 L76 126 Z" fill="${ringColor}"/>
    <text x="80" y="94" text-anchor="middle" font-family="Cormorant Garamond, serif" font-style="italic" font-size="40" fill="${ringColor}">${initials}</text>
  </svg>`;
}
const gateMedallionEl = document.getElementById('gateMedallion');
if(gateMedallionEl) gateMedallionEl.innerHTML = monogramSVG(96,'#ffea08','D&G');
document.getElementById('coverMedallion').innerHTML = monogramSVG(76,'#ffea08','D&G');
document.getElementById('closeMedallion').innerHTML = monogramSVG(76,'#ffea08','D&G');
document.querySelectorAll('.small-medallion').forEach(el=>{
  const isWanita = el.closest('.person').querySelector('.person-role').textContent.includes('Wanita');
  el.innerHTML = monogramSVG(64,'#B4905A', isWanita ? 'D' : 'G');
  el.style.marginBottom='14px';
});

// =====================================================
// Gunungan silhouette — a stylised nod to the mountain-shaped
// gapura/wayang stage prop used in Javanese wedding ceremony,
// used as decorative background dressing on the gate and closing.
// =====================================================
function gununganSVG(fillId){
  return `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${fillId}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#B4905A" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#B4905A" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path fill="url(#${fillId})" stroke="#B4905A" stroke-width="1" stroke-opacity="0.5"
      d="M200 8
         C 216 8 229 20 233 38
         C 254 34 282 47 294 70
         C 332 70 372 92 396 122
         L 396 205 L 4 205 L 4 122
         C 28 92 68 70 106 70
         C 118 47 146 34 167 38
         C 171 20 184 8 200 8 Z"/>
    <path fill="none" stroke="#B4905A" stroke-width="0.8" stroke-opacity="0.35"
      d="M200 24 C 210 24 219 33 221 46 M200 24 C 190 24 181 33 179 46"/>
  </svg>`;
}
const gateGunungan = document.getElementById('gateGunungan');
if(gateGunungan) gateGunungan.innerHTML = gununganSVG('gunGradGate');
const closingGunungan = document.getElementById('closingGunungan');
if(closingGunungan) closingGunungan.innerHTML = gununganSVG('gunGradClose');

// =====================================================
// Floral spray — a small trailing line-art vine with a few
// open blooms, leaves, and berries, framing the gallery photo like a
// classic wedding cameo. Kept in the same delicate outline style as the
// monogram and gunungan artwork above (thin gold strokes, no heavy fill).
// =====================================================
function floralSpraySVG(idSuffix){
  const bloomId = 'bloom-' + idSuffix;
  const leafId = 'leaf-' + idSuffix;
  return `<svg viewBox="0 0 160 170" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <g id="${bloomId}">
        <ellipse cx="0" cy="-7" rx="4.2" ry="6.4" fill="none" stroke="#B4905A" stroke-width="0.9"/>
        <ellipse cx="0" cy="-7" rx="4.2" ry="6.4" fill="none" stroke="#B4905A" stroke-width="0.9" transform="rotate(72)"/>
        <ellipse cx="0" cy="-7" rx="4.2" ry="6.4" fill="none" stroke="#B4905A" stroke-width="0.9" transform="rotate(144)"/>
        <ellipse cx="0" cy="-7" rx="4.2" ry="6.4" fill="none" stroke="#B4905A" stroke-width="0.9" transform="rotate(216)"/>
        <ellipse cx="0" cy="-7" rx="4.2" ry="6.4" fill="none" stroke="#B4905A" stroke-width="0.9" transform="rotate(288)"/>
        <circle cx="0" cy="0" r="2.1" fill="#B4905A"/>
      </g>
      <path id="${leafId}" d="M0 0 C 4 -3.2 8.5 -3.2 12.5 0 C 8.5 3.2 4 3.2 0 0 Z" fill="none" stroke="#D9C29A" stroke-width="0.9"/>
    </defs>
    <path d="M22 158 C 32 128, 20 96, 52 74 C 74 58, 62 32, 88 14" fill="none" stroke="#D9C29A" stroke-width="1.1" stroke-linecap="round"/>
    <use href="#${leafId}" transform="translate(16,116) rotate(-40)"/>
    <use href="#${leafId}" transform="translate(44,80) rotate(24)"/>
    <use href="#${leafId}" transform="translate(58,38) rotate(-28)"/>
    <use href="#${bloomId}" transform="translate(30,142) scale(0.68)"/>
    <use href="#${bloomId}" transform="translate(58,86) scale(0.85)"/>
    <use href="#${bloomId}" transform="translate(87,15) scale(1.05)"/>
    <circle cx="70" cy="58" r="1.6" fill="#B4905A"/>
    <circle cx="40" cy="108" r="1.4" fill="#B4905A"/>
  </svg>`;
}
const galleryFloralTL = document.getElementById('galleryFloralTL');
const galleryFloralBR = document.getElementById('galleryFloralBR');
if(galleryFloralTL) galleryFloralTL.innerHTML = floralSpraySVG('tl');
if(galleryFloralBR) galleryFloralBR.innerHTML = floralSpraySVG('br');

// Closing floral arch — two mirrored sprays flanking the closing medallion,
// a gentle bookend echoing the gallery frame.
const closingFloralL = document.getElementById('closingFloralL');
const closingFloralR = document.getElementById('closingFloralR');
if(closingFloralL) closingFloralL.innerHTML = floralSpraySVG('cl');
if(closingFloralR) closingFloralR.innerHTML = floralSpraySVG('cr');

// =====================================================
// Mini bloom — a single small flower, the same line-art style as the
// bigger spray above, sprinkled near headings across the page. Every
// element with class="mini-bloom" gets one automatically.
// =====================================================
function miniBloomSVG(size, color){
  return `<svg width="${size}" height="${size}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20,23)">
      <ellipse cx="0" cy="-9" rx="5" ry="7.6" fill="none" stroke="${color}" stroke-width="1"/>
      <ellipse cx="0" cy="-9" rx="5" ry="7.6" fill="none" stroke="${color}" stroke-width="1" transform="rotate(72)"/>
      <ellipse cx="0" cy="-9" rx="5" ry="7.6" fill="none" stroke="${color}" stroke-width="1" transform="rotate(144)"/>
      <ellipse cx="0" cy="-9" rx="5" ry="7.6" fill="none" stroke="${color}" stroke-width="1" transform="rotate(216)"/>
      <ellipse cx="0" cy="-9" rx="5" ry="7.6" fill="none" stroke="${color}" stroke-width="1" transform="rotate(288)"/>
      <circle cx="0" cy="0" r="2.6" fill="${color}"/>
    </g>
  </svg>`;
}
document.querySelectorAll('.mini-bloom').forEach(el=>{
  const size = el.dataset.size || 30;
  el.innerHTML = miniBloomSVG(size, '#B4905A');
});

// =====================================================
// Floating petals — a handful of small flower petals gently drifting
// down over the whole page, visible on every slide as you scroll.
// Skipped entirely for reduced-motion, on top of the global CSS override.
// =====================================================
(function petals(){
  const container = document.getElementById('petals');
  if(!container) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const COUNT = window.innerWidth < 640 ? 9 : 15;
  for(let i=0;i<COUNT;i++){
    const p = document.createElement('span');
    p.className = 'petal';
    const size = Math.random()*9 + 9; // 9-18px
    p.style.width = size + 'px';
    p.style.height = (size*0.78) + 'px';
    p.style.left = Math.random()*100 + '%';
    p.style.setProperty('--drift', Math.round(Math.random()*90-45) + 'px');
    const duration = Math.random()*10 + 15; // 15-25s
    p.style.animationDuration = duration + 's';
    p.style.animationDelay = (-Math.random()*duration) + 's';
    p.style.background = Math.random() > 0.5 ? 'var(--gold-light)' : 'var(--gold)';
    container.appendChild(p);
  }
})();

// =====================================================
// Guest name from URL (?to=Nama) + typewriter reveal
// =====================================================
// `URLSearchParams` splits the query string on every `&`, so a guest name
// containing a raw "&" (e.g. "Bpk. Slamet & Bu Siti") — or other symbols
// that weren't percent-encoded when the link was created — used to get cut
// off at the first symbol, or lost entirely. Since `to=`/`nama=` is always
// the parameter we care about, we instead grab everything from that key to
// the end of the query string ourselves, so symbols inside the name survive
// intact. We still run it through `decodeURIComponent` in case the link WAS
// properly percent-encoded, but fall back to the raw text if it wasn't
// (decodeURIComponent throws on malformed % sequences).
function getGuestNameFromURL(){
  const search = window.location.search;

  if (!search) return '';

  // Ambil nilai setelah ?to= atau ?nama=
  const match = search.match(/[?&](?:to|nama)=([^]*)/i);

  if (!match) return '';

  let raw = match[1];

  /*
   * Jika terdapat parameter lain setelah nama,
   * hapus hanya bagian yang benar-benar berbentuk:
   * &parameter=nilai
   *
   * Ampersand yang merupakan bagian dari nama tetap dipertahankan.
   */
  raw = raw.replace(/&(?=[A-Za-z0-9_-]+=).*$/s, '');

  try {
    // Decode URL:
    // %20 = spasi
    // %26 = &
    // %2F = /
    // dll.
    raw = decodeURIComponent(raw.replace(/\+/g, ' '));
  } catch (e) {
    // Jika encoding URL rusak, tampilkan versi aslinya
    raw = raw.replace(/\+/g, ' ');
  }

  return raw.trim();
}

const guestParam = getGuestNameFromURL();
const guest = guestParam || 'Tamu Undangan';

const guestNameText = document.getElementById('guestNameText');
if(guestNameText) guestNameText.setAttribute('aria-label', guest);

const gateGuestName = document.getElementById('gateGuestName');
if(gateGuestName) {
  gateGuestName.textContent = guest;
  gateGuestName.setAttribute('aria-label', guest);
}

document.getElementById('rsvpName').value =
  (guest !== 'Tamu Undangan') ? guest : '';

function typewrite(el, text, speed = 45){
  if(!el) return;
  let i = 0;
  el.textContent = '';
  (function tick(){
    if(i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    }
  })();
}

// =====================================================
// Gate open
// =====================================================
const gateEl = document.getElementById('gate');
const gateVideoEl = document.querySelector('.gate-video');

// Safety net: some mobile browsers only allow autoplay if `muted` is also
// set as a JS property (not just the HTML attribute).
if(gateVideoEl){
  gateVideoEl.muted = true;
  gateVideoEl.play().catch(()=>{});
}

document.getElementById('openBtn').addEventListener('click', ()=>{
  gateEl.classList.add('open');
  document.body.classList.remove('locked');
  // Start the guest-name typewriter now, so it's actually visible once
  // the cover is revealed instead of finishing silently behind the gate.
  typewrite(document.getElementById('guestNameText'), guest);
  const audio = document.getElementById('bgAudio');
  if(audio.currentSrc){
    audio.play().catch(()=>{});
    document.getElementById('audioToggle').classList.add('playing');
  }
}, { once:true });

// Once the gate has finished sliding away, stop decoding the background
// video — it's no longer visible, so leaving it running only burns
// CPU/battery for the rest of the visit.
gateEl.addEventListener('transitionend', (e)=>{
  if(e.target === gateEl && gateEl.classList.contains('open') && gateVideoEl){
    gateVideoEl.pause();
  }
});

const audioToggleBtn = document.getElementById('audioToggle');
audioToggleBtn.addEventListener('click', ()=>{
  const audio = document.getElementById('bgAudio');
  if(audio.paused){
    audio.play().catch(()=>{});
    audioToggleBtn.classList.add('playing');
  } else {
    audio.pause();
    audioToggleBtn.classList.remove('playing');
  }
});

// =====================================================
// Countdown with tick-pop animation on change
// =====================================================
// Ganti tanggal berikut sesuai tanggal akad/resepsi sebenarnya
const targetDate = new Date('2026-09-06T09:00:00+08:00').getTime();
const cdEls = {
  d: document.getElementById('cd-d'),
  h: document.getElementById('cd-h'),
  m: document.getElementById('cd-m'),
  s: document.getElementById('cd-s')
};
let lastValues = { d:null, h:null, m:null, s:null };

function updateCountdown(){
  const now = Date.now();
  let diff = targetDate - now;
  if(diff < 0) diff = 0;
  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff/(1000*60*60))%24);
  const m = Math.floor((diff/(1000*60))%60);
  const s = Math.floor((diff/1000)%60);
  const values = { d, h, m, s };

  Object.keys(values).forEach(key=>{
    const formatted = String(values[key]).padStart(2,'0');
    if(lastValues[key] !== formatted){
      cdEls[key].textContent = formatted;
      cdEls[key].classList.remove('tick');
      void cdEls[key].offsetWidth; // reflow to restart animation
      cdEls[key].classList.add('tick');
      lastValues[key] = formatted;
    }
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// =====================================================
// Copy account number
// =====================================================
document.querySelectorAll('.copy-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const text = document.getElementById(btn.dataset.copy).textContent;
    navigator.clipboard.writeText(text).then(()=>{
      const old = btn.textContent;
      btn.textContent = 'Tersalin';
      setTimeout(()=> btn.textContent = old, 1500);
    }).catch(()=>{});
  });
});

// =====================================================
// RSVP toggle
// =====================================================
let attendance = 'Hadir';
document.querySelectorAll('.rsvp-toggle button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.rsvp-toggle button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    attendance = btn.dataset.att;
  });
});

// =====================================================
// Shared "Ucapan & Doa" guest book
//
// IMPORTANT — read this if you're hosting the site on your own domain:
// For wishes to be visible to EVERY guest (not just the phone that
// wrote them), the page needs somewhere on the internet to store them.
// A static HTML/CSS/JS site has no database of its own, so this uses a
// free Google Sheet as that shared storage — no coding needed beyond
// pasting one script. Setup takes about 5 minutes:
//
//   1. Open https://sheets.google.com and create a new blank sheet.
//   2. Go to Extensions > Apps Script. Delete the sample code and
//      paste in the contents of PANDUAN-UCAPAN-BERSAMA.md (included
//      alongside this project) — it has the exact script to paste.
//   3. Click Deploy > New deployment > gear icon > Web app.
//        Execute as: Me
//        Who has access: Anyone
//   4. Click Deploy, approve the permissions Google asks for, then
//      copy the "Web app URL" it gives you.
//   5. Paste that URL as WISHES_ENDPOINT below.
//
// Until WISHES_ENDPOINT is filled in, the guest book still works as a
// demo: it uses Claude's shared preview storage when opened through a
// Claude.ai preview link, or your visitor's own browser storage
// otherwise (which is NOT shared between different guests' phones).
// =====================================================
const WISHES_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyma3oviiP9uS3G_IXMbua4bumfPl_ljZY_MtbELky55MCbyjZIlBT1ZQQLpstqY3J9/exec'; // <-- paste your Google Apps Script Web App URL here

async function storageGet(key, shared){
  if(window.storage) return window.storage.get(key, shared);
  try{
    const raw = localStorage.getItem(key);
    return raw ? { key, value: raw, shared } : null;
  }catch(e){ return null; }
}
async function storageSet(key, value, shared){
  if(window.storage) return window.storage.set(key, value, shared);
  try{
    localStorage.setItem(key, value);
    return { key, value, shared };
  }catch(e){ return null; }
}

// In-memory cache of whatever's currently on screen, so a new wish can be
// spliced in and re-rendered instantly without waiting on a network round
// trip (see the submit handler below).
let wishesCache = [];

function renderWishes(items){
  const list = document.getElementById('wishesList');
  if(!items || items.length === 0){
    list.innerHTML = '<p class="wish-empty">Jadilah yang pertama memberikan ucapan.</p>';
    return;
  }
  list.innerHTML = items.map(w => `
    <div class="wish${w.pending ? ' wish--pending' : ''}">
      <span class="wish-name">${escapeHTML(w.name)}</span><span class="wish-tag">${escapeHTML(w.attendance)}</span>
      <p class="wish-text">${escapeHTML(w.message)}</p>
    </div>`).join('');
}

// Wraps a promise so a slow/unresponsive endpoint (Apps Script can be
// sluggish, or a guest's connection can be weak) can't hang the page —
// it rejects after `ms` instead of waiting forever.
function withTimeout(promise, ms){
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
  ]);
}

// =====================================================
// Wishes storage
// =====================================================
async function loadWishes(){
  const list = document.getElementById('wishesList');
  try{
    // Path 1 — real shared backend (works for every visitor, anywhere)
    if(WISHES_ENDPOINT){
      const res = await withTimeout(fetch(WISHES_ENDPOINT, { cache:'no-store' }), 10000);
      const items = await res.json();
      wishesCache = items.slice().reverse();
      renderWishes(wishesCache);
      return;
    }
    // Path 2 / 3 — Claude preview storage, or single-device fallback
    const idx = await storageGet('wishes-index', true);
    const ids = idx ? JSON.parse(idx.value) : [];
    if(ids.length === 0){
      list.innerHTML = '<p class="wish-empty">Jadilah yang pertama memberikan ucapan.</p>';
      return;
    }
    const items = [];
    for(const id of ids.slice().reverse()){
      try{
        const w = await storageGet('wish:'+id, true);
        if(w) items.push(JSON.parse(w.value));
      }catch(e){}
    }
    wishesCache = items;
    renderWishes(wishesCache);
  }catch(e){
    // Only show the "empty" fallback if nothing is already on screen —
    // don't blow away wishes that loaded fine before a later retry timed out.
    if(wishesCache.length === 0) list.innerHTML = '<p class="wish-empty">Belum ada ucapan.</p>';
  }
}
function escapeHTML(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}
loadWishes();

const rsvpFormEl = document.getElementById('rsvpForm');
const rsvpSubmitBtn = rsvpFormEl.querySelector('.rsvp-submit');
const rsvpSubmitLabel = rsvpSubmitBtn.querySelector('span');
let isSubmittingWish = false;

rsvpFormEl.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(isSubmittingWish) return; // guard against double-tap / double-enter
  const nameEl = document.getElementById('rsvpName');
  const msgEl = document.getElementById('rsvpMsg');
  const name = nameEl.value.trim();
  const message = msgEl.value.trim();
  if(!name || !message) return;
  const entry = { name, attendance, message };

  // ---- Optimistic UI: show the wish and clear the form immediately.
  // The guest doesn't wait on the network at all to see it land — the
  // actual save happens in the background below.
  wishesCache = [{ ...entry, pending:true }, ...wishesCache];
  renderWishes(wishesCache);
  nameEl.value = '';
  msgEl.value = '';

  isSubmittingWish = true;
  rsvpSubmitBtn.disabled = true;
  if(rsvpSubmitLabel) rsvpSubmitLabel.textContent = 'Mengirim…';

  (async () => {
    try{
      if(WISHES_ENDPOINT){
        // text/plain avoids a CORS preflight against Apps Script, which
        // only handles the actual GET/POST, not the OPTIONS preflight.
        await withTimeout(fetch(WISHES_ENDPOINT, {
          method:'POST',
          headers:{ 'Content-Type':'text/plain;charset=utf-8' },
          body: JSON.stringify(entry)
        }), 10000);
      } else {
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2,7);
        await storageSet('wish:'+id, JSON.stringify(entry), true);
        const idxRes = await storageGet('wishes-index', true).catch(()=>null);
        const ids = idxRes ? JSON.parse(idxRes.value) : [];
        ids.push(id);
        await storageSet('wishes-index', JSON.stringify(ids), true);
      }
      // Mark the optimistic entry as confirmed (drop the pending flag)
      // without a full re-fetch — no second round trip needed.
      const match = wishesCache.find(w => w.pending && w.name === entry.name && w.message === entry.message);
      if(match) delete match.pending;
      renderWishes(wishesCache);
    }catch(err){
      console.error('Gagal menyimpan ucapan, akan dicoba lagi otomatis', err);
      // Keep it visible locally (still marked pending) instead of yanking
      // it away — a guest whose wish is on screen shouldn't see it vanish.
      // Retry once in the background after a short delay.
      setTimeout(() => loadWishes(), 4000);
    }finally{
      isSubmittingWish = false;
      rsvpSubmitBtn.disabled = false;
      if(rsvpSubmitLabel) rsvpSubmitLabel.textContent = 'Kirim Ucapan';
    }
  })();
});

// =====================================================
// Slide navigation — round bottom nav that jumps between
// sections and highlights whichever one is currently in view.
// =====================================================
(function slideNav(){
  const nav = document.getElementById('slideNav');
  if(!nav) return;
  const dots = Array.from(nav.querySelectorAll('.slide-dot'));
  const targets = dots
    .map(dot => ({ dot, el: document.getElementById(dot.dataset.target) }))
    .filter(item => item.el);

  dots.forEach(dot=>{
    dot.addEventListener('click', ()=>{
      const target = document.getElementById(dot.dataset.target);
      if(target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });

  // Treat a thin band near the vertical middle of the screen as the
  // "active" zone — whichever section is crossing that band gets the
  // highlighted dot, a standard scroll-spy technique.
  const navObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const match = targets.find(t => t.el === entry.target);
      if(!match) return;
      dots.forEach(d=> d.classList.remove('active'));
      match.dot.classList.add('active');
    });
  }, { threshold:0, rootMargin:'-45% 0px -45% 0px' });

  targets.forEach(t=> navObserver.observe(t.el));
})();

// =====================================================
// Reveal on scroll, staggered by sibling order
// Covers every entrance-animation variant used across the page:
// fade-up (default), fade-side-l/r (couple, events), zoom-in (the "&",
// the gallery photo), and pop-in (countdown cells, gift cards).
// =====================================================
const REVEAL_SELECTOR = '.fade-up, .fade-side-l, .fade-side-r, .zoom-in, .pop-in';
document.querySelectorAll('section').forEach(sec=>{
  const items = sec.querySelectorAll(REVEAL_SELECTOR);
  items.forEach((el,i)=>{ el.style.setProperty('--delay', `${Math.min(i*0.12,0.5)}s`); });
});
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
},{ threshold:0.15 });
document.querySelectorAll(REVEAL_SELECTOR).forEach(el=> io.observe(el));

// =====================================================
// Scroll progress bar + cover parallax
// Combined into a single rAF-throttled scroll handler so layout reads
// (scrollHeight, offsetHeight) don't run on every single scroll event —
// important for smoothness on lower-end/mobile devices.
// =====================================================
const progressBar = document.getElementById('progressBar');
const coverContent = document.getElementById('coverContent');
const coverSection = document.getElementById('cover');
let scrollTicking = false;

function onScrollFrame(){
  const y = window.scrollY;

  // Progress bar
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';

  // Cover parallax — subtle drift only, text always stays fully visible
  const sectionHeight = coverSection.offsetHeight;
  if(y < sectionHeight){
    const offset = Math.min(y * 0.15, 60);
    coverContent.style.transform = `translateY(${offset}px)`;
  }

  scrollTicking = false;
}
function onScroll(){
  if(!scrollTicking){
    requestAnimationFrame(onScrollFrame);
    scrollTicking = true;
  }
}
window.addEventListener('scroll', onScroll, { passive:true });
onScrollFrame();

// =====================================================
// Magnetic buttons (subtle pull toward cursor)
// =====================================================
document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove', (e)=>{
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x*0.18}px, ${y*0.35}px)`;
  });
  btn.addEventListener('mouseleave', ()=>{
    btn.style.transform = 'translate(0,0)';
  });
});

// =====================================================
// Gentle tilt on medallions (desktop only, mousemove within viewport)
// =====================================================
if(window.matchMedia('(pointer: fine)').matches){
  const tiltEls = document.querySelectorAll('.tilt');
  if(tiltEls.length){
    document.addEventListener('mousemove', (e)=>{
      const relX = (e.clientX / window.innerWidth - 0.5) * 2;
      const relY = (e.clientY / window.innerHeight - 0.5) * 2;
      tiltEls.forEach(el=>{
        el.style.transform = `rotateY(${relX*6}deg) rotateX(${-relY*6}deg)`;
      });
    }, { passive:true });
  }
}

// =====================================================
// Ambient particle canvas — soft floating gold dust
// The canvas element itself stays viewport-sized (position:fixed),
// but particles live in "world space" spanning the whole page height
// and are drawn offset by the current scroll position — so they
// drift naturally as you scroll instead of being squeezed into
// just the first screenful.
// =====================================================
(function particles(){
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w, h, worldHeight, particlesArr = [];
  const COUNT = window.innerWidth < 640 ? 26 : 46;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    // Canvas resolution matches the viewport (its actual on-screen size)
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    // Particles are distributed across the full scrollable page height
    worldHeight = document.documentElement.scrollHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('load', resize);

  function makeParticle(){
    return {
      x: Math.random()*w,
      y: Math.random()*worldHeight,
      r: Math.random()*1.6 + 0.4,
      speedY: Math.random()*0.25 + 0.05,
      driftX: (Math.random()-0.5)*0.15,
      alpha: Math.random()*0.35 + 0.08,
      phase: Math.random()*Math.PI*2
    };
  }
  for(let i=0;i<COUNT;i++) particlesArr.push(makeParticle());

  function draw(){
    ctx.clearRect(0,0,w,h);
    const scrollY = window.scrollY;
    particlesArr.forEach(p=>{
      const screenY = p.y - scrollY;
      if(screenY < -10 || screenY > h + 10) return;
      ctx.beginPath();
      ctx.fillStyle = `rgba(180,144,90,${p.alpha})`;
      ctx.arc(p.x, screenY, p.r, 0, Math.PI*2);
      ctx.fill();
    });
  }

  if(reduceMotion){
    // Draw a single static soft pass, no animation loop
    draw();
    window.addEventListener('scroll', draw, { passive:true });
  } else {
    function animate(t){
      particlesArr.forEach(p=>{
        p.y -= p.speedY;
        p.x += p.driftX + Math.sin((t/2000)+p.phase)*0.15;
        if(p.y < -10){ p.y = worldHeight + 10; p.x = Math.random()*w; }
      });
      draw();
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  // Recompute world height whenever content grows (e.g. after wishes load)
  const ro = new ResizeObserver(()=>{ worldHeight = document.documentElement.scrollHeight; });
  ro.observe(document.body);
})();
