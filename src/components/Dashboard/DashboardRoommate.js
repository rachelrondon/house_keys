import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from "react-router";
import { browserHistory } from 'react-router';

import Dashboard from './Dashboard';

// List of 21 components that render onClick
import DashboardSmoker from './DashboardSmoker';
import DashboardNonSmoker from './DashboardNonSmoker';

import DashboardGenderMale from './DashboardGenderMale';
import DashboardGenderFemale from './DashboardGenderFemale';

import DashboardSleepBefore10PM from './DashboardSleepBefore10PM';
import DashboardSleepAround10PM from './DashboardSleepAround10PM';
import DashboardSleepAfterMidnight from './DashboardSleepAfterMidnight';

import DashboardDishesAfterEveryMeal from './DashboardDishesAfterEveryMeal';
import DashboardDishesSinkFull from './DashboardDishesSinkFull';
import DashboardDishesEveryday from './DashboardDishesEveryday';
import DashboardWhatAreDishes from './DashboardWhatAreDishes';

import DashboardCharmin from './DashboardCharmin';
import DashboardScotts from './DashboardScotts';
import DashboardGeneric from './DashboardGeneric';

import DashboardRMAge21to30 from "./DashboardRMAge21to30";
import DashboardAge31to40 from "./DashboardAge31to40";
import DashboardAge40Plus from "./DashboardAge40Plus";

import DashboardRent800to1000 from "./DashboardRent800to1000";
import DashboardRent1001to1500 from "./DashboardRent1001to1500";
import DashboardRent1501to2000 from "./DashboardRent1501to2000";
import DashboardRent2000Plus from "./DashboardRent2000Plus";


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

