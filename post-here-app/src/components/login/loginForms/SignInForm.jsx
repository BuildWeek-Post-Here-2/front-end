import React from "react";

export default function SignInForm(props) {
  const { values, onSubmit, onInputChange, disabled, formErrors } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="signInEmail"
          type="email"
          placeholder="Email"
          onChange={onInputChange}
          value={values.email}
        />
        <div>{formErrors.signInEmail}</div>
      </div>

      <div>
        <input
          name="signInPassword"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={onInputChange}
        />
        <div>{formErrors.signInPassword}</div>
      </div>
      <div>
        <button disabled={disabled}>Sign In</button>
      </div>
    </form>
  );
}
