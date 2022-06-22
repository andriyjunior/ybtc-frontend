import { useWindowDimensions, useWindowScrollPosition } from '@/hooks';
import Image from 'next/image';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './ToScrollUp.module.scss';

const variants = {
  hidden: { x: `100%` },
  visible: { x: 0 },
};

const ToScrollUp: FC = () => {
  const [isMobile, setMobile] = useState(false);
  const controls = useAnimation();

  const { scrollPosition } = useWindowScrollPosition();
  const dimension = useWindowDimensions();

  const handleToScrollUp = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    const isHidden = scrollPosition > 120 ? true : false;

    isHidden ? controls.start({ x: 0 }) : controls.start({ x: `100%` });
  }, [scrollPosition]);

  useEffect(
    () =>
      dimension && dimension?.width < 768 ? setMobile(true) : setMobile(false),
    [dimension],
  );

  const size = isMobile ? 120 : 100;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        animate={controls}
        onClick={handleToScrollUp}
        className={styles.root}
      >
        <Image
          className={styles.img}
          src="/images/svgs/arrow-up.svg"
          width={size}
          height={size}
          layout="fixed"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ToScrollUp;
