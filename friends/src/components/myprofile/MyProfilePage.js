import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getActiveUserData } from '../../actions'

const MyProfilePage = props => {

  useEffect(() => {
    props.getActiveUserData();
  }, [])

  return (
    <div>
      {props.activeUser.map(item => {
        return(
          <div key={item.id}>
            <h3>{`Hello, ${item.username} (ID Number: ${item.id})! Welcome to MyProfilePage!`}</h3>
          </div>
        )
      })}
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