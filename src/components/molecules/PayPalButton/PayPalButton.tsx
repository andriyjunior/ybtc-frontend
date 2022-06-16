import Link from 'next/link';
import { FC } from 'react';

import styles from './PayPalButton.module.scss';

export const PayPalButton: FC = () => {
  return (
    <Link
      target={`_blank`}
      href={`https://www.paypal.com/donate/?hosted_button_id=AX9JHNE9D2ZTJ`}
    >
      <div className={styles.root}>
        <img className={styles.logo} src={`/images/svgs/paypal.svg`} alt="" />
      </div>
    </Link>
  );
};
