import { NavLink } from 'react-router-dom'
import './style.scss'

function Nav({ page, perPage }) {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to={`/dashboard/page=${page}&per=${perPage}`}>Dashboard</NavLink>
            <NavLink className="logout" to="/logout">Logout</NavLink>
        </nav>
    )
}

export default Nav

