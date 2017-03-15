import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from "react-router";
import { browserHistory } from 'react-router';

class NewUser extends Component {
    constructor(props) {
      super(props);

      this.state = {
        user: {
          firstname: '',
          lastname: '',
          email: '',
          username: ''
        }
      };
    }

  handleChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    let newState = update(this.state, {
      user: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    })

    this.setState(newState);
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://myapi-profstream.herokuapp.com/api/e52818/persons', {
      method: 'POST',
      body: JSON.stringify({
        firstname: this.state.user.firstname,
        lastname: this.state.user.lastname,
        email: this.state.user.email,
        username: this.state.user.username
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(() => {
      browserHistory.push('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
  }

    render(){
      return(
        <div>
          <nav>
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit.bind(this)} className="">
              <div className="">
                First Name
              </div>
              <div className="">
                <input name="firstname" placeholder="first name" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Last Name
              </div>
              <div className="">
                <input  name="lastname" placeholder="last name" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Email
              </div>
              <div className="">
                <input name="email" placeholder="email" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Username
              </div>
              <div className="">
                <input name="username" placeholder="username" onChange={this.handleChange.bind(this)}></input>
              </div>
              {/* <div className="">
                Password
              </div>
              <div className="">
                <input placeholder="password"></input>
              </div> */}
              <button href="/dashboard" type="submit">Submit</button>
            </form>
          </nav>
        </div>
      )
    }
}

export default NewUser;
