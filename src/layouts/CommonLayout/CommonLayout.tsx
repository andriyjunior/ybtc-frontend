import { FC, ReactNode } from 'react';

import { Navbar } from '@/components';

import styles from './CommonLayout.module.scss';

interface IProps {
  children: ReactNode;
}

const CommonLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default CommonLayout;
