import Counter from "../../Counter";
import { useForm } from "../model/useForm";

export const ReviewForm = () => {
  const {
    form,
    clearForm,
    decrementRating,
    incrementRating,
    setName,
    setText,
  } = useForm();

  return (
    <div>
      <div>Имя</div>
      <input
        type='text'
        value={form.name}
        onChange={(event) => setName(event.target.value)}
      />
      <div>Текст</div>
      <input
        type='text'
        value={form.text}
        onChange={(event) => setText(event.target.value)}
      />
      <div>Рейтинг</div>
      <Counter
        count={form.rating}
        onIncrement={incrementRating}
        onDecrement={decrementRating}
      />
      <button onClick={clearForm}>Очистить форму</button>
    </div>
  );
};
