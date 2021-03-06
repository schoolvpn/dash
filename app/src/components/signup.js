import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from '../services/user.service';
// import axios from 'axios'
import '../css/main.css'

class SignUp extends Component {
  constructor () {
    super()

    userService.logout();

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      submitted: false,
      loading: false,
      error: '',
      success: false,
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
    const { firstname, lastname, email, password } = this.state;

    if (!(firstname && lastname && email && password)) {
      return;
    }

    this.setState({ loading: true });

    userService.register(firstname, lastname, email, password)
      .then(
        data => {
          this.setState({ error: false })
          this.setState({ success: true })
          //console.log(data)
          const { from } = this.props.location.state || { from: { pathname: "/signin" } };
          this.props.history.push(from);
        },
        error => this.setState({ error, loading: false })      
      )
  }

  render() {
    const { firstname, lastname, email, password, submitted, error, success, loading } = this.state;
    return (
      <div className="AppSign">
        <div className="row SignMain">
          <div className="col SignUpLeft">
              <h1 className="SignMainTitle">
                  iNcizzle Inc.
              </h1>
          </div>
          <div className="col SignUpRight">
              <form onSubmit={this.handleSubmit}>
                  {success &&
                    <div className={'alert alert-success'}>Login Success</div>
                  }
                  {error &&
                    <div className={'alert alert-danger'}>{error}</div>
                  }
                  <h2 className="SignPageTitle">Sign Up</h2>
                  <div className="form-group">
                      <label className="SignLabel" for="exampleInputEmail1">Firstname:</label>
                      {/* <input type="firstname" class="form-control" id="firstname" placeholder=""/> */}
                      <input type="text" className="form-control" name="firstname" value={firstname} onChange={this.handleChange}/>
                      {submitted && !firstname &&
                        <div className="help-block">Firstname is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <label className="SignLabel" for="exampleInputPassword1">Lastname:</label>
                      {/* <input type="lastname" class="form-control" id="lastname" placeholder=""/> */}
                      <input type="text" className="form-control" name="lastname" value={lastname} onChange={this.handleChange}/>
                      {submitted && !lastname &&
                        <div className="help-block">Lastname is required</div>
                      }
                  </div>
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
                      {/* <input type="password" class="form-control" id="exampleInputPassword1" placeholder=""/> */}
                      <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}/>
                      {submitted && !password &&
                        <div className="help-block">Password is required</div>
                      }
                  </div>
                  <div className="SignDivButton">
                      <button type="submit" className="btn btn-primary SignButton">
                      {!loading && "Register" }
                      {loading && <i class="fas fa-spinner fa-spin"></i>}
                      </button>
                  </div>
                  <small className="SignBottomSmall">
                      Already have an Account? 
                      <Link className="SignLink" to="/signin">Login</Link>
                      Here.
                  </small>
                  <small className="SignBottomSmall">
                      Forgot Your Password?
                      <Link className="SignLink" to="/reset">Reset</Link>
                      it Here.
                  </small>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
