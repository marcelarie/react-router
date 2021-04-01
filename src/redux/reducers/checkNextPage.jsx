import types from '../types'

const checkNextPageState = {
    checkPage: false
}

const checkNextPageReducer = (
    state = checkNextPageState, { type, payload }) => {

    switch (type) {
        case types.CHECK_NEXT_PAGE:
            return { ...state, checkPage: payload }
        case types.SET_CHECK_NEXT_PAGE:
            return { ...state, checkPage: payload }
        default:
            return state
    }
}


export default checkNextPageReducer
