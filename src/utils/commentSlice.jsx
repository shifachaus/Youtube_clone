import { createSlice, current } from "@reduxjs/toolkit";
import { commentsData } from "./constants";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentsData,
    showReplies: Array(commentsData.length).fill(false),
    addReplies: {},
  },
  reducers: {
    addComment: (state, action) => {
      state.commentsData.unshift(action.payload);
      console.log(current(state), "COMMENT");
    },

    toggleReplies: (state, action) => {
      const index = action.payload;
      state.showReplies[index] = !state.showReplies[index];
    },

    toggleAddComment: (state, action) => {
      const index = action.payload;
      state.addReplies[index] = true;
    },

    cancelReply: (state, action) => {
      const index = action.payload;
      state.addReplies[index] = false;
    },

    addReplyToComment: (state, action) => {
      const { index, reply } = action.payload;
      const comment = state.commentsData[index];

      if (comment) {
        comment.replies.push(reply);
      }
    },
  },
});

export const {
  addComment,
  toggleReplies,
  toggleAddComment,
  cancelReply,
  addReplyToComment,
} = commentSlice.actions;
export default commentSlice.reducer;
