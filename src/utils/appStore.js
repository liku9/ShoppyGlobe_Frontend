// Import configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import reducers (slices)
import cartSlicer from "./cartSlicer.js";
import searchSlice from "./searchSlice.js";

// Create the main Redux store
const appStore = configureStore({
  reducer: {
    // Handles all cart-related state (add, remove, quantity, etc.)
    cart: cartSlicer,

    // Handles search-related state (query, filters, etc.)
    search: searchSlice,
  },
});

// Export the store to use in the app (Provider)
export default appStore;