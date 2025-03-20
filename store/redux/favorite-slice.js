import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFromFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;