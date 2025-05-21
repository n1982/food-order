import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount((prev) => prev + 1);
  const onDecrement = () => setCount((prev) => prev - 1);
  return { count, onIncrement, onDecrement };
};
