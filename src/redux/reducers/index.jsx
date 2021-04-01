
import { combineReducers } from 'redux'
import pagesReducer from '../reducers/pages.jsx'
import modeReducer from '../reducers/mode.jsx'
import dateReducer from '../reducers/date.jsx'
import dataApiReducer from '../reducers/dataApi.jsx'
import tokenReducer from '../reducers/token.jsx'
import checkNextPageReducer from '../reducers/checkNextPage.jsx'



const reducers = combineReducers({
    pages: pagesReducer,
    modes: modeReducer,
    dates: dateReducer,
    data: dataApiReducer,
    tokens: tokenReducer,
    checkNextPage: checkNextPageReducer
})

export default reducers
