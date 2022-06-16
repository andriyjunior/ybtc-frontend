import { Image } from '@/components';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import styles from './Success.module.scss';
import { AnimationLayout } from '../AnimationLayout';

const Success = () => {
  const { t } = useTranslation();
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.text}
        >
          {t(`success.text`)}
        </motion.span>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.img}
        >
          <Image className="" src={`/images/svgs/success-donate.svg`} />
        </motion.div>
      </div>
    </AnimationLayout>
  );
};

export default Success;
