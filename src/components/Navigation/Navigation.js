import React, { Component } from "react";
import update from 'react-addons-update';

import { Link, browserHistory } from "react-router";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }


  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    browserHistory.push('/');
  };

  render() {
    return(
      <div className="nav-header">
        <nav>
          <div className="navTitle">
            <img className="navLogo" src="../img/House_Keys_Logo-Nav.svg"/>
            <h1> Welcome, {this.props.user.first_name}</h1>
          </div>
          <div className="collection">
            <Link className="collection-item" to="/user/new/apartment">Add New Apartment</Link><br />
            <Link className="collection-item" to="/user/new/roommate">Add New Roommate</Link>
          </div>
          <button className="logoutButton" onClick={this.logout.bind(this)}>Logout</button>
        </nav>
      </div>
    )
  }
};

export default Navigation;
