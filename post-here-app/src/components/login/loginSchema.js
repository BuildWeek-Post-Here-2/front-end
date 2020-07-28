import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  loginEmail: Yup.string()
    .email("Must be a valid email address.")
    .required("Email is Required"),
  loginPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is Required"),
});

export default loginSchema;
