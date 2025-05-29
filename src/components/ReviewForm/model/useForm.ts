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
  | { type: "INCREMENT_RATING" }
  | { type: "DECREMENT_RATING" }
  | { type: "CLEAR_FORM" };

const SET_NAME_ACTION: Action["type"] = "SET_NAME";
const SET_TEXT_ACTION: Action["type"] = "SET_TEXT";
const INCREMENT_RATING_ACTION: Action["type"] = "INCREMENT_RATING";
const DECREMENT_RATING_ACTION: Action["type"] = "DECREMENT_RATING";
const CLEAR_FORM_ACTION: Action["type"] = "CLEAR_FORM";

const reducer = (state: IReviewForm, action: Action) => {
  switch (action.type) {
    case SET_NAME_ACTION:
      return { ...state, name: action.payload };
    case SET_TEXT_ACTION:
      return { ...state, text: action.payload };
    case INCREMENT_RATING_ACTION:
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    case DECREMENT_RATING_ACTION:
      return { ...state, rating: Math.max(state.rating - 1, 1) };
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

  const incrementRating = () => {
    dispatch({
      type: INCREMENT_RATING_ACTION,
    });
  };
  const decrementRating = () => {
    dispatch({
      type: DECREMENT_RATING_ACTION,
    });
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
