# てのこや ブランドサイト

「てのこや」のブランドサイトです。
このREADMEには、**プログラミングの知識がなくても更新できるように**、
写真の差し替え方・文章の直し方・作品や活動記録の追加方法などを
できるだけ詳しく書いています。

困ったときはこのページに戻ってきて、該当する見出しを探してください。

---

## 目次

1. [フォルダ構成の説明](#1-フォルダ構成の説明)
2. [GitHubへアップロードする方法](#2-githubへアップロードする方法)
3. [写真を差し替える方法](#3-写真を差し替える方法)
4. [テキストを修正する方法](#4-テキストを修正する方法)
5. [新しい作品を追加する方法（Portfolio）](#5-新しい作品を追加する方法portfolio)
6. [新しい活動記録を追加する方法（Archive）](#6-新しい活動記録を追加する方法archive)
7. [Newsを追加する方法](#7-newsを追加する方法)
8. [将来ページを追加するときの方法](#8-将来ページを追加するときの方法)
9. [困ったときは](#9-困ったときは)

---

## 1. フォルダ構成の説明

```
tenokoya/
├── index.html          ← トップページ
├── create.html          ← Createページ
├── experience.html       ← Experienceページ
├── journal.html         ← Journalページ
├── gift.html            ← Giftページ
├── portfolio.html        ← 作品集ページ（一覧の「仕組み」だけ）
├── archive.html          ← 活動記録ページ（一覧の「仕組み」だけ）
├── README.md            ← このファイル
│
├── images/              ← 写真はすべてここに入れる
│   ├── hero/             トップページの大きい画像（3枚）
│   ├── create/           Createページの写真
│   ├── experience/        Experienceページの写真
│   ├── journal/          Journalページの写真
│   ├── gift/             Giftページの写真
│   ├── portfolio/         作品の写真（Portfolio用）
│   └── archive/          イベント・展示の写真（Archive用）
│
├── data/                ← 文章・作品情報・活動記録などのデータ
│   ├── site-config.js     サイト名・SNSリンクなど全体の設定
│   ├── portfolio.js       作品のデータ（★作品追加はここ）
│   ├── archive.js        活動記録のデータ（★活動追加はここ）
│   └── news.js          お知らせのデータ（★News追加はここ）
│
├── css/                 ← デザイン（色・レイアウト）の設定
│   ├── variables.css      色・フォントの基本設定
│   ├── base.css         全体共通の基本スタイル
│   ├── layout.css        ヘッダー・フッターのデザイン
│   ├── index.css        トップページ専用デザイン
│   ├── subpage.css       Create/Experience/Journal/Gift共通デザイン
│   └── gallery.css       Portfolio/Archive共通デザイン
│
└── js/                  ← 動きの仕組み（基本的に触らなくてOK）
    ├── common.js          ヘッダー・フッターを自動で表示する仕組み
    ├── index.js          トップページの動き（Hero切り替え・News表示）
    ├── portfolio.js        Portfolioページの表示の仕組み
    └── archive.js         Archiveページの表示の仕組み
```

### 覚えておくと良いポイント

- **写真を変えたい** → `images` フォルダ
- **文章・作品・イベント情報を変えたい** → `data` フォルダ
- **色やレイアウトを変えたい** → `css` フォルダ
- **js フォルダの中身は、基本的に触らなくて大丈夫です。**
  （仕組みを書いているファイルなので、間違えて消したり書き換えたりしないよう注意してください）

---

## 2. GitHubへアップロードする方法

### 初めてアップロードするとき

1. GitHubのリポジトリ（`riochibi.github.io` など）のページを開く
2. 「Add file」→「Upload files」をクリック
3. `tenokoya` フォルダの中身（`index.html` や `images` フォルダなど）を
   **フォルダごとドラッグ＆ドロップ**する
   - フォルダの中の階層（`images/hero/hero-01.jpg` など）が
     そのまま保たれるようにアップロードしてください
4. 画面下の「Commit changes」ボタンを押す
5. 数分待つと、`https://ユーザー名.github.io/` でサイトが公開されます

### 更新するとき（2回目以降）

1. GitHubのリポジトリを開く
2. 変更したいファイル（例：`data/portfolio.js`）をクリック
3. 右上の鉛筆マーク（Edit this file）をクリック
4. 中身を書き換える
5. 画面下の「Commit changes」ボタンを押す
6. 1〜2分待つとサイトに反映されます

写真を差し替えるときは、同じファイル名で上書きアップロードすればOKです。
（GitHub上で該当ファイルを開き、右上の「...」→「Delete file」→
新しいファイルを同じ名前でアップロード、という手順でも大丈夫です）

---

## 3. 写真を差し替える方法

### 基本の考え方

写真は全て `images` フォルダの中に、ページごとのフォルダに分けて入っています。
**同じファイル名で上書きすれば、自動で新しい写真に変わります。**

### 手順

1. 差し替えたい写真がどのページのものか確認する
   - トップページのHero画像 → `images/hero/`
   - Createページの写真 → `images/create/`
   - 作品の写真 → `images/portfolio/`
   - 活動記録の写真 → `images/archive/`
2. 新しい写真を、**元と同じファイル名**にリネームする
   （例：`hero-01.jpg` を差し替えるなら、新しい写真も `hero-01.jpg` という名前にする）
3. GitHub上で該当フォルダを開き、同じ名前でアップロードして上書きする

### 新しい写真を追加したい場合（ファイル名を変えたいとき）

ファイル名を変えると、HTMLやdataファイルの中の「どの写真を表示するか」の
指定も合わせて変える必要があります。

- トップページのHero・Activities写真 → `index.html` を直接開いて、
  `images/hero/hero-01.jpg` のように書かれている部分を新しいファイル名に書き換える
- 作品・活動記録の写真 → `data/portfolio.js` または `data/archive.js` の
  `images: [ ... ]` の部分を書き換える（詳しくは次の章へ）

### 写真サイズの目安

- Hero画像：横1600px程度
- 作品・活動記録の写真：横1200px程度
- あまり大きすぎる写真（数MB以上）は表示が遅くなるので、
  スマホの写真アプリなどで軽く縮小してからアップロードするのがおすすめです。

---

## 4. テキストを修正する方法

### サイト全体の設定（サイト名・SNSリンクなど）

`data/site-config.js` を開いて、該当箇所を書き換えてください。

```js
const siteConfig = {
  siteName: "てのこや",              // ← ここを変えると全ページのロゴ文字が変わる
  tagline: "手から生まれる、小さなしあわせ。",
  instagram: {
    url: "https://www.instagram.com/xxxxx/",   // ← InstagramのURL
    label: "@xxxxx"
  },
  ...
};
```

### 各ページの文章（Story、Create説明文など）

それぞれのHTMLファイル（`index.html`、`create.html` など）を開き、
`<p>〜</p>` で囲まれた部分が文章です。日本語の部分だけを書き換えてください。

例（`index.html` のStory部分）：

```html
<p>忙しい毎日の中で、手を動かしている時間だけは、不思議と心が落ち着く。</p>
```

この `<p>` と `</p>` の間の文章だけを書き換えればOKです。
タグ（`<` や `>` の記号）は消さないように注意してください。

---

## 5. 新しい作品を追加する方法（Portfolio）

作品の追加は **`data/portfolio.js` を編集するだけ** です。
HTMLファイルは一切さわりません。

### 手順

1. `data/portfolio.js` を開く
2. `portfolioItems` という配列（リスト）の中に、以下の形式のかたまりを
   コピー＆ペーストで1つ追加する

```js
{
  id: "gift-bouquet-01",              // 他の作品とかぶらない名前（半角英数字とハイフンのみ）
  category: "gift",                   // miniature / illustration / accessory / gift のどれか
  title: "モールブーケ",
  year: "2025",
  images: [
    "images/portfolio/gift-bouquet-01.jpg",
    "images/portfolio/gift-bouquet-02.jpg"
  ],
  description: "オーダーメイドで制作したモールブーケの一例です。",
  materials: "モール、造花、リボン"
},
```

3. 写真を `images/portfolio/` フォルダにアップロードする
   （`images` の書き方と同じファイル名にすること）
4. GitHubにコミットすれば、自動でPortfolioページの一覧・カテゴリ・
   詳細（クリックしたときの内容）に反映されます

### 注意点

- `id` は他の作品と絶対にかぶらないようにしてください
- 最後の作品の後ろにカンマ「,」を忘れずに（次の作品を追加する前提のため）
- `category` は必ず既存の4種類（miniature / illustration / accessory / gift）の
  どれかにしてください。新しいカテゴリを作りたい場合は、
  `data/portfolio.js` の一番下にある `portfolioCategories` にも追加が必要です

```js
const portfolioCategories = [
  { key: "miniature", label: "Miniature" },
  { key: "illustration", label: "Illustration" },
  { key: "accessory", label: "Accessory" },
  { key: "gift", label: "Gift" }
  // 新しいカテゴリを追加する場合はここにも追加
  // , { key: "new-category", label: "New Category" }
];
```

---

## 6. 新しい活動記録を追加する方法（Archive）

活動記録（ワークショップ・展示・イベント）の追加も、
**`data/archive.js` を編集するだけ** です。

### 手順

1. `data/archive.js` を開く
2. `archiveItems` という配列の中に、以下の形式のかたまりを
   コピー＆ペーストで1つ追加する

```js
{
  id: "workshop-2026-summer",
  category: "workshop",              // workshop / exhibition / event のどれか
  title: "夏のミニチュアワークショップ",
  date: "2026-08-01",                // YYYY-MM-DD の形式（並び替えに使われます）
  dateLabel: "2026.08",              // 一覧に表示される日付の文字
  place: "コミュニティスペースほぼのら（埼玉県 さいたま市）",
  images: [
    "images/archive/workshop-2026-summer-01.jpg"
  ],
  summary: "イベントの概要文をここに書きます。",
  impression: "開催してみての感想をここに書きます。"
},
```

3. 写真を `images/archive/` フォルダにアップロードする
4. GitHubにコミットすれば、自動でArchiveページに反映されます

### 注意点

- `date` は必ず `2026-08-01` のように「年-月-日」の形式で書いてください
  （これで新しい順に自動並び替えされます）
- `category` は workshop / exhibition / event の3種類のいずれかにしてください

---

## 7. Newsを追加する方法

トップページのNews欄に情報を追加したいときは、`data/news.js` を編集します。

### 手順

1. `data/news.js` を開く
2. `newsItems` という配列に、以下の形式で1件追加する

```js
{
  date: "2026-08-01",               // YYYY-MM-DD の形式
  dateLabel: "2026.08",             // 表示される日付
  text: "○○を開催します。",
  link: ""                          // リンク先があればURLを、なければ空のまま
},
```

3. GitHubにコミットすれば、トップページのNews欄（最新5件）に反映されます

---

## 8. 将来ページを追加するときの方法

サイトが育っていく中で、新しいページ（例：`news.html` のNews一覧ページ、
`shop.html` のオンラインショップページなど）を追加したくなったときの手順です。

### 手順

1. 既存のHTMLファイル（例：`gift.html`）をコピーして、
   新しいファイル名（例：`shop.html`）にする
2. コピーしたファイルの `<title>` タグと本文を新しいページ用に書き換える
3. `data/site-config.js` の `nav` 配列に、新しいページへのリンクを追加する

```js
nav: [
  { label: "Create", href: "create.html" },
  { label: "Experience", href: "experience.html" },
  { label: "Journal", href: "journal.html" },
  { label: "Gift", href: "gift.html" },
  { label: "Shop", href: "shop.html" },     // ← このように追加するとメニューに出ます
  { label: "Portfolio", href: "portfolio.html" },
  { label: "Archive", href: "archive.html" },
  { label: "Contact", href: "index.html#contact" }
],
```

これだけで、ヘッダー・フッターのメニューに新しいページが自動的に
追加されます（ヘッダー・フッターは共通の仕組みで動いているため、
他のページを直す必要はありません）。

---

## 9. 困ったときは

- **サイトの見た目が崩れた** → 直前に編集したファイルの、カンマ「,」や
  カギカッコ「{ }」の閉じ忘れがないか確認してください。
  特に `data/portfolio.js` や `data/archive.js` は、
  1つのかたまり（`{ }`）ごとに最後にカンマが必要です。
- **写真が表示されない** → ファイル名の**大文字・小文字・全角半角**が
  完全に一致しているか確認してください（`Hero-01.jpg` と `hero-01.jpg` は別物として扱われます）。
- **どこを直せばいいか分からない** → この README の目次に戻って、
  該当する見出しを探してください。

---

## サイトの設計思想（メモ）

このサイトは、**HTMLファイルを直接編集しなくても、
`data` フォルダの中身を追記するだけで作品・活動記録・お知らせが
増えていく**ように設計されています。

- `portfolio.html` / `archive.html` は「表示の仕組み」だけが書かれたページで、
  中身は `data/portfolio.js` / `data/archive.js` から自動的に読み込まれます。
- ヘッダー・フッターは全ページ共通で `js/common.js` が生成しているため、
  メニュー項目やSNSリンクの変更は `data/site-config.js` の1箇所を直すだけで
  全ページに反映されます。

今後、作品やイベントが増えても、**ページを作り直す必要はありません。**
データを追記していくだけで、サイトが育っていく構成になっています。
 
