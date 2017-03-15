import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

import Dashboard from './components/Dashboard/Dashboard';
import NewPost from "./components/NewPost/NewPost";
import Login from './components/Login/Login';
import EditUser from './components/EditUser/EditUser';
// import NewUser from './components/NewUser/NewUser';
import LandingPage from './components/LandingPage/LandingPage';
import NewProfile from './components/NewProfile/NewProfile';
import NewPostApartment from './components/NewPostApartment/NewPostApartment';

ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={LandingPage} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/login' component={Login} />
    <Route path='/user/edit' component={EditUser} />
    {/* <Route path='/user/new' component={NewUser} /> */}
    <Route path='/user/profile' component={NewProfile} />
    <Route path='/user/new/apartment' component={NewPostApartment} />
    <Route path='/user/new/post' component={NewPost} />
  </Router>
  , document.getElementById("app"));
