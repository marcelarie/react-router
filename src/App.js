import Nav from './Nav'
import Home from './Home'
import Api from './Api'
import Dashboard from './Dashboard'
import { Route, Link } from 'react-router-dom'


export default () => {
    console.log(Api('date', { date: '10/2013' }))

    return (
        <div>
            <Nav />
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </div>
    );
}

