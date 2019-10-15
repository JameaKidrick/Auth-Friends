import React from 'react';

const LoginPage = () => {
  
  return (
    <div>
      Hello LoginPage!
      <form>
        <input 
        name= 'username'
        type= 'text'
        />
        <input 
        name= 'password'
        type= 'password'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage;