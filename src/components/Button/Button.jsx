import css from "./Button.module.css";

export const Button = ({
  styleType = "common",
  loading = false,
  onClick,
  children,
}) => {
  return (
    <button
      disabled={loading}
      className={styleType === "loadMore" ? css.loadMoreButton : css.button}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
