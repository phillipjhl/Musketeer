//Component for User Input

import React, { Component } from 'react';
import { insert } from '../services/blogs';

class AdminInput extends Component {
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
        insert(blogData);
    };

    render() {
        return (
            <div className="container">
                <form className="form-group col-md-10 bg-light p-2" onSubmit={this.handlePost} >

                    <input
                        type="text"
                        className="form-control my-4"
                        id="blog-title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Title"
                    />
                    <input
                        type="text-area"
                        className="form-control my-4"
                        id="blog-content"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        placeholder="Content"
                    />
                    <button type="button" onClick={this.handlePost} className="btn btn-secondary my-2" >Post</button>

                </form>
            </div>
        );
    }
}

export default AdminInput;