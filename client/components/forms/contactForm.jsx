import React, { Component } from "react";
import { sendContactEmail } from "../../services/contact";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
      formClass: "needs-validation",
      submitError: null,
      successMessage: null,
      errors: {
        name: null,
        email: null,
        message: null,
        subject: null
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let errors = this.state.errors;
    let submitError = this.state.submitError;

    switch (name) {
      case "name":
        errors.name = value.length < 1 ? "Please enter your name." : null;
        break;
      case "email":
        errors.email = this.validEmailRegex.test(value)
          ? null
          : "Please enter a valid email address.";
        break;
      case "message":
        errors.message =
          value.length < 1
            ? "Please send a message shorter than 400 characters."
            : null;
        break;
      case "subject":
        errors.subject =
          value.length < 1 ? "Please enter a subject for your message." : null;
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      errors: errors
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm(this.state.errors)) {
      sendContactEmail(
        this.state.name,
        this.state.email,
        this.state.message,
        this.state.subject
      )
        .then(resp => {
          this.setState({
            successMessage: "Thank you for contacting me!",
            submitError: null,
            formClass: "was-validated"
          });
          //redirect to homepage
          //display thank you modal
          // this.props.history.push("/");
        })
        .catch(err => {
          this.setState({
            submitError:
              "There was an error submitting your information. Please try again later or email me directly!",
            formClass: "needs-validation"
          });
          console.log(err);
        });
    } else {
      this.setState({
        submitError: "Please fill out the form completely.",
        formClass: "needs-validation"
      });
    }
  }

  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      val => {
        if (val != null) {
          valid = false;
        }
      }
    );
    return valid;
  };

  render() {
    let errors = this.state.errors;
    return (
      <div className="col">
        <form
          id="contact-form"
          className={`form ${this.state.formClass}`}
          onSubmit={this.handleSubmit}>
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
            {errors.name && <div className="text-danger">{errors.name}</div>}
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
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="form-control"
              onChange={this.handleChange}
              required
            />
            {errors.subject && (
              <div className="text-danger">{errors.subject}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Enter A Message To Send To Me</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              className="form-control"
              onChange={this.handleChange}
              required></textarea>
            {errors.message && (
              <div className="text-danger">{errors.message}</div>
            )}
          </div>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-outline-primary">
            CONTACT ME
          </button>
        </form>
        {this.state.successMessage && !this.state.submitError && (
          <p className="my-3 text-bright-green">{this.state.successMessage}</p>
        )}
        {this.state.submitError && !this.state.successMessage && (
          <p className="my-3 text-danger">{this.state.submitError}</p>
        )}
      </div>
    );
  }
}

export default ContactForm;
