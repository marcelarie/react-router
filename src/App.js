import { Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { paginationMode } from './redux/actions/mode.js'
import { setResult } from './redux/actions/dataApi.js'

import Nav from './Nav'
import Home from './Home'
import { checkNextPage } from './Api'
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
    const token = useSelector(({ tokens }) => tokens.token)

    const [checkPage, setCheckPage] = useState(false)

    useEffect(
        () => dispatch(paginationMode()) /*setMode('pagination')*/,
        [page])

    useEffect(() => {

        dispatch(setResult({ page, perPage, mode, date }));

        checkNextPage(result.data, setCheckPage, perPage)

    }, [page, perPage, mode, date])

    const appMethods = {
        setters: {
            setCheckPage: setCheckPage,
        },
        states: {
            checkPage: checkPage,
        }
    }

    if (!token) {
        console.log('NO TOKEN')
        return <Login />
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
