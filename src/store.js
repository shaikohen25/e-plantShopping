// Import Necessary Functions and Files
import { configureStore } from '@reduxjs/toolkit';  // Import configureStore() function from Redux Toolkit
import cartReducer from './CartSlice.jsx';         // Import the reducer function(s) from CartSlice.jsx

// Configure the Store
const store = configureStore({
    reducer: {
        cart: cartReducer,  // Specify the reducer(s) and associate with state slice keys
    },
});

// Export the Store
export default store;  // Export the configured Redux store