import React, { Component, Fragment } from 'react';
import { all, one, insert, update, destroy } from '../services/blogs';

class AdminEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    componentWillMount() {
        one(this.props.match.params.id)
        .then(blog => {
            this.setState({
                data: {
                    title: blog.title,
                    content: blog.content,
                    date: blog._created
                }
            });
            console.log(this.state.data);
        });
    }

    handleTextChange(e) {
        this.setState({
            data: {
                name: this.state.data.name,
                text: e.target.value
            }
        })
    };

    handleUpdate(e) {
        e.preventDefault();
        update(this.props.match.params.id, data);
        this.props.history.replace('/');
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
                        <h3>{this.state.data.title}</h3>

                        <div className="form-group" >
                            <input
                                type="text-area"
                                name="content"
                                className="form-control"
                                id="content"
                                onChange={this.handleTextChange}
                                val={`${this.state.data.content}`}
                                placeholder={`${this.state.data.content}`}>
                            </input>
                        </div>

                        <button className="btn btn-primary" onClick={this.handleUpdate}>Update</button>

                    </form>
                </div>

            </Fragment>
        );
    }
}

export default AdminEdit;