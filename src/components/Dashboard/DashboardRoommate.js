import React, { Component } from "react";

import DashboardSmoker from './DashboardSmoker';
import DashboardNonSmoker from './DashboardNonSmoker';

import DashboardGenderMale from './DashboardGenderMale';
import DashboardGenderFemale from './DashboardGenderFemale';

import DashboardSleepBefore10PM from './DashboardSleepBefore10PM';
import DashboardDishes from './DashboardDishes';
import DashboardToiletPaper from './DashboardToiletPaper';
import DashboardAge from './DashboardAge';
import DashboardWallet from './DashboardWallet';

import DashboardAge21to30 from "./DashboardAge21to30";
import DashboardAge31to40 from "./DashboardAge31to40";

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
    smokerClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    sleepClick: false,
    dishesClick: false,
    toiletpaperClick: false,
    ageClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderSmoker() {
  if(this.state.smokerClick) {
    return(
      <DashboardSmoker />
    )
  }
}


handleNonSmokerClick() {
  this.setState({
    nonSmokerClick: true,
    smokerClick: false,
    genderMaleClick: false,
    genderFemaleClick: false,
    sleepClick: false,
    dishesClick: false,
    toiletpaperClick: false,
    ageClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderNonSmoker() {
  if(this.state.nonSmokerClick) {
    return(
      <DashboardNonSmoker />
    )
  }
}

handleGenderMaleClick() {
  this.setState({
    genderMaleClick: true,
    genderFemaleClick: false,
    smokerClick: false,
    sleepClick: false,
    dishesClick: false,
    toiletpaperClick: false,
    ageClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

handleGenderFemaleClick() {
  this.setState({
    genderFemaleClick: true,
    genderMaleClick: false,
    smokerClick: false,
    sleepClick: false,
    dishesClick: false,
    toiletpaperClick: false,
    ageClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderGenderFemale () {
  if(this.state.genderFemaleClick) {
    return(
      <DashboardGenderFemale />
    )
  }
}

renderGenderMale() {
  if(this.state.genderMaleClick) {
    return(
      <DashboardGenderMale />
    )
  }
}

handleSleepBefore10PMClick() {
  this.setState({
    SleepBefore10PMClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    smokerClick: false,
    dishesClick: false,
    toiletpaperClick: false,
    ageClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderSleepBefore10PM() {
  if(this.state.SleepBefore10PMClick) {
    return(
      <DashboardSleepBefore10PM />
    )
  }
}

handleDishesClick() {
  this.setState({
    dishesClick: true,
    sleepClick: false,
    genderMaleClick: false,
    genderFemaleClick: false,
    smokerClick: false,
    toiletpaperClick: false,
    ageClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderDishes() {
  if(this.state.dishesClick) {
    return(
      <DashboardDishes />
    )
  }
}

handleToiletPaperClick() {
  this.setState({
    toiletpaperClick: true,
    dishesClick: false,
    sleepClick: false,
    genderMaleClick: false,
    genderFemaleClick: false,
    smokerClick: false,
    ageClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderToiletPaper() {
  if(this.state.toiletpaperClick) {
    return(
      <DashboardToiletPaper />
    )
  }
}

handleAge31to40Click() {
  this.setState({
    age31to40Click: true,
    toiletpaperClick: false,
    dishesClick: false,
    sleepClick: false,
    genderMaleClick: false,
    genderFemaleClick: false,
    smokerClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderAge31to40() {
  if(this.state.age31to40Click) {
    return(
      <DashboardAge31to40 />
    )
  }
}

handleAge21to30Click() {
  this.setState({
    age21to30Click: true,
    toiletpaperClick: false,
    dishesClick: false,
    sleepClick: false,
    genderMaleClick: false,
    genderFemaleClick: false,
    smokerClick: false,
    walletClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderAge21to30() {
  if(this.state.age21to30Click) {
    return(
      <DashboardAge21to30 />
    )
  }
}

handleWalletClick() {
  this.setState({
    walletClick: true,
    toiletpaperClick: false,
    dishesClick: false,
    sleepClick: false,
    genderMaleClick: false,
    genderFemaleClick: false,
    smokerClick: false,
    ageClick: false,
    roommateClick: false,
    apartmentClick: false
  })
}

renderWallet() {
  if(this.state.walletClick) {
    return(
      <DashboardWallet />
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
            <button onClick={this.handleNonSmokerClick.bind(this)} >
              Non Smoker
            </button>
          </div>
          {this.renderNonSmoker()}
          <div>
            <button onClick={this.handleGenderMaleClick.bind(this)} >
              Male
            </button>
          </div>
          {this.renderGenderMale()}
          <div>
            <button onClick={this.handleGenderFemaleClick.bind(this)} >
              Female
            </button>
          </div>
          {this.renderGenderFemale()}
          <div>
            <button onClick={this.handleSleepBefore10PMClick.bind(this)} >
              Sleep Before 10PM
            </button>
          </div>
          {this.renderSleepBefore10PM()}
          <div>
            <button onClick={this.handleDishesClick.bind(this)} >
              Dishes
            </button>
          </div>
          {this.renderDishes()}
          <div>
            <button onClick={this.handleToiletPaperClick.bind(this)} >
              Toilet Paper
            </button>
          </div>
          {this.renderToiletPaper()}
          <div>
            <button onClick={this.handleAge21to30Click.bind(this)} >
              Age 21 - 30
            </button>
          </div>
          {this.renderAge21to30()}
          <div>
            <button onClick={this.handleAge31to40Click.bind(this)} >
              Age 31 - 40
            </button>
          </div>
          {this.renderAge31to40()}
          <div>
            <button onClick={this.handleWalletClick.bind(this)} >
              Wallet
            </button>
          </div>
          {this.renderWallet()}
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
    );
  }
}

export default DashboardRoommate;
