import { Image, PayPalButton, Text } from '@/components';
import { AnimationLayout } from '@/layouts';
import { ILang } from '@/api';
import { useTranslation } from 'react-i18next';

import styles from './YukonToUkraine.module.scss';
import { FC } from 'react';

interface IYukonToUkraine {
  body: string;
}

const YukonToUkraine: FC<IYukonToUkraine> = ({ body }) => {
  const { t } = useTranslation();
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <div className={styles.header}>
          <h1 className={styles.title}>The #YukonToUkraine</h1>
          <Image src="/images/logo-flag.png" className={styles.imageLogo} />
        </div>
        <div className={styles.body}>
          <Text data={body} />
          <div className={styles.payment}>
            <span className={styles.paymentTitle}>{t(`payment.methods`)}</span>
            <PayPalButton />
          </div>
        </div>
      </div>
    </AnimationLayout>
  );
};

export default YukonToUkraine;
