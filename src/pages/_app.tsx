import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { CommonLayout } from '@/layouts';

import '@/styles/global.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <AnimatePresence
        initial={true}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <CommonLayout key={router.route} {...pageProps}>
          <Component {...pageProps} />
        </CommonLayout>
      </AnimatePresence>
    </>
  );
}

export default appWithTranslation(MyApp);
