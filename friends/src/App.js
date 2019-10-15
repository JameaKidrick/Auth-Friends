import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTS
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path ='/api/login' component={LoginPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
