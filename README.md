# Astro学習ノート

Astroの勉強のために作ったブログサイトです。GitHub Pagesへの公開を前提にしています。

## 使っている機能

- [Content Collections](https://docs.astro.build/en/guides/content-collections/) — `src/content/blog/`のMarkdownをZodスキーマで型チェックしながら管理
- 共通レイアウト(`src/layouts/BaseLayout.astro`)によるヘッダー・フッターの共通化
- 動的ルーティング(`src/pages/blog/[...slug].astro`)によるブログ記事詳細ページ
- GitHub Actions(`.github/workflows/deploy.yml`)による自動デプロイ

## コマンド

| コマンド | 内容 |
| :--- | :--- |
| `npm install` | 依存関係のインストール |
| `npm run dev` | 開発サーバー起動(`localhost:4321`) |
| `npm run build` | `./dist/`に本番ビルド |
| `npm run preview` | ビルド結果をローカルでプレビュー |

## 新しい記事を書く

`src/content/blog/`に新しいMarkdownファイルを追加し、フロントマターに
`title` / `description` / `pubDate` / `tags` を書けば自動的に一覧・詳細ページが生成されます。

## GitHub Pagesへのデプロイ

1. GitHubにリポジトリ `astro-test` を作成し、このプロジェクトをpush
2. リポジトリの Settings → Pages → Source を **GitHub Actions** に設定
3. `main`ブランチにpushすると`.github/workflows/deploy.yml`が自動的にビルド・公開

公開URL: `https://junhongo-ccs.github.io/astro-test/`

リポジトリ名を変える場合は、`astro.config.mjs`の`base`もあわせて変更してください。
