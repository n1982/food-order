import type { FC } from "react";

interface ReviewProps {
  text: string;
}
const Review: FC<ReviewProps> = ({ text }) => {
  return <li>{text}</li>;
};

export default Review;
