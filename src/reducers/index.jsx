
import { combineReducers } from 'redux'
import loggedReducer from './logged.jsx'


export default combineReducers({
    logged: loggedReducer
})

