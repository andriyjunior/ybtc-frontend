import { Image, PayPalButton, Text } from '@/components';
import { AnimationLayout } from '@/layouts';
import { useTranslation } from 'react-i18next';

import styles from './YukonToUkraine.module.scss';

const YukonToUkraine = () => {
  const { t } = useTranslation();
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <div className={styles.header}>
          <h1 className={styles.title}>The #YukonToUkraine</h1>
          <Image src="/images/logo-flag.png" className={styles.imageLogo} />
        </div>
        <div className={styles.body}>
          <Text data={t(`yukonToUkraine.body`)} />
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
