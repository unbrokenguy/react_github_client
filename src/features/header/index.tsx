import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="default-header">
      <Link to="/search">
        <h1 className="logo_header">GC</h1>
      </Link>
      <div className="rectangle"></div>

      {
        <Link to="/profile" className="p_header">
          {username}
        </Link>
      }
    </div>
  );
};

export default Header;
