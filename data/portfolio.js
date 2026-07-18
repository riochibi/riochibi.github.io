/**
 * ============================================
 * portfolio.js　作品データ
 * ============================================
 *
 * 【ここを編集すると変わるもの】
 * ・portfolio.html の作品一覧
 * ・カテゴリごとの絞り込み
 * ・作品をクリックしたときに出てくる詳細（モーダル）
 *
 * 【新しい作品を追加する方法】
 * 1. 下の portfolioItems の配列に、{ } のかたまりを1つコピペで増やす
 * 2. 中身を書き換える（id は他の作品と絶対にかぶらないようにする）
 * 3. 写真は /images/portfolio/ フォルダに入れて、images に書いたファイル名と合わせる
 * 4. 保存してGitHubにアップロードすれば、自動で一覧に反映されます
 *
 * 【series（シリーズ）について】
 * series を設定すると、同じ series の作品がグループ化されて
 * シリーズ名の見出しつきでまとめて表示されます。
 * series がない作品は「その他」としてまとめて表示されます。
 *
 * 【写真の枚数】
 * images は何枚でも増やせます。1枚だけでもOK。
 * 1枚目が一覧のサムネイルとして使われます。
 */

const portfolioItems = [

  // ===== Miniature =====

  // --- 早稲田ラーメンシリーズ ---
  {
    id: "miniature-waseda-ramen-01",
    category: "miniature", series: "waseda-ramen",
    title: "東京麺珍亭本舗　油そば", year: "2025",
    images: ["images/portfolio/miniature-waseda-ramen-01.jpg"],
    description: "早稲田名物・東京麺珍亭本舗の油そばを指先サイズで再現。", materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-waseda-ramen-02",
    category: "miniature", series: "waseda-ramen",
    title: "図星　油soba", year: "2025",
    images: ["images/portfolio/miniature-waseda-ramen-02.jpg"],
    description: "図星の油sobaを指先サイズで再現。", materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-waseda-ramen-03",
    category: "miniature", series: "waseda-ramen",
    title: "メルシー　五目そば", year: "2025",
    images: ["images/portfolio/miniature-waseda-ramen-03.jpg"],
    description: "早稲田の老舗中華「メルシー」の五目そばを指先サイズで再現。", materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-waseda-ramen-04",
    category: "miniature", series: "waseda-ramen",
    title: "麺爺　油そば（白）", year: "2025",
    images: ["images/portfolio/miniature-waseda-ramen-04.jpg"],
    description: "麺爺の油そば（白）を指先サイズで再現。", materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-waseda-ramen-05",
    category: "miniature", series: "waseda-ramen",
    title: "らぁ麺やまぐち　特製塩ラーメン", year: "2025",
    images: ["images/portfolio/miniature-waseda-ramen-05.jpg"],
    description: "らぁ麺やまぐちの特製塩ラーメンを指先サイズで再現。", materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-waseda-ramen-06",
    category: "miniature", series: "waseda-ramen",
    title: "蔭山　鶏白湯そば", year: "2025",
    images: ["images/portfolio/miniature-waseda-ramen-06.jpg"],
    description: "蔭山の鶏白湯そばを指先サイズで再現。", materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-waseda-ramen-07",
    category: "miniature", series: "waseda-ramen",
    title: "武蔵野油學会　特濃油そば", year: "2025",
    images: ["images/portfolio/miniature-waseda-ramen-07.jpg"],
    description: "武蔵野油學会の特濃油そばを指先サイズで再現。", materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },

  // --- 鍋シリーズ ---
  {
    id: "miniature-nabe-sukiyaki",
    category: "miniature", series: "nabe",
    title: "すきやき", year: "2025",
    images: ["images/portfolio/miniature-nabe-sukiyaki.jpg"],
    description: "しいたけ・白菜・牛肉・にんじん・ねぎを煮込んだすきやき。溶き卵の小皿と割り下皿を添えた、冬の鍋セットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-nabe-oden",
    category: "miniature", series: "nabe",
    title: "おでん", year: "2025",
    images: ["images/portfolio/miniature-nabe-oden.jpg"],
    description: "こんにゃく・大根・ごぼ天・餅巾着・ちくわが入ったおでん。からしの小皿とパッケージがセットになった「いつものおでん」シリーズです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-nabe-toridango",
    category: "miniature", series: "nabe",
    title: "鶏団子鍋", year: "2025",
    images: ["images/portfolio/miniature-nabe-toridango.jpg"],
    description: "しいたけ・にんじん・鶏だんご・だいこん・白菜を煮込んだ鶏団子鍋。ピンクのランチョンマットと「ふわふわとり」パッケージがかわいいセットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-nabe-motsu",
    category: "miniature", series: "nabe",
    title: "もつ鍋", year: "2025",
    images: ["images/portfolio/miniature-nabe-motsu.jpg"],
    description: "キャベツ・にんにく・もつ・唐辛子・ニラが入った博多風もつ鍋。「博多の味」スパイスパッケージと一緒に、本格的な一人前を再現しました。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },

  // --- パンシリーズ ---
  {
    id: "miniature-pan-sandwich",
    category: "miniature", series: "pan",
    title: "サンドイッチ", year: "2025",
    images: ["images/portfolio/miniature-pan-sandwich.jpg"],
    description: "ハム・チーズ・レタスを挟んだ角食パンのサンドイッチ。断面から具材がのぞくリアルさが見どころです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-pan-melon",
    category: "miniature", series: "pan",
    title: "メロンパン", year: "2025",
    images: ["images/portfolio/miniature-pan-melon.jpg"],
    description: "ざっくりしたクッキー生地の格子模様が特徴の、まんまるメロンパン。",
    materials: "樹脂粘土、アクリル絵の具"
  },
  {
    id: "miniature-pan-tamago",
    category: "miniature", series: "pan",
    title: "たまごパン", year: "2025",
    images: ["images/portfolio/miniature-pan-tamago.jpg"],
    description: "ふっくらした生地にたまごサラダをたっぷり詰めた、惣菜パンのミニチュアです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-pan-anbutter",
    category: "miniature", series: "pan",
    title: "あんバター", year: "2025",
    images: ["images/portfolio/miniature-pan-anbutter.jpg"],
    description: "こし餡とバターを挟んだ、甘じょっぱいあんバターパン。つやつやの焼き色が食欲をそそります。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-pan-france",
    category: "miniature", series: "pan",
    title: "フランスパン", year: "2025",
    images: ["images/portfolio/miniature-pan-france.jpg"],
    description: "カリッとした皮の質感まで再現した、小さなフランスパン（バゲット）のミニチュアです。",
    materials: "樹脂粘土、アクリル絵の具"
  },
  {
    id: "miniature-pan-cream",
    category: "miniature", series: "pan",
    title: "クリームパン", year: "2025",
    images: ["images/portfolio/miniature-pan-cream.jpg"],
    description: "カスタードクリームがたっぷり詰まった、ころんとしたクリームパン。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-pan-croissant-sand",
    category: "miniature", series: "pan",
    title: "クロワッサンサンド", year: "2025",
    images: ["images/portfolio/miniature-pan-croissant-sand.jpg"],
    description: "サーモン・レタス・クリームチーズを挟んだクロワッサンサンド。層の質感まで丁寧に再現しました。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },

  // --- 定食シリーズ ---
  {
    id: "miniature-hamburger-lunch",
    category: "miniature", series: "teishoku",
    title: "ハンバーグランチ", year: "2025",
    images: ["images/portfolio/miniature-hamburger-lunch.jpg"],
    description: "ごはん・ポテトサラダ・ハンバーグのランチプレートを指先サイズで再現しました。",
    materials: "樹脂粘土、アクリル絵の具"
  },
  {
    id: "miniature-kamonanban-udon",
    category: "miniature", series: "teishoku",
    title: "鴨南蛮うどん", year: "2025",
    images: ["images/portfolio/miniature-kamonanban-udon.jpg"],
    description: "うどん・鴨汁・薬味（ねぎ・たくわん）のセットを再現したミニチュアです。",
    materials: "樹脂粘土、アクリル絵の具"
  },
  {
    id: "miniature-nikujaga-teishoku",
    category: "miniature", series: "teishoku",
    title: "肉じゃが定食", year: "2025",
    images: ["images/portfolio/miniature-nikujaga-teishoku.jpg"],
    description: "ごはん・きゅうりのお漬物・ホクホクコロッケ・ホクホク肉じゃがの定食セットです。",
    materials: "樹脂粘土、アクリル絵の具"
  },
  {
    id: "miniature-pork-curry",
    category: "miniature", series: "teishoku",
    title: "ポークカレー", year: "2025",
    images: ["images/portfolio/miniature-pork-curry.jpg"],
    description: "じゃがいも・にんじん・豚肉のごろごろカレーと白ごはんのセット。「母のカレー」パッケージと木のスプーンが添えられた、懐かしい味わいの一皿です。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-ebiten-soba",
    category: "miniature", series: "teishoku",
    title: "海老天そば", year: "2025",
    images: ["images/portfolio/miniature-ebiten-soba.jpg"],
    description: "ぷりぷりの海老天ぷらが乗った、温かいそばのミニチュアです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-instant-ramen",
    category: "miniature", series: "teishoku",
    title: "即席ラーメン", year: "2025",
    images: ["images/portfolio/miniature-instant-ramen.jpg"],
    description: "ナルトとねぎを乗せた、懐かしい即席ラーメンのミニチュアです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-kitsune-udon",
    category: "miniature", series: "teishoku",
    title: "きつねうどん", year: "2025",
    images: ["images/portfolio/miniature-kitsune-udon.jpg"],
    description: "つやつやのお揚げとねぎが乗った、ほっこりきつねうどんのミニチュアです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-karaage-teishoku",
    category: "miniature", series: "teishoku",
    title: "唐揚げ定食", year: "2025",
    images: ["images/portfolio/miniature-karaage-teishoku.jpg"],
    description: "タルタル唐揚げ・豆腐のお味噌汁・もやしナムル・ごはんが揃った定食セット。木のトレーにこぢんまりと並んでいます。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-katsu-curry",
    category: "miniature", series: "teishoku",
    title: "カツカレー", year: "2025",
    images: ["images/portfolio/miniature-katsu-curry.jpg"],
    description: "豚カツ・ポークカレー・ライス・千切りキャベツを楕円プレートに盛った、ボリューム満点のカツカレーです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },

  // --- 壁に飾るシリーズ ---
  {
    id: "miniature-wall-sushi-01",
    category: "miniature", series: "wall",
    title: "お寿司①", year: "2025",
    images: ["images/portfolio/miniature-wall-sushi-01.jpg"],
    description: "円形プレートにマグロ・サーモン・イクラ軍艦を盛り付けた壁飾りです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、木製プレート"
  },
  {
    id: "miniature-wall-sushi-02",
    category: "miniature", series: "wall",
    title: "お寿司②", year: "2025",
    images: ["images/portfolio/miniature-wall-sushi-02.jpg"],
    description: "円形プレートに白身・軍艦・玉子を盛り付けた壁飾りです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、木製プレート"
  },
  {
    id: "miniature-wall-sushi-03",
    category: "miniature", series: "wall",
    title: "お寿司③", year: "2025",
    images: ["images/portfolio/miniature-wall-sushi-03.jpg"],
    description: "円形プレートにサーモン・細巻き・オレンジ色のネタを盛り付けた壁飾りです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、木製プレート"
  },
  {
    id: "miniature-wall-bento-01",
    category: "miniature", series: "wall",
    title: "お弁当①", year: "2025",
    images: ["images/portfolio/miniature-wall-bento-01.jpg"],
    description: "ギンガムチェックの風呂敷包みと色とりどりのおかずが詰まった楕円弁当箱のセットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、布、木材"
  },
  {
    id: "miniature-wall-bento-02",
    category: "miniature", series: "wall",
    title: "お弁当②", year: "2025",
    images: ["images/portfolio/miniature-wall-bento-02.jpg"],
    description: "赤い格子柄の風呂敷包みと、ぎっしりおかずが詰まった楕円弁当箱のセットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、布、木材"
  },
  {
    id: "miniature-wall-okazu-zukan-large",
    category: "miniature", series: "wall",
    title: "おかず図鑑（大）", year: "2025",
    images: ["images/portfolio/miniature-wall-okazu-zukan-large.jpg"],
    description: "30種類以上のおかずを白いキャンバスに並べた大きな図鑑。梅干し・のり・ちくわ・えびなど定番おかずがぎっしりです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、キャンバス"
  },
  {
    id: "miniature-wall-okazu-zukan",
    category: "miniature", series: "wall",
    title: "おかず図鑑（小）", year: "2025",
    images: ["images/portfolio/miniature-wall-okazu-zukan.jpg"],
    description: "木製額に9種のおかずミニチュアを並べた小型の図鑑。コンパクトに飾れるサイズです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、木製額"
  },
  {
    id: "miniature-wall-gohan-zukan",
    category: "miniature", series: "wall",
    title: "ごはんのお供図鑑", year: "2025",
    images: ["images/portfolio/miniature-wall-gohan-zukan.jpg"],
    description: "梅干し・のり・ふりかけなど、ごはんのお供をまとめた壁飾りです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、木製パネル"
  },
  {
    id: "miniature-wall-shortcake",
    category: "miniature", series: "wall",
    title: "ショートケーキ", year: "2025",
    images: ["images/portfolio/miniature-wall-shortcake.jpg"],
    description: "木製フレームに飾ったショートケーキのミニチュア。麻布地の背景に、いちごをのせた白いケーキがちょこんと立っています。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、木製フレーム"
  },
  {
    id: "miniature-wall-wagashi",
    category: "miniature", series: "wall",
    title: "和菓子", year: "2025",
    images: ["images/portfolio/miniature-wall-wagashi.jpg"],
    description: "木製フレームに飾った和菓子のミニチュア。桜・葉・菊などをモチーフにした上生菓子6種を、上段と下段に分けて並べました。",
    materials: "樹脂粘土、アクリル絵の具、木製フレーム"
  },
  {
    id: "miniature-wall-pasta",
    category: "miniature", series: "wall",
    title: "パスタ", year: "2025",
    images: ["images/portfolio/miniature-wall-pasta.jpg"],
    description: "イラストと組み合わせた壁飾りシリーズ。まるまるしたふたりがパスタを持ってすわっているポストカードに、ミニチュアのパスタを立体的に添えました。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、イラストポストカード"
  },
  {
    id: "miniature-wall-ice",
    category: "miniature", series: "wall",
    title: "アイスクリーム", year: "2025",
    images: ["images/portfolio/miniature-wall-ice.jpg"],
    description: "白いキャンバスに飾った3段アイスクリームのミニチュア。ミントグリーン・ラズベリー・バニラの3色スクープがコーンに重なっています。",
    materials: "樹脂粘土、アクリル絵の具、キャンバス"
  },
  {
    id: "miniature-wall-katsu-sand",
    category: "miniature", series: "wall",
    title: "カツサンド", year: "2025",
    images: ["images/portfolio/miniature-wall-katsu-sand.jpg"],
    description: "イラストと組み合わせた壁飾りシリーズ。カツサンドを高く掲げるふたりのキャラクターに、ミニチュアのカツサンドを立体的に添えました。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、イラストポストカード"
  },
  {
    id: "miniature-wall-cake",
    category: "miniature", series: "wall",
    title: "ケーキ", year: "2025",
    images: ["images/portfolio/miniature-wall-cake.jpg"],
    description: "白いキャンバスに5個並んだケーキのミニチュア。プリン・ドーナツ・シュークリームなど、焼き菓子・スイーツが横一列に整列しています。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン、キャンバス"
  },

  // --- おままごとセット ---
  {
    id: "miniature-omamagoto-bread",
    category: "miniature", series: "omamagoto",
    title: "bread", year: "2025",
    images: ["images/portfolio/miniature-omamagoto-bread.jpg"],
    description: "クロワッサン・デニッシュ・ロールパン・フランスパンを並べたパンのおままごとセットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-omamagoto-fruits",
    category: "miniature", series: "omamagoto",
    title: "fruits", year: "2025",
    images: ["images/portfolio/miniature-omamagoto-fruits.jpg"],
    description: "苺・ぶどう・さくらんぼ・マスカット・みかん・バナナを星形のお皿に盛ったフルーツセットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-omamagoto-hamburger",
    category: "miniature", series: "omamagoto",
    title: "hamburger", year: "2025",
    images: ["images/portfolio/miniature-omamagoto-hamburger.jpg"],
    description: "パティ・チキンカツ・バンズ・ベーコン・ハム・キャベツ・レタス・チーズが揃ったハンバーガーの具材セットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-omamagoto-sushi",
    category: "miniature", series: "omamagoto",
    title: "sushi", year: "2025",
    images: ["images/portfolio/miniature-omamagoto-sushi.jpg"],
    description: "まぐろ・えび・カンパチ・ホタテのネタとシャリを再現したお寿司のおままごとセット。木のげた板つきです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-omamagoto-wine",
    category: "miniature", series: "omamagoto",
    title: "wine", year: "2025",
    images: ["images/portfolio/miniature-omamagoto-wine.jpg"],
    description: "生ハム・チーズ5種・ワイングラスをプレートに盛ったワインセットのおままごとです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-omamagoto-cookie",
    category: "miniature", series: "omamagoto",
    title: "cookie", year: "2025",
    images: ["images/portfolio/miniature-omamagoto-cookie.jpg"],
    description: "シャガール・チョコチップ・プレーン・cocoa・源氏パイ・マドレーヌ・苺ジャム・チョコタルト・一松の9種のクッキーセットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },
  {
    id: "miniature-omamagoto-vegetable",
    category: "miniature", series: "omamagoto",
    title: "vegetable", year: "2025",
    images: ["images/portfolio/miniature-omamagoto-vegetable.jpg"],
    description: "大根・白菜・ねぎ・にんじん・しいたけ・じゃがいも・ソーセージ・キャベツを個包装した野菜セットです。",
    materials: "樹脂粘土、アクリル絵の具、UVレジン"
  },

  // --- 家具シリーズ ---
  {
    id: "miniature-furniture-shelf",
    category: "miniature", series: "furniture",
    title: "本棚", year: "2025",
    images: ["images/portfolio/miniature-furniture-shelf.jpg"],
    description: "白木で作った2段の本棚。天板・棚板・脚のバランスが整った、シンプルで清潔感のあるミニチュア家具です。",
    materials: "木材"
  },
  {
    id: "miniature-furniture-bench-set",
    category: "miniature", series: "furniture",
    title: "テーブル＆ベンチセット", year: "2025",
    images: ["images/portfolio/miniature-furniture-bench-set.jpg"],
    description: "テーブルを挟んで両サイドにベンチが並ぶダイニングセット。丸みを帯びた背もたれが愛らしい白木のミニチュア家具です。",
    materials: "木材"
  },
  {
    id: "miniature-furniture-kitchen",
    category: "miniature", series: "furniture",
    title: "キッチン台＆シンク", year: "2025",
    images: ["images/portfolio/miniature-furniture-kitchen.jpg"],
    description: "引き出し付きのキッチン台と蛇口付きシンクのセット。竹素材の木目が味わい深いミニチュアキッチンです。",
    materials: "竹材、木材"
  },
  {
    id: "miniature-furniture-table",
    category: "miniature", series: "furniture",
    title: "テーブル2種", year: "2025",
    images: ["images/portfolio/miniature-furniture-table.jpg"],
    description: "横長の2段テーブルとシンプルなローテーブル、2種類のテーブルセット。竹素材の風合いが和の雰囲気を醸し出します。",
    materials: "竹材、木材"
  },

  // ===== Illustration =====

  // --- モノクロシリーズ ---
  {
    id: "illustration-monochro-nikomi",
    category: "illustration", series: "monochro",
    title: "煮込み", year: "2025",
    images: ["images/portfolio/illustration-monochro-nikomi.jpg"],
    description: "エプロン姿の女の子が大きな鍋をかき混ぜているシーン。ほっこりした日常の一コマをモノクロの線で描きました。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-nabesan",
    category: "illustration", series: "monochro",
    title: "鍋さん", year: "2025",
    images: ["images/portfolio/illustration-monochro-nabesan.jpg"],
    description: "大根・にんじん・いも・ちくわ・魚など、おでんの具たちがキャラクターになって鍋から飛び出しているイラスト。キラキラと湯気が立つにぎやかな一枚。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-mikkai",
    category: "illustration", series: "monochro",
    title: "密会", year: "2025",
    images: ["images/portfolio/illustration-monochro-mikkai.jpg"],
    description: "テーブルを挟んで向かい合う2匹の動物キャラクターが、こそこそと内緒話をしているイラスト。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-yurukyabetsu",
    category: "illustration", series: "monochro",
    title: "キャベツの中", year: "2025",
    images: ["images/portfolio/illustration-monochro-yurukyabetsu.jpg"],
    description: "「キャベツの中ってたぶんこんなかんじ。」——葉っぱに包まれてすやすやする小さな子のイラスト。ゆるやかでほっこりする想像の世界。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-nikuman",
    category: "illustration", series: "monochro",
    title: "にくまんみたい", year: "2025",
    images: ["images/portfolio/illustration-monochro-nikuman.jpg"],
    description: "まるっとした肉まんと、肉まんそっくりなまるっとしたキャラクターを並べたイラスト。どちらがにくまんかわからない。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-chiitoday",
    category: "illustration", series: "monochro",
    title: "ヒミツのチートday", year: "2025",
    images: ["images/portfolio/illustration-monochro-chiitoday.jpg"],
    description: "「ヒミツのチートday」——ピカチュウのきぐるみに包まれてふわふわしている人物のイラスト。こっそり休む日の贅沢なゆるさ。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-chuuka",
    category: "illustration", series: "monochro",
    title: "ちゅうかパーティー", year: "2025",
    images: ["images/portfolio/illustration-monochro-chuuka.jpg"],
    description: "中華料理が並ぶにぎやかなパーティーのシーンをモノクロの線で描いたイラスト。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-kyuyu",
    category: "illustration", series: "monochro",
    title: "油", year: "2025",
    images: ["images/portfolio/illustration-monochro-kyuyu.jpg"],
    description: "4人のお地蔵さんがひとつの鍋を囲んでいる、どこかシュールなイラスト。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-wani",
    category: "illustration", series: "monochro",
    title: "おにとねずみのおうち", year: "2025",
    images: ["images/portfolio/illustration-monochro-wani.jpg"],
    description: "鬼とねずみが暮らすおうちをモノクロの線で描いたイラスト。",
    materials: "手描き（アナログ）"
  },
  {
    id: "illustration-monochro-daradara",
    category: "illustration", series: "monochro",
    title: "DARADARA", year: "2025",
    images: ["images/portfolio/illustration-monochro-daradara.jpg"],
    description: "だらだらするひとときを描いたモノクロイラスト。",
    materials: "手描き（アナログ）"
  },

  // --- カラーシリーズ ---
  {
    id: "illustration-colorful-janken",
    category: "illustration", series: "colorful",
    title: "じゃんけん", year: "2025",
    images: ["images/portfolio/illustration-colorful-janken.jpg"],
    description: "7本の腕がじゃんけんをするように円形に並んだイラスト。カラフルな袖がリズミカルです。",
    materials: "デジタル（Ibis Paint）"
  },
  {
    id: "illustration-colorful-tree",
    category: "illustration", series: "colorful",
    title: "ハートの木とブランコ", year: "2025",
    images: ["images/portfolio/illustration-colorful-tree.jpg"],
    description: "夜空にそびえるハート型の木に、花のブランコがかかっているイラスト。星が散らばる静かな夜の情景。",
    materials: "デジタル（Ibis Paint）"
  },
  {
    id: "illustration-colorful-clown",
    category: "illustration", series: "colorful",
    title: "ピエロ", year: "2025",
    images: ["images/portfolio/illustration-colorful-clown.jpg"],
    description: "カラフルなビーチボールの上でジャグリングするピエロのイラスト。",
    materials: "デジタル（Ibis Paint）"
  },
  {
    id: "illustration-colorful-suikawari",
    category: "illustration", series: "colorful",
    title: "スイカ割り", year: "2025",
    images: ["images/portfolio/illustration-colorful-suikawari.jpg"],
    description: "3コマ漫画風に描いたスイカ割り。目隠しをした人物がスイカに向かうさまを3段で表現。",
    materials: "デジタル（Ibis Paint）"
  },
  {
    id: "illustration-colorful-suika-eat",
    category: "illustration", series: "colorful",
    title: "スイカおいしい", year: "2025",
    images: ["images/portfolio/illustration-colorful-suika-eat.jpg"],
    description: "3コマ漫画風に描いたスイカを食べるシーン。割れたスイカを大きく頬張るふたりのようす。",
    materials: "デジタル（Ibis Paint）"
  },

  // --- てもとシリーズ ---
  {
    id: "illustration-temoto-omuraisu",
    category: "illustration", series: "temoto",
    title: "オムライス", year: "2024",
    images: [
      "images/portfolio/illustration-temoto-omuraisu2.jpg",
      "images/portfolio/illustration-temoto-omuraisu.jpg",
    ],
    description: "ナイフでオムライスを割る瞬間の手元。とろっと広がる卵とケチャップの赤が印象的です。",
    materials: "デジタル（Ibis Paint）"
  },
  {
    id: "illustration-temoto-cafe",
    category: "illustration", series: "temoto",
    title: "パフェ・ナポリタン", year: "2024",
    images: [
      "images/portfolio/illustration-temoto-parfait.jpg",
      "images/portfolio/illustration-temoto-napolitan.jpg",
    ],
    description: "いちごパフェにスプーンを入れる手元と、ナポリタンをフォークでくるっと巻く手元。喫茶店の定番メニューを描いたシリーズ。",
    materials: "デジタル（Ibis Paint）"
  },

  // ===== Accessory =====
  {
    id: "accessory-donut-pierce",
    category: "accessory",
    title: "ドーナツピアス", year: "2025",
    images: ["images/portfolio/accessory-donut-pierce.jpg"],
    description: "ジャムとナッツがのった2種のドーナツピアス。個包装のパッケージ入りです。",
    materials: "樹脂粘土、UVレジン、ピアス金具"
  },
  {
    id: "accessory-bento-earring",
    category: "accessory",
    title: "お弁当イヤリング", year: "2025",
    images: ["images/portfolio/accessory-bento-earring.jpg"],
    description: "お弁当箱をモチーフにしたイヤリング。ミニチュアのおかずがぎっしり詰まっています。",
    materials: "樹脂粘土、アクリル絵の具、イヤリング金具"
  },
  {
    id: "accessory-pizza-earring",
    category: "accessory",
    title: "ピザイヤリング", year: "2025",
    images: ["images/portfolio/accessory-pizza-earring.jpg"],
    description: "ピザのスライスをモチーフにしたイヤリング。手書きのピザ形台紙がキャラクターっぽくてかわいいです。",
    materials: "樹脂粘土、アクリル絵の具、イヤリング金具"
  },
  {
    id: "accessory-pan-pierce",
    category: "accessory",
    title: "パンピアス", year: "2025",
    images: ["images/portfolio/accessory-pan-pierce.jpg"],
    description: "バターのせトーストをモチーフにしたスタッドピアス。麻紐のパッケージがナチュラルな雰囲気です。",
    materials: "樹脂粘土、UVレジン、ピアス金具"
  },
  {
    id: "accessory-donut-necklace",
    category: "accessory",
    title: "ドーナツネックレス", year: "2025",
    images: ["images/portfolio/accessory-donut-necklace.jpg"],
    description: "小さなドーナツチャームのネックレス。ブラウンのリボンがついた個包装入りです。",
    materials: "樹脂粘土、UVレジン、チェーン"
  },
  {
    id: "accessory-napoleon-necklace",
    category: "accessory",
    title: "ナポレオンパイネックレス", year: "2025",
    images: ["images/portfolio/accessory-napoleon-necklace.jpg"],
    description: "ナポレオンパイをモチーフにした小さなチャームのネックレス。白リボンの個包装入りです。",
    materials: "樹脂粘土、UVレジン、チェーン"
  },
  {
    id: "accessory-ice-ring",
    category: "accessory",
    title: "アイスコーンリング", year: "2025",
    images: ["images/portfolio/accessory-ice-ring.jpg"],
    description: "ストロベリーアイスをのせたコーンのリング。指輪タイプのミニチュアアクセサリーです。",
    materials: "樹脂粘土、UVレジン、金属リング"
  },
  {
    id: "accessory-sandwich-brooch",
    category: "accessory",
    title: "サンドイッチブローチ", year: "2025",
    images: ["images/portfolio/accessory-sandwich-brooch.jpg"],
    description: "チーズとレタスを挟んだサンドイッチのブローチ。断面のリアルさが見どころです。",
    materials: "樹脂粘土、UVレジン、ブローチ金具"
  },
  {
    id: "accessory-tenshin-brooch",
    category: "accessory",
    title: "天津ブローチ", year: "2025",
    images: ["images/portfolio/accessory-tenshin-brooch.jpg"],
    description: "天津飯をモチーフにした丸いブローチ。手描きのパッケージ台紙がかわいいです。",
    materials: "樹脂粘土、アクリル絵の具、ブローチ金具"
  },

  // ===== Gift =====
  {
    id: "gift-flower-bouquet",
    category: "gift", series: "flower",
    title: "フラワーブーケ", year: "2025",
    images: ["images/portfolio/gift-flower-bouquet.jpg"],
    description: "モールで作った青いお花のブーケ。水色のラッピングペーパーで包んだプレゼント用のギフトです。",
    materials: "モール、造花、ラッピングペーパー"
  },
  {
    id: "gift-flower-gerbera",
    category: "gift", series: "flower",
    title: "フラワーギフト", year: "2025",
    images: ["images/portfolio/gift-flower-gerbera.jpg"],
    description: "オレンジのガーベラをモチーフにしたお花のギフト。封筒と一緒にラッピングしてお渡しできます。",
    materials: "樹脂粘土、アクリル絵の具、ラッピング"
  },
  {
    id: "gift-line-stamp",
    category: "gift", series: "line-stamp",
    title: "LINEスタンプ", year: "2025",
    images: ["images/portfolio/gift-line-stamp.jpg"],
    description: "オリジナルキャラクターのLINEスタンプを制作しています。「ありがとう」「がんばる！」「めでたい」など、日常で使いやすいセリフ入り。オーダーメイドのLINEスタンプも承ります。",
    materials: "デジタル（Ibis Paint）"
  },

  // ↓ 新しい作品はこの下に追加していきます
];

/**
 * カテゴリの表示名と並び順の設定
 */
const portfolioCategories = [
  { key: "miniature", label: "Miniature" },
  { key: "illustration", label: "Illustration" },
  { key: "accessory", label: "Accessory" },
  { key: "gift", label: "Gift" }
];

/**
 * シリーズの表示名定義
 * series キーに対応する日本語ラベルを設定します。
 */
const portfolioSeries = {
  "waseda-ramen": "早稲田ラーメンシリーズ",
  "nabe":         "鍋シリーズ",
  "pan":          "パンシリーズ",
  "teishoku":     "定食・麺シリーズ",
  "wall":         "壁に飾るシリーズ",
  "omamagoto":    "おままごとセット",
  "furniture":    "家具シリーズ",
  "monochro":     "モノクロシリーズ",
  "colorful":     "カラーシリーズ",
  "temoto":       "てもとシリーズ",
  "flower":       "フラワーギフト",
  "line-stamp":   "LINEスタンプ"
};
