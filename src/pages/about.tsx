import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AboutLayout } from '@/layouts';
import { Head } from '@/components';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const desc = [
    {
      name: t(`about.meta.description.name`),
      content: t(`about.meta.description.content`),
    },
  ];

  return (
    <>
      <Head title={t(`about.meta.title`)} desc={desc} />
      <AboutLayout />
    </>
  );
};

export default About;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
