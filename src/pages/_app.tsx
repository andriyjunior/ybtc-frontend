import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import '@/styles/global.css';
import { CommonLayout } from '@/layouts';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <CommonLayout key={router.route}>
        <Component {...pageProps} />
      </CommonLayout>
    </AnimatePresence>
  );
}
