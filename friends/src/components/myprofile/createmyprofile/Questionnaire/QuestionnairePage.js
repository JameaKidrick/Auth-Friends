import React from 'react';
import { Link } from 'react-router-dom';
import QuestionnaireForm from './QuestionnaireForm';

const QuestionnairePage = () => {
  return(
    <div>
      <QuestionnaireForm />
      <Link to='/api/register/createprofile'>&#x21FD; back</Link>
      <Link to='/api/register/createprofile/favelanguage'>next: favorite language &#x21FE;</Link>
    </div>
  )
}

export default QuestionnairePage;