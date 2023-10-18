import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isPopupOpen: false,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },

    togglePopup: (state) => {
      state.isPopupOpen = !state.isPopupOpen;
    },

    closePopup: (state) => {
      state.isPopupOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu, togglePopup, closePopup } =
  appSlice.actions;
export default appSlice.reducer;
