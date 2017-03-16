import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from "react-router";
import { browserHistory } from 'react-router';


class DashboardApartments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: {
        address: '',
        rent: '',
        description: '',
        photo: '',
        user_id: ''
      }
    }
  }

  render(){
    return(
    <div>
      <div className="container">
        <div className="row">
        {this.state.apartments.map((apartment) => {
          return(
          <div key={apartment.id} className="">
          <div>
            <h2>Address: {apartment.address}</h2>
          </div>
          <div>
            <h2>Rent: {apartment.rent}</h2>
          </div>
          <div>
            <h2>Description: {apartment.description}</h2>
          </div>
          <div>
            <h2>Photo: {apartment.photo}</h2>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  </div>
    )
  }
}

export default DashboardApartments;
