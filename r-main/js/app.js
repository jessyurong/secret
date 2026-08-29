/**
 * Core Application Logic for Rizz Experience
 */

import { BRING_ITEMS, DESTINATIONS, TRANSPORTATION, FAVORITES, WHO, TEXT_CONTENT } from './data.js';
import { sound } from './audio.js';

// Global state
const state = {
  name: '',
  bring: [],
  destination: '',
  transportation: '',
  favorite: '',
  who: ''
};

// DOM references
const scenes = {};
['scene1', 'scene2', 'scene3', 'scene4', 'scene5', 'scene6', 'scene7', 'scene8', 'scene9', 'scene10'].forEach(id => {
  scenes[id] = document.getElementById(id);
});

const floaters = document.getElementById('floaters');
const soundToggleBtn = document.getElementById('soundToggle');
const bgMusic = document.getElementById('bgMusic');
sound.bgMusicEl = bgMusic;

// Helper: Escape HTML
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

// 1. Ambient Floating Hearts / Sparkles
function initFloaters() {
  if (!floaters) return;
  const icons = ['💗', '✨', '🩷', '💫', '💖', '🌸', '🪄'];
  const count = 16;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.animationDuration = `${7 + Math.random() * 9}s`;
    el.style.animationDelay = `${Math.random() * 8}s`;
    el.style.fontSize = `${16 + Math.random() * 18}px`;
    floaters.appendChild(el);
  }
}

// 2. Scene Navigation
function showScene(id) {
  Object.values(scenes).forEach(s => {
    if (s) s.classList.remove('active');
  });
  if (scenes[id]) {
    scenes[id].classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. Sound Toggle Button
if (soundToggleBtn) {
  soundToggleBtn.addEventListener('click', () => {
    const isMuted = sound.toggleMute();
    soundToggleBtn.textContent = isMuted ? '🔇' : '🔊';
    soundToggleBtn.classList.toggle('active', !isMuted);
  });
}

// 4. Confetti trigger
function fireConfetti() {
  if (window.confetti) {
    window.confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff2e88', '#ffd23f', '#a855f7', '#34d399']
    });
  }
}

// 5. Generic Choice Grid Renderer
function renderChoiceGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return null;
  container.innerHTML = '';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'choice-card';
    card.dataset.key = item.key;

    card.innerHTML = `
      <div class="choice-img-wrap">
        <img src="${item.img}" alt="${escapeHtml(item.label)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="choice-fallback" style="display: none;">${item.emoji || '✨'}</div>
      </div>
      <span class="choice-label">${escapeHtml(item.label)}</span>
    `;

    // Immediately show fallback if image is missing or local path is unpopulated
    const imgEl = card.querySelector('img');
    const fallbackEl = card.querySelector('.choice-fallback');
    imgEl.addEventListener('error', () => {
      imgEl.style.display = 'none';
      fallbackEl.style.display = 'flex';
    });

    container.appendChild(card);
  });
  return container;
}

function shakeCard(card) {
  card.classList.add('shake');
  setTimeout(() => card.classList.remove('shake'), 350);
}

// 6. SCENE 1 -> 2: Name Input
const nameInput = document.getElementById('nameInput');
const enterBtn = document.getElementById('enterBtn');
const greeting = document.getElementById('greeting');

function goToScene2() {
  state.name = nameInput.value.trim() || 'Friend';
  greeting.innerHTML = TEXT_CONTENT.english.greeting(escapeHtml(state.name));
  showScene('scene2');
  resetNoButton();
}

if (enterBtn) enterBtn.addEventListener('click', goToScene2);
if (nameInput) {
  nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') goToScene2();
  });
}

// 7. SCENE 2: Runaway "No" Button & Growing "Yes" Button
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const choiceZone = document.getElementById('choiceZone');

let yesScale = 1;
const MAX_SCALE = 2.4;

function resetNoButton() {
  yesScale = 1;
  if (!noBtn || !yesBtn) return;
  noBtn.style.width = '125px';
  noBtn.style.height = '54px';
  noBtn.style.fontSize = '17px';
  yesBtn.style.width = '125px';
  yesBtn.style.height = '54px';
  yesBtn.style.fontSize = '17px';
  noBtn.style.left = '55%';
  noBtn.style.top = '55px';
  yesBtn.style.left = '15%';
  yesBtn.style.top = '55px';
}

