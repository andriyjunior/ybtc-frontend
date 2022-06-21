import { FC, ReactNode } from 'react';

import { Footer, Navbar, ToScrollUp } from '@/components';

import styles from './CommonLayout.module.scss';

interface IProps {
  children: ReactNode;
}

// initI18n();

const CommonLayout: FC<IProps> = ({ children, ...pageProps }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.body}>{children}</div>
      <Footer />
      <ToScrollUp />
    </div>
  );
};

export default CommonLayout;
