import { Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { paginationMode } from './redux/actions/mode.js'
import { setResult } from './redux/actions/dataApi.js'

import Nav from './Nav'
import Home from './Home'
import Api, { checkNextPage } from './Api'
import Dashboard from './Dashboard'
import Login from './Login'


export const GeneralContext = createContext({});

const App = () => {
    const dispatch = useDispatch();
    const page = useSelector(({ pages }) => pages.page)
    const perPage = useSelector(({ pages }) => pages.perPage)
    const mode = useSelector(({ modes }) => modes.mode)
    const date = useSelector(({ dates }) => dates.date)
    const result = useSelector(({ data }) => data.result)

    // const [page, setPage] = useState(1)
    // const [perPage, setPerPage] = useState(25)
    // const [mode, setMode] = useState('pagination')
    // const [date, setDate] = useState('')
    // const [result, setResult] = useState([])
    const [checkPage, setCheckPage] = useState(false)
    const [token, setToken] = useState()

    useEffect(
        () => dispatch(paginationMode()) /*setMode('pagination')*/, [page])

    useEffect(() => {
        Api(mode, { page: page, perPage: perPage, date: date })
            .then(beers => dispatch(setResult(beers)) /* setResult(beers) */)

        checkNextPage(result.data, setCheckPage, perPage)
    }, [page, perPage, mode, date])

    const appMethods = {
        setters: {
            // setPage: setPage,
            // setPerPage: setPerPage,
            // setMode: setMode,
            // setDate: setDate,
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
