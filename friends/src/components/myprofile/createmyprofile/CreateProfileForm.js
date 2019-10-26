import React, { useState, useEffect } from 'react';
import { avatarList } from '../AvatarList';
import { connect, useSelector } from 'react-redux';

// FORM
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';

// ACTIONS
import { createProfile } from '../../../actions'

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

const CreateProfileForm = props => {
  const classes = useStyles();
  const [avatar, setAvatar] = useState()
  const [DOB, setDOB] = useState(new Date())
  const [profile, setProfile] = useState()

  const handleSubmit = e => {
    e.preventDefault();
    props.createProfile(profile, props.id)
    setProfile({profile: [
      {avatar: ''}
    ]})
    console.log('PROFILE ON SUBMIT', profile)
  }

  // RETRIEVING SELECTED AVATAR
  const choice = id => {
    // `${avatarList[id]}`
    setAvatar(avatarList[id])
    setProfile({profile: [
      {avatar: `${avatarList[id]}`}
    ]})
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
      {console.log(profile)}
      <form style={{width:'50%', margin:'0 auto'}} onSubmit={handleSubmit}>
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
        <button>submit</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createProfile }
)(CreateProfileForm);