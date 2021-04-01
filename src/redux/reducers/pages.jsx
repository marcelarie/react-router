
import types from '../types'

const pagesState = {
    page: 1,
    perPage: 25,
}

const pagesReducer = (state = pagesState, { type, payload }) => {
    switch (type) {
        case types.NEXT_PAGE:
            return { ...state, page: state.page + 1 };
        case types.LAST_PAGE:
            return { ...state, page: state.page - 1 };
        case types.CHANGE_PAGE:
            return { ...state, page: payload };
        case types.CHANGE_PER_PAGE:
            return { ...state, perPage: payload };
        default:
            return state;
    }
}

export default pagesReducer
