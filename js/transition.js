/**
 * transition.js　ページ遷移フェードエフェクト
 * ページが読み込まれるときと、リンクをクリックしたときに
 * ふわっと白からフェードイン/アウトします。
 */

(function () {
  // フェード用オーバーレイを挿入
  const overlay = document.createElement("div");
  overlay.id = "page-transition";
  overlay.style.cssText = [
    "position:fixed", "inset:0", "background:#FAF7F0",
    "z-index:9999", "opacity:1",
    "transition:opacity 0.45s ease",
    "pointer-events:none"
  ].join(";");
  document.documentElement.appendChild(overlay);

  // ページ読み込み完了 → フェードイン
  window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.opacity = "0";
      });
    });
  });

  // リンククリック → フェードアウトしてから遷移
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href");
    // 外部リンク・アンカー・同ページは除外
    if (!href || href.startsWith("http") || href.startsWith("#") || a.target === "_blank") return;

    e.preventDefault();
    overlay.style.opacity = "1";
    setTimeout(() => {
      window.location.href = href;
    }, 420);
  });
})();
