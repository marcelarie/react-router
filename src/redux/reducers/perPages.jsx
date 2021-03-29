const perPagesReducer = (state = 25, action) => {
    switch (action.type) {
        case 'CHANGE_PER_PAGE':
            return action.payload;
        default:
            return state;
    }
}

export default perPagesReducer
