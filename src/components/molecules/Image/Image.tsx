import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './Image.module.scss';

interface IImage {
  src: string | StaticImageData;
  className?: string;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | 'raw' | undefined;
  objectFit?: 'cover' | 'contain';
}

export const CustomImage: FC<IImage> = ({
  src,
  className,
  layout = `responsive`,
  objectFit,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Image
        quality={100}
        src={src}
        width={1170}
        height={500}
        layout={layout}
        objectFit={objectFit}
        className={styles.image}
      />
    </div>
  );
};

export default CustomImage;
