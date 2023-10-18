import { createSlice, current } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages.shift();
      }
      state.messages.push(action.payload);
      // console.log(current(state), "STATE");
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
