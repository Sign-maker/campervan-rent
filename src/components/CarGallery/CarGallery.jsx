import css from "./CarGallery.module.css";

export const CarGallery = ({ name, gallery, countToShow }) => {
  const galleryToRender = gallery.slice(0, countToShow);

  return (
    <ul className={css.gallery}>
      {galleryToRender.map((imgPath, idx) => (
        <li key={idx} className={css.imgWrapper}>
          <img src={imgPath} loading="lazy" alt={name} />
        </li>
      ))}
    </ul>
  );
};
