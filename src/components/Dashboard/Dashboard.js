import React, { Component } from "react";
import { Link } from "react-router";

import DashboardApartments from './DashboardApartments';
import DashboardRoommate from './DashboardRoommate';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: [],
      roommates: [],
      // user: []
    };
  }

//   componentDidMount() {
//     fetch(`http://localhost:8000/users/${this.props.params.id}`), {
//     method: 'GET'
//   }
//   .then((results) => {
//     results.json().then((user_data) => {
//       this.setState({user: user_data});
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }

  handleApartmentClick(event) {
    this.setState({
      apartmentClick: true,
      roommateClick: false
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
      roommateClick: true,
      apartmentClick: false
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
        <Link to="user/new/apartment">New Apartment Post</Link>
        <br></br><Link to="user/new/roommate">New Roomate Post</Link>
      <div>
        <button onClick={this.handleApartmentClick.bind(this)} >
          Apartment
        </button>
      </div>

      <div>
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
