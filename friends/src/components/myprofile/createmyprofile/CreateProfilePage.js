import React from 'react';
import { Link } from 'react-router-dom';
import CreateProfileForm from './CreateProfileForm';

const CreateProfilePage = () => {
  return(
    <div>
      <CreateProfileForm />
      <Link to='/api/register/createprofile/questionnaire'>next: questionnaire &#x21FE;</Link>
    </div>
  )
}

export default CreateProfilePage;