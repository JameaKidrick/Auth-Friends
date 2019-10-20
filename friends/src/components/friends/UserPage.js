import React, { useState, useEffect } from 'react';
import  axios  from 'axios';

const Friend = (props) => {
  // const [friend, setFriend] = useState();

  // useEffect(() => {
  //   const id = props.match.params.id;
  //   axios
  //     .get(`/api/friends/${id}`)
  //     .then(response => {
  //       console.log(response.data)
  //       setFriend(response.data)
  //     })
  //     .catch(error => {
  //       console.log('FRIEND RETRIEVAL ERROR', error)
  //     })
  // }, [])
  // console.log(friend)
  // // const { name, age, email } = friend
  // return(
  //   <div>
  //     {console.log(friend)}
  //     Hello Friend!
  //     {/* <p>{friend.id}</p> */}
  //   </div>
  // )
}

export default Friend;