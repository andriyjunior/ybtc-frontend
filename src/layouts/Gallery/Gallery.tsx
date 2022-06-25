import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import styles from './Gallery.module.scss';
import { useIsMobile } from '@/hooks';

const photos = [
  {
    src: `https://i.ibb.co/2sq4kzB/Ck-Dau-ZUUAA-q6-G.jpg`,
  },
  {
    src: `https://i.ibb.co/fNFmK8g/Ck-Daw-H-UUAAM00t.jpg`,
  },
  {
    src: `https://i.ibb.co/pbW2t7f/IMG-20160531-101912.jpg`,
  },
  {
    src: `https://i.ibb.co/MSD9HYk/IMG-20160531-101921.jpg`,
  },
  {
    src: `https://i.ibb.co/tQCv64m/IMG-20160531-112049.jpg`,
  },
  {
    src: `https://i.ibb.co/M1g8DfC/IMG-20160531-160345.jpg`,
  },
  {
    src: `https://i.ibb.co/YbpHFgh/IMG-20160531-160348.jpg`,
  },
  {
    src: `https://i.ibb.co/vd6GKsY/IMG-20160531-160351.jpg`,
  },
  {
    src: `https://i.ibb.co/qC6SVhL/IMG-20160531-203151.jpg`,
  },
  {
    src: `https://i.ibb.co/2NJ55zw/IMG-20160601-192743.jpg`,
  },
  {
    src: `https://i.ibb.co/0nQJMrg/IMG-20160601-192746.jpg`,
  },
  {
    src: `https://i.ibb.co/w0DB64S/IMG-20160601-193127.jpg`,
  },
  {
    src: `https://i.ibb.co/jh6zsM2/IMG-20160603-081917.jpg`,
  },
  {
    src: `https://i.ibb.co/k62QQ8r/IMG-20160603-092843.jpg`,
  },
  {
    src: `https://i.ibb.co/pn85n7p/IMG-20151124-084343.jpg`,
  },
  {
    src: ` https://i.ibb.co/KqHQWMQ/IMG-20151124-084339.jpg`,
  },
  {
    src: ` https://i.ibb.co/4f54L6S/IMG-20151124-085512.jpg`,
  },
  {
    src: ` https://i.ibb.co/jHsSrVR/IMG-20151124-085516.jpg`,
  },
  {
    src: ` https://i.ibb.co/K9n4mBX/IMG-20151124-144058.jpg`,
  },
  {
    src: ` https://i.ibb.co/JFy8qMy/IMG-20160118-124733.jpg`,
  },
  {
    src: ` https://i.ibb.co/Rbs77Fr/IMG-20160118-124750.jpg`,
  },
  {
    src: ` https://i.ibb.co/YW7Mgwq/IMG-20160118-131536.jpg`,
  },
  {
    src: ` https://i.ibb.co/V9T4KcZ/IMG-20160118-131546.jpg`,
  },
];

const Gallery: FC = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isInited, setInited] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const { isMobile } = useIsMobile();

  useEffect(() => {
    setPhotoIndex(photoIndex);
  }, [isInited]);

  const handleClose = () => {
    setInited(false);
    setOpen(false);
  };
  const handleOpen = (idx: number) => {
    setPhotoIndex(idx);
    setOpen(true);
  };

  const handleNextMove = () => {
    if (photoIndex < photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  };

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
          <div key={idx} className={styles.imgWrap}>
            <Image
              className={styles.img}
              onClick={() => handleOpen(idx)}
              width={400}
              height={400}
              objectFit="cover"
              src={item.src}
            />
          </div>
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
};

export default Gallery;
