import { useCount } from "../model/useCount";
import "./Counter.css";
const Counter = () => {
  const { count, onIncrement, onDecrement } = useCount();
  const handleDecrementClick = () => {
    if (count > 0) onDecrement();
  };

  const handleIncrementClick = () => {
    if (count < 5) onIncrement();
  };
  return (
    <div className='counter'>
      <button className='counter-button' onClick={handleDecrementClick}>
        -
      </button>
      <span className='counter-value'>{count}</span>
      <button className='counter-button' onClick={handleIncrementClick}>
        +
      </button>
    </div>
  );
};
export default Counter;
