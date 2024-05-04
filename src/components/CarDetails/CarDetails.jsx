import { CarGallery } from "../CarGallery/CarGallery";
import { Description } from "../Description/Description";
import { Location } from "../Location/Location";
import { Price } from "../Price/Price";
import { RatingWithReviews } from "../RatingWithReviews/RatingWithReviews";
import { Title } from "../Title/Title";
import css from "./CarDetails.module.css";
import { IoCloseSharp } from "react-icons/io5";

export const CarDetails = ({ car, onClose }) => {
  const { name, price, rating, location, description, gallery, reviews } = car;
  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <Title title={name} />
      </div>

      <div className={css.statsWrapper}>
        <RatingWithReviews rating={rating} reviews={reviews} />
        <Location location={location} />
      </div>

      <div className={css.priceWrapper}>
        <Price price={price} />
      </div>

      <div className={css.galleryWrapper}>
        <CarGallery name={name} gallery={gallery} countToShow={3} />
      </div>

      <div className={css.descrWrapper}>
        <Description description={description} />
      </div>

      <button type="button" onClick={onClose} className={css.closeBtn}>
        <IoCloseSharp size="32" className={css.closeIcon} />
      </button>
    </div>
  );
};
