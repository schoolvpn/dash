import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../../css/header.css';
// import { userService } from './services/user.service';


class Userheader extends Component {
  constructor() {
    super()
    var account = JSON.parse(localStorage.getItem("Account"))
    this.state = {
      firstname: account.firstname
    };
  }

  render() {
    const { firstname } = this.state;
    return (
      <div>
        <nav className="navbar">
          <NavLink className="navbar-brand" to="/user/dashboard">
            Home
            </NavLink>
          {/* <NavLink className="nav-item" to="/login">
              Logout
            </NavLink> */}
          <li class="nav-item dropdown"> {/* eslint-disable-next-line */}
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {firstname}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="drop-item" to="/user/profile">
                Profile
              </NavLink>
              <NavLink className="drop-item" to="/login">
                Logout
              </NavLink>
            </div>
          </li>
        </nav>
      </div>
    );
  }
}

export default Userheader;
