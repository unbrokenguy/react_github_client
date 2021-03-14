import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import List from "../repo-info";
import { repositories } from "../../apollo/repositories/repositories";

type Props = {
  count: number;
  username: string;
};

const newQuery = gql(repositories);

const RepositoriesList = (props: Props) => {
  const { username, count } = props;

  const { data, loading } = useQuery(newQuery, {
    variables: {
      owner: username,
      count: count,
    },
  });

  return (
    <div>
      {loading ? (
        <RingLoader size={150} />
      ) : (
        <div>
          {count !== 0 ? (
            <List
              nodes={data.user.repositories.nodes}
              count={data.user.repositories.totalCount}
            />
          ) : (
            <h1>No repositories</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default RepositoriesList;
