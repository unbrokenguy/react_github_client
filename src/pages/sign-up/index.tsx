import React from "react";
import "./index.scss";

const SignUpPage: React.FunctionComponent = () => {
  return (
    <div className="sign-up-page">
      <form>
        <div className="mb-3">
          <label className="label">Username or email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="InputEmail"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            id="InputPassword"
          />
          <button type="button" className="btn btn-success">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
