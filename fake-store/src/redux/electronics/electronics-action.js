import axios from 'axios';
import {FETCH_ELECTRONICS_FAILURE,FETCH_ELECTRONICS_REQUEST,FETCH_ELECTRONICS_SUCCESS,DELETE_ELECTRONICS} from './electronics-types'

// const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

  export const fetchElectronics = () => {
    return (dispatch) => {
      dispatch(fetchElectronicsRequest());
       axios
        .get('https://fakestoreapi.com/products/category/electronics')
        .then((response) => {
          // response.data is the Electronics
          const electronics = response.data;
          console.log('backend data', electronics);
          dispatch(fetchElectronicsSuccess(electronics));
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchElectronicsFailure(error.message));
        });
    };
  };

  export const DeleteElectronics = (id) => {
    return (dispatch) => {
      dispatch(fetchElectronicsRequest());
       axios
        .delete('https://fakestoreapi.com/products/'+id)
        .then((response) => {
          debugger
          // response.data is the Electronics
          const electronics = response.data;
          console.log('backend data', electronics);
          dispatch({type:DELETE_ELECTRONICS,payload:electronics});
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchElectronicsFailure(error.message));
        });
    };
  };

  export const fetchElectronicsRequest = () => {
    return {
      type: FETCH_ELECTRONICS_REQUEST,
    };
  };
  
  export const fetchElectronicsSuccess = (electronics) => {
    return {
      type: FETCH_ELECTRONICS_SUCCESS,
      payload: electronics,
    };
  };
  
  export const fetchElectronicsFailure = (error) => {
    return {
      type: FETCH_ELECTRONICS_FAILURE,
      payload: error,
    };
}