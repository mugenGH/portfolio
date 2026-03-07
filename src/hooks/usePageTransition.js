import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook for smooth page transitions
 * Manages loading state during route changes
 */
export const usePageTransition = (delay = 500) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, delay]);

  return isTransitioning;
};

/**
 * Custom hook for managing loading states
 */
export const useLoadingState = (initialState = true) => {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return { isLoading, startLoading, stopLoading, setIsLoading };
};