function randomPositionAwayFrom(zone) {
  if (!zone || !noBtn) return;
  const zoneRect = zone.getBoundingClientRect();
  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;
  const maxLeftPx = Math.max(zoneRect.width - btnW - 12, 10);
  const maxTopPx = Math.max(zoneRect.height - btnH - 12, 10);
  const leftPx = Math.random() * maxLeftPx;
  const topPx = Math.random() * maxTopPx;

  noBtn.style.left = `${(leftPx / zoneRect.width) * 100}%`;
  noBtn.style.top = `${topPx}px`;
}

function growYesButton() {
  yesScale = Math.min(yesScale + 0.22, MAX_SCALE);
  yesBtn.style.width = `${125 * yesScale}px`;
  yesBtn.style.height = `${54 * yesScale}px`;
  yesBtn.style.fontSize = `${17 * (1 + (yesScale - 1) * 0.4)}px`;
}

if (noBtn) {
  noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    growYesButton();
    randomPositionAwayFrom(choiceZone);
  });
}

let dodging = false;
if (choiceZone) {
  choiceZone.addEventListener('mousemove', (e) => {
    if (dodging || !noBtn) return;
    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
    const threshold = Math.max(btnRect.width, btnRect.height) * 0.95;

    if (dist < threshold) {
      dodging = true;
      randomPositionAwayFrom(choiceZone);
      setTimeout(() => { dodging = false; }, 320);
    }
  });
}

if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    fireConfetti();
    showScene('scene3');
  });
}

// 8. SCENE 3 -> 4
const continueBtn3 = document.getElementById('continueBtn3');
if (continueBtn3) {
  continueBtn3.addEventListener('click', () => showScene('scene4'));
}

// 9. SCENE 4: What to bring (Multi-select up to 3)
const bringGrid = renderChoiceGrid('bringGrid', BRING_ITEMS);
const bringNextBtn = document.getElementById('bringNextBtn');
const bringHint = document.getElementById('bringHint');

if (bringGrid) {
  bringGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.choice-card');
    if (!card) return;
    const key = card.dataset.key;
    const idx = state.bring.indexOf(key);

    if (idx > -1) {
      state.bring.splice(idx, 1);
      card.classList.remove('selected');
    } else {
      if (state.bring.length >= 3) {
        shakeCard(card);
        return;
      }
      state.bring.push(key);
      card.classList.add('selected');
    }

    if (bringHint) {
      bringHint.textContent = `selected: ${state.bring.length}/3`;
    }
    if (bringNextBtn) {
      bringNextBtn.disabled = state.bring.length === 0;
    }
  });
}

if (bringNextBtn) {
  bringNextBtn.addEventListener('click', () => showScene('scene5'));
}

// 10. SCENE 5: Destination (Single select)
const destGrid = renderChoiceGrid('destGrid', DESTINATIONS);
const destNextBtn = document.getElementById('destNextBtn');

if (destGrid) {
  destGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.choice-card');
    if (!card) return;
    [...destGrid.children].forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.destination = card.dataset.key;
    if (destNextBtn) destNextBtn.disabled = false;
  });
}

if (destNextBtn) {
  destNextBtn.addEventListener('click', () => showScene('scene6'));
}

// 11. SCENE 6: Transportation (Single select)
const transportGrid = renderChoiceGrid('transportGrid', TRANSPORTATION);
const transportNextBtn = document.getElementById('transportNextBtn');

if (transportGrid) {
  transportGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.choice-card');
    if (!card) return;
    [...transportGrid.children].forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.transportation = card.dataset.key;
    if (transportNextBtn) transportNextBtn.disabled = false;
  });
}

if (transportNextBtn) {
  transportNextBtn.addEventListener('click', () => showScene('scene7'));
}

// 12. SCENE 7: Favorite (Single select)
const favGrid = renderChoiceGrid('favGrid', FAVORITES);
const favNextBtn = document.getElementById('favNextBtn');

if (favGrid) {
  favGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.choice-card');
    if (!card) return;
    [...favGrid.children].forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.favorite = card.dataset.key;
    if (favNextBtn) favNextBtn.disabled = false;
  });
}

