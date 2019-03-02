import React, { Component } from "react";
// import '../css/reverselookup.css'
import { userService } from '../../services/user.service';
import Header from "../../header";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    userService.adminusers()
      .then(data => {
          console.log(data)
          for (var user in data) {
            this.setState({users: [...this.state.users, 
              <tr>
                <th scope="row">{data[user].id}</th>
                <td>{data[user].createdAt}</td>
                <td>{data[user].lastloginAt || "null"}</td>
                <td>{data[user].updatedAt || "null"}</td>
                <td>{data[user].email}</td>
                <td>{data[user].firstname}</td>
                <td>{data[user].lastname}</td>
                <td>{data[user].role}</td>
                <td>{data[user].password}</td>
              </tr>
            ]})
          }
      })

  }

  render() {     
    const { users } = this.state;
    return (
      <div className='App'>
        <Header/>
        <h1>These Are All User Accounts</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Last Login At</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Email</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Role</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
