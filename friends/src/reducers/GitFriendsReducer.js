import { START_FETCHING, FETCH_FAILURE, FETCH_USERS_SUCCESS, FETCH_ACTIVE_USER_SUCCESS, REGISTRATION_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions';

export const initialState = {
  users: [ ],
  activeUser: [ ],
  isFetching: false,
  error: '',
  // currentUser: [ ],
  loggedIn: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case START_FETCHING:
      return{
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCH_USERS_SUCCESS:
    case REGISTRATION_SUCCESS:
      return{
        ...state,
        isFetching: false,
        error: '',
        users: action.payload,
        loggedIn: true
      };
    case FETCH_ACTIVE_USER_SUCCESS:
      return{
        ...state,
        isFetching: false,
        error: '',
        activeUser: action.payload,
        loggedIn: true
      }
    case LOGIN_SUCCESS:
        return{
          ...state,
          isFetching: false,
          error: '',
          loggedIn: true
        };
    case LOGOUT_SUCCESS:
      return{
        ...state,
        isFetching: false,
        error: '',
        loggedIn: false
      };
    case FETCH_FAILURE:
      return{
        ...state,
        isFetching: false,
        error: action.payload,
        ...state.loggedIn
      }
    default:
      return state
  }
}