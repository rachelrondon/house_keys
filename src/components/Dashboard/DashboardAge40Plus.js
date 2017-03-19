import React, { Component } from "react";

class Dashboard40Plus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roommates: []
    };
  }

  componentDidMount() {
  fetch(`http://localhost:8000/roommates/40plus`, {
    method: 'GET'
  })
  .then((results) => {
    results.json().then((roommates_data) => {
      this.setState({roommates: roommates_data});
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
          {this.state.roommates.map((roommate) => {
            console.log(roommate.id);
            return(
              <div key={roommate.id} className="">
                <div>
                  <h2>Title: {roommate.title}</h2>
                </div>
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
                  <h2>Toilet Paper: {roommate.toilet_paper}</h2>
                </div>
                <div>
                  <h2>Age: {roommate.age}</h2>
                </div>
                <div>
                  <h2>Wallet: {roommate.wallet}</h2>
                </div>
            </div>            );
          })}
      </div>
  </div>
    );
  }
}

export default Dashboard40Plus;
