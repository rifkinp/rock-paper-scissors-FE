/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import findUserSlice from './findUserSlice';
import loginSlice from './loginSlice';
import registerSlice from './registerSlice';

export const store = configureStore({
  reducer: {
    users: findUserSlice,
    login: loginSlice,
    register: registerSlice,
  },
});
