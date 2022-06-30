import { HorizontalSeparator, Text } from '@/components';
import { AnimationLayout } from '@/layouts';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './About.module.scss';

interface IAboutLayout {
  body: string;
}

const AboutLayout: FC<IAboutLayout> = ({ body }) => {
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <Text data={body} />
        {/* <HorizontalSeparator /> */}
        {/* <Text data={t(`about.links`)} /> */}
      </div>
    </AnimationLayout>
  );
};

export default AboutLayout;
