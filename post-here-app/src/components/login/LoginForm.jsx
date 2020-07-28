import React from "react";
import styled from "styled-components";

export default function LoginForm(props) {
  const { values, onSubmit, onInputChange, disabled, formErrors } = props;

  const StyledForm = styled.div`
    .signUp {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    nav {
      display: flex;

      background-color: blueviolet;
    }
    h3 {
      text-decoration: none;
      color: blue;
      font-size: 3rem;
    }
    .formDiv {
      margin-top: 2rem;
      height: 8rem;
    }
    input {
      height: 4rem;
      width: 40rem;
      font-size: 2rem;
      background-color: cornsilk;
    }
    .formErrors {
      font-size: 2rem;
    }
    button {
      height: 4rem;
      width: 12rem;
      margin-top: 1rem;
      font-weight: bold;
    }
  `;

  return (
    <StyledForm>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="formDiv">
            <input
              name="username"
              type="name"
              placeholder="Username"
              onChange={onInputChange}
              value={values.username}
            />
            <div className="formErrors">{formErrors.username}</div>
          </div>

          <div className="formDiv">
            <input
              name="loginPassword"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={onInputChange}
            />
            <div className="formErrors">{formErrors.loginPassword}</div>
          </div>
          <div className="formDiv">
            <button disabled={disabled}>Login</button>
          </div>
        </form>
      </div>
    </StyledForm>
  );
}
