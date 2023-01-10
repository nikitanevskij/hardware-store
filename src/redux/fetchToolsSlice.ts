import axios from 'axios';
import { RootState } from './store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const fetchTools = createAsyncThunk('pizza/fetchToolsStatus', async (params) => {
  const { data } = await axios.get('');
  return data;
});

export const fetchToolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTools.pending, (state, action) => {});
    builder.addCase(fetchTools.fulfilled, (state, action) => {});
    builder.addCase(fetchTools.rejected, (state, action) => {});
  },
});

export const {} = fetchToolsSlice.actions;

export default fetchToolsSlice.reducer;
