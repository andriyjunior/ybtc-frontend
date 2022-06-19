import Link from 'next/link';
import { FC } from 'react';

import styles from './LinkToArticle.module.scss';

interface ILinkToArticleProps {
  href: string;
  className?: string;
}

const LinkToArticle: FC<ILinkToArticleProps> = ({ href, className }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <Link href={href}>
        <div className={styles.mouse}>
          <span className={styles.wheel} />
        </div>
      </Link>
    </div>
  );
};

export default LinkToArticle;
