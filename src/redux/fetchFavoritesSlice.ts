import axios from 'axios';
import { RootState } from './store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  favoriteTools: [],
};

export const fetchTools = createAsyncThunk('pizza/fetchToolsStatus', async () => {
  const { data } = await axios.get('');
  return data;
});

export const fetchFavoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      //@ts-ignore
      state.favoriteTools.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      //@ts-ignore
      state.favoriteTools = state.favoriteTools.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTools.pending, (state, action) => {});
    builder.addCase(fetchTools.fulfilled, (state, action) => {});
    builder.addCase(fetchTools.rejected, (state, action) => {});
  },
});

export const { addFavorite, deleteFavorite } = fetchFavoritesSlice.actions;

export default fetchFavoritesSlice.reducer;
