import React, { useState } from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import List from "../../features/repo-info";
import { RepoNode } from "../../features/types";
import SearchRepositoriesList from "../../features/search-repo-list";
import { searchRepositoriesCount } from "../../apollo/repositories/repositories";
import SearchRepo from "../../features/search-repo";

const Search = () => {
  return (
    <div>
      <div className="container searchApp">
        <SearchRepo />
      </div>
    </div>
  );
};

export default Search;
