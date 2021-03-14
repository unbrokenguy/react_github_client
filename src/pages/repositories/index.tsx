import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import RepositoriesList from "../../features/repo-list";
import { repositoriesCount } from "../../apollo/repositories/repositories";

type Props = RouteComponentProps<{
  username: string;
  repository: string;
}>;

const newQuery = gql(repositoriesCount);

const RepositoriesPage = (props: Props) => {
  const { username } = props.match.params;

  const { data, loading } = useQuery(newQuery, {
    variables: {
      owner: username,
    },
  });

  return (
    <div>
      <Header />
      {loading ? (
        <div className="loader_position">
          <RingLoader size={150} />
        </div>
      ) : (
        <div>
          <RepositoriesList
            count={data.user.repositories.totalCount}
            username={data.user.login}
          />
        </div>
      )}
    </div>
  );
};

export default RepositoriesPage;
