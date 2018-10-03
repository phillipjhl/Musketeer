import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import AdminInput from './AdminInput';
import BlogFull from './BlogFull';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AdminEdit from './AdminEdit';
import Donate from './donate';
import Contact from './contact';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path ="/blogs/:id" component={BlogFull} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/contact" component={Contact} />
                        <PrivateRoute path="/admin" component={AdminInput} />
                        <PrivateRoute exact path="/blog/:id/edit" component={AdminEdit} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;