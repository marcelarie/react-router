// import React, { useState } from "react"
import axios from 'axios'

export function checkNextPage(data, setCheckPage, perPage) {
    if (data) {
        const lastItem = data[data.length - 1].id + 1 + perPage
        axios.get(`https://api.punkapi.com/v2/beers/${lastItem}`)
            .then(() => setCheckPage(false))
            .catch(() => {
                setCheckPage(true)
            })
    }
}


