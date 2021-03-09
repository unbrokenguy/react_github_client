import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import {
  repositories,
  repositoriesCount,
} from "../../apollo/repositories/repositories";

type Props = RouteComponentProps<{
  username: string;
  repository: string;
}>;

const newQuery = gql(repositoriesCount);
const newQuery1 = gql(repositories);

const RepositoriesPage = (props: Props) => {
  const { username } = props.match.params;

  const { data, loading } = useQuery(newQuery, {
    variables: {
      owner: username,
    },
  });

  // const { data, loading } = useQuery(newQuery, {
  //   variables: {
  //     owner: username,
  //     count: data.user.repositories.totalCount
  //   },
  // });

  return (
    <div>
      <Header />
      {loading ? (
        <RingLoader size={150} />
      ) : (
        <ul className="list-group">{/* {Object.keys()}  */}</ul>
      )}
    </div>
  );
};

export default RepositoriesPage;
