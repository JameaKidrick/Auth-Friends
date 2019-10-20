import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { registerUser } from '../../actions'

import RegisterForm from './RegisterForm'

const RegisterPage = ({history, match, registerUser, isFetching, error}) => {
  const [credentials, setCredentials] = useState({username: '', password: ''})

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  };

  const registerSubmit = e => {
    e.preventDefault();
    registerUser(credentials, history);
    setCredentials({username: '', password: ''})
    
  }



  if(isFetching){
    return <h2>Registering User...</h2>
  }

  return(
    <div>
      {error && <p>{error}</p>}
      <RegisterForm 
        handleChange={handleChange} 
        registerSubmit={registerSubmit} 
        credentials={credentials} 
      />
    </div>
  )
  
}

const mapStateToProps = state => {
  return {
    users: state.users,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterPage);