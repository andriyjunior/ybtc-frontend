import { useRouter } from 'next/router';
import { NoScrollLink } from '@/components';
import { ROUTES } from '@/const';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from './Navbar.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { Flags, MobileNavbar } from './parts';

const Navbar = () => {
  const [isFixed, setFixed] = useState(false);

  const { t } = useTranslation();
  const { asPath, pathname, locale } = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    position > 80 ? setFixed(true) : setFixed(false);
  };

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);

    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  const logoSize = isFixed ? 36 : 56;

  return (
    <header className={`${styles.header} ${isFixed && styles.fixed}`}>
      <div className={styles.root}>
        <NoScrollLink passHref href={`/`}>
          <span className={styles.left}>
            <Image src="/images/logo.svg" width={logoSize} height={logoSize} />
            &nbsp;
            <span className={styles.brand}>Yukon Trades</span>
          </span>
        </NoScrollLink>
        <MobileNavbar />
        <div className={styles.right}>
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
      </div>
    </header>
  );
};

export const getStaticProps = async (context: any) => ({
  props: { ...context },
});

export default Navbar;
