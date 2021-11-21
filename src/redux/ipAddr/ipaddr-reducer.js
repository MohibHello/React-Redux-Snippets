import {FETCH_IPADDR_FAILURE,FETCH_IPADDR_REQUEST,FETCH_IPADDR_SUCCESS} from './ipaddr-types'

const initialState = {
    loading: false,
    data: [],
    error: '',
    message: '',
  };


  const ipaddrReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IPADDR_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_IPADDR_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: '',
        };
      case FETCH_IPADDR_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ipaddrReducer;