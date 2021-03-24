import Nav from './Nav'
import Home from './Home'
import Api from './Api'
import Dashboard from './Dashboard'
import { Route } from 'react-router-dom'
import { useState, useEffect } from "react"


export default () => {

    const [result, setResult] = useState([])

    useEffect(() => {
        Api('default', {}).then(result => setResult(result))
    }, [])

    return (
        <div>
            <Nav />
            {
                <>
                    <Route exact path="/">
                        <Home result={result} />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard result={result} />
                    </Route>
                </>
            }
        </div>
    );
}

