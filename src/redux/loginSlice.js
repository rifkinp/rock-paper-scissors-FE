/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
};

export const fetchLogin = createAsyncThunk('login/fetchLogin', async (data) => {
  try {
    const response = await axios.post(
      'https://chapter-platinum-team-2-koet.vercel.app/user/login',
      data,
    );
    const { accessToken } = response.data;
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      alert('Sukses Login');
    } else {
      alert('Access token is undefined');
    }

    return response.data;
  } catch (error) {
    if (error.response.data.errors) {
      const errorMessages = error.response.data.errors.map((err) => err.msg);
      throw new Error(errorMessages.join(', '));
    } else {
      throw new Error('Failed to login, check your Username or Password');
    }
  }
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to login';
      });
  },
});

// export const {setLogin, setUsername, setPassword} = loginSlice.actions;

export default loginSlice.reducer;
