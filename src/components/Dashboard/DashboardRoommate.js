import React, { Component } from "react";
import DashboardSmoker from './DashboardSmoker';
import DashboardGender from './DashboardGender';


class DashboardRoommate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roommates: []
    };
  }

  componentDidMount() {
  fetch(`http://localhost:8000/roommates`, {
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

handleSmokerClick() {
  this.setState({
    smokerClick: true
    // roommateClick: false,
    // apartmentClick: false
  })
}

renderSmoker() {
  if(this.state.smokerClick) {
    return(
      <DashboardSmoker />
    )
  }
}

handleGenderClick() {
  this.setState({
    genderClick: true
    // roommateClick: false,
    // apartmentClick: false
  })
}

renderGender() {
  if(this.state.genderClick) {
    return(
      <DashboardGender />
    )
  }
}


  render(){
    return(
      <div>
        <div>
          <div>
            <button onClick={this.handleSmokerClick.bind(this)} >
              Smoker
            </button>
          </div>
          {this.renderSmoker()}
          <div>
            <button onClick={this.handleGenderClick.bind(this)} >
              Gender
            </button>
          </div>
          {this.renderGender()}
        {/* <div className="container">
          <select name="smoker">
            <option name="1">yes</option>
            <option name="2">no</option>
          </select> */}
          {/* <div className="container">
             {this.state.roommates.map((roommate) => {
              console.log(roommate.id);
              return(
              <div key={roommate.id} className="">
                <div>
                  <h2>Smoker:{roommate.smoker}</h2>
                </div>
            </div>
             );
            })}
        </div> */}
          {/* {this.state.roommates.map((roommate) => {
            console.log(roommate.id);
            return(
            <div key={roommate.id} className="">
              <div>
                <h2>Smoker:{roommate.smoker}</h2>
              </div>
          </div>
           );
          })} */}
      {/* </div> */}
    </div>
      {/* <div className="container">
        {this.state.roommates.map((roommate) => {
          console.log(roommate.id);
          return(
          <div key={roommate.id} className="">
            <div>
              <h2>Title:{roommate.title}</h2>
            </div>
            <div>
              <h2>Gender:{roommate.gender}</h2>
            </div>
            <div>
              <h2>Smoker:{roommate.smoker}</h2>
            </div>
            <div>
              <h2>Sleep:{roommate.sleep}</h2>
            </div>
            <div>
              <h2>Dishes:{roommate.dishes}</h2>
            </div>
            <div>
              <h2>Toilet Paper: {roommate.toilet_paper}</h2>
            </div>
            <div>
              <h2>Age:{roommate.age}</h2>
            </div>
            <div>
              <h2>Wallet:{roommate.wallet}</h2>
            </div>
        </div>
          );
        })}
    </div> */}
  </div>
  // </div>
    );
  }
}

export default DashboardRoommate;
