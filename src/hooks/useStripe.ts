import { useCallback } from 'react';
import { useSupabase } from './useSupabase';

export function useStripe() {
  const { supabase } = useSupabase();

  const createCheckoutSession = useCallback(
    async (priceId: string, mode: 'payment' | 'subscription') => {
      try {
        const { data, error } = await supabase.functions.invoke('stripe-checkout', {
          body: {
            price_id: priceId,
            success_url: `${window.location.origin}/success`,
            cancel_url: `${window.location.origin}/cancel`,
            mode,
          },
        });

        if (error || !data?.url) {
          throw new Error('Failed to create checkout session');
        }

        return data.url;
      } catch (error) {
        console.error('Error creating checkout session:', error);
        throw error;
      }
    },
    [supabase.functions]
  );

  const redirectToCheckout = useCallback(
    async (priceId: string, mode: 'payment' | 'subscription') => {
      try {
        const url = await createCheckoutSession(priceId, mode);
        window.location.href = url;
      } catch (error) {
        console.error('Error redirecting to checkout:', error);
        throw error;
      }
    },
    [createCheckoutSession]
  );

  return {
    redirectToCheckout,
  };
}