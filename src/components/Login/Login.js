import React, { Component } from "react";
import { Link } from "react-router";
import { Route, Router, browserHistory } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    };
  }

  handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:8000/users/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-type': 'application/json'
        }
    })
    .then((results) => {
      results.json().then((jwt) => {
        console.log('**',jwt.token);
        window.localStorage.setItem('token', jwt.token);
        browserHistory.push('/dashboard');
      });
    })
    .catch((err) => {
        alert('Not authenticated!');
    });
  }

  render(){
    return(
      <div id="login-page-div">
        <form onSubmit={this.handleSubmit.bind(this)}>

          <div id="login-in-info">
            <div id="login-page-logo"></div>
            <div id="email-input">
              <div>Email</div>
              <div>
                  <input name="email" onChange={this.handleChange.bind(this)} type="email" />
              </div>
            </div>
            <div id="password-input">
              <div>Password</div>
              <div>
                  <input name="password" onChange={this.handleChange.bind(this)} type="password" />
              </div>
            </div>
            <div id="login-button">
              <Link to="/dashboard" type="submit">Login</Link>
            </div>
        </div>
        </form>
      </div>
    )
  }
}

export default Login;
