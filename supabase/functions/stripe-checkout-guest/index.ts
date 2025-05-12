import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripe = new Stripe(stripeSecret, {
  appInfo: {
    name: 'Bolt Integration',
    version: '1.0.0',
  },
});

// Helper function to create responses with CORS headers
function corsResponse(body: string | object | null, status = 200) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': '*',
  };

  // For 204 No Content, don't include Content-Type or body
  if (status === 204) {
    return new Response(null, { status, headers });
  }

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });
}

// Type definitions
type Expectations<T> = {
  [K in keyof T]?: 'string' | { values: string[] };
};

// Function to validate parameters
function validateParameters<T extends Record<string, unknown>>(
  values: T,
  expected: Expectations<T>,
): string | undefined {
  for (const [key, value] of Object.entries(expected)) {
    if (!(key in values)) {
      return `Missing required parameter: ${key}`;
    }

    const actualValue = values[key];

    if (value === 'string') {
      if (typeof actualValue !== 'string') {
        return `Parameter ${key} must be a string`;
      }
    } else if (typeof value === 'object' && 'values' in value) {
      if (!value.values.includes(actualValue as string)) {
        return `Parameter ${key} must be one of: ${value.values.join(', ')}`;
      }
    }
  }

  return undefined;
}

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return corsResponse({}, 204);
    }

    if (req.method !== 'POST') {
      return corsResponse({ error: 'Method not allowed' }, 405);
    }

    const { price_id, success_url, cancel_url, mode } = await req.json();

    const error = validateParameters(
      { price_id, success_url, cancel_url, mode },
      {
        cancel_url: 'string',
        price_id: 'string',
        success_url: 'string',
        mode: { values: ['payment', 'subscription'] },
      },
    );

    if (error) {
      return corsResponse({ error }, 400);
    }

    // Create a guest checkout session without requiring authentication
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode,
      success_url,
      cancel_url,
    });

    console.log(`Created guest checkout session ${session.id}`);

    return corsResponse({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error(`Guest checkout error: ${error.message}`);
    return corsResponse({ error: error.message }, 500);
  }
});
