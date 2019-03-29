import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from '../services/user.service';
// import axios from 'axios'
import '../css/main.css'

class Reset extends Component {
  constructor () {
    super()

    userService.logout();

    this.state = {
      email: '',
      submitted: false,
      loading: false,
      error: '',
      message: '',
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
    const { email } = this.state;

    if (!(email)) {
      return;
    }

    this.setState({ loading: true });

    userService.reset(email)
      .then(
        data => {
          this.setState({ error: false })
          this.setState({ success: true })
          this.setState({ message: data.message })
          this.setState({ loading: false })
          //console.log(data)
          // const { from } = this.props.location.state || { from: { pathname: "/signin" } };
          // this.props.history.push(from);
        },
        error => this.setState({ error, loading: false })      
      )
  }

  render() {
    const { email, submitted, error, success, loading, message } = this.state;
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
                    <div className={'alert alert-success'}>{message}</div>
                  }
                  {error &&
                    <div className={'alert alert-danger'}>{error}</div>
                  }
                  <h2 className="SignPageTitle">Reset Password</h2>
                  <div className="form-group">
                      <label className="SignLabel" for="exampleInputEmail1">Email:</label>
                      {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/> */}
                      <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange}/>
                      {submitted && !email &&
                        <div className="help-block">Email is required</div>
                      }
                  </div>
                  <div className="SignDivButton">
                      <button type="submit" className="btn btn-primary SignButton">
                      {!loading && "Reset" }
                      {loading && <i class="fas fa-spinner fa-spin"></i>}
                      </button>
                  </div>
                  <small className="SignBottomSmall">
                      Know your Password Already? 
                      <Link className="SignLink" to="/signin">Login</Link>
                      Here.
                  </small>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;
