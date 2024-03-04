import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItems: [],
};

export const menuItemSlice = createSlice({
  name: "menuItems",
  initialState: initialState,
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
  },
});

export const { setMenuItems } = menuItemSlice.actions;
export const menuItemReducer = menuItemSlice.reducer;
