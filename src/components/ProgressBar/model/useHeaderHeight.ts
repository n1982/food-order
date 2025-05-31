import { useEffect, useState } from "react";

export const useHeaderHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeight(header.offsetHeight);
    }
  }, []);

  return height;
};
