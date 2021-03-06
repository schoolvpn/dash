import React, { Component } from "react";
// import '../css/reverselookup.css'
import Adminheader from "./admminheader";


class AdminHome extends Component {
  constructor(props) {
    super(props);
    var account = JSON.parse(localStorage.getItem("Account"))
    this.state = {
      firstname: account.firstname,
      lastname: account.lastname,
      email: account.email,
      role: account.role,
      id: account._id
    };
  }



  render() {
    const { firstname, lastname, email, role, id } = this.state;
    return (
      <div className='App'>
        <Adminheader/>
        <h1>Welcome Back {firstname} {lastname}</h1>
        <h2>This is a Admin Page</h2>
        <p>
          Here is some Account info...
          <br/>
          Role: {role}
          <br/>
          ID: {id}
          <br/>
          Email: {email}
        </p>
      </div>
    );
  }
}

export default AdminHome;
