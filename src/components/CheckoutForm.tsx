import React, { useState } from 'react';
import { useCheckout, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const checkout = useCheckout();

  if (!checkout) {
    return <div>Loading checkout...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const result = await checkout.confirm();
      
      if (result.type === 'error') {
        // Show error to your customer (for example, payment details incomplete)
        setMessage(result.error.message || 'An error occurred during checkout');
      } else {
        // Your customer will be redirected to your `return_url`.
        // For some payment methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
        console.log('Checkout confirmed successfully');
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <PaymentElement />
      
      {message && (
        <div className="payment-error mt-3 text-red-500">
          {message}
        </div>
      )}
      
      <button 
        disabled={isLoading}
        className="payment-submit-button mt-4 w-full bg-green-600 text-white font-medium py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
