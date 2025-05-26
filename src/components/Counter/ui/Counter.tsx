import { useCount } from "../model/useCount";
import "./Counter.css";
const Counter = () => {
  const { count, onIncrement, onDecrement } = useCount();
  return (
    <div className='counter'>
      <button className='counter-button' onClick={onDecrement}>
        -
      </button>
      <span className='counter-value'>{count}</span>
      <button className='counter-button' onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
export default Counter;
