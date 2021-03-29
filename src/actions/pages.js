
const nextPage = () => {
    return {
        type: 'NEXT_PAGE'
    }
}
const lastPage = () => {
    return {
        type: 'LAST_PAGE'
    }
}

const changePage = payload => {
    return {
        type: 'CHANGE_PAGE',
        payload
    }
}

const changePerPage = payload => {
    return {
        type: 'CHANGE_PER_PAGE',
        payload
    }
}

export { nextPage, lastPage, changePage, changePerPage }
