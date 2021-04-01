import types from '../types'

const dataApi = {
    result: []
}

const dataApiReducer = (state = dataApi, { type, payload }) => {
    switch (type) {
        case types.SET_RESULT:
            return { ...state, result: payload }
        default:
            return state
    }
}
export default dataApiReducer
