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

  // componentDidMount() {
  //   fetch('http://localhost:8000/apartments/', {
  //     method: 'GET',
  //   })
  //   .then((results) => {
  //     results.json().then((apartments_data) => {
  //
  //       this.setState({apartments: apartments_data})
  //     });
  //   })
  //   .catch((err) => {
  //
  //   });
  // }
  setHiToTrue(e) {
    this.setState({
      isHi: true
    })
  }

  renderHi() {
    console.log('rendering')
    if(this.state.isHi) {
      console.log('hi')
      return(
        <h1>yo</h1>
      )
    }
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
        <button
          onClick={this.setHiToTrue.bind(this)}>
          dan!
        </button>
      </div>
      {this.renderHi()}
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
