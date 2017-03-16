import React, { Component } from "react";
import { Link } from "react-router";

import DashboardApartments from './DashboardApartments';
import DashboardRoommate from './DashboardRoommate';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      apartments: [],
      roommates: []
    };
}

  handleApartmentClick(event) {
    this.setState({
      apartmentClick: true
    })
  }

  renderApartment() {
    if(this.state.apartmentClick) {
      return(
        <DashboardApartments />
      )
    }
  }

  handleRoommateClick(event) {
    this.setState({
      roommateClick: true
    })
  }

  renderRoommate() {
    if(this.state.roommateClick) {
      return(
        <DashboardRoommate />
      )
    }
  }

  render(){
    return(
      <div>
        <nav>
          <h1> Welcome, Rachel</h1>
        </nav>

      <div>
        {/* <DashboardApartments /> */}
        <button onClick={this.handleApartmentClick.bind(this)} >
          Apartment
        </button>
      </div>

      <div>
        {/* <DashboardRoommate /> */}
        <button onClick={this.handleRoommateClick.bind(this)} >
          Roommate
        </button>
      </div>
      {this.renderApartment()}
      {this.renderRoommate()}

    </div>
    )
  }
}

export default Dashboard;
