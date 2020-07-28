import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import signUpSchema from "./signUpSchema";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import Posts from "../Posts.jsx";
import "./signUp.css";

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
  const [disabled, setDisabled] = useState(initialDisabled);
  // const [posts, setPosts] = useState([]);

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
  };
  useEffect(() => {
    signUpSchema.isValid(signUpFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [signUpFormValues]);
  // useEffect(() => {
  //   axios
  //     .get("https://reqres.in/api/users")
  //     .then((res) => {
  //       setPosts([...posts, res.data.data]);
  //       console.log(res.data.data);
  //     })
  //     .catch((error) => {
  //       debugger;
  //     });
  // }, [setPosts]);
  return (
    <div>
      <header>
        <nav>
          <Link to="/Login">
            <h3>Login</h3>
          </Link>
        </nav>
      </header>
      <SignUpForm
        values={signUpFormValues}
        onSubmit={signUpOnSubmit}
        onInputChange={signUpOnInputChange}
        disabled={disabled}
        formErrors={signUpFormErrors}
      />
      {/* <Posts posts={posts} /> */}
    </div>
  );
}

export default SignUp;
