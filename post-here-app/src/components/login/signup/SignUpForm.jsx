import React from "react";

export default function SignUpForm(props) {
  const { values, onSubmit, onInputChange, disabled, formErrors } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="signUpEmail"
          type="email"
          placeholder="Email"
          onChange={onInputChange}
          value={values.email}
        />
        <div>{formErrors.signUpEmail}</div>
      </div>

      <div>
        <input
          name="signUpPassword"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={onInputChange}
        />
        <div>{formErrors.signUpPassword}</div>
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={onInputChange}
        />
        <div>{formErrors.confirmPassword}</div>
      </div>
      <div>
        <button disabled={disabled}>Sign Up</button>
      </div>
    </form>
  );
}
