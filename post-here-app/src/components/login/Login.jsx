import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm.jsx";
import loginSchema from "./loginSchema.js";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const initialLoginFormValues = {
  loginEmail: "",
  loginPassword: "",
};
const initialLoginFormErrors = {
  loginEmail: "",
  loginPassword: "",
};

const initialDisabled = true;
export default function Login() {
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const [loginFormErrors, setLoginFormErrors] = useState(
    initialLoginFormErrors
  );

  const [disabled, setDisabled] = useState(initialDisabled);

  const loginOnInputChange = (evt) => {
    const { name, value } = evt.target;
    Yup.reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: err.errors[0],
        });
      });
    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
  };

  useEffect(() => {
    loginSchema.isValid(loginFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [loginFormValues]);

  const loginOnSubmit = (evt) => {
    evt.preventDefault();

    const loginUser = {
      email: loginFormValues.loginEmail.trim(),
      password: loginFormValues.loginPassword.trim(),
    };
    console.log(loginUser);
  };

  return (
    <div>
      <LoginForm
        values={loginFormValues}
        onSubmit={loginOnSubmit}
        onInputChange={loginOnInputChange}
        disabled={disabled}
        formErrors={loginFormErrors}
      />
    </div>
  );
}
