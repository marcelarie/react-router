import { login } from '../../Api/login.js'

const getToken = ({ username, password }) => {

    return async (dispatch, getState) => {

        const token = await login(username, password)

        dispatch({
            type: 'GET_TOKEN',
            payload: token.data
        })
    }
}

export { getToken }
