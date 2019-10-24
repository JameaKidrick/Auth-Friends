import React, { useState } from 'react';
import { avatarList } from './AvatarList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Calendar from 'react-calendar';

// COMPONENTS
import Questionnaire from './createmyprofile/Questionnaire/QuestionnaireForm'
import FaveLanguage from './createmyprofile/FaveLanguage/FaveLanguagePage';


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

  const choice = id => {
    console.log(avatarList[id])
    setAvatar(`${avatarList[id]}`)
  }

  function formatFullDate(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${day}, ${year}`
  }

  function formatShortDate(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${year}`
  }

  function formatMonth(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const monthIndex = date.getMonth();
    return `${monthNames[monthIndex]}`
  }
  

  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  return(
    <div>   
      Hello CreateProfileForm!
      
      <form style={{width:'50%', margin:'0 auto'}}>
        <div>
          <h2>
            Selected Avatar:
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
      </form>
    </div>
  )
}

export default CreateProfileForm;