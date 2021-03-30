
import { combineReducers } from 'redux'
import pagesReducer from '../reducers/pages.jsx'
import modeReducer from '../reducers/mode.jsx'

const reducers = combineReducers({
    pages: pagesReducer,
    modes: modeReducer
})

export default reducers
