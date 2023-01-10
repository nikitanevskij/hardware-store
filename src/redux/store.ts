import fetchToolsSlice from './fetchToolsSlice';
import fetchFavoritesSlice from './fetchFavoritesSlice';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { fetchToolsSlice, fetchFavoritesSlice },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
