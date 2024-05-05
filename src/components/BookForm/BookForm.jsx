import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./BookForm.module.css";
import { Button } from "../Button/Button";
import "react-datepicker/dist/react-datepicker.css";

export const BookForm = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    bookingDate: Yup.date()

      .typeError("please enter a valid date dd.MM.yyyy")
      .required("Date  is required")
      .min(yesterday, "Date is too early"),

    comment: Yup.string().max(160, "Must be 160 characters or less"),
  });

  const initialValues = { name: "", email: "", bookingDate: "", comment: "" };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    window.location.reload();
  };

  return (
    <div className={css.formWrapper}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form autoComplete="off">
            <div className={css.inputsWrapper}>
              <div className={css.inputContainer}>
                <label className={css.label} htmlFor="name"></label>
                <Field
                  className={`${css.input} ${
                    formik.errors.name && formik.touched.name
                      ? css.inputError
                      : ""
                  }`}
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
              <div className={css.inputContainer}>
                <label className={css.label} htmlFor="email"></label>
                <Field
                  className={`${css.input} ${
                    formik.errors.email && formik.touched.email
                      ? css.inputError
                      : ""
                  }`}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
              <div className={css.inputContainer}>
                <label className={css.label} htmlFor="bookingDate"></label>

                <div className={css.fieldContainer}>
                  <Field
                    className={`${css.input} ${
                      formik.errors.bookingDate && formik.touched.bookingDate
                        ? css.inputError
                        : ""
                    }`}
                    type="date"
                    id="bookingDate"
                    name="bookingDate"
                    placeholder="Booking date"
                  />

                  {/* <div className={css.calendarBtn} type="button">
                    <Icon iconName="icon-calendar" />
                  </div> */}
                </div>

                <ErrorMessage
                  name="bookingDate"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
              <div className={css.inputContainer}>
                <label className={css.label} htmlFor="comment"></label>
                <Field
                  className={`${css.textarea} ${
                    formik.errors.comment && formik.touched.comment
                      ? css.inputError
                      : ""
                  }`}
                  as="textarea"
                  id="comment"
                  type="text"
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
            </div>
            <Button type="submit" styleType="submitButton">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
