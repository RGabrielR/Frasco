import { useEffect, useState } from "react";

export const useBreakpoint = (size) => {
  const [breakpoint, setBreakPoint] = useState(undefined);
  useEffect(() => {
    if (0 < size && size < 768) {
      setBreakPoint("Mobile");
    }
    if (768 <= size) {
      setBreakPoint("Not Mobile");
    }
  }, [size]);

  return breakpoint;
};

export const useScreenSize = () => {
  const [size, setSize] = useState(undefined);
  function handleResize() {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
