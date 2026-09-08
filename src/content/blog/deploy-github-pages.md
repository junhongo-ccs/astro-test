---
title: "GitHub PagesにAstroサイトをデプロイする"
description: "GitHub Actionsを使った自動デプロイの設定メモ"
pubDate: 2026-09-08
tags: ["astro", "github-pages", "ci-cd"]
---

GitHub PagesにAstroサイトを公開するには、大きく2つの設定が必要です。

## 1. astro.config.mjs

リポジトリがユーザーページ(`<username>.github.io`)でない場合、
`base`にリポジトリ名を設定する必要があります。

```js
export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/<repository-name>',
});
```

## 2. GitHub Actionsワークフロー

`withastro/action` を使うと、pushするだけで自動的にビルド・デプロイされます。
リポジトリの Settings → Pages で「Source: GitHub Actions」を選んでおくのを忘れずに。
