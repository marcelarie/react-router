import axios from "axios"


const setResult = ({ page, perPage, mode, date }) => {

    return async (dispatch, getState) => {
        switch (mode) {
            case 'pagination':
                console.log(`Page:${page} perPage: ${perPage}`)
                var result = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
                break;
            case 'date':
                console.log(`Date:${date}`)
                var result = await axios.get(`https://api.punkapi.com/v2/beers?brewed_after=${date}`)
                break;
            default:
                console.log('DEFAULT~.~API')
                var result = await axios.get(`https://api.punkapi.com/v2/beers`)
                break;
        }

        dispatch({
            type: 'SET_RESULT',
            payload: result
        })
    }
}

export { setResult }
