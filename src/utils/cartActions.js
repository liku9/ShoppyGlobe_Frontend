// Action: Add item to cart OR increase its quantity if it already exists
export const addAction = (state, action) => {
  // Check if the item already exists in the cart
  const existing = state.cartItems.find(
    (item) => item.id === action.payload.id,
  );

  if (existing) {
    // If item exists → increase its quantity by 1
    existing.noOfItems += 1;
  } else {
    // If item does not exist → add new item with quantity = 1
    state.cartItems.push({
      ...action.payload,
      noOfItems: 1,
    });
  }

  // Increase total quantity of all items in cart
  state.totalQuantity += 1;
};



// Action: Decrease the quantity of an item (but not below 1)
export const decreaseItem = (state, action) => {
  // Find the item in the cart
  const existing = state.cartItems.find(
    (item) => item.id === action.payload.id,
  );

  if (existing) {
    // Only decrease if quantity is more than 1
    if (existing.noOfItems > 1) {
      existing.noOfItems -= 1;

      // Decrease overall total quantity
      state.totalQuantity -= 1;
    }
  }
};



// Action: Remove an item completely from the cart
export const removeFromCart = (state, action) => {
  // Find the item in the cart
  const existing = state.cartItems.find(
    (item) => item.id === action.payload.id,
  );

  // If item not found → do nothing
  if (!existing) return;

  // Reduce total quantity by the item's current quantity
  state.totalQuantity = Math.max(
    0,
    state.totalQuantity - (existing.noOfItems ?? 0),
  );

  // Remove the item from cartItems array
  state.cartItems = state.cartItems.filter(
    (item) => item.id !== action.payload.id,
  );
};