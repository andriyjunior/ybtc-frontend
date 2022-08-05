import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './Photo.module.scss';

interface IPhotoProps {
  href: string;
  onClick: () => void;
}

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 80 },
};

export const Photo: FC<IPhotoProps> = ({ href, onClick }) => {
  const [ref, inView] = useInView();

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={variants}
      initial={`hidden`}
      animate={controls}
      transition={{ duration: 0.5 }}
      ref={ref}
      className={styles.imgWrap}
    >
      <Image
        className={styles.img}
        onClick={onClick}
        width={400}
        height={300}
        objectFit="cover"
        src={href}
      />
    </motion.div>
  );
};
