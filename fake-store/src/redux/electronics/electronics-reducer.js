import {FETCH_ELECTRONICS_FAILURE,FETCH_ELECTRONICS_REQUEST,FETCH_ELECTRONICS_SUCCESS,DELETE_ELECTRONICS} from './electronics-types'

const initialState = {
    loading: false,
    data: [],
    error: '',
    message: '',
  };


  const electronicsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ELECTRONICS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ELECTRONICS_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: '',
        };
      case FETCH_ELECTRONICS_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      case DELETE_ELECTRONICS:
        debugger
        return {
          loading:false,
          data:state.data.filter(
            (product) => product.id !== action.payload.id
          ),
          error:''
        }
      default:
        return state;
    }
  };
  
  export default electronicsReducer;