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
  const [loggedIn, setLoggedIn] = useState(false)
  const [registered, setRegistered] = useState(false)

  const logOut = () => {
    props.logoutUser()
    setLoggedIn(!loggedIn)
    setRegistered(!registered)
  }

  const logIn = () => {
    setLoggedIn(!loggedIn)
  }

  const register = () => {
    setRegistered(!registered)
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
        {!loggedIn ? <Link to="/api/login">Login</Link> : localStorage.getItem('token') ? <Link to='/' onClick={() => logOut()}>Log out</Link> : false}
        <br />
        {!registered ? <Link to="/api/register">Register</Link> : false}
        <br />
        <Link to='/api/register/createprofile'>Create Profile</Link>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path ='/api/login' render={props => {
            return <LoginPage {...props} logIn={logIn} register={register} />
          }} />
          <Route exact path='/api/register' render={props => {
            return <RegisterPage {...props} register={register} logIn={logIn} />
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
    activeUser: state.activeUser
  }
}

export default connect(
  mapStatToProps,
  { logoutUser, getActiveUserData }
)(App);
