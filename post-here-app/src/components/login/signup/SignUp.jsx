import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import signUpSchema from "./signUpSchema";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
      email: signUpFormValues.signUpEmail.trim(),
      password: signUpFormValues.signUpPassword.trim(),
    };
    console.log(signUpUser);

    axios
      .post("https://posthere-backend.herokuapp.com/api/auth/register", signUpUser)
      .then(res =>{
        console.log('SignUp', res)
        history.push("/login")
      })
      .catch(err => {
        console.log('SignUp', err)
      })
  };
  useEffect(() => {
    signUpSchema.isValid(signUpFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [signUpFormValues]);

  return (
    <div>
      <nav>
        <div className="nav-links">
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        </div>
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
