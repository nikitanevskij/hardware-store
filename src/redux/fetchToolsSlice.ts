import axios from 'axios';
import { RootState } from './store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  tools: [
    // {
    //   id: '1',
    //   brand: 'Einhell',
    //   label: 'Ударная дрель Einhell TC-ID 650 E 4258682',
    //   image: 'https://www.oma.by/upload/iblock/1df/1dfb0c52de8b94366071560d55698ba3.jpg',
    //   price: '119,80',
    // },
    // {
    //   id: '2',
    //   brand: 'DWT',
    //   label: 'Ударная дрель DWT SBM 06-13',
    //   image: 'https://www.oma.by/upload/iblock/a9a/a9a8098e39ac30532884eb88231a36f5.jpg',
    //   price: '110,88',
    // },
    // {
    //   id: '3',
    //   brand: 'Einhell',
    //   label: 'Ударная дрель Einhell TC-ID 650 E 4258682',
    //   image: 'https://www.oma.by/upload/iblock/1df/1dfb0c52de8b94366071560d55698ba3.jpg',
    //   price: '119,80',
    // },
    // {
    //   key: '4',
    //   brand: 'DWT',
    //   label: 'Ударная дрель DWT SBM 06-13',
    //   image: 'https://www.oma.by/upload/iblock/21e/21e30a5b638278f37d31a11467079043.jpg',
    //   price: '110,88',
    // },
    // {
    //   id: '5',
    //   brand: 'DWT',
    //   label: 'Ударная дрель DWT SBM 06-13',
    //   image: 'https://www.oma.by/upload/iblock/369/369ff7171f2536441dc5239a287e5b7b.jpg',
    //   price: '110,88',
    // },
    // {
    //   id: '6',
    //   brand: 'Einhell',
    //   label: 'Ударная дрель Einhell TC-ID 650 E 4258682',
    //   image: 'https://admin.myfin.by/images/kart_images/alfa-karta1.png',
    //   price: '119,80',
    // },
    // {
    //   id: '7',
    //   brand: 'Aльфа-банк',
    //   label: 'Ударная дрель DWT SBM 06-13',
    //   image: 'https://admin.myfin.by/images/kart_images/sapka100daq2-1.png',
    //   price: '110,88',
    // },
    // {
    //   id: '8',
    //   brand: 'Aльфа-банк',
    //   label: 'Кредитная карта 100 дней от Альфа Банка',
    //   image: 'https://admin.myfin.by/images/kart_images/красн.png',
    //   price: '110,88',
    // },
  ],
  loading: true,
};

export const fetchTools = createAsyncThunk('tools/fetchToolsStatus', async () => {
  const { data } = await axios.get('https://63be7d4ee348cb07620ff3db.mockapi.io/hardwareTools');
  return data;
});

export const fetchToolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      //@ts-ignore
      state.tools = state.tools.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTools.pending, (state, action) => {
      state.tools = [];
      state.loading = true;
    });
    builder.addCase(fetchTools.fulfilled, (state, action) => {
      //@ts-ignore
      state.tools = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTools.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export const { deleteItem } = fetchToolsSlice.actions;

export default fetchToolsSlice.reducer;
