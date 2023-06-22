import React from 'react';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51LY447HWg33SQmOYkw5NDamYDIC6nmq6E8TuAzs8BFgElOjFEhM8GjZxjoIguoAhF07s5XgS346RXTd4Fx4xz9rX00cYDOothX")

const CheckoutPage = () => {
    return (
      <Elements stripe={stripePromise}>
          <CheckoutForm />
      </Elements>
    );
};

export default CheckoutPage;