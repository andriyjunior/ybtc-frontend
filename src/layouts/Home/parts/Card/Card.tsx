import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Card.module.scss';

interface ICardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: FC<ICardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>
        <Image
          src={`/images/svgs/${icon}.svg`}
          className={styles.svg}
          width={36}
          height={36}
        />
      </span>
      <div className={styles.bottom}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
      {/* <div>
        <Link href={'#'}>
          <span>Read more</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Card;
