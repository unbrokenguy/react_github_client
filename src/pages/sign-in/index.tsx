import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const SignUpPage: React.FunctionComponent = () => {
  return (
    <div>
      <h1 className="header_align">Github Client</h1>
      <div className="sign_in_page">
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
            <input type="checkbox" />
            <label className="checkbox_align">Remember me</label>
            <Link to="/auth" className="link_align">
              Sign in
            </Link>
            <button type="button" className="btn btn-success">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
