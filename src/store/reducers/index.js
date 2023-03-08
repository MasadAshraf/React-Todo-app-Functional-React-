import { combineReducers } from 'redux'
import  authSlice  from './authSlice'
import  todoSlice  from './todoSlice'

const rootReducer = combineReducers({
    auth : authSlice,
    todo : todoSlice
})

export default rootReducer
