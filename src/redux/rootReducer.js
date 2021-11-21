import { combineReducers } from 'redux'
import ipaddrReducer from './ipAddr/ipaddr-reducer'
import usersReducer from './randomUser/user-reducer'

//for multiple reducers add here in kv pair
const rootReducer = combineReducers({
  ipAddr: ipaddrReducer,
  users: usersReducer
})

export default rootReducer