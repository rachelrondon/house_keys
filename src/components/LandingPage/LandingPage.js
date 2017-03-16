import React, { Component } from "react";
import { Link } from "react-router";

class LandingPage extends Component {
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <div>
        <div>
          <img src=""></img>
        </div>
        <div id="login-in-link">
        <Link to='/login'>Login</Link>
        </div>
        <div id="sign-up-link">
        <Link to='/user/new' type="button"> SignUp</Link>
        </div>
      </div>
    )
  }
}

export default LandingPage;
