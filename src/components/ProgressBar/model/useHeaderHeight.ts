import { type RefObject, useEffect, useState } from "react";

export const useHeaderHeight = (
  elementRef: RefObject<HTMLDivElement | null>,
) => {
  const [height, setHeight] = useState(0);
  const element = elementRef.current;

  useEffect(() => {
    if (element) setHeight(element.offsetHeight);
  }, [element]);

  return height;
};
