import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing CSS styles
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // For measuring performance
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing

// Creating a root element to render the React application into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component wrapped in BrowserRouter for handling routing
root.render(
  <React.StrictMode> {/* This is an optional tool that helps identify potential problems in the app during development */}
    <BrowserRouter> {/* BrowserRouter allows the app to handle client-side routing */}
      <App /> {/* The main App component */}
    </BrowserRouter>
  </React.StrictMode>
);

// Measure performance in the app. The reportWebVitals function can be passed
// a callback to log or send data elsewhere (e.g., to analytics).
reportWebVitals();
