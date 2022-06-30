import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Head } from '@/components';
import { HomeLayout } from '@/layouts';
import { getPage, PageDTO } from '@/api';
import { useRouter } from 'next/router';

const metadata = {
  title: `Yukon Trades - Home`,
  desc: [{ name: `description`, content: `Yukon Trades` }],
};

export default function Home({ data }: { data: PageDTO }) {
  const { locale }: any = useRouter();

  return (
    <>
      <Head
        title={data.meta.title[locale]}
        description={data.meta.description[locale]}
      />
      <HomeLayout />
    </>
  );
}

// export const getStaticProps = async ({ locale }: any) => ({
//   props: {
//     ...(await serverSideTranslations(locale)),
//   },
// });

export async function getServerSideProps({ locale }: any) {
  const data = await getPage(`home`);

  return {
    props: {
      data: data.data.data,
      ...(await serverSideTranslations(locale)),
    },
  };
}
