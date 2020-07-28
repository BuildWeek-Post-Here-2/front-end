import React, { useState, useEffect } from "react";
import SignInForm from "./loginForms/SignInForm.jsx";
import SignUpForm from "./loginForms/SignUpForm.jsx";
import signInSchema from "./validation/signInSchema.js";
import signUpSchema from "./validation/signUpSchema.js";
import * as Yup from "yup";
import { Link } from "react-router-dom"

const initialSignInFormValues = {
  signInEmail: "",
  signInPassword: "",
};
const initialSignInFormErrors = {
  signInEmail: "",
  signInPassword: "",
};

const initialSignUpFormValues = {
  signUpEmail: "",
  signUpPassword: "",
  confirmPassword: "",
};
const initialSignUpFormErrors = {
  signUpEmail: "",
  signUpPassword: "",
  confirmPassword: "",
};
const initialDisabled = true;
export default function Login() {
  const [signInFormValues, setSignInFormValues] = useState(
    initialSignInFormValues
  );
  const [signInFormErrors, setSignInFormErrors] = useState(
    initialSignInFormErrors
  );
  const [signUpFormValues, setSignUpFormValues] = useState(
    initialSignUpFormValues
  );
  const [signUpFormErrors, setSignUpFormErrors] = useState(
    initialSignUpFormErrors
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
  const signInOnSubmit = (evt) => {
    evt.preventDefault();

    const signInUser = {
      email: signInFormValues.signInEmail.trim(),
      password: signInFormValues.signInPassword.trim(),
    };
    console.log(signInUser);
  };
  const signUpOnSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit");
    if (signUpFormValues.signUpPassword === signUpFormValues.confirmPassword) {
      const signUpUser = {
        email: signUpFormValues.signUpEmail.trim(),
        password: signUpFormValues.signUpPassword.trim(),
      };
      console.log(signUpUser);
    }
  };
  useEffect(() => {
    signUpSchema.isValid(signUpFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [signUpFormValues]);

  return (
    <div>
      <SignUpForm
        values={signInFormValues}
        onSubmit={signUpOnSubmit}
        onInputChange={signUpOnInputChange}
        disabled={disabled}
        formErrors={signUpFormErrors}
      />
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
