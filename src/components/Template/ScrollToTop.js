import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// See https://reactrouter.com/en/main/components/scroll-restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
