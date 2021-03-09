import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
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

  console.log(data);

  return (
    <div>
      {/* <Header /> */}
      {loading ? (
        <RingLoader size={150} />
      ) : (
        <div>
          {/* <ul className="list-group">{Object.keys()} </ul> */}
          {data.user.repositories.totalCount}
        </div>
      )}
    </div>
  );
};

export default RepositoriesList;
