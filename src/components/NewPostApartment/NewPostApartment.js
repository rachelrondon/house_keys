import React, { Component } from "react";
import { Link } from "react-router";

class NewPostApartment extends Component {
    constructor(props) {
      super(props)
    }

    render(){
      return(
        <div>
          <h1>Add A New Post</h1>
          <input placeholder="address"></input>
          <input placeholder="rent"></input>
          <input placeholder="description"></input>
          <input placeholder="photo"></input>
        </div>
      )
    }
}

export default NewPostApartment;
