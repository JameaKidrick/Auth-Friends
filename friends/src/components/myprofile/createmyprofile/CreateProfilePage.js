import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateProfileForm from './CreateProfileForm';
import { connect } from 'react-redux';

// ACTIONS
import { getActiveUserData } from '../../../actions';
  // ADDED GET ACTIVE USER ACTION TO BRING IN LOGGEDIN STATE

const CreateProfilePage = props => {

  const [user, setUser] = useState([])

  useEffect(() => {
    // SETTING USER INTO STATE
    props.getActiveUserData(setUser)
  }, [])

  return(
    <div>
      <CreateProfileForm id={user.id} />
      <Link to='/api/register/createprofile/questionnaire'>next: questionnaire &#x21FE;</Link>
    </div>
  )
}


export default connect(
  null,
  { getActiveUserData }
)(CreateProfilePage);