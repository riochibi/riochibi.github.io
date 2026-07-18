/**
 * ============================================
 * archive.js　活動記録データ
 * ============================================
 *
 * 【ここを編集すると変わるもの】
 * ・archive.html の活動記録一覧（カード）
 * ・カードをクリックしたときに出てくる詳細（モーダル）
 *
 * 【新しい活動記録を追加する方法】
 * 1. 下の archiveItems の配列に { } のかたまりを1つコピペで増やす
 * 2. 中身を書き換える（id は他の記録と絶対にかぶらないようにする）
 * 3. 写真は /images/archive/ フォルダに入れて、images に書いたファイル名と合わせる
 * 4. 保存してGitHubにアップロードすれば、自動で一覧に反映されます
 *
 * 【日付の並び順について】
 * 一覧は date が新しい順に自動で並び替えられます。
 * date は "YYYY-MM-DD" の形式で書いてください（例: "2026-01-17"）。
 * 日にちが確定していないイベントは 01 などにしておけばOKです。
 */

const archiveItems = [
  {
    id: "workshop-naru-2024",
    category: "workshop",
    title: "ミニチュアワークショップ｜縁日を楽しもう!!",
    date: "2024-07-20",
    dateLabel: "2024.07",
    place: "+NARU nihonbashi（東京 日本橋）",
    images: [
      "images/archive/archive-workshop-naru-poster-new.jpg",
      "images/archive/archive-workshop-naru-02.jpg",
      "images/archive/archive-workshop-naru-03.jpg",
      "images/archive/archive-workshop-naru-04.jpg",
      "images/archive/archive-workshop-naru-05.jpg",
      "images/archive/archive-workshop-naru-06.jpg",
      "images/archive/archive-workshop-naru-07.jpg",
      "images/archive/archive-workshop-naru-08.jpg",
      "images/archive/archive-workshop-naru-01.jpg"
    ],
    summary:
      "初めてのミニチュアワークショップイベントを開催しました！\n\n+NARU nihonbashiで開催された「夏祭りイベント」の一角をお借りし、夏祭りにぴったりな「チョコバナナ」と「りんご飴」を作るワークショップを実施。1日目はチョコバナナ、2日目はりんご飴づくり。おかげさまで2日間とも満席に…！！✨",
    impression:
      "たくさんの方にミニチュアづくりの楽しさを知っていただけて、とても嬉しかったです☺️\n\n完成した作品は、一つひとつ表情や飾り方が違っていて、それぞれの個性があふれる素敵な作品ばかりでした💓"
  },
  {
    id: "exhibition-oishii-zukan-2026",
    category: "exhibition",
    title: "おいしい図鑑",
    date: "2026-04-16",
    dateLabel: "2026.4〜5",
    place: "cafe fudge gallery&cafe（東京 不動前）",
    images: [
      "images/archive/archive-exhibit-oishii-poster.jpg",
      "images/archive/archive-exhibit-oishii-02.jpg",
      "images/archive/archive-exhibit-oishii-03.jpg",
      "images/archive/archive-exhibit-oishii-04.jpg",
      "images/archive/archive-exhibit-oishii-05.jpg",
      "images/archive/archive-exhibit-oishii-06.jpg",
      "images/archive/archive-exhibit-oishii-07.jpg"
    ],
    summary:
      "Cafe Fudgeさんにて、3週間のカフェ展示を開催しました！\n\n今回のテーマは「美味しい図鑑」。「壁に飾れるミニチュア」をコンセプトに制作・展示を行いました。ずっと憧れていたカフェで展示ができたことが、本当に嬉しかったです。\n\nまた、Cafe Fudgeさんの看板メニューである「ベーグルサンド」もミニチュアで制作させていただきました✨",
    impression:
      "今回一番力を入れた作品が『おかず図鑑』。全部で36種類の代表的なお弁当のおかずを、小さなキャンバスの上に並べた作品です🍱\n\nこれまではミニチュアを立体作品として展示することが多かったのですが、今回は「壁に飾る作品」という新しい形に挑戦しました。壁に飾れるようにしたことで、展示や保管もしやすくなりました（笑）。\n\nそして実際に飾ってみると、小さなミニチュアがあるだけで、お部屋がなんだか明るく、あたたかい雰囲気になることを実感しました✨ 新たな表現方法を見つけられた、思い出深い展示となりました。"
  },
  {
    id: "exhibition-winter-2026",
    category: "exhibition",
    title: "冬のあったかミニチュア展",
    date: "2026-01-17",
    dateLabel: "2026.1",
    place: "さきっちょ socks 2F（埼玉県 浦和）",
    images: [
      "images/archive/archive-exhibit-winter-poster-new.jpg",
      "images/archive/archive-exhibit-winter-02.jpg",
      "images/archive/archive-exhibit-winter-03.jpg",
      "images/archive/archive-exhibit-winter-04.jpg",
      "images/archive/archive-exhibit-winter-05.jpg",
      "images/archive/archive-exhibit-winter-06.jpg",
      "images/archive/archive-exhibit-winter-07.jpg",
      "images/archive/archive-exhibit-winter-08.jpg",
      "images/archive/archive-exhibit-winter-09.jpg",
      "images/archive/archive-exhibit-winter-10.jpg",
      "images/archive/archive-exhibit-winter-11.jpg",
      "images/archive/archive-exhibit-winter-12.jpg",
      "images/archive/archive-exhibit-winter-13.jpg"
    ],
    summary:
      "2回目の個展！\n\n浦和「さきっちょ」さん2階の貸しギャラリーをお借りして開催しました。白を基調としたこぢんまりとした空間は、まるで秘密基地のよう。ミニチュアとの相性も抜群で、お気に入りの展示空間になりました。\n\n今回のテーマは、「冬のあたたかくて、おいしいもの」。お鍋はもちろん、こたつとみかん、肉まんなど、冬ならではの作品を制作しました。\n\n今回初めて挑戦したのは、キッチン家具や食品パッケージまで手作りしたこと。そして、より「手作り」にこだわり、食材を「調理する工程」からミニチュアで表現してみました。",
    impression:
      "たくさんの友人が来てくれて本当に嬉しかったです♡\n\nまた、たまたま近くを訪れた地域の方々がふらっと立ち寄ってくださったことも、とても嬉しい出来事でした。虫眼鏡を使って作品をじっくり見てくださる方の姿を見て、「やってよかったなぁ」と心がほっこりしました。\n\n会期中にはワークショップも開催！ホットケーキを作るワークショップと、好きなパーツを組み合わせてハンバーガーを作るワークショップを実施しました。みんなでわいわい手を動かしながらものづくりができて楽しかったです☺️"
  },
  {
    id: "exhibition-wasemeshi-2024",
    category: "exhibition",
    title: "世界一小さなワセメシ展",
    date: "2024-11-02",
    dateLabel: "2024.11",
    place: "早稲田大学 早稲田キャンパス 11号館5階アトリウム",
    images: [
      "images/archive/archive-exhibit-waseda-poster.jpg",
      "images/archive/archive-exhibit-waseda-02.jpg",
      "images/archive/archive-exhibit-waseda-03.jpg",
      "images/archive/archive-exhibit-waseda-04.jpg",
      "images/archive/archive-exhibit-waseda-05.jpg"
    ],
    summary:
      "大学4年生、最後の早稲田祭で、初めての個展を開催しました！\n\n早稲田祭には例年約20万人もの来場者が集まります。そんな早稲田祭で、早稲田生なら誰もが一度は訪れたことがあるであろう、早稲田周辺の安くて美味しいお店、通称「ワセメシ」を25店舗厳選し、ミニチュアで再現しました✨\n\n現役学生はもちろん、OBOGや地域住民の方々など、本当にたくさんの方に足を運んでいただきました。",
    impression:
      "「これ食べたことあるー！」「これ、このあと食べに行こう！」\n\nそんな声を聞きながら、それぞれのワセメシとの思い出を重ね合わせて展示をご覧いただけたことが、とても嬉しかったです。\n\n展示最終日には「推しワセメシ総選挙」も実施。25店舗すべてに票が入り、とても盛り上がりました。結果は同率58票で1位がハチリキさんの「厚切りとろ豚ステーキ＆肉汁ハンバーグ」と武蔵野油學会さんの「特濃油そば」、53票で3位がキッチン南国さんの「カツカレー」でした。\n\n理由はそれぞれ違っても、ワセメシをきっかけにたくさんの会話が生まれ、みなさんと一緒に盛り上がれたことが何より嬉しかったです。大学生活最後の早稲田祭で、大好きな早稲田をテーマに初めての個展を開催できてよかった❣️"
  },
  {
    id: "event-bunfuri-2025",
    category: "event",
    title: "文学フリマ出店",
    date: "2025-05-11",
    dateLabel: "2025.05",
    place: "東京ビッグサイト（東京 有明）",
    images: [
      "images/archive/archive-event-bunfuri-poster.jpg",
      "images/archive/archive-event-bunfuri-02.jpg",
      "images/archive/archive-event-bunfuri-03.jpg",
      "images/archive/archive-event-bunfuri-04.jpg"
    ],
    summary:
      "文学フリマに出展し、オリジナルのジャーナリングキットを制作・販売しました！\n\nコンセプトは「書くことで整う」✍️ 持ち運びやすい手のひらサイズのジャーナリングノートをデザインしました。中身は、Monthlyスケジュール、Weeklyスケジュール、そして振り返り用のReflectionノート。ジャーナリングを続けることで、自分の心や考えを整理し、「整う」時間をつくってもらえたらと思い制作しました。",
    impression:
      "私自身、卒業研究で「書くこと」について考える中で、いろいろな方法を試していました。その経験から、「手書きの楽しさ」と「持ち運びやすさ」を両立できるノートがあったらいいなと思い、このジャーナリングキットを制作しました。\n\nミニチュアとは少し違うものづくりでしたが、誰かの日常に小さな豊かさを届けられるものづくりは素敵だな〜と改めて実感しました✨"
  },
  {
    id: "event-tsukurie-2024",
    category: "event",
    title: "つくりえのおいしそう展",
    date: "2024-12-27",
    dateLabel: "2024.12",
    place: "浦和コルソ つくりえ（埼玉県 さいたま市）",
    images: [
      "images/archive/archive-event-tsukurie-poster.jpg",
      "images/archive/archive-event-tsukurie-02.jpg",
      "images/archive/archive-event-tsukurie-03.jpg",
      "images/archive/archive-event-tsukurie-04.jpg",
      "images/archive/archive-event-tsukurie-05.jpg",
      "images/archive/archive-event-tsukurie-06.jpg"
    ],
    summary:
      "年末！ということで、おせちやおでんのセットを販売しました。\n\n最近気づいたのは、作っているミニチュアのサイズがどんどん小さくなっていること。おせちの一つひとつのパーツは、直径1〜3mmほど。数時間かけて作ったこの小さなパーツを紛失したときの絶望感は、計り知れません……💧\n\n乾燥させるときも、風で飛んでいってしまわないよう、いつも以上に慎重に作業していました。",
    impression:
      "今回は開催地がさいたまだったこともあり、「さいたまの銘菓セット」も制作しました。\n\n十万石まんじゅうの焼印は、爪楊枝を削って手描きしています✏️\n\nみなさんがご存知のお菓子はありましたか？\n\nゆっくり過ごせる年末年始は、ものづくりにじっくり向き合える最高の季節です。みなさん、良いお年を！"
  }


  ,{
    id: "workshop-pan-2026",
    category: "workshop",
    title: "ミニチュアパンワークショップ",
    date: "2026-07-21",
    dateLabel: "2026.07",
    place: "コミュニティスペースほぼのら（埼玉県 さいたま市）",
    images: [
      "images/archive/archive-workshop-pan-poster.jpg"
    ],
    summary:
      "思わず食べたくなる本物みたいなミニチュアパンを作るワークショップ。完成した作品はストラップにしてお持ち帰りいただけます。",
    impression: ""
  }

  // ↓ 新しい活動記録はこの下に追加していきます
  // {
  //   id: "workshop-XXXX",
  //   category: "workshop",
  //   title: "○○ワークショップ",
  //   date: "2026-07-20",
  //   dateLabel: "2026.07",
  //   place: "コミュニティスペースほぼのら（埼玉県 さいたま市）",
  //   images: ["images/archive/xxx.jpg"],
  //   summary: "概要文",
  //   impression: "感想文"
  // },
];

/**
 * カテゴリの表示名と並び順の設定
 */
const archiveCategories = [
  { key: "workshop", label: "Workshop" },
  { key: "exhibition", label: "Exhibition" },
  { key: "event", label: "Event" }
];
