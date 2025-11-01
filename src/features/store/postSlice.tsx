import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    likes: 0,
    favorites: 0,
    reposts: 0,
    copies: 0,
  },
  reducers: {
    handleLikeClick: (state) => {
      state.likes += 1;
    },
    handleFavoritesClick: (state) => {
      state.favorites += 1;
    },
    handleRepostClick: (state) => {
      state.reposts += 1;
    },
    handleCopyClick: (state) => {
      state.copies += 1;
    },
  },
});

export const {
  handleLikeClick,
  handleFavoritesClick,
  handleRepostClick,
  handleCopyClick,
} = postSlice.actions;

export default postSlice.reducer;
