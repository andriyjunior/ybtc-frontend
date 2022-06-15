import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactUs = () => {
  return <div>ContactUs</div>;
};

export default ContactUs;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
