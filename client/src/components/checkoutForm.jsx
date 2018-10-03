import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';

import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            let token = await this.props.stripe.createToken({ name: this.state.customerName });
            console.log(token.token.id);
            await postCharge({ id: token.token.id, amount: 10 });
        } catch (e) {
            console.log(e);
        }
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
    }

    render() {
        return (
            <div className="container bg-light text-center">
                <h1 className="text-success my-2">Donate</h1>
                <form className="form-group col-sm-9 mx-auto" onSubmit={this.handleSubmit}>
                    <input className="form-control my-1" onChange={this.handleNameInput} placeholder="Name" htmlFor="name" id="name" />
                    <CardSection />
                    <button className="btn btn-success my-1" >SUBMIT</button>
                </form>
            </div>
        );
        }
    }

export default CheckoutForm;