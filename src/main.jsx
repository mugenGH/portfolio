import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App_electric.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { initializeAnalytics, ANALYTICS_CONFIG } from './utils/analytics.js';

// Initialize Analytics
if (process.env.NODE_ENV === 'production') {
  initializeAnalytics(ANALYTICS_CONFIG.measurementId);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
