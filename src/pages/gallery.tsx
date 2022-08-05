import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Gallery as GalleryLayout } from '@/layouts';
import Head from 'next/head';

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Yukon Trades - Gallery</title>
      </Head>
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
