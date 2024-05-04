import { useCars } from "../../hooks/useCars";
import { CarCard } from "../CarCard/CarCard";
import css from "./CarList.module.css";

export const CarList = ({ showFavorites = false }) => {
  const { cars, favoriteCars } = useCars();

  const carsToRender = showFavorites ? favoriteCars : cars;

  return (
    <>
      <ul className={css.list}>
        {carsToRender.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </ul>
    </>
  );
};
