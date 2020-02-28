import React from 'react';
import ReactDom from 'react-dom';
import { Link, NavLink } from 'react-router-dom';



const SignUpLinks = () => {
    return (
        <div className="SignUpLinks-links" >
            <Link to="/" className="ListProperty">List the Property</Link>
            <Link to="/" className="favourites">Favourites</Link>
            <Link to="/" className="signIn">Signin</Link>
            <Link to="/" className="SignUp">SignUp</Link>




        </div>


    )
}


export default SignInLinks;