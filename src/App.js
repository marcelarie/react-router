import { Route } from 'react-router-dom'
import { useEffect } from "react"
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { paginationMode } from './redux/actions/mode.js'
import { checkNextPage } from './redux/actions/checkNextPage.js'
import { setResult } from './redux/actions/dataApi.js'

import Nav from './Nav'
import Home from './Home'
// import { checkNextPage } from './Api'
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


    useEffect(
        () => dispatch(paginationMode()) /*setMode('pagination')*/,
        [page])

    useEffect(() => {
        dispatch(setResult({ page, perPage, mode, date }));

        dispatch(checkNextPage(result.data, perPage));
    }, [page, perPage, mode, date])

    const appMethods = {}

    if (!token) return <Login />

    return (
        <>
            <GeneralContext.Provider value={appMethods}>
                <Nav />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path={`/dashboard/page=:page&per=:perPage`}>
                    <Dashboard />
                </Route>
                <Route path="/logout">
                    <h1 style={{ textAlign: 'center' }}>Logout</h1>
                </Route>
            </GeneralContext.Provider>
        </>
    );
}


export default App
