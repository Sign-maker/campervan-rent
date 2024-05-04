import { CarFeatureItem } from "../CarFeatureItem/CarFeatureItem";
import css from "./CarFeatureList.module.css";

const SHORT_VEIW_NUM = 6;

export const CarFeatureList = ({ car, shortView = false }) => {
  const { adults, transmission, engine, details } = car;

  const detailsCollection = [
    { name: "adult", value: adults, iconName: "icon-users" },
    { name: "transmission", value: transmission, iconName: "icon-gearbox" },
    { name: "engine", value: engine, iconName: "icon-petrol" },
    { name: "kitchen", value: details.kitchen, iconName: "icon-kitchen" },
    { name: "bed", value: details.beds, iconName: "icon-bed" },
    { name: "AC", value: details.airConditioner, iconName: "icon-ac" },
    { name: "CD", value: details.CD, iconName: "icon-cd" },
    { name: "radio", value: details.radio, iconName: "icon-radio" },
    { name: "hob", value: details.hob, iconName: "icon-hob" },
    { name: "toilet", value: details.toilet, iconName: "icon-toilet" },
    { name: "shower", value: details.shower, iconName: "icon-shower" },
    { name: "freezer", value: details.freezer, iconName: "icon-freezer" },
    { name: "gas", value: details.gas, iconName: "icon-gas" },
    { name: "water", value: details.water, iconName: "icon-water" },
    { name: "microwave", value: details.microwave, iconName: "icon-microwave" },
  ];

  const detailsToRender = shortView
    ? detailsCollection.slice(0, SHORT_VEIW_NUM)
    : detailsCollection;

  return (
    <ul className={css.featureList}>
      {detailsToRender.map(({ name, value, iconName }, idx) =>
        value ? (
          <CarFeatureItem
            name={name}
            value={value}
            iconName={iconName}
            key={idx}
          />
        ) : null
      )}
    </ul>
  );
};
