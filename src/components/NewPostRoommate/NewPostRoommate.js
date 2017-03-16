import React, { Component } from "react";
import { Link } from "react-router";

class NewPost extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <input placeholder="first name"></input>
        <input placeholder="last name"></input>
        <input placeholder="About Me"></input>
      </div>
    )
  }
  }

  export default NewPost;
