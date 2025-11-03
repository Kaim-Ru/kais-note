# Blog Template

A simple personal blog template.

You can start blogging just by adding markdown files to the `_posts` directory. Of course, you can also reuse articles from platforms like Zenn or Qiita.

For more details, please refer to the following article:

[Created a blog template with Next.js + GitHub Pages →](https://zenn.dev/subt/articles/957bd5d01485e1)

## Demo

https://sub-t.github.io/blog-template/

## Features

- Responsive design
- Dark mode support
- Pagination on the article list page
- Table of contents
- SEO optimized with `next-seo`
- OGP support
- Customizable About page with `_posts/about.md`

## About Page

The about page can be customized by editing the `_posts/about.md` file.

### Configuration

The frontmatter of `about.md` supports the following fields:

```yaml
---
title: 'ABOUT ME' # Page title
date: '2025-11-02' # Last updated date
authorName: 'Your Name' # Your name
authorImage: '/path/to/image.png' # Path to your profile image
authorIntro: 'Introduction text' # Short introduction (supports \n for line breaks)
---
```

The content below the frontmatter will be rendered as Markdown.

## Development

```bash
git clone https://github.com/sub-t/blog-template project-name
cd project-name
yarn
yarn dev
```

## Deployment

Refer to this article for deployment instructions:

[Deploying a Next.js Blog to GitHub Pages →](https://jamband.github.io/blog/2021/08/deploy-nextjs-app-to-github-pages/)

## License

MIT License

---

# ブログテンプレート

個人ブログ向けのシンプルなテンプレートです。

`_posts` ディレクトリに Markdown ファイルを追加するだけでブログを始められます。もちろん、Zenn や Qiita に投稿した記事を流用することも可能です。

詳細は以下の記事をご覧ください：

[Next.js + GitHub Pages のブログテンプレートを作った →](https://zenn.dev/subt/articles/957bd5d01485e1)

## デモ

https://sub-t.github.io/blog-template/

## 特徴

- レスポンシブ対応
- ダークモード対応
- 記事一覧ページにページネーションあり
- 目次付き
- `next-seo` による SEO 対策済み
- OGP 対応
- `_posts/about.md` でカスタマイズ可能な About ページ

## About ページ

About ページは `_posts/about.md` ファイルを編集することでカスタマイズできます。

### 設定項目

`about.md` のフロントマターでは以下のフィールドをサポートしています：

```yaml
---
title: 'ABOUT ME' # ページタイトル
date: '2025-11-02' # 最終更新日
authorName: 'あなたの名前' # 名前
authorImage: '/path/to/image.png' # プロフィール画像のパス
authorIntro: '紹介文' # 短い自己紹介（\nで改行可能）
---
```

フロントマター以下のコンテンツは、Markdown としてレンダリングされます。

## 開発方法

```bash
git clone https://github.com/sub-t/blog-template project-name
cd project-name
yarn
yarn dev
```

## デプロイ方法

こちらの記事を参考にしてください：

[Next.js で作ったブログを GitHub Pages にデプロイする →](https://jamband.github.io/blog/2021/08/deploy-nextjs-app-to-github-pages/)

## ライセンス

MIT ライセンス
