import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount((prev) => Math.min(prev + 1, 5));
  const onDecrement = () => setCount((prev) => Math.max(prev - 1, 0));
  return { count, onIncrement, onDecrement };
};
