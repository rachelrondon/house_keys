import React, { Component } from "react";


class DashboardApartments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: []
    };
  }

  componentDidMount() {
  fetch(`http://localhost:8000/apartments`, {
    method: 'GET'
  })
  .then((results) => {
    results.json().then((apartments_data) => {
      this.setState({apartments: apartments_data});
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
  </div>
    );
  }
}

export default DashboardApartments;
