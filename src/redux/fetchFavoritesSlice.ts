import axios from 'axios';
import { RootState } from './store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  favoriteTools: [
    {
      key: '2',
      label: 'Ударная дрель DWT SBM 06-13',
      image: 'https://www.oma.by/upload/iblock/a9a/a9a8098e39ac30532884eb88231a36f5.jpg',
      price: '110,88',
    },
    {
      key: '4',
      label: 'Ударная дрель DWT SBM 06-13',
      image: 'https://www.oma.by/upload/iblock/21e/21e30a5b638278f37d31a11467079043.jpg',
      price: '110,88',
    },
    {
      key: '5',
      label: 'Ударная дрель DWT SBM 06-13',
      image: 'https://www.oma.by/upload/iblock/369/369ff7171f2536441dc5239a287e5b7b.jpg',
      price: '110,88',
    },
    {
      key: '8',
      label: 'Ударная дрель DWT SBM 06-13',
      image: 'https://www.oma.by/upload/iblock/369/369ff7171f2536441dc5239a287e5b7b.jpg',
      price: '110,88',
    },
  ],
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
      state.favoriteTools.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favoriteTools = state.favoriteTools.filter((item) => item.key !== action.payload);
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
