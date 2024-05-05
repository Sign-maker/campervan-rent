import { ReviewsItem } from "../ReviewsItem/ReviewsItem";
import css from "./ReviewsList.module.css";

export const ReviewsList = ({ reviews }) => {
  return (
    <ul className={css.reviewsList}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
        <ReviewsItem
          key={idx}
          reviewer_name={reviewer_name}
          reviewer_rating={reviewer_rating}
          comment={comment}
        />
      ))}
    </ul>
  );
};
