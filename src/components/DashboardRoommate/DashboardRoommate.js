import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from "react-router";
import { browserHistory } from 'react-router';


class DashboardRoommate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roommates: {
        gender: '',
        smoker: '',
        sleep: '',
        dishes: '',
        toilet_paper: '',
        age: '',
        wallet: '',
        user_id: ''
      }
    }
  }

  render(){
    return(
      <div>
      <div className="container">
        <div className="row">
        {this.state.roommates.map((roommate) => {
          return(
          <div key={roommate.id} className="">
          <div>
            <h2>Gender: {roommate.gender}</h2>
          </div>
          <div>
            <h2>Smoker: {roommate.smoker}</h2>
          </div>
          <div>
            <h2>Sleep: {roommate.sleep}</h2>
          </div>
          <div>
            <h2>Dishes: {roommate.dishes}</h2>
          </div>
          <div>
            <h2>Toilet_paper: {roommate.toilet_paper}</h2>
          </div>
          <div>
            <h2>Age: {roommate.age}</h2>
          </div>
          <div>
            <h2>Wallet: {roommate.wallet}</h2>
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

export default DashboardRoommate;
