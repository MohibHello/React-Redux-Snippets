import axios from 'axios';
import {FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS} from './user-types'
import store from '../store'

const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUserRequest());
      axios
        .get('https://randomuser.me/api/')
        .then((response) => {
          // response.data is the User
          const users = response.data;
          console.log('backend data', users);
          console.log('store',store.getState())
          setTimeout(() => {
            dispatch(fetchUserSuccess(users));
          }, 5000);
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchUserFailure(error.message));
        });
    };
  };

  export const fetchUserRequest = () => {
    return {
      type: FETCH_USERS_REQUEST,
    };
  };
  
  export const fetchUserSuccess = (users) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
    };
  };
  
  export const fetchUserFailure = (error) => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error,
    };
}