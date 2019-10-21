import { START_FETCHING, FETCH_FAILURE, FETCH_USERS_SUCCESS, FETCH_ACTIVE_USER_SUCCESS, REGISTRATION_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions';

export const initialState = {
  users: [ ],
  activeUser: [ ],
  isFetching: false,
  error: '',
  // currentUser: [ ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case START_FETCHING:
      return{
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_USERS_SUCCESS:
    case REGISTRATION_SUCCESS:
      return{
        ...state,
        isFetching: false,
        error: '',
        users: action.payload
      };
    case FETCH_ACTIVE_USER_SUCCESS:
      return{
        ...state,
        isFetching: false,
        error: '',
        activeUser: action.payload,
      }
    case LOGIN_SUCCESS:
        return{
          ...state,
          isFetching: false,
          error: '',
        };
    case LOGOUT_SUCCESS:
      return{
        ...state,
        isFetching: false,
        error: '',
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