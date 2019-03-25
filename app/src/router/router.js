import React from "react";
import { Route, Switch, Redirect, } from "react-router-dom";
import signin from "../components/signin";
import useraccount from "../components/user/account"
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
          <Redirect exact from='/' to='/signin'/>
          <Route exact path="/signin" component={signin}/>
          <PrivateRoute exact path="/user/dashboard" component={userhome}/>
          <PrivateRoute exact path="/admin/dashboard" component={adminhome}/>
          <PrivateRoute exact path="/admin/users" component={adminusers}/>
          <PrivateRoute exact path="/user/profile" component={useraccount}/>
          <Route exact path="/signup" component={signup}/>
          <Route component={notfound}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default ReactRouter;
