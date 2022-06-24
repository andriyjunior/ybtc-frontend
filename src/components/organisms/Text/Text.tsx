import { FC } from 'react';

import styles from './Text.module.scss';

interface ITextProps {
  data: string;
}

export const Text: FC<ITextProps> = ({ data }) => {
  return (
    <div className={styles.root} dangerouslySetInnerHTML={{ __html: data }} />
  );
};
