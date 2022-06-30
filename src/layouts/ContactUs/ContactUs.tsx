import { Form } from '@/components';
import { AnimationLayout } from '../AnimationLayout';
import styles from './ContactUs.module.scss';

import twitter_icon from '@/public/images/svgs/twitter.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const ContactUs = () => {
  const [isSent, setSent] = useState(false);

  const successHandle = () => {
    window.scrollTo(0, 0);
    setSent(true);
  };

  return (
    <AnimationLayout>
      <div className={styles.root}>
        <div className={styles.head}>
          <h3 className={styles.title}>Follow us on Social Media</h3>
          <span className={styles.icon}>
            <Link href={`https://twitter.com/`}>
              <Image src={twitter_icon} width={36} height={36} />
            </Link>
          </span>
        </div>
        {!isSent && <Form onSuccess={successHandle} />}

        {isSent && (
          <span className={styles.success}>Message was sent successfully</span>
        )}
      </div>
    </AnimationLayout>
  );
};

export default ContactUs;
