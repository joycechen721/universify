import React from 'react'
import './Login.css'
import Header from './Header'

function Login() {
    return (
        <div class = "login">
            <Header></Header>
            <div class = "white_login">
                <h1>UNIVERSIFY LOGIN</h1>
                <form>
                    <h5>username</h5>
                    <input type = "text" />

                    <h5>password</h5>
                    <input type = "password" />

                    <button className = "signin_button">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
