import React from "react";

export default function LoginForm(props) {
  const { values, onSubmit, onInputChange, disabled, formErrors } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="loginEmail"
          type="email"
          placeholder="Email"
          onChange={onInputChange}
          value={values.email}
        />
        <div>{formErrors.loginEmail}</div>
      </div>

      <div>
        <input
          name="loginPassword"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={onInputChange}
        />
        <div>{formErrors.loginPassword}</div>
      </div>
      <div>
        <button disabled={disabled}>Login</button>
      </div>
    </form>
  );
}
