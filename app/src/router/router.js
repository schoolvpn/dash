import React from "react";
import { Route, Switch } from "react-router-dom";
import login from "../components/login";
import home from "../components/home";
import signup from "../components/signup"
import notfound from "../components/error/notfound"
// import Header from "../header";
import { PrivateRoute } from "../components/private";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={login}/>
          <PrivateRoute exact path="/" component={home}/>
          <Route exact path="/signup" component={signup}/>
          <Route component={notfound}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default ReactRouter;
