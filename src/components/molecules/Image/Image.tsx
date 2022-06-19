import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './Image.module.scss';

interface IImage {
  src: string | StaticImageData;
  className?: string;
}

export const CustomImage: FC<IImage> = ({ src, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Image
        quality={100}
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
