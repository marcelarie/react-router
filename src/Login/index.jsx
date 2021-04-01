import React, { useState } from 'react'
import './style.scss'
// import { login } from '../Api/login.js'
import { useDispatch } from 'react-redux';
import { getToken } from '../redux/actions/token.js'
// import handleSubmit from '../actions/handleSubmit.jsx'

function Login() {

    const dispatch = useDispatch()
    // const token = useSelector(state => state.token)

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault()
        dispatch(getToken(username, password))
        // const token = await login({ username, password })
        // setToken(token);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username}
                    onChange={e => setUserName(e.target.value)} />

                <label htmlFor="username">Password</label>
                <input type="password" name="password" value={password}
                    onChange={e => setPassword(e.target.value)} />

                <button type="submit" name="submit" >Login</button>
            </form>
        </div >
    )
}

export default Login

