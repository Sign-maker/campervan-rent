import css from "./VehicleDetails.module.css";
export const VehicleDetails = ({ car }) => {
  const { form, length, width, height, tank, consumption } = car;

  const detailsObj = { form, length, width, height, tank, consumption };
  const entries = Object.entries(detailsObj);
  const itemsToRender = [];

  for (let [key, value] of entries) {
    itemsToRender.push({ name: key, value });
  }

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        {itemsToRender.map(({ name, value }, idx) => (
          <li key={idx} className={css.item}>
            <span>{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</span>
            <span>{`${value.charAt(0).toUpperCase() + value.slice(1)}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
