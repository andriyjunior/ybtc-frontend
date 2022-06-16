import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Head } from '@/components';
import { Success } from '@/layouts';

const metadata = {
  title: `Yukon Trades - Home`,
  desc: [{ name: `description`, content: `Yukon Trades` }],
};

export default function Home() {
  return (
    <>
      <Head title={metadata.title} desc={metadata.desc} />
      <Success />
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
