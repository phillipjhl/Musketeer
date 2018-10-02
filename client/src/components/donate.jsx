import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './checkoutForm'; // must be a child of Elements wrapper

class Donate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StripeProvider apiKey="pk_test_wcqFSidexA0BEbWOmJp4j0x1">
                <Elements>
                    <InjectedCheckoutForm />
                </Elements>
            </StripeProvider>
        );
    }

}

export default Donate;