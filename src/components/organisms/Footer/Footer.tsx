import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  const { t } = useTranslation(``);
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.logo}>
          <Image src="/images/logo-white.svg" width={160} height={160} />
        </span>
        <div className={styles.section}>
          <h4 className={styles.title}>{t(`footer.contacts.title`)}</h4>
          <span className={styles.description}>
            <span className={styles.item}>{t(`footer.contacts.name`)}</span>
            <span className={styles.item}>{t(`footer.contacts.company`)}</span>
            <span className={styles.item}>{t(`footer.contacts.adress1`)}</span>
            <span className={styles.item}>{t(`footer.contacts.adress2`)}</span>
            {/* <span className={styles.item}>
              780.266.8719 &nbsp;
              <span className={styles.email}>
                <Link href={`mailto:president@yukontrades.ca`}>
                  president@yukontrades.ca
                </Link>
              </span>
            </span> */}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
