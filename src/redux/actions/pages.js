import types from '../types'

const nextPage = () => {
    return {
        type: types.NEXT_PAGE
    }
}

const lastPage = () => {
    return {
        type: types.LAST_PAGE
    }
}

const changePage = payload => {
    return {
        type: types.CHANGE_PAGE,
        payload
    }
}

const changePerPage = payload => {
    return {
        type: types.CHANGE_PER_PAGE,
        payload
    }
}

export { nextPage, lastPage, changePage, changePerPage }
