import React from "react";
import { Route } from "react-router-dom";
import login from "../components/login";
import home from "../components/home";
import signup from "../components/signup"
// import Header from "../header";
import { PrivateRoute } from "../components/private";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/login" component={login} />
        <PrivateRoute exact path="/" component={home}/>
        <Route exact path="/signup" component={signup}/>
      </React.Fragment>
    );
  }
}

export default ReactRouter;
