import React, { Component, Fragment } from 'react';
import Jumbotron from '../Jumbotron';
import Sidebar from '../Sidebar';
import BlogLists from '../BlogList';

class BlogMain extends Component {

    constructor(props) {
        super(props);
    }

    render() {
            return (
                <Fragment>
                    <Jumbotron />
                    <div className="row">
                        <BlogLists widthClass="col-md-7"/>
                        <Sidebar widthClass="col-md-3"/>
                    </div>
                </Fragment>
            );
    }
}

export default BlogMain;