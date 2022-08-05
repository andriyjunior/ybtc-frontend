import { FC } from 'react';
import { PayPalButton, Text, Header } from '@/components';
import { AnimationLayout } from '@/layouts';
import { useTranslation } from 'react-i18next';

import styles from './YukonToUkraine.module.scss';

interface IYukonToUkraine {
  body: string;
}

const YukonToUkraine: FC<IYukonToUkraine> = ({ body }) => {
  const { t } = useTranslation();
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <Header img="/images/logo-flag.png" title="The #YukonToUkraine" />
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
