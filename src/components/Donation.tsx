import React, { useEffect } from 'react';
import { DollarSign } from 'lucide-react';
import NoSSR from './NoSSR';

// Donation component with Stripe Buy Button
const Donation: React.FC = () => {
  // Load Stripe buy button script
  useEffect(() => {    
    if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
          
          <div className="bg-white rounded-xl shadow-md p-8 flex justify-center">
            <NoSSR
              fallback={
                <div className="py-4 px-6 bg-gray-100 rounded-lg">
                  <p className="text-gray-500">Loading donation options...</p>
                </div>
              }
            >
              <div dangerouslySetInnerHTML={{ 
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RNi8OB37U8snqOLot95gVm5"
                    publishable-key="pk_live_51RNcBcB37U8snqOLGLmsGdQczMstkyhEAc7uU5CLd44pi4GIh1ZuqxWelDVTRd0wPIEICanWHUTEYSbU3ezjezzj00DnDYMHA6"
                  >
                  </stripe-buy-button>
                `
              }} />
            </NoSSR>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;