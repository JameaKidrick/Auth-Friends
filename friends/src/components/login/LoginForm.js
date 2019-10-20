import React from 'react';

const LoginForm = props => {
  return (
    <div>
      Hello LoginPage!
      <form onSubmit={props.loginSubmit}>
        <input 
        name='username'
        placeholder='username'
        type='text'
        value={props.credentials.username}
        onChange={props.handleChange}
        />
        <input 
        name='password'
        placeholder='password'
        type='password'
        value={props.credentials.password}
        onChange={props.handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;