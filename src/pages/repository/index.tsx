import React from "react";
import "./index.scss";
import RepoInfo from "../../features/repository-info";

const RepositoryPage: React.FunctionComponent = () => {
  return (
    <div className="repository-page">
      <RepoInfo />
    </div>
  );
};

export default RepositoryPage;
