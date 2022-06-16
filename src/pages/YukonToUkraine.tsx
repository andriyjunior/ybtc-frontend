import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Head } from '@/components';
import { DonationLayout } from '@/layouts';

const Donation = () => {
  return (
    <>
      <Head title={`Yukon Trades - Home`} desc={[]} />
      <DonationLayout />
    </>
  );
};

export default Donation;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});