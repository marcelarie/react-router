import Nav from './Nav'
import Home from './Home'
import Api from './Api'
import Dashboard from './Dashboard'
import { Route, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { createContext } from 'react'


export const GeneralContext = createContext('')

export default () => {

    const params = useParams();
    console.log(params)

    const [result, setResult] = useState([])
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(25)
    const [mode, setMode] = useState('pagination')

    useEffect(() => {
        Api(mode,
            { page: page, perPage: perPage }
        ).then(result => setResult(result))
    }, [page, perPage, mode])

    const appMethods = {
        setters: {
            setPage: setPage,
            setPerPage: setPerPage,
            setMode: setMode
        },
        states: {
            page: page,
            perPage: perPage,
            mode: mode
        }
    }

    return (
        <div>
            <GeneralContext.Provider value={appMethods}>
                <Nav page={page} perPage={perPage} />
                {
                    <>
                        <Route exact path="/">
                            <Home result={result} />
                        </Route>
                        <Route path={`/dashboard/page=:page&per=:perPage`}>
                            <Dashboard result={result} />
                        </Route>
                        <Route path="/logout">
                            <h1>Logout</h1>
                        </Route>
                    </>
                }
            </GeneralContext.Provider>
        </div >
    );
}

