import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./home";
import SignInPage from "./sign-in";
import SignUpPage from "./sign-up";
import Profile from "./profile";
import RepositoryPage from "./repository";

const Routing = () => (
    <Router>
        <Route path="/" component={HomePage} exact/>
        {/* other pages don't work */}
        <Route path="/registr" component={SignUpPage} exact/>
        <Route path="/auth" component={SignInPage} exact/>
        <Route path="/profile" component={Profile} exact/>
        <Route path="/repository" component={RepositoryPage} exact/>
    </Router>
)

export default Routing;