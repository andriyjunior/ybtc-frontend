import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Gallery as GalleryLayout } from '@/layouts';

const Gallery = () => {
  return (
    <>
      <GalleryLayout />
    </>
  );
};

export default Gallery;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
