import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../action/profile';

const initialState ={
  data: {}
}

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.data
    })
  }
})

export { getProfile }
export default profile.reducer