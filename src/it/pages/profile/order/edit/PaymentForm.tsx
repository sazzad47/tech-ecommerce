import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface PaymentFormProps {
  orderId: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    // Create a payment method using the CardElement.
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      setErrorMessage(error.message || '');
      return;
    }

    // Send the payment method details and order ID to the backend for processing.
    const response = await fetch('/api/process-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment_method_id: paymentMethod!.id,
        order_id: orderId,
      }),
    });

    if (response.ok) {
      // Payment was successful. Handle the success scenario.
    } else {
      // Payment failed. Handle the error scenario.
      const { error } = await response.json();
      setErrorMessage(error.message || '');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
