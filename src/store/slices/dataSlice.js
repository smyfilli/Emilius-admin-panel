
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk action creator
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Replace with your API endpoint
  return response.data;
});

// Create the data slice
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the action creators and reducer
export const { actions } = dataSlice;
export default dataSlice.reducer;
