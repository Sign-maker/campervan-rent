import css from "./Title.module.css";

export const Title = ({ title, short = false }) => {
  return <h3 className={`${css.title} ${short && css.short}`}>{title}</h3>;
};
