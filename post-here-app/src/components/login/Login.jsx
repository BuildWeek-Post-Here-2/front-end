import React, { useState, useEffect } from "react";
import SignInForm from "./loginForms/SignInForm.jsx";
import SignUpForm from "./loginForms/SignUpForm.jsx";
import signInSchema from "./validation/signInSchema.js";
import signUpSchema from "./validation/signUpSchema.js";
import * as Yup from "yup";

const initialSignInFormValues = {
  signInEmail: "",
  signInPassword: "",
};
const initialSignInFormErrors = {
  signInEmail: "",
  signInPassword: "",
};

const initialDisabled = true;
export default function Login() {
  const [signInFormValues, setSignInFormValues] = useState(
    initialSignInFormValues
  );
  const [signInFormErrors, setSignInFormErrors] = useState(
    initialSignInFormErrors
  );

  const [disabled, setDisabled] = useState(initialDisabled);

  const signInOnInputChange = (evt) => {
    const { name, value } = evt.target;
    Yup.reach(signInSchema, name)
      .validate(value)
      .then(() => {
        setSignInFormErrors({
          ...signInFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setSignInFormErrors({
          ...signInFormErrors,
          [name]: err.errors[0],
        });
      });
    setSignInFormValues({
      ...signInFormValues,
      [name]: value,
    });
  };

  useEffect(() => {
    signInSchema.isValid(signInFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [signInFormValues]);

  const signInOnSubmit = (evt) => {
    evt.preventDefault();

    const signInUser = {
      email: signInFormValues.signInEmail.trim(),
      password: signInFormValues.signInPassword.trim(),
    };
    console.log(signInUser);
  };

  return (
    <div>
      <SignInForm
        values={signInFormValues}
        onSubmit={signInOnSubmit}
        onInputChange={signInOnInputChange}
        disabled={disabled}
        formErrors={signInFormErrors}
      />
    </div>
  );
}
