
const modeState = {
    mode: 'pagination'
}

const modeReducer = (state = modeState, { type, payload }) => {
    switch (type) {
        case 'PAGINATION':
            return { ...state, mode: 'pagination' };
        case 'DATE':
            return { ...state, mode: 'date' };
        default:
            return state
    }
}

export default modeReducer
