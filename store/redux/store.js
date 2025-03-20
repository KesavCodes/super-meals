import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorite-slice";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
