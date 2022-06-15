import { AnimationLayout } from '@/layouts';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';
import { Card } from './parts';

const Home = () => {
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.bottom}>
            <h1 className={styles.title}>Yukon Building Trades Council</h1>
            <span className={styles.description}>
              The Yukon Government will be making a further financial
              contribution to match the funds raised by the Yukon Building
              Trades Council.
            </span>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </AnimationLayout>
  );
};

export default Home;
