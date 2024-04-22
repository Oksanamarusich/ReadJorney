import { createSlice } from '@reduxjs/toolkit';
import { login, logOut, refreshUser, register } from './operations';

const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLoginFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const RefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handelRefreshUserPending = state => {
  state.isRefreshing = true;
};

const handelRefreshUserRejected = state => {
  state.isRefreshing = false;
};

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(login.fulfilled, handleLoginFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.fulfilled, RefreshUserFulfilled)
      .addCase(refreshUser.pending, handelRefreshUserPending)
      .addCase(refreshUser.rejected, handelRefreshUserRejected);
  },
});

export const authReducer = authSlice.reducer;
