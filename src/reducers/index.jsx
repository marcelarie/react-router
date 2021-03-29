
import { combineReducers } from 'redux'
import pagesReducer from '../reducers/pages.jsx'
import perPagesReducer from '../reducers/perPages.jsx'

export default combineReducers({
    pages: pagesReducer,
    perPage: perPagesReducer
})

