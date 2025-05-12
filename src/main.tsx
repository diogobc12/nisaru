import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Global error handler to prevent the whole app from crashing
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  // Allow the app to continue running despite the error
  event.preventDefault();
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Allow the app to continue running despite the rejection
  event.preventDefault();
});

// Safely render the app with fallbacks
const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to render the app:', error);
    // Show a minimal fallback UI if rendering fails completely
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1 style="color: #333;">Something went wrong</h1>
        <p>We're unable to load the website. Please try again later.</p>
        <button 
          style="padding: 10px 20px; background-color: #10b981; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 20px;"
          onclick="window.location.reload()"
        >
          Reload Page
        </button>
      </div>
    `;
  }
} else {
  console.error('Root element not found');
}