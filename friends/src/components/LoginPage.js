import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// REFACTOR TO FORMIK AND YUP
// STYLE WITH MATERIAL UI


class LoginPage extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(response => {
        // console.log(response);
        localStorage.setItem('token', response.data.payload);
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        Hello LoginPage!
        <form onSubmit={this.login}>
          <input 
          name='username'
          placeholder='username'
          type='text'
          value={this.state.credentials.username}
          onChange={this.handleChange}
          />
          <input 
          name='password'
          placeholder='password'
          type='password'
          value={this.state.credentials.password}
          onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginPage;