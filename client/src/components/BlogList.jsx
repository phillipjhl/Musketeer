import React, { Component, Fragment } from 'react';
import BlogShort from './BlogShort';


class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state={
            //list of blog data
            blogList: []
        }
        this.createBlogs = this.createBlogs.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/blogs")
            .then(res => res.json())
            .then(blogs => {
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

    createBlogs() {
        //maps over the state.blogList array to produce a list of blogshort Components
        let blogs = this.state.blogList.map(
            (blog) => {
                return <BlogShort key={blog.id} data={blog} />
            });
            console.log(blogs);
        return blogs;
    }

    render() {
        return (
            <Fragment>
                <aside className="col-md-8 blog-main">
                    {this.createBlogs()}
                </aside>
            </Fragment>
        );
    }

}

export default BlogList;