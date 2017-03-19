import React, { Component } from "react";

class DashboardSleepBefore10PM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roommates: []
    };
  }

  componentDidMount() {
  fetch(`http://localhost:8000/roommates/sleepbefore10`, {
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
           {this.state.roommates.map((roommate) => {
             console.log(roommate.id);
             return(
             <div key={roommate.id} className="">
               <table>
                 <thead>
                   <tr>
                     <th>Title</th>
                     <th>Gender</th>
                     <th>Smoker?</th>
                     <th>Sleeping Patterns</th>
                     <th>Dish-Washing Habits</th>
                     <th>Toilet Paper Preference</th>
                     <th>Age</th>
                     <th>Wallet</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>{roommate.title}</td>
                     <td>{roommate.gender}</td>
                     <td>{roommate.smoker}</td>
                     <td>{roommate.sleep}</td>
                     <td>{roommate.dishes}</td>
                     <td>{roommate.toilet_paper}</td>
                     <td>{roommate.age}</td>
                     <td>{roommate.wallet}</td>
                   </tr>
                 </tbody>
              </table>
           </div>
             );
           })}
       </div>
    );
  }
}

export default DashboardSleepBefore10PM;
