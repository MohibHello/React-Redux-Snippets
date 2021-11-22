import {FETCH_CATEGORY_FAILURE,FETCH_CATEGORY_REQUEST,FETCH_CATEGORY_SUCCESS} from './category-types'

const initialState = {
    loading: false,
    data: [],
    error: '',
    message: '',
  };


  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CATEGORY_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: '',
        };
      case FETCH_CATEGORY_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default categoryReducer;