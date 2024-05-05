import { Rating, Star } from "@smastrom/react-rating";
import css from "./ReviewsItem.module.css";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffc531",
  inactiveFillColor: "#f2f4f7",
};

export const ReviewsItem = ({ reviewer_name, reviewer_rating, comment }) => {
  return (
    <li className={css.reviewItem}>
      <div className={css.logoNameRatingWrapper}>
        <div className={css.logo}>{reviewer_name.charAt(0).toUpperCase()}</div>
        <div className={css.nameRatingWrapper}>
          <h3 className={css.name}>{reviewer_name}</h3>
          <Rating
            style={{ maxWidth: 96 }}
            value={reviewer_rating}
            spaceBetween="small"
            readOnly
            itemStyles={myStyles}
          />
        </div>
      </div>
      <p className={css.reviewText}>{comment}</p>
    </li>
  );
};
