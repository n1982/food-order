import { useReducer } from "react";

interface IReviewForm {
  name: string;
  text: string;
  rating: number;
}

const DEFAULT_FORM_VALUE: IReviewForm = {
  name: "",
  text: "",
  rating: 5,
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_TEXT"; payload: string }
  | { type: "SET_RATING"; payload: number }
  | { type: "CLEAR_FORM"; payload?: null };

const SET_NAME_ACTION: Action["type"] = "SET_NAME";
const SET_TEXT_ACTION: Action["type"] = "SET_TEXT";
const SET_RATING_ACTION: Action["type"] = "SET_RATING";
const CLEAR_FORM_ACTION: Action["type"] = "CLEAR_FORM";

const reducer = (state: IReviewForm, { type, payload }: Action) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_RATING_ACTION:
      return { ...state, rating: payload };
    case CLEAR_FORM_ACTION:
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setName = (name: string) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };
  const setText = (text: string) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };

  const incrementRating = (rating: number) => {
    dispatch({ type: SET_RATING_ACTION, payload: Math.min(rating, 5) });
  };
  const decrementRating = (rating: number) => {
    dispatch({ type: SET_RATING_ACTION, payload: Math.max(rating, 0) });
  };
  const clearForm = () => {
    dispatch({ type: CLEAR_FORM_ACTION });
  };

  return {
    form,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
  };
};
