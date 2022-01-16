import React from 'react'
import './Home.css';
import home_blob from './images/home_blob.svg';
import home from './images/home_image.svg';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div class = "home">
            <div class = "container">
                <h1 class = "prod-name">UNIVERSIFY</h1>
                <h2 class = "prod-desc">A PLACE TO UNIFY YOUR UNIVERSITY APPLICATIONS</h2>
                <Link to = "/about">
                    <button class = "learn_more">Learn More</button>
                </Link>
            </div>
            <img class = "home_blob" src = {home_blob} alt = "Home Blob"></img>
            <img class = "home_img" src = {home} alt = "Home"></img>
        </div>
    )
}

export default Home
