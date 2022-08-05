import { Image } from '@/components';
import { FC } from 'react';

import styles from './Header.module.scss';

interface IHeaderProps {
  title: string;
  img?: string;
}

const Header: FC<IHeaderProps> = ({ img, title }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      {img && <Image src={img} className={styles.imageLogo} />}
    </div>
  );
};

export default Header;
