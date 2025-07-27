import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

// Sync with localStorage
const updateLocalStorage = (items) => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

// Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectTotalQuantity = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((sum, item) => sum + item.quantity, 0)
);

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) =>
          item._id === action.payload._id &&
          item.size === action.payload.size
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      updateLocalStorage(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          !(item._id === action.payload._id && item.size === action.payload.size)
      );
      updateLocalStorage(state.items);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) =>
          item._id === action.payload._id && item.size === action.payload.size
      );
      if (item) {
        item.quantity += 1;
        updateLocalStorage(state.items);
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) =>
          item._id === action.payload._id && item.size === action.payload.size
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (i) =>
              !(i._id === action.payload._id && i.size === action.payload.size)
          );
        }
        updateLocalStorage(state.items);
      }
    },

    clearCart: (state) => {
      state.items = [];
      updateLocalStorage([]);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
