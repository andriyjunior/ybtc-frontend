import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Head } from '@/components';
import { YukonToUkraine } from '@/layouts';
import { getPage, PageDTO } from '@/api';
import { useRouter } from 'next/router';

const YukonToUkrainePage = ({ data }: { data: PageDTO }) => {
  const { locale }: any = useRouter();
  return (
    <>
      <Head
        title={data.meta.title[locale]}
        description={data.meta.description[locale]}
      />
      <YukonToUkraine body={data.body[locale]} />
    </>
  );
};

export default YukonToUkrainePage;

export const getServerSideProps = async ({ locale }: any) => {
  const data = await getPage(`YukonToUkraine`);

  return {
    props: {
      data: data.data.data,
      ...(await serverSideTranslations(locale)),
    },
  };
};