// Beginning of Age Components
handleRM21to30Click() {
  this.setState({
    RM21to30Click: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: true,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderRM21to30() {
  if(this.state.RM21to30Click) {
    return(
      <DashboardRMAge21to30 />
    )
  }
}

handleAge31to40Click() {
  this.setState({
    age31to40Click: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    RM21to30Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderAge31to40() {
  if(this.state.age31to40Click) {
    return(
      <DashboardAge31to40 />
    )
  }
}

handleAge40PlusClick() {
  this.setState({
    age40PlusClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderAge40Plus () {
  if(this.state.age40PlusClick) {
    return(
      <DashboardAge40Plus />
    )
  }
}
// End of Age Components


// Beginning of Components related to washing dishes
handleWhatAreDishesClick() {
  this.setState({
    whatAreDishesClick: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesAfterEveryMealClick: false,
    dishesSinkFullClick: false,
    dishesEverydayClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderWhatAreDishes() {
  if(this.state.whatAreDishesClick) {
    return(
      <DashboardWhatAreDishes />
    )
  }
}

handleDishesAfterEveryMealClick() {
  this.setState({
    dishesAfterEveryMealClick: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderDishesAfterEveryMeal() {
  if(this.state.dishesAfterEveryMealClick) {
    return(
      <DashboardDishesAfterEveryMeal />
    )
  }
}

handleDishesSinkFullClick() {
  this.setState({
    dishesSinkFullClick: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: true,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderDishesSinkFull() {
  if(this.state.dishesSinkFullClick) {
    return(
      <DashboardDishesSinkFull />
    )
  }
}

handleDishesEverydayClick() {
  this.setState({
    dishesEverydayClick: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    whatAreDishesClick: true,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderDishesEveryday() {
  if(this.state.dishesEverydayClick) {
    return(
      <DashboardDishesEveryday />
    )
  }
}

// End of Components related to washing dishes


// Beginning of Components related to rent

handleRent2000PlusClick() {
  this.setState({
    Rent2000PlusClick: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: true,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
  })
}

renderRent2000Plus() {
  if(this.state.Rent2000PlusClick) {
    return(
      <DashboardRent2000Plus />
    )
  }
}


handleRent800to1000Click() {
  this.setState({
    Rent800to1000Click: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: true,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderRent800to1000() {
  if(this.state.Rent800to1000Click) {
    return(
      <DashboardRent800to1000 />
    )
  }
}

handleRent1001to1500Click() {
  this.setState({
    Rent1001to1500Click: true,
    Rent800to1000Click: false,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: true,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderRent1001to1500() {
  if(this.state.Rent1001to1500Click) {
    return(
      <DashboardRent1001to1500 />
    )
  }
}

handleRent1501to2000Click() {
  this.setState({
    rent1501to2000Click: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: true,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    Rent2000PlusClick: false
  })
}


renderRent1501to2000() {
  if(this.state.rent1501to2000Click) {
    return(
      <DashboardRent1501to2000 />
    )
  }
}
// End of Components related to rent

// Beginning of Components related to smoking
handleSmokerClick() {
  this.setState({
    smokerClick: true,
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
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
    genderFemaleClick: false,
    genderMaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderNonSmoker() {
  if(this.state.nonSmokerClick) {
    return(
      <DashboardNonSmoker />
    )
  }
}
// End of Components related to smoking

// Beginning of Components related to gender
handleGenderMaleClick() {
  this.setState({
    genderMaleClick: true,
    genderFemaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderGenderMale() {
  if(this.state.genderMaleClick) {
    return(
      <DashboardGenderMale />
    )
  }
}

handleGenderFemaleClick() {
  this.setState({
    genderFemaleClick: true,
    genderMaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderGenderFemale () {
  if(this.state.genderFemaleClick) {
    return(
      <DashboardGenderFemale />
    )
  }
}
// End of Components related to gender

// Beginning of Components related to toilet paper
handleScottsClick() {
  this.setState({
    scottsClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderScotts () {
  if(this.state.scottsClick) {
    return(
      <DashboardScotts />
    )
  }
}

handleGenericClick() {
  this.setState({
    genericClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderGeneric () {
  if(this.state.genericClick) {
    return(
      <DashboardGeneric />
    )
  }
}

handleCharminClick() {
  this.setState({
    charminClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderCharmin () {
  if(this.state.charminClick) {
    return(
      <DashboardCharmin />
    )
  }
}
// End of Components related to toilet paper


// Beginning of components related to sleeping
handleSleepAfterMidnightClick() {
  this.setState({
    SleepAfterMidnightClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAround10PMClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderSleepAfterMidnight() {
  if(this.state.SleepAfterMidnightClick) {
    return(
      <DashboardSleepAfterMidnight />
    )
  }
}

handleSleepBefore10PMClick() {
  this.setState({
    SleepBefore10PMClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepAround10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderSleepBefore10PM() {
  if(this.state.SleepBefore10PMClick) {
    return(
      <DashboardSleepBefore10PM />
    )
  }
}

handleSleepAround10PMClick() {
  this.setState({
    SleepAround10PMClick: true,
    genderMaleClick: false,
    genderFemaleClick: false,
    RM21to30Click: false,
    age31to40Click: false,
    age40PlusClick: false,
    smokerClick: false,
    nonSmokerClick: false,
    SleepBefore10PMClick: false,
    SleepAfterMidnightClick: false,
    scottsClick: false,
    genericClick: false,
    charminClick: false,
    dishesSinkFullClick: false,
    dishesAfterEveryMealClick: false,
    dishesEverydayClick: false,
    whatAreDishesClick: false,
    Rent800to1000Click: false,
    Rent1001to1500Click: false,
    rent1501to2000Click: false,
    Rent2000PlusClick: false
  })
}

renderSleepAround10PM() {
  if(this.state.SleepAround10PMClick) {
    return(
      <DashboardSleepAround10PM />
    )
  }
}
// End of components related to sleeping

  render(){
    return(
      <div>
          <div>
            <button onClick={this.handleDishesAfterEveryMealClick.bind(this)} >
              Dishes After Every Meal
            </button>
          </div>
          {this.renderDishesAfterEveryMeal()}

          <div>
            <button onClick={this.handleDishesSinkFullClick.bind(this)} >
              Dishes Sink Full
            </button>
          </div>
          {this.renderDishesSinkFull()}

          <div>
            <button onClick={this.handleWhatAreDishesClick.bind(this)} >
              What Are Dishes ?
            </button>
          </div>
          {this.renderWhatAreDishes()}

          <div>
            <button onClick={this.handleDishesEverydayClick.bind(this)} >
              Dishes Everyday
            </button>
          </div>
          {this.renderDishesEveryday()}

          <div>
            <button onClick={this.handleCharminClick.bind(this)} >
              Charmin
            </button>
          </div>
          {this.renderCharmin()}

          <div>
            <button onClick={this.handleScottsClick.bind(this)} >
              Scotts
            </button>
          </div>
          {this.renderScotts()}

          <div>
            <button onClick={this.handleGenericClick.bind(this)} >
              Generic
            </button>
          </div>
          {this.renderGeneric()}

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
            <button onClick={this.handleSleepAfterMidnightClick.bind(this)} >
              Sleep After Midnight
            </button>
          </div>
          {this.renderSleepAfterMidnight()}

          <div>
            <button onClick={this.handleSleepAround10PMClick.bind(this)} >
              Sleep Around 10PM
            </button>
          </div>
          {this.renderSleepAround10PM()}

          <div>
            <button onClick={this.handleAge31to40Click.bind(this)} >
              Age 31 - 40
            </button>
          </div>
          {this.renderAge31to40()}

          <div>
            <button onClick={this.handleAge40PlusClick.bind(this)} >
              Age 40 +
            </button>
          </div>
          {this.renderAge40Plus()}

          <div>
            <button onClick={this.handleRM21to30Click.bind(this)} >
              Age 21 to 30
            </button>
          </div>
          {this.renderRM21to30()}

          <div>
            <button onClick={this.handleRent800to1000Click.bind(this)} >
              Rent $800 to $1000
            </button>
          </div>
          {this.renderRent800to1000()}

          <div>
            <button onClick={this.handleRent1001to1500Click.bind(this)} >
              Rent $1001 to $1500
            </button>
          </div>
          {this.renderRent1001to1500()}

          <div>
            <button onClick={this.handleRent1501to2000Click.bind(this)} >
              Rent $1501 to $2000
            </button>
          </div>
          {this.renderRent1501to2000()}

          <div>
            <button onClick={this.handleRent2000PlusClick.bind(this)} >
              Rent $2000
            </button>
          </div>
          {this.renderRent2000Plus()}

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
            </div>
              );
            })}
        </div>
      </div>
        );
      }
    }

export default DashboardRoommate;
