import React, { useState } from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import List from "../../features/repo-info";
import { RepoNode } from "../../features/types";
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
