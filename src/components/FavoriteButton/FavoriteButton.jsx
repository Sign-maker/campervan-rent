import { Icon } from "../Icon/Icon";
import css from "./FavoriteButton.module.css";

export const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button className={css.favoriteBtn} type="button" onClick={onClick}>
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
  );
};
