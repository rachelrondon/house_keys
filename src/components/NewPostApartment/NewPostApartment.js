import React, { Component } from "react";
import { Link } from "react-router";
import { browserHistory } from 'react-router';
import update from 'react-addons-update';

import GoogleMapsForm from '../Services/GoogleMapsForm';


const key = process.env.API_KEY;

class NewPostApartment extends Component {
    constructor(props) {
      super(props)
      this.state = {
        apartment: {
          title: '',
          address: '',
          rent: 500,
          description: '',
          photo: '',
          // email: '',
          user_id: 1
        },
        apartment: {},
        latLong: ''
      };
    }

  componentWillMount() {
    if (!localStorage.getItem('token')) {
        browserHistory.push('/login');
    }
  }

  // Google API geoCode fetch
  searchLatLong(location) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({ latlong: `${data.results[0].geometry.location.lat} ${data.results[0].geometry.location.lng}` })
      // console.log("latitude for the boys:", newTaco.results[0].geometry.location.lat);
      // console.log("where my tudes at?:", newTaco.results[0].geometry.location.lat);
    })
  };

  // submitting form submission and GET latitude longtitude request into apartments database
  databaseSubmit() {
    fetch(`http://localhost:8000/apartments/new`, {
      method: "POST",
      body: JSON.stringify({
        apartment: this.state.apartment,
        latlong: this.state.latlong
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(() => {
      browserHistory.push('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // adding form submission to this.state.apartments
  handleChange(event) {
    let newState = update(this.state, {
      apartment: {
        $merge: {
          [event.target.name]: event.target.value
        }
      },
    });
    this.searchLatLong(this.state.apartment.address)
    console.log('Lat Long:', this.state.latLong)
    this.setState(newState);
  }

  handleSubmit(location) {
    location.preventDefault();
    console.log('Lat long:', this.state.latlong)
    this.searchLatLong(this.state.apartment.address)
    this.databaseSubmit();

  };

render(){
  return(
    <div>
      <nav>
        <h2 className=""> Add Apartment</h2>
      </nav>
        <div className="collection">
          <Link className="collection-item" to="/dashboard">Back to Home</Link>
        </div>

          <form onSubmit={this.handleSubmit.bind(this)} className="">
            <div className="">
              Title
            </div>
            <div className="">
              <input name="title" type="text" placeholder="Title" onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="">
              Address
            </div>
            <div className="">
              <input name="address" type="text" placeholder="Address" onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="">
              Rent
            </div>
            <div className="">
              <input  name="rent" type="number" placeholder="Rent" onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="">
              Description
            </div>
            <div className="">
              <input name="description" type="text" placeholder="Description" onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="">
              Photo
            </div>
            <div className="">
              <input name="photo" type="text" placeholder="Add photo" onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="">
              Email
            </div>
            <div className="">
              <input name="email" type="text" placeholder="Email" onChange={this.handleChange.bind(this)}></input>
            </div>
            <button  type="submit">Submit</button>
          </form>
          <GoogleMapsForm address={this.state.apartment.address} />
      </div>
    )
  }
}

export default NewPostApartment;
