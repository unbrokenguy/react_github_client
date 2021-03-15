import React, { useState } from "react";
import "./index.scss";
import SearchRepo from "../../features/search-repo";
import SearchUser from "../../features/search-user";
import Header from "../../features/header";

const Search = () => {
  return (
    <div>
      <Header />
      <div className="posit">
        <div>
          <SearchRepo />
          <SearchUser />
        </div>
      </div>
    </div>
  );
};

export default Search;
