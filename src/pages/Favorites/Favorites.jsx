import { CarList } from "../../components/CarList/CarList";
import { useCars } from "../../hooks/useCars";

const Favorites = () => {
  const { favoriteCars } = useCars();
  return (
    <section>
      <h2 className="visually-hidden">Favorite Cars</h2>
      {favoriteCars.length > 0 ? <CarList showFavorites /> : <p>No data</p>}
    </section>
  );
};

export default Favorites;
