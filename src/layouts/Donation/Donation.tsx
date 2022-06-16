import { PayPalButton } from '@/components';
import { AnimationLayout } from '@/layouts';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import styles from './Donation.module.scss';

const Donation = () => {
  const { t } = useTranslation();
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <div className={styles.ways}>
          <span className={styles.title}>{t(`payment.methods`)}</span>
          <PayPalButton />
        </div>
      </div>
    </AnimationLayout>
  );
};

export default Donation;
