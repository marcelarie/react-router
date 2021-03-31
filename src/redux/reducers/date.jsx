
const dateState = {
    date: ''
}

const dateReducer = (state = dateState, { type, payload }) => {
    switch (type) {
        case 'CHANGE_DATE':
            return { ...state, date: payload };
        default:
            return state;
    }
}

export default dateReducer
