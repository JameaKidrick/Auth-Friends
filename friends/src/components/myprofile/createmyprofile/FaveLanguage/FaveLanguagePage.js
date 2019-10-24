import React from 'react';
import { Link } from 'react-router-dom';
import FaveLanguageForm from './FaveLanguageForm'

const FaveLanguagePage = () => {
  return(
    <div>
      <FaveLanguageForm />
      <Link to='/api/register/createprofile/questionnaire'>&#x21FD; back</Link>
      
    </div>
  )
}

export default FaveLanguagePage;