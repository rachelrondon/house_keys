import React, { Component } from "react";
import { Link } from "react-router";
import { browserHistory } from 'react-router';
import update from 'react-addons-update';


class NewPostApartment extends Component {
    constructor(props) {
      super(props)

      this.state = {
        user: {
          firstname: '',
          lastname: '',
          email: '',
          username: ''
        },
        apartment: {
          address: '',
          description: '',
          picture: '',
          price: ''
        }
      };
    }

  componentDidMount() {
    fetch(`http://localhost:8000`, {
      method: "GET"
    })
    .then((results) => {
      results.json().then((user_data) => {
        this.setState({user: user_data});
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:8000`, {
      method: "POST",
      body: JSON.stringify({
        firstname: this.state.user.firstname,
        lastname: this.state.user.lastname,
        email: this.state.user.email,
        username: this.state.user.username
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      browserHistory.push("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleChange(event) {
    let newState = update(this.state, {
      apartment: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
  }

    render(){
      return(
        <div>
          <nav>
            <h2 className=""> Add Apartment</h2>
            <h2 className="">for {this.state.user.name}</h2>
            <form onSubmit={this.handleSubmit.bind(this)} className="">
              <div className="">
                Addres
              </div>
              <div className="">
                <input name="name" placeholder="Address" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Description
              </div>
              <div className="">
                <input  name="description" placeholder="description" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Image
              </div>
              <div className="">
                <input name="picture" placeholder="img" onChange={this.handleChange.bind(this)}></input>
              </div>
              <div className="">
                Price
              </div>
              <div className="">
                <input name="price" placeholder="rent" onChange={this.handleChange.bind(this)}></input>
              </div>
              <button href="/dashboard" type="submit">Submit</button>
            </form>
          </nav>
        </div>
      )
    }
}

export default NewPostApartment;
