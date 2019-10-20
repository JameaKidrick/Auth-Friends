import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import UpdateFriend from './UpdateFriend'

const FriendsListPage = () => {
  const [friend, setFriend] = useState([])
  const [addFriend, setAddFriend] = useState({username: '', password: ''})

  const handleChange = e => {
    setAddFriend({...addFriend, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/users', addFriend)
      .then(response => {
        console.log('ADD FRIENDS', response.data)
        setFriend(response.data)
      })
      .catch(error => console.log('POSTING ERROR', error))
    setAddFriend({username: '', password: ''})
  }

  const fetchData = () => {
    axiosWithAuth()
      .get('/api/users')
      .then(response => {
        console.log('GET FRIENDS', response.data)
        setFriend(response.data)
      })
      .catch(error => console.log('CALL ERROR', error))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return(

    <div>
      <h1>Hello FriendsListPage!</h1>
      <div>
        <h3 style={{color: 'lime'}}>Add a New Friend!</h3>
        <form onSubmit={handleSubmit}>
          <input 
          name='username'
          placeholder='username'
          type='text'
          onChange={handleChange}
          value={friend.username}
          />
          <input 
          name='password'
          placeholder='password'
          type='text'
          onChange={handleChange}
          value={friend.password}
          />
          {/* <input 
          name='email'
          placeholder='email'
          type='text'
          onChange={handleChange}
          value={friend.email}
          /> */}
          <button>Add Friend</button>
        </form>
      </div>
      {friend.map(item => {
        return(
          <div style={{border:'2px solid red'}} key={item.id}>
            <h2 style={{color:'red'}}>{item.id}</h2>
            <h3 style={{color: 'mediumblue'}}>{`Update ${item.username}'s Information`}</h3>
            <UpdateFriend item={item} fetchData={fetchData} />
            <h3>{item.username}</h3>
            <p>{item.password}</p>
            <p>{item.email}</p>
          </div>
        )
      })}
    </div>
    
  )
}

export default FriendsListPage;