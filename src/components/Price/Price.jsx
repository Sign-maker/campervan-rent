import css from "./Price.module.css";

export const Price = ({ price }) => {
  return <span className={css.price}>€{price.toFixed(2)}</span>;
};
