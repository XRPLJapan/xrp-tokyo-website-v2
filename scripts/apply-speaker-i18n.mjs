/**
 * One-off script: merge nameJa / roleJa / companyJa into public/data.json
 * Run: node scripts/apply-speaker-i18n.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, "../public/data.json");

/** @type {Record<string, { nameJa?: string; roleJa?: string; companyJa?: string }>} */
const JA_FIELDS = {
  "Markus Infanger": {
    nameJa: "Markus Infanger",
    roleJa: "RippleX シニア副社長（SVP）",
    companyJa: "Ripple",
  },
  "Christina Chan": {
    nameJa: "Christina Chan",
    roleJa: "シニアディレクター、エコシステム成長",
    companyJa: "Ripple",
  },
  "Tatsuya Yamada": {
    nameJa: "山田 達也",
    roleJa: "代表取締役社長",
    companyJa: "楽天ウォレット株式会社",
  },
  "SungMo Park": {
    nameJa: "SungMo Park",
    roleJa: "Partner、APAC Go-to-Market 責任者",
    companyJa: "a16z crypto",
  },
  "Cody Carbone": {
    nameJa: "Cody Carbone",
    roleJa: "CEO",
    companyJa: "The Digital Chamber",
  },
  "Takuya Sugiyama": {
    nameJa: "杉山 拓也",
    roleJa: "SBI Ripple Asia 副社長",
    companyJa: "SBIホールディングス",
  },
  "Tomohiko Kondo": {
    nameJa: "近藤 智彦",
    roleJa: "代表取締役社長",
    companyJa: "SBI VCトレード株式会社",
  },
  "Dave McCombs": {
    nameJa: "Dave McCombs",
    roleJa: "シニアリライター",
    companyJa: "NHKワールドジャパン",
  },
  "Hirokuni Onozawa": {
    nameJa: "小野沢 浩邦",
    roleJa: "執行役員",
    companyJa: "GMOあおぞらネット銀行株式会社",
  },
  "Seihaku Yoshida": {
    nameJa: "吉田 清白",
    roleJa: "代表取締役CEO",
    companyJa: "HashPort株式会社",
  },
  "Takafumi Shimoyama": {
    nameJa: "下山 崇文",
    roleJa: "事業開発本部長",
    companyJa: "SBI Ripple Asia",
  },
  "Toshinari Shinohara": {
    nameJa: "篠原 俊成",
    roleJa: "未来共創研究所 所長",
    companyJa: "東武トップツアーズ",
  },
  "Meg Nakamura": {
    nameJa: "Meg Nakamura",
    roleJa: "最高執行責任者（COO）",
    companyJa: "Evernorth",
  },
  "Mai Furukawa": {
    nameJa: "古川 舞",
    roleJa: "XRPL Japan 協会ディレクター / XRPL Labs サポート",
    companyJa: "XRPL Japan / XRPL Labs",
  },
  "Hinza Asif": {
    nameJa: "Hinza Asif",
    roleJa: "代表",
    companyJa: "Asia Web3 Alliance Japan",
  },
  "Noritaka Okabe": {
    nameJa: "岡部 憲孝",
    roleJa: "創業者兼CEO",
    companyJa: "JPYC株式会社",
  },
  "Ryo Kato": {
    nameJa: "加藤 亮",
    roleJa: "代表取締役CEO",
    companyJa: "HashHub株式会社",
  },
  "Fumihiro Arasawa": {
    nameJa: "荒澤 文弘",
    roleJa: "XWIN Group 代表、DeFi委員会 議長",
    companyJa: "ブロックチェーン協同組合",
  },
  "Nathaniel T. Bradley": {
    nameJa: "Nathaniel T. Bradley",
    roleJa: "CEO",
    companyJa: "Datavault AI",
  },
  "Steven Zeiler": {
    nameJa: "Steven Zeiler",
    roleJa: "Developer Evangelist",
    companyJa: "Yellow",
  },
  "Go Makino": {
    nameJa: "牧野 豪",
    roleJa: "リージョナルディレクター",
    companyJa: "Fireblocks Japan",
  },
  "Taisuke Isono": {
    nameJa: "磯野 泰介",
    roleJa: "日興イノベーションラボ 所長",
    companyJa: "SMBC日興証券株式会社",
  },
  "Eiji Kobayashi": {
    nameJa: "小林 英司",
    roleJa: "ディレクター兼日本代表",
    companyJa: "Securitize Japan",
  },
  "Ken Kawai": {
    nameJa: "川合 健",
    roleJa: "アドバイザーパートナー弁護士",
    companyJa: "アンダーソン・毛利・友常法律事務所",
  },
  "Seiichi Kawamura": {
    nameJa: "川村 誠一",
    roleJa: "戦略企画部",
    companyJa: "トヨタ ブロックチェーンラボ",
  },
  "Tatsuya Kohrogi": {
    nameJa: "Tatsuya Kohrogi",
    roleJa: "シニア エコシステム成長マネージャー",
    companyJa: "Ripple",
  },
  "Yoshimasa Satoh": {
    nameJa: "佐藤 義正",
    roleJa: "日本代表取締役兼CEO（CFA）",
    companyJa: "Alpaca",
  },
  "Masa Kikuchi": {
    nameJa: "菊池 雅",
    roleJa: "創業者兼CEO",
    companyJa: "Secured Finance",
  },
  "Yusuke Takezawa": {
    nameJa: "竹澤 祐介",
    roleJa: "クロスボーダー金融・制度設計 独立アドバイザー（元Progmat VP）",
    companyJa: "",
  },
  "Noriaki Yagi": {
    nameJa: "八木 憲明",
    roleJa: "編集長",
    companyJa: "Iolite Magazine",
  },
  "Ryo Sakai": {
    nameJa: "坂井 亮",
    roleJa: "事業開発責任者兼CEO",
    companyJa: "CoinPost / WebX",
  },
  "Cyrus Cruz": {
    nameJa: "Cyrus Cruz",
    roleJa: "APAC 責任者",
    companyJa: "Tenity",
  },
  "Sojun Katsura": {
    nameJa: "桂 宗純",
    roleJa: "ディレクター",
    companyJa: "Papi Code",
  },
  "Ai Kosuke": {
    nameJa: "Ai Kosuke",
    roleJa: "創業者",
    companyJa: "SuzuPay",
  },
  "Ikkei Matsuda": {
    nameJa: "松田 一慧",
    roleJa: "代表取締役兼CEO",
    companyJa: "デジタルプラットフォーマー株式会社",
  },
  "Jean Zhu": {
    nameJa: "Jean Zhu",
    roleJa: "共同創業者",
    companyJa: "Nexbridge",
  },
  "Yusuke Hirota": {
    nameJa: "廣田 祐介",
    roleJa: "創業者",
    companyJa: "Laplace",
  },
  "Eri Ishiyama": {
    nameJa: "Eri Ishiyama",
    roleJa: "ブロックチェーンアドボケート",
    companyJa: "",
  },
  "Sebastian Valdez": {
    nameJa: "Sebastian Valdez",
    roleJa: "共同創業者",
    companyJa: "xrp.cafe",
  },
  "Kyohei Shibano": {
    nameJa: "柴野 恭平",
    roleJa: "プロジェクト研究員",
    companyJa: "東京大学",
  },
  "Rox Park": {
    nameJa: "Rox Park",
    roleJa: "機関投資家担当 Head",
    companyJa: "Doppler Finance",
  },
  "Panos Mekras": {
    nameJa: "Panos Mekras",
    roleJa: "共同創業者兼CEO",
    companyJa: "Anodos Labs",
  },
  "J. Ayo Akinyele": {
    nameJa: "J. Ayo Akinyele",
    roleJa: "Head of Engineering",
    companyJa: "RippleX",
  },
  "Robert Kiuru": {
    nameJa: "Robert Kiuru",
    roleJa: "COO",
    companyJa: "Xaman",
  },
  "Alexis Sirkia": {
    nameJa: "Alexis Sirkia",
    roleJa: "エグゼクティブチェアマン兼創業者",
    companyJa: "Yellow",
  },
};

const data = JSON.parse(readFileSync(dataPath, "utf-8"));
let updated = 0;
let missing = [];

for (const speaker of data.speakers ?? []) {
  const ja = JA_FIELDS[speaker.name];
  if (!ja) {
    missing.push(speaker.name);
    continue;
  }
  if (ja.nameJa) speaker.nameJa = ja.nameJa;
  if (ja.roleJa) speaker.roleJa = ja.roleJa;
  if (ja.companyJa !== undefined) speaker.companyJa = ja.companyJa;
  updated++;
}

writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
console.log(`Updated ${updated} speakers`);
if (missing.length) console.log("Missing:", missing);
