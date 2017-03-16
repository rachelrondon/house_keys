import React, { Component } from "react";
import { Link } from "react-router";

class NewProfile extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <div>
          <h3>Gender</h3>
          <select name="gender">
            <option name="male">male</option>
            <option name="female">female</option>
          </select>
        </div>
        <div>
          <h3>Smoke?</h3>
          <select name="smoke">
            <option name="yes">yes</option>
            <option name="no">no</option>
          </select>
        </div>
        <div>
          <h3>Bedtime</h3>
          <select name="Bedtime">
            <option name="before 10pm">before 10pm</option>
            <option name="around 10pm">around 10pm</option>
            <option name="after midnight">after midnight</option>
          </select>
        </div>
        <div>
          <h3>Dishes</h3>
          <select name="Dishes">
            <option name="After every meal">After every meal</option>
            <option name="Everday">Everday</option>
            <option name="When the sink is full">When the sink is full</option>
            <option name="What are dishes?!">What are dishes?!</option>
          </select>
        </div>
        <div>
          <h3>Toilet Paper Preferences</h3>
          <select name="Toilet Paper Preferences">
            <option name="Scotts">Scotts</option>
            <option name="Charmin">Charmin</option>
            <option name="Generic">Generic</option>
          </select>
        </div>
        <div>
          <h3>Rent Preference</h3>
          <select name="Rent Preference">
            <option name="$800 - $1000">$800 - $1000</option>
            <option name="$1001 - $1500">$1001 - $1500</option>
            <option name="$1501 - $2000">$1501 - $2000</option>
            <option name="$2000 +">$2000 +</option>
          </select>
        </div>
      </div>
    )
  }
}

export default NewProfile;
