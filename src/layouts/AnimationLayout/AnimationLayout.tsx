import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

interface IProps {
  children: ReactNode;
}

const AnimationLayout: FC<IProps> = ({ children }) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: `linear` }}
    >
      {children}
    </motion.main>
  );
};

export default AnimationLayout;
