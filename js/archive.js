/**
 * archive.js（js版）　Archiveページの表示ロジック
 */

let currentArchiveCategory = "all";

function getArchiveCategoryLabel(key) {
  const found = archiveCategories.find(c => c.key === key);
  return found ? found.label : key;
}

function renderArchiveFilterTabs() {
  const mount = document.getElementById("filter-tabs");
  if (!mount) return;

  const tabsHtml = [
    `<button class="filter-tab is-active" data-category="all">All</button>`,
    ...archiveCategories.map(
      c => `<button class="filter-tab" data-category="${c.key}">${c.label}</button>`
    )
  ].join("");

  mount.innerHTML = tabsHtml;

  mount.querySelectorAll(".filter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      mount.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentArchiveCategory = btn.dataset.category;
      renderArchiveGallery();
    });
  });
}

function renderArchiveGallery() {
  const mount = document.getElementById("gallery-mount");
  if (!mount) return;

  const sorted = [...archiveItems].sort((a, b) => (a.date < b.date ? 1 : -1));
  const filtered =
    currentArchiveCategory === "all"
      ? sorted
      : sorted.filter(item => item.category === currentArchiveCategory);

  if (filtered.length === 0) {
    mount.innerHTML = `<p class="gallery-empty">まだ活動記録がありません。</p>`;
    return;
  }

  mount.innerHTML = `<div class="gallery-grid">${filtered.map(renderArchiveItem).join("")}</div>`;

  mount.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => openArchiveModal(el.dataset.id));
  });
}

function renderArchiveItem(item) {
  return `
    <div class="gallery-item" data-id="${item.id}">
      <img class="thumb" src="${item.images[0]}" alt="${item.title}" loading="lazy">
      <div class="info">
        <div class="title">${item.title}</div>
        <div class="meta">${getArchiveCategoryLabel(item.category)} / ${item.dateLabel}</div>
      </div>
    </div>
  `;
}

function buildModalImagesHtml(images, title) {
  if (images.length === 0) return "";
  const [main, ...subs] = images;

  const mainHtml = `
    <div class="modal-img-main-wrap">
      <img class="modal-img-main" src="${main}" alt="${title}">
    </div>`;

  const subsHtml = subs.length > 0 ? `
    <div class="modal-img-sub-scroll">
      ${subs.map(src => `<img src="${src}" alt="${title}" loading="lazy">`).join("")}
    </div>` : "";

  return `<div class="modal-images">${mainHtml}${subsHtml}</div>`;
}

function openArchiveModal(id) {
  const item = archiveItems.find(i => i.id === id);
  if (!item) return;

  const overlay = document.getElementById("modal-overlay");
  const box    = document.getElementById("modal-box");

  // innerHTML ではなく、あらかじめ用意した構造を更新する
  box.querySelector(".modal-images-wrap").innerHTML =
    buildModalImagesHtml(item.images, item.title);

  box.querySelector(".modal-title").textContent  = item.title;
  box.querySelector(".modal-meta").textContent   =
    `${getArchiveCategoryLabel(item.category)} / ${item.dateLabel} / ${item.place}`;

  const toHtml = str => str ? str.replace(/\n/g, "<br>") : "";
  box.querySelector(".modal-summary").innerHTML = toHtml(item.summary);

  const impressionWrap = box.querySelector(".modal-impression-wrap");
  if (item.impression) {
    box.querySelector(".modal-impression").innerHTML = toHtml(item.impression);
    impressionWrap.style.display = "";
  } else {
    impressionWrap.style.display = "none";
  }

  const subGrid = box.querySelector(".modal-sub-grid");
  if (subGrid) subGrid.innerHTML = "";

  // サブ写真タップでメインに切り替え
  setTimeout(() => {
    const mainImg = box.querySelector(".modal-img-main");
    box.querySelectorAll(".modal-img-sub-scroll img").forEach(img => {
      img.addEventListener("click", () => {
        if (mainImg) mainImg.src = img.src;
      });
    });
  }, 50);

  overlay.classList.add("is-open");
  // スクロール位置をトップに戻す
  box.scrollTop = 0;
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("is-open");
}

document.addEventListener("DOMContentLoaded", () => {
  renderArchiveFilterTabs();
  renderArchiveGallery();

  // ×ボタン：静的なので一度だけ登録すればOK
  document.getElementById("modal-close").addEventListener("click", closeModal);

  // 背景クリックで閉じる
  const overlay = document.getElementById("modal-overlay");
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });
});
