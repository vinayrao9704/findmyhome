import React from 'react';
import ReactDom from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'



const SignInLinks = () => {
    return (
        <div className="SignInLinks-links" >
            <Link to="/">List the Property</Link>
            <Link to="/">Favourites</Link>
            <Link to="/">Logout</Link>




        </div>


    )
}


export default SignInLinks;