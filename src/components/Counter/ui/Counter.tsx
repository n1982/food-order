import "./Counter.css";

interface ICounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ count, onIncrement, onDecrement }: ICounterProps) => {
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
