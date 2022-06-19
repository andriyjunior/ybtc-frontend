import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import styles from './Twit.module.scss';

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 10 },
};

const Twit: FC = () => {
  const [ref, inView] = useInView();

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={`hidden`}
      animate={controls}
      transition={{ duration: 1 }}
      className={styles.root}
    >
      <TwitterTweetEmbed
        onLoad={(t) => console.log(t)}
        tweetId={`1537023251603496961`}
      />
    </motion.div>
  );
};

export default Twit;
