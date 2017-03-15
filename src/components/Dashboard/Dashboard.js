import React, { Component } from "react";
import { Link } from "react-router";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('http://myapi-profstream.herokuapp.com/api/e52818/persons', {
      method: 'GET',
    })
    .then((results) => {
      results.json().then((users_data) => {

        this.setState({users: users_data})
      });
    })
    .catch((err) => {

    });
  }

  render(){
    return(
      <div>
        <nav>
          <h1> Welcome, Rachel</h1>
          {/* <img>Logo</img> */}
          {/* <Link to="/new/post"></Link> */}
        </nav>
        <div className="container">
          <div className="row">
          {this.state.users.map((user) => {
            return(
            <div key={user.id} className="">
            <div>
              <h2>Name: {user.firstname} {user.lastname}</h2>
            </div>
            <div>
              <h2>Email: {user.email}</h2>
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

export default Dashboard;
