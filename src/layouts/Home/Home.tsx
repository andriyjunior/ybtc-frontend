import { Twit } from '@/components';
import { AnimationLayout } from '@/layouts';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';
import { Card } from './parts';

const Home = () => {
  const { t } = useTranslation();
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
            <Card
              icon={`comunity`}
              title={`Yukon for Ukraine`}
              description={`Learn more about organizing and the unionization process for your workplace`}
            />
            <Card
              icon={`cta`}
              title={`Yukon for Ukraine`}
              description={`Learn more about organizing and the unionization process for your workplace`}
            />
            <Card
              icon={`cta`}
              title={`Yukon for Ukraine`}
              description={`Learn more about organizing and the unionization process for your workplace`}
            />
          </div>

          <div className={styles.recentTweets}>
            <h3 className={styles.title}>Recent Tweets</h3>
            <div className={styles.tweets}>
              <Twit />
              <Twit />
              <Twit />
              <Twit />
            </div>
          </div>
        </div>
      </div>
    </AnimationLayout>
  );
};

export default Home;
