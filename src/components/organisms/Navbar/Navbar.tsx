import { useRouter } from 'next/router';
import { NoScrollLink } from '@/components';
import { ROUTES } from '@/const';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from './Navbar.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isFixed, setFixed] = useState(false);

  const { t } = useTranslation();
  const { asPath, pathname, locale } = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    position > 160 ? setFixed(true) : setFixed(false);
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
        </div>
      </div>
    </header>
  );
};

export const getStaticProps = async (context: any) => ({
  props: { ...context },
});

export default Navbar;
