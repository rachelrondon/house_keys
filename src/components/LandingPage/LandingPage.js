import React, { Component } from "react";
import { Link } from "react-router";

class LandingPage extends Component {
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <div id="landing-page-div">
        <div id="landing-page-logo"></div>
        <div id="landing-page-links">
          <div id="login-in-link">
           <Link to='/login'>Login</Link>
          </div>
          <div id="sign-up-link">
          <Link to='/user/new' className="sign-up"> Sign Up</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
