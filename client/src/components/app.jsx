import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import BlogInput from './BlogInput';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path ="/blog/input" component={BlogInput} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;