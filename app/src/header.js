import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './css/header.css';
// import { userService } from './services/user.service';


class Header extends Component {

  render() {
    return (
      // <div style={this.header}>
      //   <NavLink exact to="/" activeStyle={this.active}>
      //     Home
      //   </NavLink>
      //   <NavLink to="/reverselookup" activeStyle={this.active}>
      //     Posts
      //   </NavLink>
      // </div>
      <div>
        <nav className="navbar">
            <NavLink className="navbar-brand" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-item" to="/login">
              Logout
            </NavLink>
            {/* <a class="nav-item" href="/mbtogb"> MB to GB </a> */}
        </nav>
      </div>
    );
  }
}

export default Header;
