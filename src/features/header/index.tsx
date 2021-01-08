import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Auth } from "..";

const Header: React.FunctionComponent = () => {
  const { isAuth } = Auth.useAuth();
  return (
    <div className="default-header">
      <input
        id="global_search"
        className="search_input form-control"
        placeholder="Global searching"
      />
      <div className="rectangle"></div>
      <h1 className="logo_header">GC</h1>
      {!isAuth && (
        <Link to="/login" className="p_header">
          Sign in
        </Link>
      )}
      {isAuth && (
        <Link to="/profile" className="p_header">
          username
        </Link>
      )}
    </div>
  );
};

export default Header;
