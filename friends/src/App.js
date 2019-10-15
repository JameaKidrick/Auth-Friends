import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// COMPONENTS
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import PrivateRoute from './components/PrivateRoute';
import FriendsListPage from './components/FriendsListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'>Home</Link>
        <br />
        <Link to="/api/login">Login</Link>
        <br />
        <Link to="/api/friends">Friends</Link>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path ='/api/login' component={LoginPage} />
          <PrivateRoute path='/api/friends' component={FriendsListPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
