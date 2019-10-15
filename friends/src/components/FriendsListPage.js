import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsListPage = () => {
  const [friend, setFriend] = useState([])
  const [addFriend, setAddFriend] = useState({name: '', age: 0, email: ''})

  const handleChange = e => {
    setAddFriend({...addFriend, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', addFriend)
      .then(response => {
        console.log('ADD FRIENDS', response.data)
        setFriend(response.data)
      })
      .catch(error => console.log('POSTING ERROR', error))
    setAddFriend({name: '', age: 0, email: ''})
  }

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(response => {
        console.log('GET FRIENDS', response.data)
        setFriend(response.data)
      })
      .catch(error => console.log('CALL ERROR', error))
  }, [])

  return(

    <div>
    {console.log(friend)}
      <h1>Hello FriendsListPage!</h1>
      <div>
        Add a New Friend!
        <form onSubmit={handleSubmit}>
          <input 
          name='name'
          placeholder='name'
          type='text'
          onChange={handleChange}
          // value={friend.name}
          />
          <input 
          name='age'
          placeholder='age'
          type='text'
          onChange={handleChange}
          // value={friend.age}
          />
          <input 
          name='email'
          placeholder='email'
          type='text'
          onChange={handleChange}
          // value={friend.email}
          />
          <button>Add Friend</button>
        </form>
      </div>
      {friend.map(item => {
        return(
          <>
            <button>Edit</button>
            <button>Delete</button>
            <h3>{item.name}</h3>
            <p>{item.age}</p>
            <p>{item.email}</p>
          </>
        )
      })}
    </div>
    
  )
}

export default FriendsListPage;