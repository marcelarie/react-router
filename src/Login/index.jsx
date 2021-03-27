import React, { useState } from 'react'
import './style.scss'

function Login() {

    return (
        <div className="login-container">
            <form>
                <label for="username">Username</label>
                <input type="text" name="username" value="" />
                <label for="username">Password</label>
                <input type="password" name="password" value="" />
                <button type="submit" name="submit" >Login</button>
            </form>
        </div >
    )
}

export default Login

