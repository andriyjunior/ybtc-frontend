import { FC } from 'react';

import styles from './Text.module.scss';

interface ITextProps {
  data: string;
}

const Text: FC<ITextProps> = ({ data }) => {
  return (
    <div className={styles.root} dangerouslySetInnerHTML={{ __html: data }} />
  );
};

export default Text;
