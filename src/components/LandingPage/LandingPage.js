import React, { Component } from "react";
import { Link } from "react-router";

class LandingPage extends Component {
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <div>
        <img src=""></img>
        <Link to='/login'> Login</Link>
        <Link to='/user/new' type="button"> SignUp</Link>
      </div>
    )
  }
}

export default LandingPage;
