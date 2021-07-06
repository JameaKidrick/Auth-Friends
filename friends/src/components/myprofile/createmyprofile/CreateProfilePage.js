import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateProfileForm from './CreateProfileForm';
import { connect } from 'react-redux';

// ACTIONS
import { getActiveUserData } from '../../../actions';
  // ADDED GET ACTIVE USER ACTION TO BRING IN LOGGEDIN STATE

const CreateProfilePage = ({getActiveUserData, history}) => {

  const [user, setUser] = useState([])

  useEffect(() => {
    // SETTING USER INTO STATE
    getActiveUserData(setUser)
  }, [])

  return(
    <div>
      <CreateProfileForm 
      id={user.id} 
      history={history}
      />
      <Link to='/api/register/createprofile/questionnaire'>next: questionnaire &#x21FE;</Link>
    </div>
  )
}


export default connect(
  null,
  { getActiveUserData }
)(CreateProfilePage);