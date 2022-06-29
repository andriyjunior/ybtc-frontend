import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AboutLayout } from '@/layouts';
import { Head } from '@/components';
import { useTranslation } from 'react-i18next';
import { getPage, PageDTO } from '@/api';
import { useRouter } from 'next/router';

const About = ({ data }: { data: PageDTO }) => {
  const { locale }: any = useRouter();

  return (
    <>
      <Head
        title={data.meta.title[locale]}
        description={data.meta.description[locale]}
      />
      <AboutLayout body={data.body[locale]} />
    </>
  );
};

export default About;

export const getServerSideProps = async ({ locale }: any) => {
  const data = await getPage(`about`);

  return {
    props: {
      data: data.data.data,
      ...(await serverSideTranslations(locale)),
    },
  };
};
