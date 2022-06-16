import { FC, ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ x: 100 }}
      hidden={false}
      animate={{ x: 0 }}
      className={styles.root}
    >
      <div onClick={onClose} className={styles.overlay} />
      <div className={styles.body}>{children}</div>
    </motion.div>
  );
};

export default Modal;
