import React, { Component } from "react";
import { Link } from "react-router";

import DashboardApartments from './DashboardApartments';
import DashboardRoommate from './DashboardRoommate';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    console.log(props)

    this.state = {
      apartments: [],
      roommates: [],
    };
  }

  componentWillMount() {
    if (!localStorage.getItem('token')) {
        browserHistory.push('/login');
    }
  }

  componentDidMount() {
      fetch('http://localhost:8000/', {
          method: 'GET',
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      })
      .then((results) => {
          results.json().then((content) => {
            browserHistory.push('/dashboard');
          });
      })
      .catch((err) => {
          browserHistory.push('/login');
      });
  }

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
          <h1>{this.state.message}</h1>
          <h1> Welcome, Rachel</h1>
        </nav>
        <div className="collection">
          <Link className="collection-item" to="/user/new/apartment">Add New Apartment</Link><br />
          <Link className="collection-item" to="/user/new/roommate">Add New Roommate</Link>
        </div>

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
