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
//     userService.verify(this.authCode)
//         .then(data => {
//             this.setState({message: data.message})
//         },
//         error => this.setState({error: error})
//         )

//   }
    componentDidMount () {
        const { authCode } = this.props.match.params
        userService.verify(authCode)
        .then(data => {
            this.setState({message: data.message})
        })
    }

  render() {
    const { message } = this.state;
    return (
      <div className="AppVerify">
        <h1 className="VerifyText">{message}</h1>
      </div>
    );
  }
}

export default Verify;
