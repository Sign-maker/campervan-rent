import icons from "../../assets/images/icons.svg";
import css from "./Icon.module.css";

export const Icon = ({
  iconName,
  width = "20",
  height = "20",
  className = "icon-main",
}) => {
  return (
    <svg width={width} height={height} className={css[className]}>
      <use xlinkHref={`${icons}#${iconName}`} />
    </svg>
  );
};
