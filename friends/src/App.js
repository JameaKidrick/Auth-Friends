import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';

// COMPONENTS
import LoginPage from './components/login/LoginPage';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import PrivateRoute from './components/PrivateRoute';
import FriendsListPage from './components/friends/FriendsListPage';
import RegisterPage from './components/register/RegisterPage'
import MyProfilePage from './components/myprofile/MyProfilePage';


function App() {

  useEffect(() => {
    axiosWithAuth()
      .get('/users')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Router>
      <div className="App">
        <Link to='/'>Home</Link>
        <br />
        <Link to="/api/login">Login</Link>
        <br />
        <Link to="/api/register">Register</Link>
        <br />
        <Link to="/api/friends">Friends</Link>
        <br />
        <Link to='/' onClick={() => localStorage.removeItem('token')}>Log out</Link>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path ='/api/login' component={LoginPage} />
          <Route path='/api/register' component={RegisterPage} />

          {/********************** PRIVATE ROUTES **********************/}
          <PrivateRoute exact path='/api/friends' component={FriendsListPage} />
          <PrivateRoute path='/myprofile/:id' component={MyProfilePage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
