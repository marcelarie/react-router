import axios from "axios"


const checkNextPage = (data, perPage) => {
    return async (dispatch) => {
        console.log(data)
        if (data) {

            const lastItem = data[data.length - 1].id + 1 + perPage
            var result = await axios.get(
                `https://api.punkapi.com/v2/beers/${lastItem}`)
                .then(() => false)
                .catch(() => true)
            console.log(result)
        }

        dispatch({
            type: 'CHECK_NEXT_PAGE',
            payload: result
        })
    }
}

export { checkNextPage }
