// Import the Necessary Functions and Files
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import the Provider component from the react-redux library
import { Provider } from 'react-redux';

// Import the Redux store from the store.js file
import store from './store.js';

// Wrap the App with the Provider component and pass the Redux store as a prop
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>   {/* Provide the store to the entire app */}
      <App />
    </Provider>
  </React.StrictMode>,
);