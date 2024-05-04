import css from "./Description.module.css";

export const Description = ({ description, short = false }) => {
  return (
    <p className={`${css.description} ${short && css.short}`}>{description}</p>
  );
};
