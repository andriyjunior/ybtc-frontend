import Image from 'next/image';
import { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.logo}>
          <Image src="/images/logo.svg" width={160} height={160} />
        </span>
        <div className={styles.section}>
          <h4 className={styles.title}>Contacts</h4>
          <span className={styles.description}>
            15210 123 Avenue Edmonton AB T5V 0A3
            <br />
            Phone: 780.474.8599 <br /> Toll Free: 1.800.272.7905 <br /> Fax:
            780.474.8910
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
