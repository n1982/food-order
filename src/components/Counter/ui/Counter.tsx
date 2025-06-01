import type { FC } from "react";
import styles from "./Counter.module.css";

interface ICounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter: FC<ICounterProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={onDecrement}>
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button className={styles.button} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
