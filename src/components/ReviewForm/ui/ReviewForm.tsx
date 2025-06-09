import { Counter } from "../../Counter";
import { useForm } from "../model/useForm";

import styles from "./ReviewForm.module.css";

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
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.form_group}>
        <span className={styles.label}>Имя</span>
        <input
          type="text"
          value={form.name}
          onChange={(event) => setName(event.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.form_group}>
        <span className={styles.label}>Текст</span>
        <input
          type="text"
          value={form.text}
          onChange={(event) => setText(event.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.form_group}>
        <span className={styles.label}>Рейтинг</span>
        <div className={styles.ratingContainer}>
          <Counter
            count={form.rating}
            onIncrement={incrementRating}
            onDecrement={decrementRating}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles.button_secondary} `}
          onClick={clearForm}
        >
          Очистить форму
        </button>
      </div>
    </form>
  );
};
