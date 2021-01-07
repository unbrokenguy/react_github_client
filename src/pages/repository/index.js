import React from "react";
import RepoInfo from "../../features/repository-info";
import "./index.scss";

function RepositoryPage() {
  // const props = [
  //   { id: 1, title: "repo", user: "User" },
  //   { id: 2, title: "react", user: "User1" },
  //   { id: 3, title: "name", user: "User2" },
  // ];
  //
  return (
    <div className="repository-page">
      <RepoInfo />
    </div>
  );
}

export default RepositoryPage;
