import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UiState {
  profile: {
    isEditing: boolean;
  }
}

const initialState: UiState = {
  profile: {
    isEditing: false,
  }
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setProfileEdit: (state, action: PayloadAction<boolean>) => {
      state.profile.isEditing = action.payload;
    }
  },
})

export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer
