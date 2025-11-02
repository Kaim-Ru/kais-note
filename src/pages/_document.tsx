import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          {/* ページ読み込み前にダークモードを適用してちらつきを防ぐ */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const stored = localStorage.getItem('darkMode');
                  const isDark = stored !== null ? stored === 'true' : true;
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  }
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
