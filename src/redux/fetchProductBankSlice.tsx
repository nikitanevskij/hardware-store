import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type TFetchProductBank = Record<string, string>;

interface IProductSliceState {
  products: TFetchProductBank[];
  loadingProducts: boolean;
}

const initialState: IProductSliceState = {
  products: [],
  loadingProducts: true,
};

export const fetchProducts = createAsyncThunk<TFetchProductBank[]>(
  'product/fetchProductStatus',
  async () => {
    const { data } = await axios.get<TFetchProductBank[]>(
      'https://63be7d4ee348cb07620ff3db.mockapi.io/bankProducts',
    );
    return data;
  },
);

export const fetchProductBankSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteItemProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
      state.loadingProducts = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.push(...action.payload);
      state.loadingProducts = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loadingProducts = true;
    });
  },
});

export const { deleteItemProduct } = fetchProductBankSlice.actions;

export default fetchProductBankSlice.reducer;
