import React, { useEffect, useState } from 'react';

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * A component that renders its children only on the client-side, not during SSR
 * This helps with components that use browser-only APIs like Stripe
 */
const NoSSR: React.FC<NoSSRProps> = ({ children, fallback = null }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : <>{fallback}</>;
};

export default NoSSR;
