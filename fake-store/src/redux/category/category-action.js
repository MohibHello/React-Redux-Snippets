import axios from 'axios';
import {FETCH_CATEGORY_FAILURE,FETCH_CATEGORY_REQUEST,FETCH_CATEGORY_SUCCESS} from './category-types'

// const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

  export const fetchCategory = () => {
    debugger
    return (dispatch) => {
      dispatch(fetchCategoryRequest());
      axios
        .get('https://fakestoreapi.com/products/categories')
        .then((response) => {
          // response.data is the Category
          const category = response.data;
          console.log('backend data', category);
          dispatch(fetchCategorySuccess(category));
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchCategoryFailure(error.message));
        });
    };
  };

  export const fetchCategoryRequest = () => {
    return {
      type: FETCH_CATEGORY_REQUEST,
    };
  };
  
  export const fetchCategorySuccess = (category) => {
    return {
      type: FETCH_CATEGORY_SUCCESS,
      payload: category,
    };
  };
  
  export const fetchCategoryFailure = (error) => {
    return {
      type: FETCH_CATEGORY_FAILURE,
      payload: error,
    };
}