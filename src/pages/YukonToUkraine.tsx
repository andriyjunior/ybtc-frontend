import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Head } from '@/components';
import { YukonToUkraine } from '@/layouts';

const yukonToUkraine = () => {
  return (
    <>
      <Head title={`Yukon Trades - Home`} desc={[]} />
      <YukonToUkraine />
    </>
  );
};

export default yukonToUkraine;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
