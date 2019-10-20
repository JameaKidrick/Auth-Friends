import { START_FETCHING, FETCH_FAILURE, FETCH_SUCCESS, REGISTRATION_SUCCESS } from '../actions';

export const initialState = {
  users: [ ],
  userLoggedIn: [
    {
        id: 1,
        username: 'kimfox',
        password: 'love1'
    }
  ],
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case START_FETCHING:
      return{
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
    case REGISTRATION_SUCCESS:
      return{
        ...state,
        isFetching: false,
        error: '',
        users: action.payload
      };
    case FETCH_FAILURE:
      return{
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}