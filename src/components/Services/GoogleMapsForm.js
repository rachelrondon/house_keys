import React, { Component } from 'react';
import { Link } from 'react-router';

const key = process.env.API_KEY;

// API Key Porject Name is HouseKeys NOT House_Keys
class GoogleMapsForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <iframe
          width="600"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=Eiffel+Tower,Paris+France`} >
        </iframe>
      </div>
    )
  }
}

export default GoogleMapsForm;
