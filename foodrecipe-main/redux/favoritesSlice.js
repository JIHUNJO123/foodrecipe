// redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriterecipes: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favoriterecipes.findIndex(
        (item) => item.idFood === action.payload.idFood
      );
      if (index >= 0) {
        // Remove
        state.favoriterecipes.splice(index, 1);
      } else {
        // Add
        state.favoriterecipes.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
