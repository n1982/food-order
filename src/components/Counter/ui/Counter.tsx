import type { FC } from "react";
import { Button } from "../../Button";
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
      <Button className={styles.button} onClick={onDecrement} title={"-"} />
      <span className={styles.value}>{count}</span>
      <Button className={styles.button} onClick={onIncrement} title={"+"} />
    </div>
  );
};
