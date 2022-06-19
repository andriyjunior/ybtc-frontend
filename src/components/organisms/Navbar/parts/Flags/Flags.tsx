import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './Flags.module.scss';

const Flags: FC = () => {
  const { asPath, locale } = useRouter();
  return (
    <>
      <span
        className={`${styles.languageLink} ${locale === `en` && styles.active}`}
      >
        <Link href={asPath} locale="en">
          <Image src="/images/svgs/flag-ca.svg" width={24} height={32} />
        </Link>
      </span>
      <span
        className={`${styles.languageLink} ${locale === `ua` && styles.active}`}
      >
        <Link href={asPath} locale="ua">
          <Image src="/images/svgs/flag-ua.svg" width={24} height={32} />
        </Link>
      </span>
    </>
  );
};

export default Flags;
