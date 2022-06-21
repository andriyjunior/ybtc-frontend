import { useWindowDimensions, useWindowScrollPosition } from '@/hooks';
import Image from 'next/image';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { FC, useEffect, useRef } from 'react';

import styles from './ToScrollUp.module.scss';

const variants = {
  hidden: { x: `100%` },
  visible: { x: 0 },
};

const ToScrollUp: FC = () => {
  const controls = useAnimation();

  const { scrollPosition } = useWindowScrollPosition();

  const handleToScrollUp = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    const isHidden = scrollPosition > 120 ? true : false;

    isHidden ? controls.start({ x: 0 }) : controls.start({ x: `100%` });
  }, [scrollPosition]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        animate={controls}
        onClick={handleToScrollUp}
        className={styles.root}
      >
        <Image src="/images/svgs/arrow-up.svg" width={72} height={72} />
      </motion.div>
    </AnimatePresence>
  );
};

export default ToScrollUp;
