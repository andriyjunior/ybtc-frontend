import { useRouter } from 'next/router';
import { NoScrollLink } from '@/components';
import { ROUTES } from '@/const';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  const { t } = useTranslation();
  const { asPath, pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.root}>
        <span className={styles.left}>
          <span>Logo</span>
          <span>Title</span>
        </span>
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
            <span className={styles.languageLink}>
              <Link href={asPath} locale="en">
                <Image src="/images/svgs/flag-us.svg" width={24} height={32} />
              </Link>
            </span>
            <span className={styles.languageLink}>
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
