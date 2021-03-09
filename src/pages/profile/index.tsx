import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import { repoInfo } from "../../apollo/user/query";

const newQuery = gql(repoInfo);
function Profile() {
  const { data, loading } = useQuery(newQuery);
  return (
    <div>
      <Header />
      {loading ? (
        <RingLoader size={150} css="override" />
      ) : (
        <div>
          <img
            src={data.user.avatarUrl}
            className="rounded-circle img_align"
          ></img>
          <div className="div_align">
            <h1 className="user_login">{data.user.login}</h1>
            <h1 className="user_followers">
              {data.user.followers.totalCount + " followers"}
            </h1>
            <h1 className="user_following">
              {data.user.following.totalCount + " following"}
            </h1>
          </div>
          <div className="user_search">
            <input
              className="form-control form-control"
              id="userSearch"
              placeholder="Find a repository..."
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
