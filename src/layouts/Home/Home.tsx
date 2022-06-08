import { AnimationLayout } from '@/layouts';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <AnimationLayout>
      <div className={styles.root}>
        <span className={styles.title}>Home page</span>
      </div>
    </AnimationLayout>
  );
};

export default Home;
