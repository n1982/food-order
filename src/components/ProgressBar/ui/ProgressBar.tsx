import { useProgress } from "../model/useProgress";

import styles from "./ProgressBar.module.css";

export const ProgressBar = () => {
  const progress = useProgress();
  return (
    <div
      className={styles.progress_bar}
      style={{
        width: `${progress}%`,
      }}
    ></div>
  );
};
