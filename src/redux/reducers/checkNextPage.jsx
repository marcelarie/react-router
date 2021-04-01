const checkNextPageState = {
    checkPage: false
}

const checkNextPageReducer = (
    state = checkNextPageState, { type, payload }) => {

    switch (type) {
        case 'CHECK_NEXT_PAGE':
            return { ...state, checkPage: payload }
        default:
            return state
    }
}


export default checkNextPageReducer
