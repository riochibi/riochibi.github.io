/**
 * portfolio.js（js版）　Portfolioページの表示ロジック
 */

let currentCategory = "all";

function getCategoryLabel(key) {
  const found = portfolioCategories.find(c => c.key === key);
  return found ? found.label : key;
}

function getSeriesLabel(seriesKey) {
  return (portfolioSeries && portfolioSeries[seriesKey]) || seriesKey;
}

// シリーズキーをCSSクラス名に変換
function seriesClass(seriesKey) {
  return seriesKey ? "series-" + seriesKey.replace(/[^a-z0-9]/gi, "-") : "";
}

function renderFilterTabs() {
  const mount = document.getElementById("filter-tabs");
  if (!mount) return;

  const tabsHtml = [
    `<button class="filter-tab is-active" data-category="all">All</button>`,
    ...portfolioCategories.map(
      c => `<button class="filter-tab" data-category="${c.key}">${c.label}</button>`
    )
  ].join("");

  mount.innerHTML = tabsHtml;

  mount.querySelectorAll(".filter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      mount.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentCategory = btn.dataset.category;
      renderGallery();
    });
  });
}

function renderGallery() {
  const mount = document.getElementById("gallery-mount");
  if (!mount) return;

  const filtered =
    currentCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === currentCategory);

  if (filtered.length === 0) {
    mount.innerHTML = `<p class="gallery-empty">まだ作品がありません。</p>`;
    return;
  }

  if (currentCategory === "all") {
    // カテゴリ → シリーズの2段階。シリーズは横スクロール
    mount.innerHTML = portfolioCategories.map(cat => {
      const catItems = portfolioItems.filter(i => i.category === cat.key);
      if (catItems.length === 0) return "";

      const seriesOrder = [];
      const seriesMap = {};
      catItems.forEach(item => {
        const sk = item.series || "__none__";
        if (!seriesMap[sk]) { seriesMap[sk] = []; seriesOrder.push(sk); }
        seriesMap[sk].push(item);
      });

      const seriesHtml = seriesOrder.map(sk => {
        const items = seriesMap[sk];
        const label = sk === "__none__" ? "" : getSeriesLabel(sk);
        const cls = seriesClass(sk);
        const heading = label
          ? `<h4 class="series-heading ${cls}">${label}</h4>`
          : "";
        return `
          <div class="series-block">
            ${heading}
            <div class="series-scroll">
              ${items.map(renderGalleryItem).join("")}
            </div>
          </div>`;
      }).join("");

      return `<h3 class="category-heading">${cat.label}</h3>${seriesHtml}`;
    }).join("");

  } else {
    // カテゴリ絞り込み時もシリーズ横スクロール
    const seriesOrder = [];
    const seriesMap = {};
    filtered.forEach(item => {
      const sk = item.series || "__none__";
      if (!seriesMap[sk]) { seriesMap[sk] = []; seriesOrder.push(sk); }
      seriesMap[sk].push(item);
    });

    mount.innerHTML = seriesOrder.map(sk => {
      const items = seriesMap[sk];
      const label = sk === "__none__" ? "" : getSeriesLabel(sk);
      const cls = seriesClass(sk);
      const heading = label
        ? `<h4 class="series-heading ${cls}">${label}</h4>`
        : "";
      return `
        <div class="series-block">
          ${heading}
          <div class="series-scroll">
            ${items.map(renderGalleryItem).join("")}
          </div>
        </div>`;
    }).join("");
  }

  mount.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => openPortfolioModal(el.dataset.id));
  });
}

function renderGalleryItem(item) {
  return `
    <div class="gallery-item" data-id="${item.id}">
      <img class="thumb" src="${item.images[0]}" alt="${item.title}" loading="lazy">
      <div class="info">
        <div class="title">${item.title}</div>
        <div class="meta">${getCategoryLabel(item.category)} / ${item.year}</div>
      </div>
    </div>
  `;
}

function openPortfolioModal(id) {
  const item = portfolioItems.find(i => i.id === id);
  if (!item) return;

  const overlay = document.getElementById("modal-overlay");
  const box = document.getElementById("modal-box");

  box.innerHTML = `
    <button class="modal-close" id="modal-close">&times;</button>
    <div class="modal-images">
      ${item.images.map(src => `<img class="modal-img-main" src="${src}" alt="${item.title}">`).join("")}
    </div>
    <div class="modal-body">
      <h3 class="modal-title">${item.title}</h3>
      <p class="modal-meta">${getCategoryLabel(item.category)} / ${item.year}</p>
      <p class="modal-desc">${item.description}</p>
      <p class="modal-materials">使用素材：${item.materials}</p>
    </div>
  `;

  overlay.classList.add("is-open");
  document.getElementById("modal-close").addEventListener("click", closeModal);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("is-open");
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilterTabs();
  renderGallery();

  const overlay = document.getElementById("modal-overlay");
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });
});
