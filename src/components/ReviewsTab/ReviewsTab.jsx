import css from "./ReviewsTab.module.css";
import "@smastrom/react-rating/style.css";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { BookForm } from "../BookForm/BookForm";

export const ReviewsTab = ({ reviews }) => {
  return (
    <div className={css.tabWrapper}>
      <div className={css.reviewsWrapper}>
        <ReviewsList reviews={reviews} />
      </div>
      <div className={css.bookFormWrapper}>
        <BookForm />
      </div>
    </div>
  );
};
