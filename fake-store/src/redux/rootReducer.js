import { combineReducers } from 'redux'
import categoryReducer from './category/category-reducer'
import electronicsReducer from './electronics/electronics-reducer'
import productReducer from './product/product-reducer'

//for multiple reducers add here in kv pair
const rootReducer = combineReducers({
  categories: categoryReducer,
  electronics:electronicsReducer,
  products:productReducer
})

export default rootReducer