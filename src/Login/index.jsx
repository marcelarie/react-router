import React, { useState } from 'react'
import './style.scss'
import { useDispatch } from 'react-redux';
import { getToken } from '../redux/actions/token.js'

function Login() {

    const dispatch = useDispatch()

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault()
        dispatch(getToken(username, password))
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

