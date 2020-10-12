//Component for User Input

import React, { Component } from "react";
import { insert } from "../../services/blogs";
import { Redirect } from "react-router-dom";

class AdminInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: 1,
      title: "",
      subtitle: "",
      content: ""
    };
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
  handlePost(e) {
    e.preventDefault();
    let blogData = {
      author_id: this.state.authorId,
      title: this.state.title,
      subtitle: this.state.subtitle,
      content: this.state.content
    };
    this.setState({
      title: "",
      subtitle: "",
      content: ""
    });
    insert(blogData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h4>Create a new blog here:</h4>
        <form
          className="form-group col bg-light p-2"
          onSubmit={this.handlePost}
        >
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
            type="text"
            className="form-control my-4"
            id="blog-subtitle"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleChange}
            placeholder="Subtitle"
          />

          <textarea
            type="text-area"
            className="form-control my-4"
            rows={20}
            maxLength={2000}
            id="blog-content"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Blog Content"
          />
          <button
            type="button"
            onClick={this.handlePost}
            className="btn btn-outline-secondary my-2"
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default AdminInput;
