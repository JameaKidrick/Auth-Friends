import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import RegisterForm from './RegisterForm'

const RegisterPage = props => {
  const [credentials, setCredentials] = useState({username: '', password: ''})

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  };

  const registerSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/users', credentials)
      .then(response => {
        console.log('ADD NEW USER', response.data);
        setCredentials({username: '', password: ''})
        props.history.push('/')
      })
      .catch(error => console.log(error))
  }


  return(
    <RegisterForm 
      handleChange={handleChange} 
      registerSubmit={registerSubmit} 
      credentials={credentials} 
    />
  )
  
}

export default RegisterPage;