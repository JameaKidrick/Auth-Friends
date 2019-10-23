import React, { useState } from 'react';
import { avatarList } from './AvatarList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Calendar from 'react-calendar';

// COMPONENTS
import Questionnaire from './createmyprofile/Questionnaire'


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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: '100%',
    maxWidth: '65%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid blue',
    // paddingLeft:'3%',
    display: 'flex',
    
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItems: {
    border: '2px solid orange',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'flex-start'
  },
  questions: {
    border:'2px solid black',
    display:'flex',

  }
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
      
      <form style={{border:'2px solid red', width:'50%', margin:'0 auto'}}>
        <div>
          <h2>
            Selected Avatar:
            <Avatar src={avatar} className={classes.bigAvatar}></Avatar>
          </h2>
          <div style={{border:'2px solid red', width:'50%', display:'flex', flexWrap:'wrap'}}>
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
          name='DOBMonth'
          value={formatMonth(DOB)}
          />{formatMonth(DOB)} 
          <br />
          <input 
          type='radio'
          name='DOBShort'
          value={formatShortDate(DOB)}
          />{formatShortDate(DOB)} 
          <br />
          <input 
          type='radio'
          name='DOBFull'
          value={formatFullDate(DOB)}
          />{formatFullDate(DOB)}
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
        <Questionnaire />
      </form>
    </div>
  )
}

export default CreateProfileForm;