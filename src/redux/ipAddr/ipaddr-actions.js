import axios from 'axios';
import {FETCH_IPADDR_FAILURE,FETCH_IPADDR_REQUEST,FETCH_IPADDR_SUCCESS} from './ipaddr-types'

const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  export const fetchIpAddr = () => {
    debugger
    return (dispatch) => {
      dispatch(fetchIpAddrRequest());
      axios
        .get('https://api.zippopotam.us/us/33162')
        .then((response) => {
          // response.data is the IpAddr
          const ipAddr = response.data.places;
          console.log('backend data', ipAddr);
          dispatch(fetchIpAddrSuccess(ipAddr));
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchIpAddrFailure(error.message));
        });
    };
  };

  export const fetchIpAddrRequest = () => {
    debugger
    return {
      type: FETCH_IPADDR_REQUEST,
    };
  };
  
  export const fetchIpAddrSuccess = (ipAddr) => {
    debugger
    return {
      type: FETCH_IPADDR_SUCCESS,
      payload: ipAddr,
    };
  };
  
  export const fetchIpAddrFailure = (error) => {
    return {
      type: FETCH_IPADDR_FAILURE,
      payload: error,
    };
}