import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFetchTools } from './fetchToolsSlice';

interface IFavoritesSliceState {
  favoriteTools: TFetchTools[];
}

const initialState: IFavoritesSliceState = {
  favoriteTools: [],
};

export const fetchFavoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<TFetchTools>) => {
      state.favoriteTools.push(action.payload);
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteTools = state.favoriteTools.filter((item) => item.id !== action.payload);
    },
    resetFavorite: (state) => {
      state.favoriteTools = [];
    },
  },
});

export const { addFavorite, deleteFavorite, resetFavorite } = fetchFavoritesSlice.actions;

export default fetchFavoritesSlice.reducer;
