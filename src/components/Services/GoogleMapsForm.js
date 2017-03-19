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
    return (
      // <div>
      //     <form onSubmit={this.handleLatLong.bind(this)}>
      //       <input
      //         type="text"
      //         value={this.state.address}
      //         onChange={e => this.setState({address: e.target.value})}
      //         placeholder="search address..." /><br/>
      //       <input type="submit" value="Search"/>
      //     </form>
      //   </div>

      // ******* Sample viewport for google maps window *******
      <div>
        <iframe
          width="600"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=33+Charles+St,+Malverne,+NY`} >
        </iframe>
      </div>


    )
  }
}

export default GoogleMapsForm;
