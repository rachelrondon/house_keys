import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import update from 'react-addons-update';


class NewPostRoommate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roommate: {
          title: '',
          email: '',
          gender: '',
          smoker: '',
          sleep: '',
          dishes: '',
          toilet_paper: '',
          age: '',
          wallet: ''
      }
    };
  }

  componentWillMount() {
    if (!localStorage.getItem('token')) {
        browserHistory.push('/login');
    }
  }

handleChange(event) {
  console.log(event.target.value)
  let newState = update(this.state, {
    roommate: {
      $merge: {
        [event.target.name]: event.target.value
      }
    }
  })
  this.setState(newState);
}

handleSubmit(event) {
  event.preventDefault();

  fetch('http://localhost:8000/roommates/new', {
    method: 'POST',
    body: JSON.stringify({
      roommate: this.state.roommate
    }),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(() => {
    browserHistory.push('/dashboard');
  })
  .catch((err) => {
  });
}

  render(){
    return(
      <div>
        <nav>
          <h2 className="">Add Roommate</h2>
        </nav>

        <div className="collection">
          <Link className="collection-item" to="/dashboard">Back to Home</Link>
        </div>

        <form onSubmit={this.handleSubmit.bind(this)} className="">
          <div className="">
            Title
          </div>
          <div>
            <input type="text" name="title" placeholder="title" onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className="">
            Email
          </div>
          <div className="">
            <input name="email" type="text" placeholder="Email" onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <h3>Gender</h3>
            <select name="gender" onChange={this.handleChange.bind(this)}>
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
          <h3>Smoke?</h3>
          <select name="smoker" onChange={this.handleChange.bind(this)}>
            <option value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <h3>Sleep</h3>
          <select name="sleep" onChange={this.handleChange.bind(this)}>
            <option value=""></option>
            <option value="Before 10pm">Before 10pm</option>
            <option value="Around 10pm">Around 10pm</option>
            <option value="After Midnight">After Midnight</option>
          </select>
        </div>
        <div>
          <h3>Dishes</h3>
          <select name="dishes" onChange={this.handleChange.bind(this)}>
            <option value=""></option>
            <option value="After Every Meal">After Every Meal</option>
            <option value="Everyday">Everyday</option>
            <option value="When the sink is full">When the sink is full</option>
            <option value="What are dishes?!">What are dishes?!</option>
          </select>
        </div>
        <div>
          <h3>Toilet Paper</h3>
          <select name="toilet_paper" onChange={this.handleChange.bind(this)}>
            <option value=""></option>
            <option value="Scotts">Scotts</option>
            <option value="Charmin">Charmin</option>
            <option value="Generic">Generic</option>
          </select>
        </div>
        <div>
          <h3>Age</h3>
          <select name="age" onChange={this.handleChange.bind(this)}>
            <option value=""></option>
            <option value="21 - 30">21 - 30</option>
            <option value="31 - 40">31 - 40</option>
            <option value="41+">41+</option>
          </select>
        </div>
        <div>
          <h3>Wallet</h3>
          <select name="wallet" onChange={this.handleChange.bind(this)}>
            <option value=""></option>
            <option value="$800 - $1000">$800 - $1000</option>
            <option value="$1001 - $1500">$1001 - $1500</option>
            <option value="$1501 - $2000">$1501 - $2000</option>
            <option value="$2000+">$2000+</option>
          </select>
        </div>
        <button href="/dashboard" type="submit">Submit</button>
      </form>
      </div>
    )
  }
  }

  export default NewPostRoommate;
