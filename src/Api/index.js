// import React, { useState } from "react"
import axios from 'axios'

async function Api(mode, props) {
    switch (mode) {
        case 'pagination':
            console.log(`Page:${props.page} x ${props.perPage}`)
            return await axios.get(`https://api.punkapi.com/v2/beers?page=${props.page}&per_page=${props.perPage = 9}`)
        case 'date':
            return await axios.get(`https://api.punkapi.com/v2/beers?brewed_after=${props.date}`)
        default:
            console.log('default api')
            return await axios.get(`https://api.punkapi.com/v2/beers`)
    }
}

export default Api
