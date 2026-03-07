import { useEffect } from 'react';

// Custom hook for page view analytics
export const usePageTracking = (pageName) => {
  useEffect(() => {
    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }

    // You can also integrate with other analytics services here
    console.log(`Page viewed: ${pageName}`);
  }, [pageName]);
};

// Custom hook for event tracking
export const useEventTracking = () => {
  const trackEvent = (eventName, eventParams = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
    console.log(`Event tracked: ${eventName}`, eventParams);
  };

  return { trackEvent };
};

// Initialize Google Analytics
export const initializeAnalytics = (measurementId) => {
  if (typeof window === 'undefined') return;

  // Add Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  window.gtag = gtag;
};

// Analytics configuration
export const ANALYTICS_CONFIG = {
  // Replace with your actual Google Analytics ID
  measurementId: 'G-XXXXXXXXXX',
};
