import { Modal, NoScrollLink } from '@/components';
import { motion } from 'framer-motion';
import { ROUTES } from '@/const';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './MobileNavbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const MobileNavbar: FC = () => {
  const [isShown, setShown] = useState(false);

  const { t } = useTranslation();
  const { asPath, pathname, locale } = useRouter();
  return (
    <div className={styles.root}>
      <button
        onClick={() => setShown((state) => !state)}
        className={`${styles.burger} ${isShown && styles.opened}`}
      />

      <Modal onClose={() => setShown(false)} isShown={isShown}>
        <ul className={styles.links}>
          {ROUTES.map(({ key, href }, idx) => {
            return (
              <li
                key={`${href}_${idx}`}
                className={`${styles.link} ${
                  pathname == href ? styles.active : ``
                } `}
              >
                <NoScrollLink passHref href={href}>
                  {t(`navbar.${key}`)}
                </NoScrollLink>
              </li>
            );
          })}
        </ul>

        <span className={styles.languages}>
          <span className={styles.separator} />
          <span
            className={`${styles.languageLink} ${
              locale === `en` && styles.active
            }`}
          >
            <Link href={asPath} locale="en">
              <Image src="/images/svgs/flag-us.svg" width={24} height={32} />
            </Link>
          </span>
          <span
            className={`${styles.languageLink} ${
              locale === `ua` && styles.active
            }`}
          >
            <Link href={asPath} locale="ua">
              <Image src="/images/svgs/flag-ua.svg" width={24} height={32} />
            </Link>
          </span>
        </span>
      </Modal>
    </div>
  );
};

export default MobileNavbar;
