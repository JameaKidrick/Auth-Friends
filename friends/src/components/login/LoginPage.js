import React from 'react';
import { connect, useSelector } from 'react-redux';
import { PongSpinner } from 'react-spinners-kit'

// ACTIONS
import { loginUser } from '../../actions'

// COMPONENTS
import LoginForm from './LoginForm';

const LoginPage = ({history, loginUser}) => {
  const isFetching = useSelector(state => state.isFetching)
  const error = useSelector(state => state.error)

  if(isFetching){
    return(
      <div>
        <h2>Logging in User...</h2>
        <PongSpinner
          size={80}
        />
      </div>
    )
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <LoginForm 
        loginUser={loginUser}
        history={history}
      />
    </div>
  )
}

export default connect(
  null,
  { loginUser }
)(LoginPage);