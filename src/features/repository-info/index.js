import React from "react";
import "./index.scss";
import { Query } from "react-apollo";
import GET_REPOSITORY from "../../components/repository";

function RepoInfo() {
  return (
    <Query query={GET_REPOSITORY}>
      {({ loading, error, data }) => {
        return <div>ES</div>;
      }}
    </Query>
  );
}

export default RepoInfo;
