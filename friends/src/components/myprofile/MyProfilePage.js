import React, { useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { loginUser } from '../../actions'

const MyProfilePage = props => {

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/api/users/${}`)
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <div>
      {console.log(props.activeUser)}
      {/* {console.log(props.users)} */}
      Hello MyProfilePage!
      {/* {props.activeUser.username} */}
    </div>
  )
}

const mapStatToProps = state => {
  return{
    activeUser: state.activeUser,
    users: state.users
  }
}

export default connect(
  mapStatToProps,
  { }
)(MyProfilePage);