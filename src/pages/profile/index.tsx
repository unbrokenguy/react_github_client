import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";

const query = `
query repoInfo($login: String = "hinagawa") {
    user(login: $login) {
    name,
    login,
    avatarUrl
    
}
}`;
const newQuery = gql(query);

const Profile = () => {
  const { data } = useQuery(newQuery);
  console.log(newQuery);
  return (
    <div>
      <Header />
      <h1>UserInfo</h1>
      <img src={data.user.avatarUrl}></img>
    </div>
  );
};

export default Profile;
