import { useState, useLayoutEffect } from "react";

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 440 && window.innerWidth < 1080);
    };

    const throttledHandleResize = throttle(handleResize, 200);

    handleResize();
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  const throttle = (func, delay) => {
    let lastCalledTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCalledTime >= delay) {
        func(...args);
        lastCalledTime = now;
      }
    };
  };

  return isSmallScreen;
};

export default useIsSmallScreen;
