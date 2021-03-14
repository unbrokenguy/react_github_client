import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { RouteComponentProps, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import { profileInfo } from "../../apollo/user";

type Props = RouteComponentProps<{
  username: string;
}>;

const newQuery = gql(profileInfo);

const UserPage = (props: Props) => {
  const { username } = props.match.params;

  const { data, loading } = useQuery(newQuery, {
    variables: {
      login: username,
    },
  });
  return (
    <div>
      {/* <Header /> */}
      {loading ? (
        <RingLoader size={150} />
      ) : (
        <div>
          {data !== undefined ? (
            <div>
              <h1>User</h1>
              {data.user.login}
            </div>
          ) : (
            <h1>User not found</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default UserPage;
