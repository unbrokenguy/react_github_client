import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import { query } from "../../apollo/user/query";
import { css } from "@emotion/react";

const newQuery = gql(query);

const override = css`
  position: absolute;
  top: 30%;
  left:40%;
`;

function Profile() {
  const { data, loading } = useQuery(newQuery);
  return (
    <div>
      <Header />
      {loading ? (
        <RingLoader size={150} css="override" />
      ) : (P
        <div>
          <h1>UserInfo</h1>
          {data.user.login}
          <img
            src={data.user.avatarUrl}
            className="rounded-circle img_align"
          ></img>
        </div>
      )}
    </div>
  );
}

export default Profile;
