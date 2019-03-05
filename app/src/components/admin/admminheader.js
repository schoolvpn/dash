import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../../css/header.css';
// import { userService } from './services/user.service';


class Adminheader extends Component {

  render() {
    return (
      <div>
        <nav className="navbar">
            <NavLink className="navbar-brand" to="/admin/dashboard">
              Home
            </NavLink>
            
            <NavLink className="nav-item" to="/login">
              Logout
            </NavLink>

            <NavLink className="nav-item" to="/admin/users">
              Users
            </NavLink>
            {/* <a class="nav-item" href="/mbtogb"> MB to GB </a> */}
        </nav>
      </div>
    );
  }
}

export default Adminheader;
