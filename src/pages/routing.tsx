import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignInPage from "./sign-in";
import Profile from "./profile";
import RepositoryPage from "./repository";
import RepositoriesPage from "./repositories";

const Routing: React.FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" component={SignInPage} exact />
      <Route path="/profile" component={Profile} exact />
      <Route
        path="/repository/:username/:repository"
        component={RepositoryPage}
        exact
      />
      <Route
        path="/:username/repositories"
        component={RepositoriesPage}
        exact
      />
    </Router>
  );
};

export default Routing;
