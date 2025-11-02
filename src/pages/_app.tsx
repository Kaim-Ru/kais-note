import { AppProps } from 'next/app';
import '@/styles/index.css';
import { Footer } from '@/components/features/app/Footer';
import { Header } from '@/components/features/app/Header';
import { ContentLayout } from '@/components/features/app/Layout';
import { Seo } from '@/components/features/app/Seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />

      <div
        style={{ gridTemplateRows: 'auto 1fr auto' }}
        className="grid min-h-screen gap-0 bg-[#130f18] overflow-x-hidden"
      >
        <Header />
        <ContentLayout className="px-0 py-0 overflow-x-hidden">
          <Component {...pageProps} />
        </ContentLayout>
        <Footer />
      </div>
    </>
  );
}
