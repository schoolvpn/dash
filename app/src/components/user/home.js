import React, { Component } from "react";
// import '../css/reverselookup.css'
import Header from "../../header";


class Posts extends Component {
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
    const { firstname, lastname, role, email, id } = this.state;
    return (
      <div className='App'>
        <Header/>
        <h1>Welcome Back {firstname} {lastname}</h1>
        <h2>This is a User Page</h2>
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

export default Posts;
