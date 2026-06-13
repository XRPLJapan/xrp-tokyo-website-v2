# コードベース調査 — 既知の課題一覧

> 最終更新: 2026-06-14  
> 対象: `xrp-tokyo-website-v2`（Next.js 16 + TypeScript + next-intl）

**すべての課題が対応済みです。** 新たな課題が見つかった場合はこのドキュメントに追記してください。

---

## 対応済み（2026-06-14）

| ID | 内容 |
|----|------|
| ISSUE-001 | sitemap / metadata を `/` `/agenda` に修正 |
| ISSUE-002 | `GoogleAnalyticsPageView` を Suspense でラップ |
| ISSUE-003 | `public/partners/community/Downloads/` 削除 + `.gitignore` 追加 |
| ISSUE-004 | ロケール Cookie ↔ localStorage 同期時のリロード |
| ISSUE-005 | アジェンダページ UI 文言の i18n 化 |
| ISSUE-006 | `public/data.json` に全45名の `nameJa` / `roleJa` / `companyJa` を追加 |
| ISSUE-007 | `/agenda` からのハッシュナビを `window.location.href` に変更 |
| ISSUE-008 | `/api/speakers` に try/catch 追加 |
| ISSUE-009 | JSON-LD の日時（JST）・price 修正 |
| ISSUE-010 | SVG filter ID の重複解消 |
| ISSUE-011 | スプラッシュの `Math.random()` hydration リスク解消 |
| ISSUE-012 | ローディング文言の i18n 化 |
| ISSUE-013 | 未使用 Sanity CMS コード・依存関係を削除 |
| ISSUE-014 | `pnpm-lock.yaml` 整備・pnpm 統一（`packageManager` 指定） |
| ISSUE-015 | Lenis 連携のスクロールフック |
| ISSUE-016 | 登録枠を `notice` フィールドで専用表示 |
| ISSUE-017 | 全アジェンダセッションに `titleJa` を追加 |

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-06-14 | 初版作成 |
| 2026-06-14 | ISSUE-001〜016 対応 |
| 2026-06-14 | ISSUE-006 / 013 / 017 対応、全課題クローズ |
