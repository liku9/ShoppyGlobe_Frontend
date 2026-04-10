// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";



// Create a Redux slice for managing search state
const searchSlice = createSlice({
  // Unique name for this slice
  name: "search",

  // Initial state of search
  initialState: {
    query: "",   // Stores the current search input value
  },

  // Reducers (actions + logic)
  reducers: {
    // Set/update the search query
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },

    // Clear/reset the search query
    clearSearch: (state) => {
      state.query = "";
    },
  },
});



// Export actions to use in components (dispatch)
export const {
  setSearchQuery,
  clearSearch,
} = searchSlice.actions;



// Export reducer to include in the store
export default searchSlice.reducer;