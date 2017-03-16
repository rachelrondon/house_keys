import React, { Component } from "react";

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

        fetch("http://localhost:8000/users/new", {
            method: "POST",
            body: JSON.stringify(this.state)
        })
        .then((results) => {
            results.json().then((jwt) => {
                window.localStorage.setItem("token", jwt.token);
                browserHistory.push("/restricted");
            });
        })
        .catch((err) => {
            alert("Not authenticated!");
        });
    }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
                <div>Email</div>
                <div>
                    <input name="email" onChange={this.handleChange.bind(this)} type="email" />
                </div>
                <div>Password</div>
                <div>
                    <input name="password" onChange={this.handleChange.bind(this)} type="password" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
      </div>
    )
  }
}

export default Login;
