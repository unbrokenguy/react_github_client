import React, { useState } from "react";
import "./index.scss";
import SearchRepo from "../../features/search-repo";
import SearchUser from "../../features/search-user";

const Search = () => {
  return (
    <div>
      <div className="container searchApp">
        <SearchRepo />
        <SearchUser />
      </div>
    </div>
  );
};

export default Search;
