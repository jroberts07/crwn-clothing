import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HjSFAHtLxwlzhxziWpE168s2QaHM2M6U5bwmtiJzst6QND1PFUMJt3rfRmSmPm5c4Po8uvKUgbcWzkT9xbZEtka00EHDjX9H9';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull');
    }
    
    return (
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing Ltd.' 
            billingAddress 
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg' 
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabe='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
