import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  signInEmail: Yup.string()
    .email("Must be a valid email address.")
    .required("Email is Required"),
  signInPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is Required"),
});

export default signInSchema;
