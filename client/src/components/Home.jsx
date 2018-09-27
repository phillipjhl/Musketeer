import React, { Component, Fragment } from 'react';
import Jumbotron from './Jumbotron';
import Sidebar from './Sidebar';
import BlogLists from './BlogList';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
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

export default Home;