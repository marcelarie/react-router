
import { combineReducers } from 'redux'
import pagesReducer from '../reducers/pages.jsx'
import perPagesReducer from '../reducers/perPages.jsx'

const reducers = combineReducers({
    pages: pagesReducer,
    perPage: perPagesReducer
})

export default reducers
