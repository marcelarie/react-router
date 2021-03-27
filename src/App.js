import Nav from './Nav'
import Home from './Home'
import Api, { checkNextPage } from './Api'
import Dashboard from './Dashboard'
import Login from './Login'
import { useToken } from './hooks/useToken.jsx'

import { Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import { createContext } from 'react'


export const GeneralContext = createContext({})

const App = () => {

    const [result, setResult] = useState([])
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(25)
    const [mode, setMode] = useState('pagination')
    const [date, setDate] = useState('')
    const [checkPage, setCheckPage] = useState(false)
    const [token, setToken] = useState()

    useEffect(() => setMode('pagination'), [page])

    useEffect(() => {
        Api(mode, { page: page, perPage: perPage, date: date })
            .then(beers => setResult(beers))

        checkNextPage(result.data, setCheckPage, perPage)
    }, [page, perPage, mode, date])

    const appMethods = {
        setters: {
            setPage: setPage,
            setPerPage: setPerPage,
            setMode: setMode,
            setDate: setDate,
            setCheckPage: setCheckPage,
            setToken: setToken
        },
        states: {
            page: page,
            perPage: perPage,
            mode: mode,
            date: date,
            checkPage: checkPage,
            token: token
        }
    }

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <>
            <GeneralContext.Provider value={appMethods}>
                <Nav page={page} perPage={perPage} />
                <Route exact path="/">
                    <Home result={result} />
                </Route>
                <Route path={`/dashboard/page=:page&per=:perPage`}>
                    <Dashboard result={result} />
                </Route>
                <Route path="/logout">
                    <h1 style={{ textAlign: 'center' }}>Logout</h1>
                </Route>
            </GeneralContext.Provider>
        </>
    );
}


export default App
