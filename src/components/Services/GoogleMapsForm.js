import React, { Component } from 'react';
// import { Link } from 'react-router';

const key = process.env.API_KEY;


// API Key Porject Name is HouseKeys NOT House_Keys
class GoogleMapsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: '',
      latLong: ''
    };
  }

  // ******* SAMPLE FOR GOOGLE MAPS GEOCODE *********

  // searchLatLong(location) {
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`)
  //   .then(r => r.json())
  //   .then((data) => {
  //     this.setState({ latLong: `${data.results[0].geometry.location.lat} ${data.results[0].geometry.location.lng}` })
  //     console.log(this.state.latLong);
  //     // console.log("latitude for the boys:", newTaco.results[0].geometry.location.lat);
  //     // console.log("where my tudes at?:", newTaco.results[0].geometry.location.lat);
  //   })
  // };
  //
  // handleLatLong(event) {
  //   console.log('i\'ve been clicked!');
  //   event.preventDefault();
  //   this.searchLatLong(this.state.address);
  //   this.setState({ address: '' });
  // }



  render() {
    let address = this.props.address
    if (!address) {
      address = 'New York'
    }
    console.log(address)
    return (
      <div>
        <iframe className={this.props.className}
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${address}`} >
        </iframe>
      </div>


    )
  }
}

export default GoogleMapsForm;
