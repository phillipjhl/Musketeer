import React, { Component, Fragment } from 'react';
import BlogShort from './BlogShort';


class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state={
            //list of blog data
            blogList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/blogs")
            .then(res => res.json())
            .then(blogs => {
                console.log(blogs);
                let updatedblogs = [];
                blogs.forEach(blog => {
                    let data = {
                        id: blog.id,
                        title: blog.title,
                        content: blog.content,
                        date: blog._created
                    }
                    updatedblogs.push(data);
                });
                this.setState({
                    blogList: updatedblogs
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <aside className="col-md-8 blog-main">
                    <BlogShort />
                </aside>
            </Fragment>
        );
    }

}

export default BlogList;