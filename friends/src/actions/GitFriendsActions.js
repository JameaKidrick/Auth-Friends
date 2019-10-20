import { axiosWithAuth } from '../utils/axiosWithAuth';

// ACTION TYPES
export const START_FETCHING = 'START_FETCHING';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';

// ACTION CREATORS
export const getUsersData = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .get('/users')
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data })
    })
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }))
}

export const registerUser = (credentials, history) => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .post('/api/users', credentials)
    .then(response => {
      dispatch({ type: REGISTRATION_SUCCESS, payload: response.data })
      history.push('/')
    })
    .catch(error => {
      if(422){
        const errorAlert = `There is already an account under that username.`;
        dispatch({ type: FETCH_FAILURE, payload: errorAlert })
      }else{
        dispatch({ type: FETCH_FAILURE, payload: error.response })}
    })
}
