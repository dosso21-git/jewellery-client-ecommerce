// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        length: 0, // Store only the length of the cart
    },
    reducers: {
        addToCart: (state, action) => {
            state.length = action.payload; // Update the length based on the quantity added
        },
        removeFromCart: (state, action) => {
            state.length -= action.payload; // Decrease length when an item is removed
            if (state.length < 0) state.length = 0; // Ensure length doesn't go negative
        },
        clearCart: (state) => {
            state.length = 0; // Reset length to 0
        },
    },
});

// Export actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
