import './Signin.css';
import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../logo-no-bottom.png';
import { useHistory } from "react-router-dom";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password)
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:3001/user/authentication/signin',
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
            });
            if(res.data.status === 201) {

            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className='signin-page'>
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className='title'>
                    Login
                </div>
                <div className='signup-area'>
                    <form className='card-form' onSubmit={this.handleSubmit}>
                        <label className='form-element white-text'>
                            Username:
                            <input
                                className='black-text'
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange} />
                        </label>
                        <label className='form-element white-text'>
                            Password:
                            <input
                                className='black-text'
                                type="text"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange} />
                        </label>
                        <input className='button' type="submit" value="Login" />
                    </form>
                    <Link to={'/signup'} className="play">Don't have an account? Sign up</Link>
                </div>
            </div>
        );
    }
}

export default Signin;