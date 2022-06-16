import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';

import { CommonLayout } from '@/layouts';

import '@/styles/global.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      initial={true}
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <CommonLayout key={router.route} {...pageProps}>
        <Component {...pageProps} />
      </CommonLayout>
    </AnimatePresence>
  );
}

export default appWithTranslation(MyApp);
