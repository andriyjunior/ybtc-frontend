import Head from 'next/head';
import { FC } from 'react';

interface IMeta {
  name: string;
  content: string;
}

interface IProps {
  title: string;
  desc: IMeta[];
}

const CustomHead: FC<IProps> = ({ title, desc }) => {
  return (
    <Head>
      <title>{title}</title>
      {desc.map(({ content, name }) => {
        return <meta key={content} name={name} content={content} />;
      })}
    </Head>
  );
};

export default CustomHead;
