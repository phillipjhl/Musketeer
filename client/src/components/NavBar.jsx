import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AuthButton from './auth/authButton';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <Link to='/' className="navbar-brand" >Blog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav flex-row-reverse">
                    <Link to="/donate" className="nav-item nav-link">Donate</Link>
                    <Link to="/" className="nav-item nav-link" >Home <span className="sr-only">(current)</span></Link>
                    <AuthButton />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;