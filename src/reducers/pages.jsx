
export default pagesReducer = (state = 1, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return state + 1;
        case 'LAST_PAGE':
            return state - 1;
        case 'CHANGE_PAGE':
            return state + 22;
        default:
            return state;
    }
}

