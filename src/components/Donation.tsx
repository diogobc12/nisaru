import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';
import { useStripe } from '../hooks/useStripe';
import { products } from '../stripe-config';

const Donation: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { redirectToCheckout } = useStripe();
  
  const presetAmounts = ['5', '10', '25', '50', '100'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await redirectToCheckout(products.donation.priceId, products.donation.mode);
    } catch (error) {
      console.error('Error during checkout:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="donate" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <DollarSign className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Support Our Mission</h2>
            <p className="text-lg text-gray-700">
              Your donation helps us create sustainable communities and spread awareness about eco-conscious living.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                  Donation Amount ($)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  required
                  min="1"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    className={`px-4 py-2 rounded-md border ${
                      amount === preset 
                        ? 'bg-emerald-100 border-emerald-600 text-emerald-700'
                        : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                    } transition-colors`}
                    onClick={() => setAmount(preset)}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 px-4 text-white font-medium rounded-lg transition-all transform
                  ${isSubmitting 
                    ? 'bg-emerald-400 cursor-not-allowed' 
                    : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98]'
                  }`}
                disabled={isSubmitting || !amount}
              >
                {isSubmitting ? 'Processing...' : 'Donate Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;