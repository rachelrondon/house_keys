import React, { Component } from "react";
import update from 'react-addons-update';

import { Link, browserHistory } from "react-router";

import DashboardApartments from './DashboardApartments';
import DashboardRoommate from './DashboardRoommate';
import DashboardSmoker from './DashboardSmoker';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    console.log(props)

    this.state = {
      apartments: [],
      roommates: [],
      user: {}
    };
  }

  componentWillMount() {
    if (!localStorage.getItem('token')) {
        browserHistory.push('/login');
    } else {
      // console.log('Dashboard User', userObj)
      // let userObj = JSON.parse(window.localStorage.user);
      // this.setState({user: userObj})
    }
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    browserHistory.push('/');
  }

  handleApartmentClick(event) {
    this.setState({
      apartmentClick: true,
      roommateClick: false,
    })
  }

  renderApartment() {
    if(this.state.apartmentClick) {
      return(
        <DashboardApartments />
      )
    }
  }

  handleRoommateClick() {
    this.setState({
      roommateClick: true,
      apartmentClick: false,
      // smokerClick: false
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
          <h1> Welcome, {this.state.user.first_name}</h1>
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
      <button onClick={this.logout.bind(this)}>Logout</button>
    </div>
    )
  }
}

export default Dashboard;
