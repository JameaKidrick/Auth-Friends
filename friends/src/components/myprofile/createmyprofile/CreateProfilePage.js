import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import CreateProfileForm from './CreateProfileForm';
import { connect, useSelector } from 'react-redux';

// ACTIONS
import { getActiveUserData } from '../../../actions';
  // ADDED GET ACTIVE USER ACTION TO BRING IN LOGGEDIN STATE

const CreateProfilePage = props => {
  const activeUser = useSelector(state => state.activeUser)

  useEffect(() => {
    props.getActiveUserData();
  }, [])

  return(
    <div>
      {activeUser.map(item => {
        return(
          <div key={item.id}>
            {console.log()}
            <CreateProfileForm id={item.id} />
            <Link to='/api/register/createprofile/questionnaire'>next: questionnaire &#x21FE;</Link>
          </div>
        )
      })}
    </div>
  )
}


export default connect(
  null,
  { getActiveUserData }
)(CreateProfilePage);