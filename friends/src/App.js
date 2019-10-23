import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, getActiveUserData } from './actions'

// COMPONENTS
import LoginPage from './components/login/LoginPage';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import PrivateRoute from './components/PrivateRoute';
import FriendsListPage from './components/friends/FriendsListPage';
import RegisterPage from './components/register/RegisterPage'
import MyProfilePage from './components/myprofile/MyProfilePage';
import CreateProfilePage from './components/myprofile/CreateProfilePage';


function App(props) {

  const logOut = () => {
    props.logoutUser()
  }

  return (
    <Router>
      <div className="App">
        <Link to='/'>Home</Link>
        <br />
        <Link to="/api/friends">Friends</Link>
        <br />
        <Link to='/myprofile/'>My Profile</Link>
        <br />
        {!props.loggedIn ? <Link to="/api/login">Login</Link> : props.loggedIn ? <Link to='/' onClick={() => logOut()}>Log out</Link> : false}
        <br />
        {!props.loggedIn ? <Link to="/api/register">Register</Link> : console.log(props.loggedIn)}
        <br />
        <Link to='/api/register/createprofile'>Create Profile</Link>

        {console.log(props.loggedIn)}

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path ='/api/login' render={props => {
            return <LoginPage {...props} />
          }} />
          <Route exact path='/api/register' render={props => {
            return <RegisterPage {...props}  />
          }} />
          {/* TEMPORARILY PUBLIC */}
          <Route path='/api/register/createprofile' component={CreateProfilePage} />
          {/* TEMPORARILY PUBLIC */}

          {/********************** PRIVATE ROUTES **********************/}
          {/* <PrivateRoute path='/api/register/createprofile' component={CreateProfilePage} /> */}
          <PrivateRoute exact path='/api/friends' component={FriendsListPage} />
          <PrivateRoute exact path='/myprofile' component={MyProfilePage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStatToProps = state => {
  return{
    loggedIn: state.loggedIn
  }
}

export default connect(
  mapStatToProps,
  { logoutUser }
)(App);
