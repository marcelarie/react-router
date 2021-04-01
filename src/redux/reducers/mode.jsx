import types from '../types'

const modeState = {
    mode: 'pagination'
}

const modeReducer = (state = modeState, { type, payload }) => {
    switch (type) {
        case types.PAGINATION:
            return { ...state, mode: 'pagination' };
        case types.DATE:
            return { ...state, mode: 'date' };
        default:
            return state
    }
}

export default modeReducer
