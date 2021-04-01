import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Nav() {

    const page = useSelector(({ pages }) => pages.page)
    const perPage = useSelector(({ pages }) => pages.perPage)

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to={`/dashboard/page=${page}&per=${perPage}`}>Dashboard</NavLink>
            <NavLink className="logout" to="/logout">Logout</NavLink>
        </nav>
    )
}

export default Nav

