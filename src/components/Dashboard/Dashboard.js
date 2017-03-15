import React, { Component } from "react";
import { Link } from "react-router";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roommates: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/roommates', {
      method: 'GET',
    })
    .then((results) => {
      console.log
      results.json().then((roommates_data) => {
        this.setState({roommates: roommates_data})
      });
    })
    .catch((err) => {

    });
  }

  render(){
    return(
      <div>
        {this.state.roommates.map((roommate) => {
          return (
            <div key={roommate.id}>
              <div className="container">
                <div className="row">
                  <div>
                    Gender: {roommate.gender}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Dashboard;
