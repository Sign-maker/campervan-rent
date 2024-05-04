import { Icon } from "../Icon/Icon";
import css from "./CarFeatureItem.module.css";

export const CarFeatureItem = ({ name, value, iconName }) => {
  return (
    <li className={css.featuteItem}>
      <Icon iconName={iconName} width="20" height="20" />
      {typeof value === "number" ? (
        <span>
          {value > 1
            ? `${value} ${name}s`
            : `${name.charAt(0).toUpperCase() + name.slice(1)}`}
        </span>
      ) : (
        <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
      )}
    </li>
  );
};
