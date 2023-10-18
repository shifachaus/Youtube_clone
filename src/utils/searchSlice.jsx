import { createSlice, current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
      console.log(current(state), "CACHE");
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
