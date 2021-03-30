
const pagesState = {
    page: 1,
    perPage: 25
}

const pagesReducer = (state = pagesState, { type, payload }) => {
    switch (type) {
        case 'NEXT_PAGE':
            return { ...state, page: state.page + 1 };
        case 'LAST_PAGE':
            return { ...state, page: state.page - 1 };
        case 'CHANGE_PAGE':
            return { ...state, page: payload };
        case 'CHANGE_PER_PAGE':
            return { ...state, perPage: payload };
        default:
            return state;
    }
}

export default pagesReducer
