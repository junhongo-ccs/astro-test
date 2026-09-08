---
title: "Content Collectionsでブログ記事を管理する"
description: "MarkdownファイルをZodスキーマで型チェックしながら扱う方法"
pubDate: 2026-09-05
tags: ["astro", "content-collections"]
---

Astroの **Content Collections** を使うと、`src/content/`以下のMarkdownファイルを
型安全に読み込めます。

## 設定の流れ

1. `src/content.config.ts` で `defineCollection` を使いスキーマ(Zod)を定義する
2. `glob` ローダーでMarkdownファイルを集約する
3. ページ側で `getCollection('blog')` を呼び出して一覧・詳細を作る

```ts
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
```

フロントマターの型が合っていないとビルド時にエラーになるので、
記事を書く際のタイポや日付フォーマットのミスにすぐ気づけるのが便利です。
