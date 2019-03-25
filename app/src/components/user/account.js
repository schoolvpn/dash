import React, { Component } from "react";
// import '../css/reverselookup.css'
import Userheader from "./userheader";
import { userService } from '../../services/user.service';


class UserAccount extends Component {
    constructor(props) {
        super(props);
        // var account = JSON.parse(localStorage.getItem("Account"))
        this.state = {
            submitted: false,
            loading: false,
            success: false,
            firstname: '',
            lastname: '',
            picture: '',
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

        this.setState({ submitted: true })
        const { firstname, lastname, picture } = this.state;
        if (firstname === "") {
            this.setState({ firstname: undefined })
            return
        }
        else if (lastname === "") {
            this.setState({ lastname: undefined })
            return
        }
        else if (picture === "") {
            this.setState({ picture: undefined })
            return
        }
        else {
            this.setState({ loading: true })

            userService.useraccountedit(firstname, lastname, picture)
                .then(
                    data => {
                        this.setState({ error: false })
                        this.setState({ success: true })
                        console.log(data)
                    },
                    error => { this.setState({ error, loading: false }) }
                )
        }
    }


    render() {
        const { firstname, lastname, picture, success, error } = this.state;
        return (
            <div className='App'>
                <Userheader />
                <div className="col-md-6 col-md-offset-3 test">
                    {success &&
                        <div className={'alert alert-success'}>Account Successfully Eddited</div>
                    }
                    {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    }
                    <h2>Profile</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="firstname">Firstname:</label>
                            <input type="text" className="form-control" name="firstname" value={firstname} onChange={this.handleChange} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="lastname">lastname:</label>
                            <input type="lastname" className="form-control" name="lastname" value={lastname} onChange={this.handleChange} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="picture">Profile Picture:</label>
                            <input type="picture" className="form-control" name="picture" value={picture} onChange={this.handleChange} />
                        </div>
                        <div className='button'>
                            <button className="loginbtn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserAccount;
