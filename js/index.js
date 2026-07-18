/**
 * index.js　トップページ専用の動き
 */

const HERO_INTERVAL_MS = 4500;

// ---- Hero スライドショー ----
function initHero() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length <= 1) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
  }, HERO_INTERVAL_MS);
}

// ---- Photo Strip：portfolioからランダムに選んで自動入れ替え ----
const STRIP_POOL = [
  "images/portfolio/miniature-wall-okazu-zukan-large.jpg",
  "images/portfolio/miniature-nabe-sukiyaki.jpg",
  "images/portfolio/miniature-pan-melon.jpg",
  "images/portfolio/miniature-omamagoto-sushi.jpg",
  "images/portfolio/miniature-waseda-ramen-01.jpg",
  "images/portfolio/miniature-nabe-oden.jpg",
  "images/portfolio/miniature-pork-curry.jpg",
  "images/portfolio/miniature-karaage-teishoku.jpg",
  "images/portfolio/miniature-wall-bento-01.jpg",
  "images/portfolio/miniature-wall-shortcake.jpg",
  "images/portfolio/miniature-wall-cake.jpg",
  "images/portfolio/miniature-wall-wagashi.jpg",
  "images/portfolio/accessory-donut-pierce.jpg",
  "images/portfolio/accessory-bento-earring.jpg",
  "images/portfolio/accessory-pizza-earring.jpg",
  "images/portfolio/illustration-monochro-nabesan.jpg",
  "images/portfolio/illustration-monochro-chuuka.jpg",
  "images/portfolio/illustration-temoto-omuraisu2.jpg",
  "images/archive/archive-exhibit-winter-05.jpg",
  "images/archive/archive-exhibit-oishii-04.jpg",
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function initPhotoStrip() {
  const inner = document.getElementById("photo-strip-inner");
  if (!inner) return;

  // 最初の6枚をランダムに並べる
  const SLOT_COUNT = 6;
  let pool = shuffle(STRIP_POOL);
  let current = pool.slice(0, SLOT_COUNT);

  // 初期描画
  function renderStrip(imgs) {
    inner.innerHTML = imgs.map((src, i) =>
      `<div class="strip-slot" data-slot="${i}">
        <img src="${src}" alt="" class="strip-img">
      </div>`
    ).join("");
  }

  renderStrip(current);

  // 3秒ごとにランダムなスロット1枚をふわっと入れ替え
  let usedPool = [...current];
  setInterval(() => {
    // まだ使っていない画像から1枚ランダムに
    const unused = STRIP_POOL.filter(s => !usedPool.includes(s));
    if (unused.length === 0) {
      usedPool = [...current];
      return;
    }
    const newSrc = unused[Math.floor(Math.random() * unused.length)];
    const slotIdx = Math.floor(Math.random() * SLOT_COUNT);
    const slot = inner.querySelector(`[data-slot="${slotIdx}"]`);
    if (!slot) return;

    // フェードアウト→画像差し替え→フェードイン
    const img = slot.querySelector(".strip-img");
    img.style.transition = "opacity 0.6s ease";
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = newSrc;
      img.style.opacity = "1";
      current[slotIdx] = newSrc;
      usedPool.push(newSrc);
    }, 650);
  }, 3000);
}

// ---- News テキストリスト ----
function renderNews() {
  const mount = document.getElementById("news-list");
  if (!mount) return;
  const sorted = [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1));
  const latest = sorted.slice(0, 5);
  mount.innerHTML = latest.map(item => {
    const content = item.link
      ? `<a href="${item.link}" class="news-text">${item.text}</a>`
      : `<span class="news-text">${item.text}</span>`;
    return `<div class="news-item"><span class="news-date">${item.dateLabel}</span>${content}</div>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  initHero();
  initPhotoStrip();
  renderNews();
});
