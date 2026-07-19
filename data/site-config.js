/**
 * ============================================
 * site-config.js　サイト共通設定
 * ============================================
 *
 * 【ここを編集すると変わるもの】
 * ・サイト全ページのヘッダー・フッターに表示される情報
 * ・Instagramなどのリンク先
 *
 * サイト名やSNSアカウントが変わったときは、ここだけ直せば
 * 全ページに反映されます（1箇所修正で済むようにしてあります）。
 */

const siteConfig = {
  siteName: "てのこや",
  siteNameEn: "tenokoya",
  tagline: "手から生まれる、小さなしあわせ。",

  instagram: {
    url: "https://www.instagram.com/chiisaimonoclub_riochibi",
    label: "@chiisaimonoclub_riochibi"
  },

  // お問い合わせフォームのURL（Googleフォームなどに差し替えてください）
  contactFormUrl: "#",

  // ナビゲーションメニュー（この順番で表示されます）
  nav: [
    { label: "Create", href: "create.html" },
    { label: "Experience", href: "experience.html" },
    { label: "Journal", href: "journal.html" },
    { label: "Gift", href: "gift.html" },
    { label: "Portfolio", href: "portfolio.html" },
    { label: "Archive", href: "archive.html" },
    { label: "Contact", href: "index.html#contact" }
  ],

  copyrightYear: "2026"
};
