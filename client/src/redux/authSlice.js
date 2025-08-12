import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Test User",
    email: "test@example.com",
    phone: "9999999999",
    address: "123, Test Street, India",
    pincode: "400001",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
