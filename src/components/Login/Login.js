import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <div>
        <input placeholder="username"></input>
        <input placeholder="password"></input>
      </div>
    )
  }
}

export default Login;
