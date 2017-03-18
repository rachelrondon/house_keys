import React, { Component } from 'react';
import { Link } from 'react-router';

const key = process.env.API_KEY;


// API Key Porject Name is HouseKeys NOT House_Keys
class GoogleMapsForm extends Component {
  constructor(props) {
    super(props)

    this.state={
      address: ''
    }
  }
  // this is sample code to find json object in
  // google mapes geocode
  handleSubmit(event) {
    console.log('i\'ve been clicked!');
    event.preventDefault();

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=33+Charles+St,+Malverne,+NY+11565&key=${key}`)
      .then((taco) => taco.json()
        .then((newTaco) => {
            console.log(newTaco);
            // console.log("latitude for the boys:", newTaco.results[0].geometry.location.lat);
            // console.log("where my tudes at?:", newTaco.results[0].geometry.location.lat);
        })
      );
    }

  render() {
    return(
      <div>
        <form>
          <button onClick={this.handleSumbit.bind(this)}>
            click me
          </button>
        </form>
      </div>
      // <div>
      //   <iframe
      //     width="600"
      //     height="450"
      //     frameBorder="0"
      //     src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=33+Charles+St,+Malverne,+NY`} >
      //   </iframe>
      // </div>


    )
  }
}

export default GoogleMapsForm;
