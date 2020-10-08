import React, { Component } from 'react';
import { sendContactEmail } from '../services/contact';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then((resp) => {
            console.log(resp);
            //redirect to homepage
            //display thank you modal
            this.props.history.push('/');
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" className="form-control" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" className="form-control" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <textarea cols="30" rows="10" name="message" className="form-control" onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} className="btn btn-success">Submit</button>
                </form>
            </div>
        );
    }
}

export default Contact;