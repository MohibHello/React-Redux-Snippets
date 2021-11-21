import {FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS} from './user-types'

const initialState = {
    loading: false,
    users: [],
    error: '',
    message: '',
  };


  const reducer = (state = initialState, action) => {
    console.log("IN REDUCER")
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        debugger
        return {
          ...state,
          loading: true,
        };
      case FETCH_USERS_SUCCESS:
        debugger
        
        return {
          ...state,
          loading: false,
          users: action.payload.results,
        };
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;