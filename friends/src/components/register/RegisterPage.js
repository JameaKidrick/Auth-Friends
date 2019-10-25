import React from 'react';
import { connect, useSelector } from 'react-redux';
import { PongSpinner } from 'react-spinners-kit'

// ACTIONS
import { registerUser } from '../../actions'

// COMPONENTS
import RegisterForm from './RegisterForm'

const RegisterPage = ({history, registerUser}) => {
  const isFetching = useSelector(state => state.isFetching)
  const error = useSelector(state => state.error)

  if(isFetching){
    return(
      <div>
        <h2>Registering User...</h2>
        <PongSpinner
          size={80}
        />
      </div>
    )
  }

  return(
    <div>
      {error && <p>{error}</p>}
      <RegisterForm 
        registerUser={registerUser}
        history={history}
      />
    </div>
  )
  
}

export default connect(
  null,
  { registerUser }
)(RegisterPage);