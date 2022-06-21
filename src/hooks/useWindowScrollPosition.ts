import { useEffect, useState } from 'react';

export const useWindowScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== `undefined`) {
        setScrollPosition(window.scrollY);
      }
    };

    handleScroll();

    window.addEventListener(`scroll`, handleScroll);

    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return { scrollPosition };
};
