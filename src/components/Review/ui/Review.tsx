import type { FC } from "react";

import styles from "./Review.module.css";

interface ReviewProps {
  text: string;
}
export const Review: FC<ReviewProps> = ({ text }) => {
  return <li className={styles.review}>{text}</li>;
};
