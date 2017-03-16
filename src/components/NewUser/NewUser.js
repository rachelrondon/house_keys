import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from "react-router";
import { browserHistory } from 'react-router';

class NewUser extends Component {
    constructor(props) {
      console.log(props);
      super(props);

      this.state = {
        user: {
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password_digest: ''
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
    console.log(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

<<<<<<< HEAD
    fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify({
        firstname: this.state.user.first_name,
        lastname: this.state.user.last_name,
=======
    fetch(`http://localhost:8000/users`, {
      method: 'POST',
      body: JSON.stringify({
        first_name: this.state.user.first_name,
        last_name: this.state.user.last_name,
>>>>>>> 7299249c626db5d4699cca53322bb3aee204bcdf
        username: this.state.user.username,
        email: this.state.user.email,
        password_digest: this.state.user.password_digest
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
                <input name="first_name" placeholder="first name" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Last Name
              </div>
              <div className="">
                <input  name="last_name" placeholder="last name" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Username
              </div>
              <div className="">
                <input name="username" placeholder="username" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Email
              </div>
              <div className="">
                <input name="email" placeholder="email" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
<<<<<<< HEAD
                password
=======
                Password
>>>>>>> 7299249c626db5d4699cca53322bb3aee204bcdf
              </div>
              <div className="">
                <input name="password_digest" placeholder="password" onChange={this.handleChange.bind(this)}></input>
              </div>
              <button href="/dashboard" type="submit">Submit</button>
            </form>
          </nav>
        </div>
      )
    }
}

export default NewUser;
