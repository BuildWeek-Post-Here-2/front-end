import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  signUpEmail: Yup.string()
    .email("Must be a valid email address.")
    .required("Email is Required"),
  signUpPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is Required"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),
});

export default signUpSchema;
