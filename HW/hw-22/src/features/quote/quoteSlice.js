// src/features/quote/quoteSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный thunk для получения цитаты
export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const response = await axios.get('https://zenquotes.io/api/random');
  return response.data[0]; // Возвращаем первую цитату из ответа
});

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    text: '',
    author: '',
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.text = action.payload.q;
        state.author = action.payload.a;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
