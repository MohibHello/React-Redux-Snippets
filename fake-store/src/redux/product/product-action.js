import axios from 'axios';
import {FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS} from './product-types'

// const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

  export const fetchProduct = (id) => {
    return (dispatch) => {
      dispatch(fetchProductRequest());
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          // response.data is the Product
          const product = response.data;
          console.log('backend data', product);
          dispatch(fetchProductSuccess(product));
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchProductFailure(error.message));
        });
    };
  };

  export const fetchProductRequest = () => {
    return {
      type: FETCH_PRODUCT_REQUEST,
    };
  };
  
  export const fetchProductSuccess = (product) => {
    return {
      type: FETCH_PRODUCT_SUCCESS,
      payload: product,
    };
  };
  
  export const fetchProductFailure = (error) => {
    return {
      type: FETCH_PRODUCT_FAILURE,
      payload: error,
    };
}