import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const UpdateFriends = props => {
  const [updateFriend, setUpdateFriend] = useState({name: '', age: 0, email: ''})
  const id = props.item.id;

  const handleChange = e => {
    setUpdateFriend({...updateFriend, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    Update(updateFriend);
  }

  const Update = () => {
    axiosWithAuth()
    .put(`/api/friends/${id}`, updateFriend)
    .then(response => {
      console.log('UPDATE FRIEND', response)
      // setUpdateFriend(response.data[id-1])
      props.fetchData()
    })
    .catch(error => console.log('UPDATE ERROR', error))
    setUpdateFriend({name: '', age: 0, email: ''})
  }

  const Delete = () => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`, updateFriend)
      .then(response => {
        console.log('DELETE FRIEND', response.data)
      //   setUpdateFriend(response.data[id-1])
        props.fetchData()
      })
      .catch(error => console.log('UPDATE ERROR', error))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name='name'
          placeholder='name'
          type='text'
          onChange={handleChange}
        />
        <input 
          name='age'
          placeholder='age'
          type='text'
          onChange={handleChange}
        />
        <input 
          name='email'
          placeholder='email'
          type='text'
          onChange={handleChange}
        />
        <button>Edit</button>
      </form>
      <button onClick={()=>Delete()} >Delete</button>
    </div>
  )
}

export default UpdateFriends;