import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions'

import LoginForm from './LoginForm';

const LoginPage = ({history, loginUser, isFetching, error, logIn, register}) => {
  const [credentials, setCredentials] = useState({username: '', password: ''})

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  };

  const loginSubmit = e => {
    e.preventDefault();
    if(localStorage.getItem('token')){
      window.alert('You are already logged in. Please log out before relogging.')
    }else{
      loginUser(credentials, history);
      setCredentials({username: '', password: ''})
      logIn()
      register()
    }
  }

  if(isFetching){
    return <h2>Logging in User...</h2>
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <LoginForm 
        handleChange={handleChange} 
        loginSubmit={loginSubmit}
        credentials={credentials}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginPage);