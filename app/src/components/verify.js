import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from '../services/user.service';
// import axios from 'axios'
import '../css/main.css'

class Verify extends Component {
  constructor () {
    super()
    this.state = {
      error: '',
      success: false,
      message: '',
      authCode: ''
    };
  }  
    componentDidMount () {
        const { authCode } = this.props.match.params
        userService.verify(authCode)
        .then(data => {
            this.setState({message: data.message})
            setTimeout(function() {
                const { from } = this.props.location.state || { from: { pathname: "/signin" } };
                this.props.history.push(from);
            }.bind(this), 3000)
        })
    }

  render() {
    const { message } = this.state;
    return (
      <div className="AppVerify">
        <h1 className="VerifyText">{message}</h1>
        <p className="VerifyTextNotice">Redirecting in 3 Seconds</p>
      </div>
    );
  }
}

export default Verify;
