import type { FC, RefObject } from "react";
import { useProgress } from "../model/useProgress.ts";
import styles from "./ProgressBar.module.css";
import { useHeaderHeight } from "../model/useHeaderHeight.ts";

interface ProgressBar {
  scrollRef: RefObject<HTMLDivElement | null>;
}

export const ProgressBar: FC<ProgressBar> = ({ scrollRef }) => {
  const progress = useProgress();
  const positionTop = useHeaderHeight(scrollRef);
  return (
    <div
      className={styles.progress_bar}
      style={{
        width: `${progress}%`,
        top: positionTop,
      }}
    />
  );
};
