import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AboutLayout } from '@/layouts';

const About = () => {
  return <AboutLayout />;
};

export default About;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
