import styles from "./Counter.module.css";

interface ICounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ count, onIncrement, onDecrement }: ICounterProps) => {
  return (
    <div className={styles.counter}>
      <button className={styles.counter_button} onClick={onDecrement}>
        -
      </button>
      <span className={styles.counter_value}>{count}</span>
      <button className={styles.counter_button} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
export default Counter;
