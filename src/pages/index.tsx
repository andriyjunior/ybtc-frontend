import { Head } from '@/components';
import { HomeLayout } from '@/layouts';

const metadata = {
  title: `Home page`,
  desc: [{ name: `description`, content: `Description of helping of Ukraine` }],
};

export default function Home() {
  return (
    <>
      <Head title={metadata.title} desc={metadata.desc} />
      <HomeLayout />
    </>
  );
}
