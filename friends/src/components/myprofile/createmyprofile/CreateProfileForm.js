import React, { useState, useEffect } from 'react';
import { avatarList } from '../AvatarList';
import { connect, useSelector } from 'react-redux';

// FORM
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';

// ACTIONS
import { createProfile } from '../../../actions'

// STYLING
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Calendar from 'react-calendar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText'
import { grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    color: grey['A400'],
    fontSize: '135%',
    // '&.Mui-focused': {
    //   color: 'rgb(121,135,131)'
    // }
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
    cursor: 'pointer',
  },
}));

const ColoredRadio = withStyles({
  root: {
    color: "rgb(182,177,168)",
    '&$checked': {
      color: grey['A400'],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const CreateProfileForm = ({createProfile, id, history}) => {
  const classes = useStyles();
  const [DOB, setDOB] = useState(new Date());
  const [avatar, setAvatar] = useState();
  const [newDOB, setNewDOB] = useState(``);
  const [format, setFormat] = useState('');
  // const [location, setLocation] = useState('');
  // const [about, setAbout] = useState('');
  const [profile, setProfile] = useState();
  const [errorAvatar, setErrorAvatar] = useState(false)
  const [errorDOB, setErrorDOB] = useState(false)

  // RETRIEVING SELECTED AVATAR
  const avatarChoice = id => {
    setAvatar(avatarList[id])
    setProfile({...profile, avatar: `${avatarList[id]}`})
  }

  const addDOB = date => {
    setDOB(date)
    setNewDOB(DOB)
    setProfile({...profile, dob: `${date}`})
    console.log(date, DOB, newDOB)
  }

  const DOBChange = e => {
    setFormat(e.target.value)
    setProfile({...profile, dob_display: `${e.target.value}`})
  }
  
  const locationChange = e => {
    // setLocation(e.target.value)
    setProfile({...profile, location: `${e.target.value}`})
  }

  const aboutChange = e => {
    // setAbout(e.target.value)
    setProfile({...profile, about_me: `${e.target.value}`})
  }

  const handleSubmit = e => {
    e.preventDefault();
    // NO AVATAR AND NO DOB ERROR -> SET BOTH ERRORS TO TRUE
    if((avatar === undefined ||avatar === '') && (newDOB === undefined || newDOB === '')){
      setErrorAvatar(true)
      setErrorDOB(true)
      // console.log('ERROR LEVEL 1 - NO AVATAR OR DOB', avatar, newDOB)

    // NO AVATAR ERROR AND DOB PRESENT -> SET AVATAR ERROR TO TRUE
    }else if((avatar === undefined ||avatar === '') && (newDOB !== undefined || newDOB !== '')){
      setErrorAvatar(true)
      setErrorDOB(false)
      // console.log('ERROR LEVEL 2 - NO AVATAR BUT DOB PRESENT', avatar, newDOB)

    // AVATAR PRESENT AND NO DOB -> SET DOB ERROR TO TRUE
    }else if((avatar !== undefined ||avatar !== '') && (newDOB === undefined || newDOB === '')){
      setErrorAvatar(false)
      setErrorDOB(true)
      // console.log('ERROR LEVEL 3 - AVATAR PRESENT BUT NO DOB', avatar, newDOB)

    }else{
      setErrorAvatar(false)
      setErrorDOB(false)
      createProfile(profile, id)
      setProfile({avatar: '', about_me: '', dob: `${DOB}`, dob_display: '', location: ''})
      history.push('/api/register/createprofile/questionnaire')
      // console.log('PROFILE ON SUBMIT', profile)
      // console.log('NEWDOB', newDOB, 'DOB', DOB)
    }
  }

  // DOB FORMATS
  const monthNames = [
    "january", "february", "march",
    "april", "may", "june", "july",
    "august", "september", "october",
    "november", "december"
  ];

  function formatFullDate(date) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${day}, ${year}`
  }

  function formatShortDate(date) {
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${year}`
  }

  function formatMonth(date) {
    const monthIndex = date.getMonth();
    return `${monthNames[monthIndex]}`
  }

  return(
    <div>   
      Hello CreateProfileForm!
      <form style={{width:'50%', margin:'0 auto'}} onSubmit={handleSubmit}>
        <div>
          {/**************************** USER CAN SELECT AVATAR ****************************/}
          <label>
          <FormLabel component="legend" className={classes.root}>avatar selected:</FormLabel>
          <FormHelperText error>required</FormHelperText>
          {errorAvatar && (
            <FormHelperText error>please choose an avatar</FormHelperText>
          )}
            <Avatar src={avatar} className={classes.bigAvatar}></Avatar>
          </label>
          <label style={{width:'50%', display:'flex', flexWrap:'wrap'}}>
            {avatarList.map((item, index) => {
              return <Avatar key={index} src={item} alt='avatar image' className={classes.bigAvatar} onClick={()=>{avatarChoice(index)}} />
            })}
          </label>
        </div>
        {/**************************** USER CAN SELECT DATE OF BIRTH ****************************/}
        <FormLabel component="legend" className={classes.root}>birthdate:</FormLabel>
        <FormHelperText error>required (birthdate can not be updated later)</FormHelperText>
        {errorDOB && (
          <FormHelperText error>please set your birthdate</FormHelperText>
        )}
        <TextField
          // defaultValue=''
          value={newDOB === '' ? '':formatFullDate(DOB)}
          margin="normal"
          // variant="outlined"
          InputProps={{
            readOnly: true,
            style:{textAlign:'center'}
          }}
        />
        <br />
        <Calendar 
        onChange = {date=>addDOB(date)}
        calendarType='US'
        />
        <label>
          <FormLabel component="legend" className={classes.root}>birthdate display:</FormLabel>
          <RadioGroup aria-label="category" name="category" value={format} onChange={DOBChange}>
            <FormControlLabel 
              name='DOB'
              value={formatMonth(DOB)}
              control={<ColoredRadio />} 
              label="mm" />
            <FormControlLabel 
              name='DOB'
              value={formatShortDate(DOB)}
              control={<ColoredRadio />} 
              label="mm yyyy" />
            <FormControlLabel 
              name='DOB'
              value={formatFullDate(DOB)}
              control={<ColoredRadio />} 
              label="mm dd yyyy" />
            <FormControlLabel 
              name='DOB'
              value=''
              control={<ColoredRadio />} 
              label="don't display my birthdate" />
          </RadioGroup>
        </label>
        {/**************************** USER CAN ADD LOCATION ****************************/}
        <label>
          <FormLabel component="legend" className={classes.root}>location:</FormLabel>
          <TextField 
          type='text'
          name='location'
          style={{width:'50%'}}
          onChange={locationChange}
          />
        </label>
        <br />
        {/**************************** USER CAN ADD INFO ABOUT THEMSELVES ****************************/}
        <label>
          <FormLabel component="legend" className={classes.root}>about me:</FormLabel>
          <TextField 
          multiline
          rows="2"
          name='location'
          variant="outlined"
          fullWidth
          onChange={aboutChange}
          />
        </label>
        {errorAvatar && (
          <FormHelperText error>please choose an avatar</FormHelperText>
        )}
        {errorDOB && (
          <FormHelperText error>please set your birthdate</FormHelperText>
        )}
        <Button type='submit'>submit</Button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createProfile }
)(CreateProfileForm);