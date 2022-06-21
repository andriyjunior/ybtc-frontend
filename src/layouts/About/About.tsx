import { AnimationLayout } from '@/layouts';
import { useTranslation } from 'react-i18next';

import styles from './About.module.scss';

const AboutLayout = () => {
  const { t } = useTranslation();

  return (
    <AnimationLayout>
      <div className={styles.root}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: t(`about.body`) }}
        />
      </div>
    </AnimationLayout>
  );
};

export default AboutLayout;
