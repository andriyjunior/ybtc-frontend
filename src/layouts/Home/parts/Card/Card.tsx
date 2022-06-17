import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './Card.module.scss';
import { NoScrollLink } from '@/components';

interface ICardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const Card: FC<ICardProps> = ({ icon, title, description, href }) => {
  const [ref, inView] = useInView();

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  return (
    <NoScrollLink href={href} passHref={false}>
      <motion.div
        ref={ref}
        variants={variants}
        initial={`hidden`}
        animate={controls}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className={styles.root}
      >
        <span className={styles.icon}>
          <Image
            src={`/images/svgs/${icon}.svg`}
            className={styles.svg}
            width={36}
            height={36}
          />
        </span>
        <div className={styles.bottom}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </motion.div>
    </NoScrollLink>
  );
};

export default Card;
