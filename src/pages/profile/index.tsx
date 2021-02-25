import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";

const query = `
query repoInfo($login: String = "hinagawa") {
    user(login: $login) {
    name,
    login,
    avatarUrl
    
}
}`;
const newQuery = gql(query);

function Profile() {
  const { data, loading } = useQuery(newQuery);
  console.log(loading);
  return (
    <div>
      <Header />
      {loading ? (
        <RingLoader size={150} />
      ) : (
        <div>
          <h1>UserInfo</h1>
          {data.user.login}
          <img src={data.user.avatarUrl}></img>
        </div>
      )}
    </div>
  );
}

export default Profile;
