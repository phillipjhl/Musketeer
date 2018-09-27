import React, { Component, Fragment } from 'react';
import BlogShort from './BlogShort';


class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state={
            //list of blog components
            blogList: []
        }
    }

    render() {
        return (
            <Fragment>
                <aside class="col-md-8 blog-main">
                    <BlogShort />
                </aside>
            </Fragment>
        );
    }

}

export default BlogList;