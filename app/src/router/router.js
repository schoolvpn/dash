import React from "react";
import { Route, Switch, Redirect, } from "react-router-dom";
import login from "../components/login";
import userhome from "../components/user/home";
import adminhome from "../components/admin/home";
import adminusers from "../components/admin/users";
import signup from "../components/signup"
import notfound from "../components/error/notfound"
// import Header from "../header";
import { PrivateRoute } from "../components/private";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Redirect exact from='/' to='/login'/>
          <Route exact path="/login" component={login}/>
          <PrivateRoute exact path="/user/dashboard" component={userhome}/>
          <PrivateRoute exact path="/admin/dashboard" component={adminhome}/>
          <PrivateRoute exact path="/admin/users" component={adminusers}/>
          <Route exact path="/signup" component={signup}/>
          <Route component={notfound}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default ReactRouter;
