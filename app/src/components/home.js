import React, { Component } from "react";
// import '../css/reverselookup.css'
import Header from "../header";


class Posts extends Component {
  constructor(props) {
    super(props);
    var account = JSON.parse(localStorage.getItem("Account"))
    this.state = {
      firstname: account.firstname,
      lastname: account.lastname,
      email: '',
      role: '',
      id: ''
    };
  }



  render() {
    const { firstname, lastname } = this.state;
    return (
      <div className='App'>
        <Header/>
        <h1>Welcome Back {firstname} {lastname}</h1>
        {/* <h1>Reverse Lookup</h1>
        <div>
          
          <form onSubmit={this.handleSubmit}>
            <h2>Enter IP: </h2>
            <label>
              <input className="text" type="text" value={this.state.value} onChange={this.handleChange} />
            </label> 
            <button className="submit">Submit</button>
          </form>
        </div>
        <div className="data">
          <p>IP: {this.state.ip}</p>
          <p>Country: {this.state.country}</p>
          <p>Province/State: {this.state.regionName}</p>
          <p>City: {this.state.city}</p>
          <p>Timezone: {this.state.timezone}</p>
        </div> */}
      </div>
    );
  }
}

export default Posts;
