import css from "./Button.module.css";

export const Button = ({
  styleType = "common",
  loading = false,
  onClick,
  children,
  type = "button",
}) => {
  return (
    <button
      disabled={loading}
      className={styleType !== "common" ? css[styleType] : css.button}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
