import { Modal, NoScrollLink } from '@/components';
import { motion } from 'framer-motion';
import { ROUTES } from '@/const';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './MobileNavbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Flags } from '../Flags';

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

      <Modal
        className={styles.modal}
        onClose={() => setShown(false)}
        isShown={isShown}
      >
        <div className={styles.body}>
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
            <Flags />
          </span>
        </div>
        <span className={styles.copyright}>
          Yukon Building Trades {new Date().getFullYear()}©
        </span>
      </Modal>
    </div>
  );
};

export default MobileNavbar;
