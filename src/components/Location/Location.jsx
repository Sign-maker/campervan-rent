import { Icon } from "../Icon/Icon";
import css from "./Location.module.css";

export const Location = ({ location }) => {
  const reverseLocation = (location) =>
    location.split(",").reverse().join(", ").trimStart();

  return (
    <div className={css.locationWrapper}>
      <Icon iconName="icon-map-pin" width="16" height="16" />
      <span className={css.locationDescr}>{reverseLocation(location)}</span>
    </div>
  );
};
