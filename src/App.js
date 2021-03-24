import Nav from './Nav'
import Home from './Home'
import Api from './Api'
import Dashboard from './Dashboard'
import { Route, Link } from 'react-router-dom'
import { useState, useEffect } from "react"


export default () => {

    const [data, setData] = useState([])

    useEffect(() => {
        Api('default', {}).then(result => setData(result))
    }, [])

    return (
        <div>
            <Nav />
            {
                <>
                    <Route exact path="/">
                        <Home data={data} />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard data={data} />
                    </Route>
                </>
            }
        </div>
    );
}

