import React, { useState } from 'react';
import { avatarList } from '../AvatarList';

// FORM
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';

// COMPONENTS
import Questionnaire from './Questionnaire/QuestionnaireForm'
import FaveLanguage from './FaveLanguage/FaveLanguagePage';

// STYLING
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Calendar from 'react-calendar';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
    cursor: 'pointer',
  },
}));

const CreateProfileForm = () => {
  const classes = useStyles();
  const [avatar, setAvatar] = useState()
  const [DOB, setDOB] = useState(new Date())

  // RETRIEVING SELECTED AVATAR
  const choice = id => {
    console.log(avatarList[id])
    setAvatar(`${avatarList[id]}`)
  }

  // CHOSEN DOB
  function formatFullDate(date) {
    const monthNames = [
      "january", "february", "march",
      "april", "may", "june", "july",
      "august", "september", "october",
      "november", "december"
    ];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${day}, ${year}`
  }

  function formatShortDate(date) {
    const monthNames = [
      "january", "february", "march",
      "april", "may", "june", "july",
      "august", "september", "october",
      "november", "december"
    ];

    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${year}`
  }

  function formatMonth(date) {
    const monthNames = [
      "january", "february", "march",
      "april", "may", "june", "july",
      "august", "september", "october",
      "november", "december"
    ];

    const monthIndex = date.getMonth();
    return `${monthNames[monthIndex]}`
  }

  return(
    <div>   
      Hello CreateProfileForm!
      
      <Form style={{width:'50%', margin:'0 auto'}}>
        <div>
          <h2>
            avatar selected:
            <Avatar src={avatar} className={classes.bigAvatar}></Avatar>
          </h2>
          <div style={{width:'50%', display:'flex', flexWrap:'wrap'}}>
            {avatarList.map((item, index) => {
              return <Avatar key={index} src={item} alt='avatar image' className={classes.bigAvatar} onClick={()=>{choice(index)}} />
            })}
          </div>
        </div>
        <input 
        value={formatFullDate(DOB)}
        readOnly
        />
        <br />
        <Calendar 
        onChange={(date)=>setDOB(date)} 
        calendarType='US'
        />
        <div>
          birthdate display:
          <br />
          <input 
          type='radio'
          name='DOB'
          value={formatMonth(DOB)}
          />mm
          <br />
          <input 
          type='radio'
          name='DOB'
          value={formatShortDate(DOB)}
          />mm yyyy
          <br />
          <input 
          type='radio'
          name='DOB'
          value={formatFullDate(DOB)}
          />mm dd yyyy
          <br />
          <input 
          type='radio'
          name='DOB'
          // value=''
          />don't display my birthdate
        </div>
        <div>
          location:
          <input 
          type='text'
          name='location'
          // value={user.location}
          />
        </div>
        <div>
          about me:
          <input 
          type='textarea'
          name='location'
          // value={user.location}
          />
        </div>
      </Form>
    </div>
  )
}

export default CreateProfileForm;