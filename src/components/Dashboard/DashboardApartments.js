
import React, { Component } from "react";

import GoogleMapsForm from '../Services/GoogleMapsForm';

class DashboardApartments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: []
    };
  }

  componentDidMount() {
  fetch(`http://localhost:8000/apartments`, {
    method: 'GET'
  })
  .then((results) => {
    results.json().then((apartments_data) => {
      this.setState({apartments: apartments_data});
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

render(){
  return(
  <div>
    <div className="container">
      {this.state.apartments.map((apartment) => {
        return(
        <div key={apartment.id} className="">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Address</th>
                <th>Rent</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{apartment.title}</td>
                <td>{apartment.address}</td>
                <td>$ {apartment.rent}</td>
                <td>{apartment.description}</td>
              </tr>
            </tbody>
          </table>
          <img className="apartment-photo" src={apartment.photo} />
          <div className="map">
            <GoogleMapsForm address={apartment.address}/>
          </div>
        </div>
      );
      })}
  </div>
</div>
  );
}
}

export default DashboardApartments;
