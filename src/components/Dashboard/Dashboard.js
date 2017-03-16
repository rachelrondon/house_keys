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
<<<<<<< HEAD
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
=======
>>>>>>> d05e2bcc643da774e52951177a0188ad00f52635

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

<<<<<<< HEAD
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
=======
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
>>>>>>> d05e2bcc643da774e52951177a0188ad00f52635
  }
}
export default Dashboard;
