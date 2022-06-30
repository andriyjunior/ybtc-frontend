import Image from 'next/image';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'react-image-lightbox';
import { useIsMobile } from '@/hooks';
import { photos } from './photos';
import { Photo } from './parts';

import 'react-image-lightbox/style.css';
import styles from './Gallery.module.scss';

const Gallery: FC = memo(() => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isInited, setInited] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const { isMobile } = useIsMobile();

  useEffect(() => {
    setPhotoIndex(photoIndex);
  }, [isInited]);

  const handleClose = useCallback(() => {
    setInited(false);
    setOpen(false);
  }, []);

  const handleOpen = (idx: number) => {
    setPhotoIndex(idx);
    setOpen(true);
  };

  const handleNextMove = useCallback(() => {
    if (photoIndex < photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  }, [photoIndex]);

  const handlePrevMove = () => {
    if (photoIndex) {
      setPhotoIndex(photoIndex - 1);
    }
  };

  const nextSrc =
    photoIndex < photos.length - 1
      ? photos[photoIndex + 1].src
      : photos[photos.length - 1].src;

  const prevSrc = photoIndex ? photos[photoIndex - 1].src : photos[0].src;

  return (
    <div className={styles.root}>
      <Masonry
        breakpointCols={isMobile ? 2 : 3}
        className={styles.mansoryGrid}
        columnClassName={styles.mansoryGridColumn}
      >
        {photos.map((item, idx) => (
          <Photo
            key={item.src}
            onClick={() => handleOpen(idx)}
            href={item.src}
          />
        ))}
      </Masonry>

      {isOpen && (
        <Lightbox
          onImageLoad={() => setInited(true)}
          mainSrc={photos[photoIndex].src}
          nextSrc={nextSrc}
          prevSrc={prevSrc}
          onCloseRequest={handleClose}
          onMoveNextRequest={handleNextMove}
          onMovePrevRequest={handlePrevMove}
        />
      )}
    </div>
  );
});

Gallery.displayName = `Gallery`;

export default Gallery;
