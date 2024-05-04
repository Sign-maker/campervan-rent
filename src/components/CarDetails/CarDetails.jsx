import css from "./CarDetails.module.css";
import { IoCloseSharp } from "react-icons/io5";

export const CarDetails = ({ onClose }) => {
  return (
    <div className={css.wrapper}>
      CarDetails
      <button type="button" onClick={onClose} className={css.closeBtn}>
        <IoCloseSharp size="32" className={css.closeIcon} />
      </button>
    </div>
  );
};
