import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import signUpSchema from "./signUpSchema";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const initialSignUpFormValues = {
  signUpUsername: "",
  signUpPassword: "",
  confirmPassword: "",
};
const initialSignUpFormErrors = {
  signUpUsername: "",
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

  let history = useHistory();
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
      username: signUpFormValues.signUpUsername.trim(),
      password: signUpFormValues.signUpPassword.trim(),
    };
    console.log(signUpUser);

    axios
      .post(
        "https://posthere-backend.herokuapp.com/api/auth/register",
        signUpUser
      )
      .then((res) => {
        console.log("SignUp", res);
        history.push("/login");
      })
      .catch((err) => {
        console.log("SignUp", err);
      });
  };
  useEffect(() => {
    signUpSchema.isValid(signUpFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [signUpFormValues]);

  return (
    <div>
      <nav>
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <h1>Signup</h1>

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
