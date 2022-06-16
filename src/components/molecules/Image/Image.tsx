import Image from 'next/image';
import { FC } from 'react';

import styles from './Image.module.scss';

interface IImage {
  src: string;
  className?: string;
}

export const CustomImage: FC<IImage> = ({ src, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Image
        src={src}
        width={1170}
        height={500}
        layout="responsive"
        className={styles.image}
      />
    </div>
  );
};

export default CustomImage;
