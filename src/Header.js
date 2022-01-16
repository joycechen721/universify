import React from 'react'
import logo from './logo.svg';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div class ="app-header">
            <Link to = "/home">
                <img src={logo} class ="universify-logo" alt="Universify logo" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <button>
                            <Link to = "/home">Home</Link>
                        </button>                    
                    </li>
                    <li>
                        <button>
                            <Link to = "/about">About</Link>
                        </button>  
                    </li>
                    <li>
                    <Link to = "/login">
                    <button class = "login_button">
                        Log In
                    </button> 
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header