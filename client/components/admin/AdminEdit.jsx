import React, { Component, Fragment } from "react";
import { all, one, insert, update, destroy } from "../../services/blogs";

class AdminEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      subtitle: "",
      content: "",
      date: ""
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    one(this.props.match.params.id).then(blog => {
      this.setState({
        title: blog.title,
        subtitle: blog.subtitle,
        content: blog.content,
        date: blog.created_at
      });
    });
  }

  handleTextChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    let data = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      content: this.state.content
    };
    update(this.props.match.params.id, data);
    this.props.history.replace(`/blogs/${this.props.match.params.id}`);
  }

  handleDelete() {
    destroy(this.props.match.params.id);
    this.props.history.replace("/");
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron jumbotron-fluid bg-dark text-white m-0">
          <div className="container">
            <h1 className="display-4">Edit Your Blog</h1>
          </div>
        </div>

        <div className="container">
          <form className="sm-10" onSubmit={this.handleUpdate}>
            <h3>{this.state.title}</h3>

            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                onChange={this.handleTextChange}
                val={this.state.title}
                placeholder="Title"
              />

              <input
                type="text"
                name="subtitle"
                className="form-control"
                id="subtitle"
                onChange={this.handleTextChange}
                val={this.state.subtitle}
                placeholder="Subtitle"
              />

              <input
                type="text-area"
                name="content"
                className="form-control"
                id="content"
                onChange={this.handleTextChange}
                val={this.state.content}
                placeholder="Content"
              />
            </div>

            <button className="btn btn-primary" onClick={this.handleUpdate}>
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handleDelete}
              aria-label="Close"
            >
              Delete
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default AdminEdit;
