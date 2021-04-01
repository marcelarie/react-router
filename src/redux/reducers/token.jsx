
const tokenState = {
    token: null
}

const tokenReducer = (state = tokenState, { type, payload }) => {
    switch (type) {
        case 'GET_TOKEN':
            return { ...state, ...payload }
        default:
            return state
    }
}

export default tokenReducer
