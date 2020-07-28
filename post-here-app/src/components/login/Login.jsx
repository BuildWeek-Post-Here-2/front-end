import React, { useState, useEffect } from "react";
import SignInForm from "./loginForms/SignInForm.jsx";
import signInSchema from "./validation/signInSchema.js";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth"
import { useHistory } from "react-router-dom";

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

  let history = useHistory();

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
    // console.log(signInUser);

    // axiosWithAuth()
    // .post("", signInUser)
    // .then(res => {
    //   localStorage.setItem('token', res.data.token)
    // history.push("/dashboard")
    // })
    // .catch(err => {
    //   debugger
    //   console.log(err)
    // })
  };

  return (
    <div>
        <nav>
          <div className="nav-links">
          <Link to="/">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>
        <h1>Login</h1>

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
