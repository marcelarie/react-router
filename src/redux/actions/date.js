import types from '../types'


const changeDate = payload => {
    return {
        type: types.CHANGE_DATE,
        payload
    }
}

export { changeDate }
