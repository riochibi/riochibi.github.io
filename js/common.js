/**
 * ============================================
 * common.js　ヘッダー・フッターの自動挿入
 * ============================================
 *
 * 【これは何をしているファイル？】
 * 全ページ共通のヘッダー（上部メニュー）とフッター（下部の情報）を
 * このファイル1つで生成しています。
 *
 * もしヘッダー・フッターの中身を変えたいときは、
 * data/site-config.js を編集してください。
 * このファイル自体を直接編集する必要は、基本的にありません。
 *
 * （HTMLファイルすべてに同じヘッダー・フッターを書くと、
 * 変更のたびに7ファイル全部を直す必要が出てしまうため、
 * この方式でまとめて管理できるようにしています）
 */

// ロゴの文字を1文字ずつカラフルなspanに分解
const LOGO_COLORS = [
  "#7DCCB8",  // t - ミントグリーン
  "#F0B8B8",  // e - コーラルピンク
  "#E8C97A",  // n - ペールイエロー
  "#B5D4E8",  // o - スカイブルー
  "#C8A8D0",  // k - ラベンダー
  "#F4C2A0",  // o - ピーチ
  "#A8C8A0",  // y - セージグリーン
  "#F0B8B8",  // a - コーラルピンク
];

function colorfulLogo(text) {
  return text.split("").map((ch, i) =>
    `<span style="color:${LOGO_COLORS[i % LOGO_COLORS.length]};transition:color 0.3s">${ch}</span>`
  ).join("");
}

function renderHeader() {
  const nav = siteConfig.nav
    .map(item => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <header class="site-header">
      <div class="container">
        <a href="index.html" class="site-logo">
          <span class="en">${colorfulLogo(siteConfig.siteNameEn)}</span>
          <span class="jp">${siteConfig.siteName}</span>
        </a>
        <nav class="site-nav" id="site-nav">
          ${nav}
        </nav>
        <button class="nav-toggle" id="nav-toggle" aria-label="メニューを開く">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;
}

function renderFooter() {
  const footerNav = siteConfig.nav
    .map(item => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-logo">${colorfulLogo(siteConfig.siteNameEn)}</div>
        <div class="footer-sns">
          <a href="${siteConfig.instagram.url}" target="_blank" rel="noopener">
            ${siteConfig.instagram.label}
          </a>
        </div>
        <nav class="footer-nav">
          ${footerNav}
        </nav>
        <p class="footer-copy">&copy; ${siteConfig.copyrightYear} ${siteConfig.siteName}</p>
      </div>
    </footer>
  `;
}

function initHeaderFooter() {
  const headerMount = document.getElementById("header-mount");
  const footerMount = document.getElementById("footer-mount");

  if (headerMount) headerMount.innerHTML = renderHeader();
  if (footerMount) footerMount.innerHTML = renderFooter();

  // ハンバーガーメニューの開閉
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
  }

  // ヘッダーの透明→背景あり切り替え
  const header = document.querySelector(".site-header");
  if (!header) return;

  // トップページ以外は最初から背景あり
  const isTop = location.pathname.endsWith("index.html") || location.pathname.endsWith("/");
  if (!isTop) {
    header.classList.add("is-subpage");
    return;
  }

  // トップページはスクロール量で切り替え
  function updateHeader() {
    if (window.scrollY > 60) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

// スクロールで要素をふわっと表示させる共通処理
function initFadeIn() {
  const targets = document.querySelectorAll(".fade-in");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderFooter();
  initFadeIn();
});
