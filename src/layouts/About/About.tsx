import { HorizontalSeparator, Text } from '@/components';
import { AnimationLayout } from '@/layouts';
import { useTranslation } from 'react-i18next';

import styles from './About.module.scss';

const AboutLayout = () => {
  const { t } = useTranslation();

  return (
    <AnimationLayout>
      <div className={styles.root}>
        <Text data={t(`about.body`)} />
        <HorizontalSeparator />
        <Text data={t(`about.links`)} />
      </div>
    </AnimationLayout>
  );
};

export default AboutLayout;
