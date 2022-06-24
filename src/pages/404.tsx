import { Image } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import img from '@/public/images/svgs/404.svg';

const FourOhFour = () => {
  return (
    <div
      style={{
        paddingTop: `10px`,
      }}
    >
      <Image src={img} />
    </div>
  );
};

export default FourOhFour;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
