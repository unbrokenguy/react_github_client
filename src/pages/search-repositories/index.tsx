import React, { useState } from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import List from "../../features/repo-info";
import { RepoNode } from "../../features/types";
import SearchRepositoriesList from "../../features/repo-search";
import { searchRepositoriesCount } from "../../apollo/repositories/repositories";
import SearchBar from "../../features/search/search-bar";

const SearchRepository = () => {
  return (
    <div>
      <div className="container searchApp">
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchRepository;
