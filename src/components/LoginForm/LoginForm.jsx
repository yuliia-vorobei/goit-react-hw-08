import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useId } from "react";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import "yup-phone-lite";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label} htmlFor={passwordFieldId}>
            Password
          </label>
          <Field
            className={css.field}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
