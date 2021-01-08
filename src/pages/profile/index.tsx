import React from "react";
import "./index.scss";
import UserInfo from "../../features/user-info";
import Header from "../../features/header";

const Profile: React.FunctionComponent = () => {
  return (
    <div className="profile">
      <UserInfo />
      <Header />
    </div>
  );
};

export default Profile;
