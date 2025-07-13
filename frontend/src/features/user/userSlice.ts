import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  email: string;
  firstName: string;
  lastName: string;
}

const initialState: UserState = {
  email: '',
  firstName: '',
  lastName: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
