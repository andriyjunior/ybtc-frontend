import Head from 'next/head';
import { FC } from 'react';

interface IMeta {
  name: string;
  content: string;
}

interface IProps {
  title?: string;
  desc?: IMeta[];
  description?: string;
}

const CustomHead: FC<IProps> = ({ title, desc, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={`description`} content={description} />;
      {desc?.map(({ content, name }) => {
        return <meta key={content} name={name} content={content} />;
      })}
    </Head>
  );
};

export default CustomHead;
