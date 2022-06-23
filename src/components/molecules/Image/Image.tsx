import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './Image.module.scss';

interface IImage {
  src: string | StaticImageData;
  className?: string;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | 'raw' | undefined;
  objectFit?: 'cover' | 'contain';
  objectPosition?: 'center' | 'top' | 'bottom';
}

export const CustomImage: FC<IImage> = ({
  src,
  className,
  layout = `responsive`,
  objectFit,
  objectPosition,
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
        objectPosition={objectPosition}
        className={styles.image}
      />
    </div>
  );
};

export default CustomImage;
