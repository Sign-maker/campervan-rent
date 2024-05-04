import { FaStar } from "react-icons/fa6";
import css from "./RatingWithReviews.module.css";

export const RatingWithReviews = ({ rating, reviews }) => {
  return (
    <div className={css.raitingWrapper}>
      <FaStar className={css.star} size={16} />
      <span className={css.ratingDescr}>
        {`${rating}(${reviews.length} Review${
          reviews.length === 1 ? "" : "s"
        })`}
      </span>
    </div>
  );
};
