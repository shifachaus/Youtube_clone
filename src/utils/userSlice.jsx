import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("auth")) || [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify(state.user));
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
