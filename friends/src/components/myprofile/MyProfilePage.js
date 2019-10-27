import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getActiveUserData } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
    cursor: 'pointer',
  },
}));

const MyProfilePage = props => {
  const classes = useStyles();
  const [user, setUser] = useState([])

  useEffect(() => {
    // SETTING USER INTO STATE
    props.getActiveUserData(setUser)
  }, [])
  // console.log('MYPROFILE CURRENT USER', user)

  return (
    <div>
      
      {/* {props.activeUser.map(item => {
        return(
          <div key={item.id}>
            {console.log(item)}
            <Avatar src={item.profile[4].avatar} className={classes.bigAvatar}></Avatar>
            <h1>{`${item.username} (ID Number: ${item.id})`}</h1> */}
            {/* <h2>{item.profile[0].location.toLowerCase()}</h2>
            <h2>birthdate: {item.profile[0].dob}</h2>
            <h2>about me: </h2>
            <h5>{item.profile[0].aboutme}</h5>
            <h2>favorite languages:</h2>
            <ul>
              {item.profile[0].favorite_languages.map(element => {
                return <li>{element}</li>
              })}
            </ul>
            <h2>questionnaire:</h2>
            <ul>
              {item.profile[0].questionnaire.map(element => {
                  return(
                    <div>
                      <li>
                        {element.question}
                      </li>
                      <detail>
                        {element.answer}
                      </detail>
                      <br />
                    </div>
                  )
                })}
            </ul> */}
          {/* </div>
        )
      })} */}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    activeUser: state.activeUser,
  }
}

export default connect(
  mapStateToProps,
  { getActiveUserData }
)(MyProfilePage);