import { ErrorMessage, useField } from "formik";
import DatePicker from "react-datepicker";
import css from "../BookForm/BookForm.module.css";
import { subDays } from "date-fns";
import { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale/en-GB";
import icons from "../../assets/images/icons.svg";

registerLocale("en-GB", enGB);

export const DatePickerField = (props) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div className={css.inputContainer}>
      <label className={css.label} htmlFor={field.name}></label>

      {console.log(field, meta, helpers)}
      <DatePicker
        className={`${css.input} ${
          meta.error && meta.touched ? css.inputError : ""
        }`}
        {...field}
        {...props}
        selected={field.value ?? null}
        onChange={(date) => helpers.setValue(date)}
        dateFormat="dd/MM/yyyy"
        minDate={subDays(new Date(), 0)}
        useWeekdaysShort={true}
        locale="en-GB"
        showIcon
        icon={
          <svg>
            <use xlinkHref={`${icons}#icon-calendar`} />
          </svg>
        }
        toggleCalendarOnIconClick
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className={css.errorMessage}
      />
    </div>
  );
};
