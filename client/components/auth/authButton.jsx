import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn nav-item nav-link" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn nav-item nav-link" to="/login">Login</Link>;
    }
};

export default AuthButton;