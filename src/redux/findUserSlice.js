/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: {},
  loading: false,
};

export const fetchFindUser = createAsyncThunk('findUser/fetchFindUser', async () => {
  const token = localStorage.getItem('accessToken');
  const hasilDataBio = await axios.get(
    'https://rock-paper-scissors-be.vercel.app/users/detail',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return hasilDataBio.data;
});

export const findUserSlice = createSlice({
  name: 'findUser',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFindUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFindUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchFindUser.rejected, (state) => {
      state.users = {};
      state.loading = false;
    });
  },
});

export default findUserSlice.reducer;
