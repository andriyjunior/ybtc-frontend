import { FC, ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Modal.module.scss';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
  isShown: boolean;
}

const variants = {
  hidden: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
};

const Modal: FC<IModalProps> = ({ children, onClose, isShown }) => {
  useEffect(() => {
    const prevBodyStyles = document.body.style.overflow;

    if (isShown) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = prevBodyStyles;
    }

    return () => {
      document.body.style.overflow = prevBodyStyles;
    };
  }, [isShown]);

  return (
    <AnimatePresence exitBeforeEnter>
      {isShown && (
        <div className={styles.root}>
          <motion.div
            variants={variants}
            initial="hidden"
            exit="hidden"
            animate="animate"
            transition={{ ease: `easeOut`, delay: 0 }}
            onClick={onClose}
            className={styles.overlay}
          />
          <motion.div
            variants={variants}
            initial="hidden"
            exit="hidden"
            animate="animate"
            transition={{ ease: `easeOut`, delay: 0.1 }}
            className={styles.body}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
