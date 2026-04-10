// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Import external reducer functions (action handlers)
import {
  addAction,
  decreaseItem,
  removeFromCart,
} from "./cartActions";



// Create a Redux slice for cart management
const cartSlice = createSlice({
  // Unique name for this slice
  name: "cartItems",

  // Initial state of the cart
  initialState: {
    cartItems: [],      // Array to store cart items
    totalQuantity: 0,   // Total number of items in the cart
  },

  // Reducers (actions + logic)
  reducers: {
    // Add item to cart or increase quantity
    addToCart: addAction,

    // Decrease item quantity
    decreaseCart: decreaseItem,

    // Remove item completely from cart
    removeCart: removeFromCart,

    // Clear entire cart
    clearCart: (state) => {
      state.cartItems = [];     // Empty the cart
      state.totalQuantity = 0;  // Reset total quantity
    },
  },
});



// Export actions to use in components (dispatch)
export const {
  addToCart,
  decreaseCart,
  removeCart,
  clearCart,
} = cartSlice.actions;



// Export reducer to add in store
export default cartSlice.reducer;