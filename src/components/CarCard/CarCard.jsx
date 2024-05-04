import { useState } from "react";
import css from "./CarCard.module.css";
import { Icon } from "../Icon/Icon";
import { useCars } from "../../hooks/useCars";
import { CarFeatureList } from "../CarFeatureList/CarFeatureList";
import { Button } from "../Button/Button";
import Modal from "../Modal/Modal";
import { CarDetails } from "../CarDetails/CarDetails";
import { CarGallery } from "../CarGallery/CarGallery";
import { Price } from "../Price/Price";
import { Title } from "../Title/Title";
import { RatingWithReviews } from "../RatingWithReviews/RatingWithReviews";
import { Location } from "../Location/Location";

export const CarCard = ({ car }) => {
  const [showCarDetails, setShowCarDetails] = useState(false);
  const { favoriteCars, addCarToFavorite, removeCarFromFavorite } = useCars();

  const [isFavorite, setIsFavorite] = useState(() => {
    const idx = favoriteCars.findIndex(({ _id }) => car._id === _id);
    return idx === -1 ? false : true;
  });

  const { name, price, rating, location, description, gallery, reviews } = car;

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      addCarToFavorite(car);
    } else {
      removeCarFromFavorite(car._id);
    }
    setIsFavorite(!isFavorite);
  };

  const handleShowDetails = () => setShowCarDetails(!showCarDetails);

  return (
    <li className={css.item}>
      <CarGallery name={name} gallery={gallery} countToShow={1} />

      <div className={css.descrWrapper}>
        <div className={css.titleWrapper}>
          <Title title={name} short />
          <div className={css.priceWrapper}>
            <Price price={price} />
            <button
              className={css.favoriteBtn}
              type="button"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <Icon
                  iconName="icon-heart-red"
                  width="24"
                  height="24"
                  className="icon-red"
                />
              ) : (
                <Icon iconName="icon-heart-black" width="24" height="24" />
              )}
            </button>
          </div>
        </div>

        <div className={css.statsWrapper}>
          <RatingWithReviews rating={rating} reviews={reviews} />
          <Location location={location} />
        </div>

        <p className={css.description}>{description}</p>

        <div className={css.futureListWrapper}>
          <CarFeatureList car={car} shortView />
        </div>

        <Button onClick={handleShowDetails}>Show more</Button>

        {showCarDetails && (
          <Modal onClose={handleShowDetails}>
            <CarDetails onClose={handleShowDetails} />
          </Modal>
        )}
      </div>
    </li>
  );
};

// import { Rating, Star } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";

// const myStyles = {
//   itemShapes: Star,
//   activeFillColor: "#ffc531",
//   inactiveFillColor: "#f2f4f7",
// };

// <Rating
//   style={{ maxWidth: 96 }}
//   value={rating}
//   spaceBetween="small"
//   readOnly
//   itemStyles={myStyles}
// />;
