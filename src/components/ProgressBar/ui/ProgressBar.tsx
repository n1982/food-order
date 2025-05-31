import { useHeaderHeight } from "../model/useHeaderHeight";
import { useProgress } from "../model/useProgress";

import styles from "./ProgressBar.module.css";

export const ProgressBar = () => {
  const progress = useProgress();
  const positionTop = useHeaderHeight();
  return (
    <div
      className={styles.progress_bar}
      style={{
        width: `${progress}%`,
        top: positionTop,
      }}
    ></div>
  );
};
