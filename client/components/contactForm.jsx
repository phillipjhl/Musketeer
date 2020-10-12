import React, { Component } from "react";
import { sendContactEmail } from "../services/contact";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
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
      .then(resp => {
        this.setState({
          successMessage: "Thank you for contacting me!",
          error: null
        });
        console.log(resp);
        //redirect to homepage
        //display thank you modal
        // this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          error: "There was an error submitting your information.",
          successMessage: null
        });
        console.log(err);
      });
  }

  render() {
    return (
      <div className="col">
        <form
          className={`form ${this.state.formClass}`}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Enter A Message To Send To Me</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              className="form-control"
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-outline-secondary"
          >
            Submit
          </button>
        </form>
        {this.state.successMessage && !this.state.error && (
          <p className="my-3 text-bright-green">{this.state.successMessage}</p>
        )}
        {this.state.error && !this.state.successMessage && (
          <p className="my-3 text-danger">{this.state.error}</p>
        )}
      </div>
    );
  }
}

export default ContactForm;
