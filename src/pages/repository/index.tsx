import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import { repo } from "../../apollo/repo-info";

type Props = RouteComponentProps<{
  username: string;
  repository: string;
}>;

const newQuery = gql(repo);

const RepositoryPage = (props: Props) => {
  const { username, repository } = props.match.params;

  const { data, loading } = useQuery(newQuery, {
    variables: {
      name: repository,
      owner: username,
    },
  });
  return (
    <div>
      <Header />
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="border-div">
          <h1 className="h1">{data.repository.name}</h1>
          <hr></hr>
          {data.repository.object.entries.map((node) => (
            <ul className="ul" key={node.id}>
              <li className="li">{node.name}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepositoryPage;
