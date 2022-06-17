import { Twit } from '@/components';
import { AnimationLayout } from '@/layouts';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card } from './parts';

import styles from './Home.module.scss';

const cardsMock = [
  {
    icon: `comunity`,
    title: `Yukon for Ukraine`,
    description: `Learn more about organizing and the unionization process for your workplace`,
    href: `/YukonToUkraine`,
  },
  {
    icon: `cta`,
    title: `Yukon for Ukraine`,
    description: `Learn more about organizing and the unionization process for your workplace`,
    href: `#`,
  },
  {
    icon: `cta`,
    title: `Yukon for Ukraine`,
    description: `Learn more about organizing and the unionization process for your workplace`,
    href: `#`,
  },
];

const Home = () => {
  const { t } = useTranslation();
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.header}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={styles.bottom}
          >
            <motion.h1
              initial={{ opacity: 0, y: `100%` }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className={styles.title}
            >
              Yukon Building Trades Council
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: `100%` }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={styles.description}
            >
              The Yukon Government will be making a further financial
              contribution to match the funds raised by the Yukon Building
              Trades Council.
            </motion.span>
          </motion.div>
        </motion.div>

        <div className={styles.main}>
          <div className={styles.cards}>
            {cardsMock.map((item, idx) => (
              <Card
                key={idx}
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
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
