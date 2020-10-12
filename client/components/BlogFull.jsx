import React, { Component } from 'react';
import ImageHead from '../assets/documents/header.jpg';
import { Link } from 'react-router-dom';

class BlogFull extends Component {
    constructor(props) {
        super();
        this.state = {
            data: {}
        };
    }

    componentWillMount() {
        fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(blog => {
                this.setState({
                    data: {
                        title: blog.title,
                        content: blog.content,
                        date: blog._created
                    }
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card border-0 mb-3">
                <img className="card-img-top" src={ImageHead} alt="Card image cap" className="img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{this.state.data.title}</h5>
                    <p className="card-text">{this.state.data.content}</p>
                    <p className="card-text">{this.state.data.date}</p>
                    <Link to={`/blog/${this.props.match.params.id}/edit`}>Edit</Link>
                </div>
            </div>
        );
    }
}

export default BlogFull;