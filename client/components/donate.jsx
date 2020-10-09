import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import CheckoutForm from './checkoutForm'; // must be a child of Elements wrapper

class Donate extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <StripeProvider apiKey="pk_test_wcqFSidexA0BEbWOmJp4j0x1">
                <Elements>
                    <CheckoutForm />
                </Elements>
            </StripeProvider>
        );
    }

}

export default Donate;