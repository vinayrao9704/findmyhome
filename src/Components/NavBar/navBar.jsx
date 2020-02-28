import React from 'react';
import ReactDom from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import './navbar.css'




const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="main-logo">
                <div className="logo">Logo </div>
                <div className="logo-name">Find My Home</div>
            </div>

            <div className="links">
                <SignInLinks />
            </div>


        </div>


    )
}

export default Navbar;