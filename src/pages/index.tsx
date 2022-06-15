import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Head } from '@/components';
import { HomeLayout } from '@/layouts';

const metadata = {
  title: `Home page`,
  desc: [{ name: `description`, content: `Description of helping of Ukraine` }],
};

export default function Home() {
  return (
    <>
      <Head title={metadata.title} desc={metadata.desc} />
      <HomeLayout />
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
