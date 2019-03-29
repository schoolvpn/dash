import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from '../services/user.service';
// import axios from 'axios'
import '../css/main.css'

class SignIn extends Component {
  constructor () {
    super()

    userService.logout();

    this.state = {
      email: '',
      password: '',
      submitted: false,
      loading: false,
      error: '',
      success: false
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
          this.setState({ success: true })
          //console.log(data)
          userService.me()
            .then( 
              data =>{
                //console.log(data)
                if (data.role === 'user') {
                  const { from } = this.props.location.state || { from: { pathname: "/user/dashboard" } };
                  this.props.history.push(from);
                }
                else if (data.role === 'admin') {
                  const { from } = this.props.location.state || { from: { pathname: "/admin/dashboard" } };
                  this.props.history.push(from);
                }
                else {
                  const { from } = this.props.location.state || { from: { pathname: "/login" } };
                  this.props.history.push(from);
                }
              }
            )
        },
        error => {this.setState({ error, loading: false })}   
      )
  }

  render() {
    const { email, password, submitted, error, success, loading } = this.state;
    return (
      <div className="AppSign">
        <div className="row SignMain">
          <div className="col SignInLeft">
              <form onSubmit={this.handleSubmit}>
                  {success &&
                    <div className={'alert alert-success'}>Login Success</div>
                  }
                  {error &&
                    <div className={'alert alert-danger'}>{error}</div>
                  }
                  <h2 className="SignPageTitle">Sign In</h2>
                  <div className="form-group">
                      <label className="SignLabel" for="exampleInputEmail1">Email:</label>
                      {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/> */}
                      <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange}/>
                      {submitted && !email &&
                        <div className="help-block">Email is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <label className="SignLabel" for="exampleInputPassword1">Password:</label>
                      <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}/>
                      {submitted && !password &&
                        <div className="help-block">Password is required</div>
                      }
                      {/* <input type="password" className="form-control" id="exampleInputPassword1" placeholder=""/> */}
                  </div>
                  <div className="SignDivButton">
                    <button type="submit" className="btn btn-primary SignButton">
                    {!loading && "Login" }
                    {loading && <i class="fas fa-spinner fa-spin"></i>}
                    </button>
                  </div>
                  <small className="SignBottomSmall">
                      Dont Have a Account? 
                      <Link className="SignLink" to="/signup">Register</Link>
                      Here.
                  </small>
                  <small className="SignBottomSmall">
                      Forgot Your Password?
                      <Link className="SignLink" to="/reset">Reset</Link>
                      it Here.
                  </small>
              </form>
          </div>
          <div className="col SignInRight">
              <h1 className="SignMainTitle">
                  iNcizzle Inc.
              </h1>
          </div>
        </div>
        {/* <br/>
        <br/>
        <div className="col-md-6 col-md-offset-3 test">
          {success &&
            <div className={'alert alert-success'}>Login Success</div>
          }
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
        </div> */}
      </div>
    );
  }
}

export default SignIn;
