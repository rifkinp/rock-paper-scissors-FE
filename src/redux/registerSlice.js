/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  username: '',
  email: '',
  password: '',
  isLoading: false,
  error: null,
};

export const fetchRegister = createAsyncThunk('register/fetchRegister', async (data) => {
  try {
    const response = await axios.post(
      'https://rock-paper-scissors-be.vercel.app/users/register',
      data,
    );
    alert('Sukses Registrasi, Silahkan Login');
    return response.data;
  } catch (error) {
    if (error.response.data.errors) {
      const errorMessages = error.response.data.errors.map((err) => err.msg);
      throw new Error(errorMessages.join(', '));
    } else {
      throw new Error('Failed to register / User already exist');
    }
  }
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to register';
      });
  },
});

export default registerSlice.reducer;
