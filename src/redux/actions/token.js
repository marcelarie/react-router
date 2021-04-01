import { login } from '../../Api/login.js'
import types from '../types'

const getToken = ({ username, password }) => {

    return async dispatch => {

        const token = await login(username, password)

        dispatch({
            type: types.GET_TOKEN,
            payload: token.data
        })
    }
}

export { getToken }
