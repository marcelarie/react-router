import types from '../types'

const paginationMode = () => {
    return {
        type: types.PAGINATION
    }
}

const dateMode = () => {
    return {
        type: types.DATE
    }
}

export { paginationMode, dateMode }
