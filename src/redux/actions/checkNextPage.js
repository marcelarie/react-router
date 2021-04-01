import axios from "axios"
import types from '../types'


const checkNextPage = (data, perPage) => {

    return async dispatch => {
        if (data) {

            const lastItem = data[data.length - 1].id + 1 + perPage
            var result = await axios.get(
                `https://api.punkapi.com/v2/beers/${lastItem}`)
                .then(() => false)
                .catch(() => true)
            console.log(result)
        }

        dispatch({
            type: types.CHECK_NEXT_PAGE,
            payload: result
        })
    }
}

const setCheckNextPage = payload => {
    console.log('set check next page :DDD')
    return {
        type: types.SET_CHECK_NEXT_PAGE,
        payload
    }
}

export { checkNextPage, setCheckNextPage }
