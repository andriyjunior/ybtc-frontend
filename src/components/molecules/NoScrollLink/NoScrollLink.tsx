import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

interface IProps extends LinkProps {
  href: string;
  passHref: boolean;
  children: ReactNode;
}

const NoScrollLink = ({ children, href, passHref }: IProps): JSX.Element => (
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
);

export default NoScrollLink;