if (favNextBtn) {
  favNextBtn.addEventListener('click', () => showScene('scene8'));
}

// 13. SCENE 8: Who (Single with shrink / grow gag)
const whoGrid = renderChoiceGrid('whoGrid', WHO);
const whoNextBtn = document.getElementById('whoNextBtn');

const whoScale = { siya: 1, me: 1 };
const WHO_MIN = 0.35;
const WHO_MAX = 1.65;
const WHO_STEP = 0.15;

function applyWhoScale() {
  const siyaCard = whoGrid ? whoGrid.querySelector('[data-key="siya"]') : null;
  const meCard = whoGrid ? whoGrid.querySelector('[data-key="me"]') : null;

  if (siyaCard) siyaCard.style.transform = `scale(${whoScale.siya})`;
  if (meCard) meCard.style.transform = `scale(${whoScale.me})`;
}

if (whoGrid) {
  whoGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.choice-card');
    if (!card) return;
    const key = card.dataset.key;

    if (key === 'siya') {
      whoScale.siya = Math.max(whoScale.siya - WHO_STEP, WHO_MIN);
      whoScale.me = Math.min(whoScale.me + WHO_STEP, WHO_MAX);
      applyWhoScale();
    }

    [...whoGrid.children].forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.who = key;
    if (whoNextBtn) whoNextBtn.disabled = false;
  });
}

if (whoNextBtn) {
  whoNextBtn.addEventListener('click', () => {
    buildRecap();
    fireConfetti();
    showScene('scene9');
  });
}

// 14. SCENE 9: Recap Builder
function labelFor(list, key) {
  const found = list.find(i => i.key === key);
  return found ? `${found.emoji ? found.emoji + ' ' : ''}${found.label}` : key;
}

function buildRecap() {
  const recapList = document.getElementById('recapList');
  if (!recapList) return;

  const bringLabels = state.bring.map(k => labelFor(BRING_ITEMS, k)).join(', ') || '—';
  const rows = [
    ['👤 Name', state.name],
    ['🎒 Bringing', bringLabels],
    ['🗺️ Destination', labelFor(DESTINATIONS, state.destination)],
    ['🚀 Transportation', labelFor(TRANSPORTATION, state.transportation)],
    ['🍫 Favorite', labelFor(FAVORITES, state.favorite)],
    ['💌 Traveling with', labelFor(WHO, state.who)]
  ];

  recapList.innerHTML = rows.map(([label, value]) => `
    <div class="recap-row">
      <span>${escapeHtml(label)}</span>
      <span>${escapeHtml(value)}</span>
    </div>
  `).join('');
}

// 15. SCENE 9 -> 10: Final scene. Music starts only after this scene is shown.
const musicBadge = document.getElementById('musicBadge');
if (musicBadge) musicBadge.hidden = true;

const finalBtn = document.getElementById('finalBtn');
if (finalBtn) {
  finalBtn.addEventListener('click', () => {
    showScene('scene10');
    // Keep this tied to the user's click so mobile browsers allow audio.
    requestAnimationFrame(() => {
      sound.playFinalHugotSound();
      if (musicBadge && !sound.isMuted) musicBadge.hidden = false;
    });
  });
}

// 16. Restart handler
const restartLink = document.getElementById('restartLink');
if (restartLink) {
  restartLink.addEventListener('click', () => {
    sound.stopAll();
    state.name = '';
    state.bring = [];
    state.destination = '';
    state.transportation = '';
    state.favorite = '';
    state.who = '';

    if (nameInput) nameInput.value = '';

    [bringGrid, destGrid, transportGrid, favGrid, whoGrid].forEach(g => {
      if (g) {
        [...g.children].forEach(c => {
          c.classList.remove('selected');
          c.style.transform = '';
        });
      }
    });

    whoScale.siya = 1;
    whoScale.me = 1;
    if (bringHint) bringHint.textContent = 'Pick up to 3';
    if (bringNextBtn) bringNextBtn.disabled = true;
    if (destNextBtn) destNextBtn.disabled = true;
    if (transportNextBtn) transportNextBtn.disabled = true;
    if (favNextBtn) favNextBtn.disabled = true;
    if (whoNextBtn) whoNextBtn.disabled = true;

    showScene('scene1');
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initFloaters();
});
