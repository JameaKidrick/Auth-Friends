import React from 'react';

const CurrentUser = () => {
  const [user, setUser] = useState({id: 0, username: '', password: ''})
  

  useEffect(() => {
    props.getActiveUserData();
    props.activeUser.find(item => {
      const person = item.username === localStorage.getItem('Active User') 
      if(person){
        console.log(item.username)
        console.log(item.id)
        setUser({id: item.id, username: item.username, password: item.password})
      }
    })
  }, [])
  
  return(
    <div>user</div>
  )
}

export default CurrentUser;