// import React, { useState } from "react"
import axios from 'axios'

async function Api(mode, props) {
    switch (mode) {
        case 'pagination':
            return await axios.get(`https://api.punkapi.com/v2/beers?page=${props.page}&per_page=${props.perPage}`)
        case 'date':
            return await axios.get(`https://api.punkapi.com/v2/beers?brewed_after=${props.date}`)
        default:
            return await axios.get(`https://api.punkapi.com/v2/beers`)
    }
}

export default Api
