
const dataApi = {
    result: []
}

const dataApiReducer = (state = dataApi, { type, payload }) => {
    switch (type) {
    case 'SET_RESULT':
        return { ...state, result: payload }
    default:
        return state
    }
}
export default dataApiReducer
