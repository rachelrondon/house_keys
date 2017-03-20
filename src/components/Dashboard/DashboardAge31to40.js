import React, { Component } from "react";

class DashboardAge31to40 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roommates: []
    };
  }

  componentDidMount() {
  fetch(`http://localhost:8000/roommates/age31to40`, {
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
<<<<<<< HEAD
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
                     <td><a href={"mailto:" + roommate.email}>Email</a></td>
                   </tr>
                 </tbody>
              </table>
           </div>
=======
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
                       <th>Contact</th>
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
                       <td><a href={"mailto:" + roommate.email}>Email</a></td>
                     </tr>
                   </tbody>
                </table>
             </div>
>>>>>>> 3fa3bb4b59a0f2c929873d1ef05a377a962712d3
             );
           })}
       </div>
  </div>
    );
  }
}

export default DashboardAge31to40;
