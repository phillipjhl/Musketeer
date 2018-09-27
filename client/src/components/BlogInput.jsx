//Component for User Input

import React, { Component } from 'react';

class BlogInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authorid: 1,
            title: "",
            content: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    //method to handle the text input and change state
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    //method to handle the submission of the text input
    //uses parent-sent property "onPost" to send userChirpInfo to Home.handlePost() method
    handlePost(e) {
        e.preventDefault();
        let blogData = {
            authorid: this.state.authorid,
            title: this.state.title,
            content: this.state.content
        }
        this.setState({
            title: "",
            content: ""
        });
        // this.props.onPost();
        fetch("http://localhost:3000/api/blogs", {
            method: 'POST',
            body: JSON.stringify(blogData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(err => console.log(err));
    };

    render() {
        return (
            <form className="form-group" onSubmit={this.handlePost} >
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="blog-title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Title"
                    />
                    <input
                        type="text-area"
                        className="form-control"
                        id="blog-content"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        placeholder="Content"
                    />
                    <div className="input-group-append">
                        <button type="button" onClick={this.handlePost} className="btn btn-secondary" >Post</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default BlogInput;