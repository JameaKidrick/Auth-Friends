import React, { useState } from 'react';
import { avatarList } from './AvatarList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    cursor: 'pointer',
    '&:focused': {
      border: '2px solid blue'
    }
  },
});

const CreateProfileForm = () => {
  const classes = useStyles();
  const [avatar, setAvatar] = useState()
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));

  const choice = id => {
    console.log(avatarList[id])
    setAvatar(`${avatarList[id]}`)
  }

  

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return(
    <div>   
      Hello CreateProfileForm!
      
      <form>
        <div>
          {avatarList.map((item, index) => {
            return <Avatar key={index} src={item} alt='avatar image' className={classes.bigAvatar} onClick={()=>{choice(index)}} />
          })}
        </div>

        <h2>
        Selected Avatar:
          <Avatar src={avatar} className={classes.bigAvatar}></Avatar>
        </h2>

      </form>
    </div>
  )
}

export default CreateProfileForm;