import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  value: number;
}

const initialState: AuthState = {
  value: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
