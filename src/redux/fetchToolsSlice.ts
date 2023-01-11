import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type TFetchTools = Record<string, string>;

interface IToolsSliceState {
  tools: TFetchTools[];
  loading: boolean;
}

const initialState: IToolsSliceState = {
  tools: [],
  loading: true,
};

export const fetchTools = createAsyncThunk<TFetchTools[]>('tools/fetchToolsStatus', async () => {
  const { data } = await axios.get<TFetchTools[]>(
    'https://63be7d4ee348cb07620ff3db.mockapi.io/hardwareTools',
  );
  return data;
});

export const fetchToolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    deleteItem: (state, action: PayloadAction<string>) => {
      state.tools = state.tools.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTools.pending, (state) => {
      state.tools = [];
      state.loading = true;
    });
    builder.addCase(fetchTools.fulfilled, (state, action) => {
      state.tools.push(...action.payload);
      state.loading = false;
    });
    builder.addCase(fetchTools.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const { deleteItem } = fetchToolsSlice.actions;

export default fetchToolsSlice.reducer;
