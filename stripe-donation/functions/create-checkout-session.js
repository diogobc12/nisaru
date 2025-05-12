const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the body of the request
    const data = JSON.parse(event.body);
    const { productId, amount, successUrl, cancelUrl } = data;
    
    // Validate required parameters
    if (!productId || !amount || !successUrl || !cancelUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Missing required parameters. Please provide productId, amount, successUrl, and cancelUrl' 
        })
      };
    }

    // Convert amount to cents for Stripe (e.g. $25.00 → 2500 cents)
    const amountInCents = Math.round(parseFloat(amount) * 100);

    // Create a Stripe checkout session with the dynamic amount
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product: productId,
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${successUrl}?amount=${amount}`,
      cancel_url: cancelUrl,
    });

    // Return the session ID and URL to the client
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        id: session.id,
        url: session.url 
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to create checkout session',
        details: error.message 
      })
    };
  }
};
