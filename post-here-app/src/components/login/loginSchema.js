import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Name must be at least 3 characters long.")
    .required("Name is Required"),
  loginPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is Required"),
});

export default loginSchema;
