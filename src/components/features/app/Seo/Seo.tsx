import { DefaultSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';
import { useRootPath } from '@/hooks/useRootPath';
import { joinPath } from '@/lib/joinPath';

export const Seo = () => {
  const rootPath = useRootPath();
  const imageURL = joinPath(ROOT_URL, '/kaisnote_icon.svg');

  return (
    <>
      <DefaultSeo
        defaultTitle="KaisNote"
        description="管理人のKaimRuが好きなこと(主にマインクラフト)に関する投稿をしていくサイトです。"
        openGraph={{
          type: 'website',
          title: 'KaisNote',
          description:
            '管理人のKaimRuが好きなこと(主にマインクラフト)に関する投稿をしていくサイトです。',
          site_name: 'KaisNote',
          url: ROOT_URL,
          images: [
            {
              url: imageURL,
              width: 512,
              height: 512,
              alt: 'KaisNote',
              type: 'image/svg+xml',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          { rel: 'icon', href: `${rootPath}/kaisnote_icon.svg` },
          { rel: 'icon', href: `${rootPath}/favicon.ico` },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${rootPath}/favicons/favicon-16x16.png`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${rootPath}/favicons/favicon-32x32.png`,
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `${rootPath}/favicons/apple-touch-icon.png`,
          },
          {
            rel: 'mask-icon',
            href: `${rootPath}/favicons/safari-pinned-tab.svg`,
            color: '#9c8cb8',
          },
        ]}
      />
    </>
  );
};
