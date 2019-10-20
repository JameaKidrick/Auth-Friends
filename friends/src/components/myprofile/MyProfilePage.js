import React, { useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const MyProfilePage = () => {

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
      Hello MyProfilePage!
    </div>
  )
}

export default MyProfilePage;