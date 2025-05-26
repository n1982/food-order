import type { FC } from "react";
import type { IReview } from "../../../types/app.types";
import Review from "../../Review";

interface IReviewListProps {
  reviews: IReview[];
}

const ReviewList: FC<IReviewListProps> = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(({ id, text }) => (
          <Review key={id} text={text} />
        ))}
      </ul>
    </>
  );
};

export default ReviewList;
