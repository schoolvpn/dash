import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from '../services/user.service';
// import axios from 'axios'
import '../css/main.css'

class ResetChange extends Component {
  constructor() {
    super()

    userService.logout();

    this.state = {
      message: '',
      password: '',
      submitted: false,
      loading: false,
      error: '',
      success: false,
      resetCode: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { resetCode } = this.props.match.params
    this.setState({ resetCode: resetCode })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { resetCode, password } = this.state;

    if (!(password)) {
      return;
    }

    // if (cpassword == password) {
    //   return;
    // }

    this.setState({ loading: true });

    userService.resetChange(resetCode, password)
      .then(
        data => {
          this.setState({ error: false })
          this.setState({ success: true })
          this.setState({ message: data.message })
          this.setState({ loading: false })
          //console.log(data)
        },
        error => { this.setState({ error, loading: false }) }
      )
  }

  render() {
    const { password, submitted, error, success, loading, message } = this.state;
    return (
      <div className="AppSign">
        <div className="row SignMain">
          <div className="col SignInLeft">
            <form onSubmit={this.handleSubmit}>
              {success &&
                <div className={'alert alert-success'}>{message}</div>
              }
              {error &&
                <div className={'alert alert-danger'}>{error}</div>
              }
              <h2 className="SignPageTitle">Password Reset</h2>
              <div className="form-group">
                <label className="SignLabel" for="exampleInputPassword1">New Password:</label>
                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                {submitted && !password &&
                  <div className="help-block">New Password is required</div>
                }
                {/* <input type="password" className="form-control" id="exampleInputPassword1" placeholder=""/> */}
              </div>
              <div className="SignDivButton">
                <button type="submit" className="btn btn-primary SignButton">
                  {!loading && "Reset Password"}
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
          <div className="col SignInRight">
            <h1 className="SignMainTitle">
              iNcizzle Inc.
              </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetChange;
