import { useEffect, useState } from "react";

export const useProgress = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const main = document.querySelector("main");
    const handleScroll = () => {
      if (main) {
        const { scrollTop, scrollHeight, clientHeight } = main;
        const currentProgress =
          (scrollTop / (scrollHeight - clientHeight)) * 100;
        setProgress(currentProgress);
      }
    };
    if (main) {
      main.addEventListener("scroll", handleScroll);
    }

    return () => main?.removeEventListener("scroll", handleScroll);
  }, []);
  return progress;
};
