import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions'

import RegisterForm from './RegisterForm'

const RegisterPage = ({history, registerUser, isFetching, error}) => {
  const [credentials, setCredentials] = useState({username: '', password: ''})

  const registerSubmit = e => {
    e.preventDefault();
    registerUser(credentials, history);
    setCredentials(credentials)
    // console.log(credentials)
  }

  if(isFetching){
    return <h2>Registering User...</h2>
  }

  return(
    <div>
      {error && <p>{error}</p>}
      <RegisterForm 
        registerSubmit={registerSubmit} 
        credentials={credentials}
        setCredentials={setCredentials} 
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
  { registerUser }
)(RegisterPage);

// const RegisterPage = ({history, registerUser, isFetching, error}) => {
//   const [credentials, setCredentials] = useState({username: '', password: ''})

//   const handleChange = e => {
//     setCredentials({...credentials, [e.target.name]: e.target.value})
//     console.log(e.target.name)
//   };

//   const registerSubmit = e => {
//     e.preventDefault();
//     registerUser(credentials, history);
//     setCredentials({username: '', password: ''})
//     console.log('REGISTERSUBMIT', credentials)
//   }

//   if(isFetching){
//     return <h2>Registering User...</h2>
//   }

//   return(
//     <div >
//       {error && <p>{error}</p>}
//       <RegisterForm 
//         handleChange={handleChange} 
//         registerSubmit={registerSubmit} 
//         setCredentials={setCredentials} 
//       />
//     </div>
//   )
  
// }

// const mapStateToProps = state => {
//   return {
//     isFetching: state.isFetching,
//     error: state.error
//   }
// }

// export default connect(
//   mapStateToProps,
//   { registerUser }
// )(RegisterPage);