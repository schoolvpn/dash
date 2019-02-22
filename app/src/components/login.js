import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from '../services/user.service';
// import axios from 'axios'
import '../css/login.css'

class App extends Component {
  constructor () {
    super()

    userService.logout();

    this.state = {
      email: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;

    if (!(email && password)) {
      return;
    }

    this.setState({ loading: true });

    userService.login(email, password)
      .then(
        data => {
          this.setState({ error: false})
          console.log(data)
          userService.me()
            .then( data =>{
                const { from } = this.props.location.state || { from: { pathname: "/" } };
                this.props.history.push(from);
              }
            )
        },
        error => this.setState({ error, loading: false })      
      )
  }

  render() {
    const { email, password, submitted, error } = this.state;
    return (
      <div className="AppRegister">
        <div className="col-md-6 col-md-offset-3">
          {error &&
            <div className={'alert alert-danger'}>{error}</div>
          }
          <h2>Login Page</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange}/>
              {submitted && !email &&
                <div className="help-block">Email is required</div>
              }
            </div>
            <br/>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}/>
              {submitted && !password &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className='button'>
              <button className="loginbtn">Login</button>
            </div>
          </form>
            <div className='button'>
              <Link className="buttonalt" to="/signup">Register</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
