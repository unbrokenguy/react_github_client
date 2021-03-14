import React from "react";
import gql from "graphql-tag";
import "./index.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Header from "../../features/header";
import RingLoader from "react-spinners/RingLoader";
import { profileInfo } from "../../apollo/user/query";

import "firebase/auth";

import history from "../../history";

const profileQuery = gql(profileInfo);

function Profile() {
  const signOutHandler = async () => {
    try {
      localStorage.clear();
      history.push("/");
      location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  const { data, loading } = useQuery(profileQuery);
  return (
    <div>
      <Header />
      {loading ? (
        <div className="loader_position">
          <RingLoader size={150} />
        </div>
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
          <Link to="hinagawa/repositories" className="repo-button btn btn-dark">
            View repositories
          </Link>
          <button onClick={signOutHandler} className="sign-out btn btn-dark">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
