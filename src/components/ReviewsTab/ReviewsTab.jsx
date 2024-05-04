import { Rating, Star } from "@smastrom/react-rating";
import css from "./ReviewsTab.module.css";
import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffc531",
  inactiveFillColor: "#f2f4f7",
};

export const ReviewsTab = ({ reviews }) => {
  return (
    <div className={css.tabWrapper}>
      <div className={css.reviewsWrapper}>
        <ul className={css.reviewsList}>
          {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
            <li className={css.reviewItem} key={idx}>
              <div className={css.logoNameRatingWrapper}>
                <div className={css.logo}>
                  {reviewer_name.charAt(0).toUpperCase()}
                </div>
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
          ))}
        </ul>
      </div>
    </div>
  );
};
