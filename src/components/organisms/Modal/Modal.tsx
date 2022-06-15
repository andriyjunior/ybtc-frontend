import { FC, ReactNode, useEffect } from 'react';

import styles from './Modal.module.scss';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<IModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const prevBodyStyles = document.body.style.overflow;

    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = prevBodyStyles;
    };
  }, []);

  return (
    <div className={styles.root}>
      <div onClick={onClose} className={styles.overlay} />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Modal;
