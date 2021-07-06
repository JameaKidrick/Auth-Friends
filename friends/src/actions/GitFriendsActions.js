import { axiosWithAuth } from '../utils/axiosWithAuth';

// ACTION TYPES
export const START_FETCHING = 'START_FETCHING';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_ACTIVE_USER_SUCCESS = 'FETCH_ACTIVE_USER_SUCCESS';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const CREATION_SUCCESS = 'CREATION_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// ACTION CREATORS
export const getUsersData = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .get('/users')
    .then(response => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data })
    })
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }))
}

export const getActiveUserData = setUser => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .get('/activeUser')
    .then(response => {
      // JUST IN CASE ACTIVE USER COLLECTS MULTIPLE USERS, THE FILTER WILL FIND THE ONE THAT IS LOGGED IN BASED ON LOCAL STORAGE'S USERNAME
      const filter = response.data.find(item => {
        return item.username === localStorage.getItem('Active User')
      })
      // console.log('FIND', filter)
      setUser(filter)
      dispatch({ type: FETCH_ACTIVE_USER_SUCCESS, payload: response.data })
    })
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }))
}

export const registerUser = (credentials, history) => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .post('/api/users', credentials)
    .then(response => {
      dispatch({ type: REGISTRATION_SUCCESS, payload: response.data })
      localStorage.setItem('token', response.data.payload);
      localStorage.setItem('Active User', credentials.username)
      history.push(`/`) // if I want id in url for later: `/myprofile/${response.data.id}`
    })
    .catch(error => {
      if(422){
        const errorAlert = `There is already an account under that username.`;
        dispatch({ type: FETCH_FAILURE, payload: errorAlert })
      }else{
        dispatch({ type: FETCH_FAILURE, payload: error.response })}
    })
}

export const createProfile = (profile, id) => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .put(`/api/create/${id}`, profile)
    .then(response => {
      console.log('ADD FRIENDS', response.data[id-1])
      dispatch({ type: CREATION_SUCCESS, payload: response.data[id-1] })
    })
    .catch(error => {
      if(409){
        const errorAlert = console.log(`NOOOOOOOOOOOOOOO!!!!!!!!!`);
        dispatch({ type: FETCH_FAILURE, payload: errorAlert })
      }else{
        dispatch({ type: FETCH_FAILURE, payload: error.response })}
    })
}

export const loginUser = (credentials, history) => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .post('/api/login', credentials)
    .then(response => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data })
      localStorage.setItem('token', response.data.payload);
      localStorage.setItem('Active User', credentials.username)
      history.push(`/myprofile`) // if I want id in url for later: `/myprofile/${response.data.id}`
      
    })
    .catch(error => {
      if(403){
        const errorAlert = `Username or Password are incorrect. Please try again.`;
        dispatch({ type: FETCH_FAILURE, payload: errorAlert })
      }else{
        dispatch({ type: FETCH_FAILURE, payload: error.response })}
    })
}

export const logoutUser = (history) => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .delete('/api/activeUser')
    .then(() => {
      dispatch({ type: LOGOUT_SUCCESS})
      localStorage.removeItem('token')
      localStorage.removeItem('Active User')
      history.push(`/`)
    })
    .catch(error => {
      dispatch({ type: FETCH_FAILURE, payload: error.response })
    })
}

// console.log('RESPONSE', response, 'RESPONSE.DATA', response.data, 'RESPONSE.DATA.PAYLOAD', response.data.payload)
