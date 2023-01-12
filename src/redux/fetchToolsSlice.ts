import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type TFetchTools = Record<string, string>;

interface IToolsSliceState {
  tools: TFetchTools[];
  loadingTools: boolean;
}

const initialState: IToolsSliceState = {
  tools: [],
  loadingTools: true,
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
    deleteItemTools: (state, action: PayloadAction<string>) => {
      state.tools = state.tools.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTools.pending, (state) => {
      state.tools = [];
      state.loadingTools = true;
    });
    builder.addCase(fetchTools.fulfilled, (state, action) => {
      state.tools.push(...action.payload);
      state.loadingTools = false;
    });
    builder.addCase(fetchTools.rejected, (state) => {
      state.loadingTools = true;
    });
  },
});

export const { deleteItemTools } = fetchToolsSlice.actions;

export default fetchToolsSlice.reducer;
