export interface AgendaItem {
  time: string;
  title: string;
  titleJa?: string;
  track?: string;
  speakerNames: string[];
  moderatorNames?: string[];
  notice?: string;
  noticeJa?: string;
  watchUrl?: string;
}

export const AGENDA_ITEMS: AgendaItem[] = [
   {
    time: "09:00 AM",
    title: "Registration & Exhibition Booths Open",
    titleJa: "受付・展示ブース開場",
    track: "Opening",
    speakerNames: [],
    notice:
      "Register, grab your kit, and dive into our exhibitor booths!",
    noticeJa:
      "受付・キット配布後、展示ブースをお楽しみください。",
  },
  {
    time: "10:30 AM - 10:35 AM",
    title: "Welcome Note",
    titleJa: "ウェルカムノート",
    track: "Keynote",
    speakerNames: ["Mai Furukawa"],
  },
  {
    time: "10:35 AM - 11:00 AM",
    title:
      "Scaling the Internet of Value with XRP: Building the Next Global Financial Infrastructure",
    titleJa:
      "XRPで描くインターネット・オブ・バリューの拡大：次世代グローバル金融インフラの構築",
    track: "Fireside",
    speakerNames: ["Markus Infanger"],
    moderatorNames: ["Dave McCombs"],
  },
  {
    time: "11:05 AM - 11:35 AM",
    title:
      "The Future of Money: How Stablecoins, and Tokenized Deposits Are Reshaping the Global Financial System",
    titleJa:
      "マネーの未来：ステーブルコインとトークン化預金が変える世界金融",
    track: "Panel",
    speakerNames: [
      "Tomohiko Kondo",
      "Seihaku Yoshida",
      "Noritaka Okabe",
      "Tatsuya Yamada",
    ],
    moderatorNames: ["Ryo Sakai"],
  },
  {
    time: "11:40 AM - 11:55 AM",
    title: "When Capital Commits",
    titleJa: "When Capital Commits",
    track: "Keynote",
    speakerNames: ["Meg Nakamura"],
  },
  {
    time: "11:55 AM - 12:25 PM",
    title:
      "Institutional Blockchain Adoption : From Pilot to Production: How Banks Are Building the Next Financial Infrastructure with Blockchain",
    titleJa:
      "機関のブロックチェーン採用：パイロットから本番へ——銀行が構築する次世代金融インフラ",
    track: "Panel",
    speakerNames: ["Hirokuni Onozawa", "Ryo Kato", "Go Makino"],
    moderatorNames: ["Noriaki Yagi"],
  },
  {
    time: "12:30 PM - 1:00 PM",
    title:
      "Connecting Japan and Global Capital: The Future of Web3 Investment and Expansion",
    titleJa:
      "日本と世界資本をつなぐ：Web3投資とグローバル展開の未来",
    track: "Panel",
    speakerNames: ["SungMo Park", "Meg Nakamura", "Takuya Sugiyama"],
    moderatorNames: ["Yusuke Takezawa"],
  },
  {
    time: "1:00 PM - 1:25 PM",
    title:
      "Tokenized Payments for the Tourism Economy: Real-World Implementation",
    titleJa: "観光経済のトークン決済：実装の現場",
    track: "Panel",
    speakerNames: ["Takafumi Shimoyama", "Toshinari Shinohara"],
    moderatorNames: ["Mai Furukawa"],
  },
  {
    time: "1:25 PM - 1:35 PM",
    title:
      "The Future of RLUSD as Envisioned by SBI VC Trade",
    titleJa: "SBIVCトレードが描くRLUSDの未来",
    track: "Keynote",
    speakerNames: ["Tomohiko Kondo"],
  },
  {
    time: "1:35 PM - 1:45 PM",
    title:
      "International Cooperation in Digital Assets: Strengthening U.S.–Japan Collaboration",
    titleJa:
      "デジタル資産の国際協力：日米連携の強化",
    track: "Fireside",
    speakerNames: ["Cody Carbone"],
    moderatorNames: ["Hinza Asif"],
  },
  {
    time: "1:50 PM - 2:10 PM",
    title: "International Element Exchange: A Datavault AI Technology",
    titleJa: "国際元素取引：Datavault AI テクノロジー",
    track: "Keynote",
    speakerNames: ["Nathaniel T. Bradley"],
  },
  {
    time: "2:15 PM - 2:45 PM",
    title:
      "The Institutional Future of RWA Tokenization through Security Tokens",
    titleJa:
      "セキュリティトークンによるRWAトークン化の機関投資家向け未来",
    track: "Panel",
    speakerNames: ["Taisuke Isono", "Eiji Kobayashi", "Masa Kikuchi"],
    moderatorNames: ["Eri Ishiyama"],
  },
  {
    time: "2:50 PM - 3:00 PM",
    title: "Growing the XRPL Ecosystem",
    titleJa: "XRPLエコシステムの成長",
    track: "Keynote",
    speakerNames: ["Christina Chan"],
  },
  {
    time: "3:05 PM - 3:30 PM",
    title:
      "Building on XRPL: Global Developers and the Next Wave of Blockchain Innovation",
    titleJa:
      "XRPL上で構築する：グローバル開発者と次のブロックチェーン・イノベーション",
    track: "Panel",
    speakerNames: [
      "J. Ayo Akinyele",
      "Panos Mekras",
      "Sebastian Valdez",
      "Robert Kiuru",
    ],
    moderatorNames: ["Cyrus Cruz"],
  },
  {
    time: "3:35 PM - 3:45 PM",
    title: "Doppler Finance: Powering Institutional Adoption on XRPL",
    titleJa: "Doppler Finance：XRPLにおける機関投資家向け採用",
    track: "Keynote",
    speakerNames: ["Rox Park"],
  },
  {
    time: "3:50 PM - 4:20 PM",
    title:
      "From Real Assets to Digital Infrastructure: How Institutions Are Building the Next Financial System",
    titleJa:
      "リアルアセットからデジタルインフラへ：機関投資家が構築する次の金融システム",
    track: "Panel",
    speakerNames: ["Ken Kawai", "Yoshimasa Satoh", "Seiichi Kawamura"],
    moderatorNames: ["Fumihiro Arasawa"],
  },
  {
    time: "4:25 PM - 4:35 PM",
    title:
      "The Internet of Value for the Agentic Economy",
    titleJa: "エージェント経済のためのインターネット・オブ・バリュー",
    track: "Keynote",
    speakerNames: ["Alexis Sirkia","Steven Zeiler"],
  },
  {
    time: "4:40 PM - 5:10 PM",
    title: "Japan’s XRPL Ecosystem: Local Innovation and Global Opportunities",
    titleJa: "日本のXRPLエコシステム：ローカルイノベーションとグローバル機会",
    track: "Panel",
    speakerNames: [
      "Ai Kosuke",
      "Ikkei Matsuda",
      "Sojun Katsura",
      "Jean Zhu",
      "Yusuke Hirota",
    ],
    moderatorNames: ["Tatsuya Kohrogi"],
  },
  {
    time: "5:15 PM - 5:23 PM",
    title:
      "Introducing the Endowed Chair for Blockchain Innovation at the University of Tokyo",
    titleJa: "東京大学ブロックチェーンイノベーション寄付講座 活動紹介",
    track: "Keynote",
    speakerNames: ["Kyohei Shibano"],
  },
  {
    time: "5:23 PM - 5:35 PM",
    title: "XRP Tokyo 2026: Our Journey Ahead",
    titleJa: "XRP Tokyo 2026：これからの展望",
    track: "Closing Remarks",
    speakerNames: ["Mai Furukawa", "Hinza Asif"],
  },
  {
    time: "7:00 PM - 9:00 PM",
    title: "VIP After Party at 6th Floor, Happo-en",
    titleJa: "VIPアフターパーティー（八芳園6階）",
    track: "Private Event",
    speakerNames: ["VIP After Party"],
  },
];