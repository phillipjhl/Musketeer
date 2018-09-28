import React, { Component, Fragment } from 'react';
import Jumbotron from './Jumbotron';
import Sidebar from './Sidebar';
import BlogLists from './BlogList';
import { isLoggedIn } from '../services/user';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (isLoggedIn()) {
            return (
                <Fragment>
                    <Jumbotron />
                    <Link to='/input' className="btn btn-info mb-1">Add New Blog Post</Link>
                    <div className="row">
                        <BlogLists />
                        <Sidebar />
                    </div>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <Jumbotron />
                    <div className="row">
                        <BlogLists />
                        <Sidebar />
                    </div>
                </Fragment>
            );
        }
    }

}

export default Home;