import { CarList } from "../../components/CarList/CarList";
import { Empty } from "../../components/Empty/Empty";
import { useCars } from "../../hooks/useCars";
import css from "./Favorites.module.css";

const Favorites = () => {
  const { favoriteCars } = useCars();
  return (
    <section className={css.contentSection}>
      <div className={css.catalog}>
        <h2 className="visually-hidden">Favorite Cars</h2>
        {favoriteCars.length > 0 ? <CarList showFavorites /> : <Empty />}
      </div>
    </section>
  );
};

export default Favorites;
