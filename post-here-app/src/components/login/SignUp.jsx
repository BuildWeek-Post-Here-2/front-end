import React, { useState, useEffect } from "react";
import SignUpForm from "./loginForms/SignUpForm";
import signUpSchema from "./validation/signUpSchema";
import * as Yup from "yup";

const initialSignUpFormValues = {
  signUpEmail: "",
  signUpPassword: "",
};
const initialSignUpFormErrors = {
  signUpEmail: "",
  signUpPassword: "",
  confirmPassword: "",
};
const initialDisabled = true;
function SignUp() {
  const [signUpFormValues, setSignUpFormValues] = useState(
    initialSignUpFormValues
  );
  const [signUpFormErrors, setSignUpFormErrors] = useState(
    initialSignUpFormErrors
  );
  const [disabled, setDisabled] = useState(initialDisabled);

  const signUpOnInputChange = (evt) => {
    const { name, value } = evt.target;
    Yup.reach(signUpSchema, name)
      .validate(value)
      .then(() => {
        setSignUpFormErrors({
          ...signUpFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setSignUpFormErrors({
          ...signUpFormErrors,
          [name]: err.errors[0],
        });
      });
    setSignUpFormValues({
      ...signUpFormValues,
      [name]: value,
    });
  };
  const signUpOnSubmit = (evt) => {
    evt.preventDefault();

    const signUpUser = {
      email: signUpFormValues.signUpEmail.trim(),
      password: signUpFormValues.signUpPassword.trim(),
    };

    console.log(signUpUser);
  };
  useEffect(() => {
    signUpSchema.isValid(signUpFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [signUpFormValues]);
  return (
    <div>
      <SignUpForm
        values={signUpFormValues}
        onSubmit={signUpOnSubmit}
        onInputChange={signUpOnInputChange}
        disabled={disabled}
        formErrors={signUpFormErrors}
      />
    </div>
  );
}

export default SignUp;
