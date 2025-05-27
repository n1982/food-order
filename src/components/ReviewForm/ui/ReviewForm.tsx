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
    <section>
      <div>
        <span>Имя</span>
        <input
          type='text'
          value={form.name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <span>Текст</span>
        <input
          type='text'
          value={form.text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <span>Рейтинг</span>
      <Counter
        count={form.rating}
        onIncrement={incrementRating}
        onDecrement={decrementRating}
      />
      <div>
        <button onClick={clearForm}>Очистить форму</button>
      </div>
    </section>
  );
};
