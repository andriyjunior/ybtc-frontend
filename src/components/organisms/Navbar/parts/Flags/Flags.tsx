import { useIsMobile } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './Flags.module.scss';

const Flags: FC = () => {
  const { asPath, locale } = useRouter();
  const { isMobile } = useIsMobile();

  const sizes = { x: isMobile ? 32 : 24, y: isMobile ? 46 : 32 };

  return (
    <>
      <span
        className={`${styles.languageLink} ${locale === `en` && styles.active}`}
      >
        <Link href={asPath} locale="en">
          <Image
            className={styles.icon}
            src="/images/svgs/flag-ca.svg"
            width={sizes.x}
            height={sizes.y}
          />
        </Link>
      </span>
      <span
        className={`${styles.languageLink} ${locale === `ua` && styles.active}`}
      >
        <Link href={asPath} locale="ua">
          <Image
            className={styles.icon}
            src="/images/svgs/flag-ua.svg"
            width={sizes.x}
            height={sizes.y}
          />
        </Link>
      </span>
    </>
  );
};

export default Flags;
