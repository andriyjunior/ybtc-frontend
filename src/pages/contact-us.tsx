import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ContactUsLayout } from '@/layouts';
import Head from 'next/head';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Yukon Trades</title>
      </Head>
      <ContactUsLayout />
    </>
  );
};

export default ContactUs;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
