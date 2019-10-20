import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
      id: 0
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  

  loginSubmit = e => {
    e.preventDefault();
    if(localStorage.getItem('token')){
      window.alert('You are already logged in. Please log out before relogging.')
    }else{
      axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.payload);
        this.props.history.push(`/myprofile/${response.data.id}`)
      })
      .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <LoginForm 
        handleChange={this.handleChange} 
        loginSubmit={this.loginSubmit}
        credentials={this.state.credentials}
      />
    )
  }
}

export default LoginPage;