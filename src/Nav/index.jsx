import { NavLink } from 'react-router-dom'
import './style.scss'

function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink className="logout" to="/logout">Logout</NavLink>
        </nav>
    )
}

export default Nav

