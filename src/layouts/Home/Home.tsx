import { HorizontalSeparator, Image, LinkToArticle, Twit } from '@/components';
import { AnimationLayout } from '@/layouts';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card } from './parts';

import styles from './Home.module.scss';

import header_ph from 'public/images/header.jpg';
import { useIsMobile } from '@/hooks';

const cardsMock = [
  {
    icon: `comunity`,
    title: `Yukon to Ukraine`,
    description: `Learn more about organizing and the unionization process for your workplace`,
    href: `/YukonToUkraine`,
  },
  {
    icon: `cta`,
    title: `Yukon to Ukraine`,
    description: `Learn more about organizing and the unionization process for your workplace`,
    href: `#`,
  },
  {
    icon: `cta`,
    title: `Yukon to Ukraine`,
    description: `Learn more about organizing and the unionization process for your workplace`,
    href: `#`,
  },
];

const Home = () => {
  const { t } = useTranslation();

  const { isMobile } = useIsMobile();

  const imageAnimation = isMobile ? { x: 0 } : { x: `30%` };
  const overlayAnimation = isMobile ? { x: 0 } : { x: `-40%` };
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
            initial={{ x: 0 }}
            animate={imageAnimation}
            transition={{ delay: 2, ease: `easeInOut`, duration: 1 }}
            className={styles.imageWrapper}
          >
            <Image
              src={header_ph}
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </motion.div>
          <motion.div
            initial={{ x: `-100%` }}
            animate={overlayAnimation}
            transition={{ delay: 2, ease: `easeInOut`, duration: 1 }}
            className={styles.overlay}
          />

          <div className={styles.content}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
              className={styles.title}
            >
              Yukon Building Trades Council
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className={styles.description}
            >
              The Yukon Government will be making a further financial
              contribution to match the funds raised by the Yukon Building
              Trades Council.
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4 }}
              className={styles.mouse}
            >
              <LinkToArticle href="#main" />
            </motion.div>
          </div>
        </motion.div>

        <div id="main" className={styles.main}>
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
          <HorizontalSeparator />
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
