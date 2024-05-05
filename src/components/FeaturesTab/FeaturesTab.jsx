import { BookForm } from "../BookForm/BookForm";
import { CarFeatureList } from "../CarFeatureList/CarFeatureList";
import { VehicleDetails } from "../VehicleDetails/VehicleDetails";
import css from "./FeaturesTab.module.css";

export const FeaturesTab = ({ car }) => {
  return (
    <div className={css.tabWrapper}>
      <div className={css.specWrapper}>
        <div className={css.futureListWrapper}>
          <CarFeatureList car={car} />
        </div>
        <div className={css.vehicleDetailsWrapper}>
          <VehicleDetails car={car} />
        </div>
      </div>
      <div className={css.bookFormWrapper}>
        <BookForm />
      </div>
    </div>
  );
};
