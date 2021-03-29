
const pagesReducer = (state = 1, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return state + 1;
        case 'LAST_PAGE':
            return state - 1;
        case 'CHANGE_PAGE':
            return action.payload;
        default:
            return state;
    }
}

export default pagesReducer
