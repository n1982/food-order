import { useCount } from "../model/useCount";

const Counter = () => {
  const { count, onIncrement, onDecrement } = useCount();
  const handleDecrementClick = () => {
    if (count > 0) onDecrement();
  };

  const handleIncrementClick = () => {
    if (count < 5) onIncrement();
  };
  return (
    <div>
      <button onClick={handleDecrementClick}>-</button>
      {count}
      <button onClick={handleIncrementClick}>+</button>
    </div>
  );
};
export default Counter;
