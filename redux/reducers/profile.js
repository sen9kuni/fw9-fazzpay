import { createSlice } from '@reduxjs/toolkit';
import { cheackPin, deleteImageProfile, editProfileName, getHistoryHome, getProfile, updatePin, uploadImageProfile } from '../action/profile';

const initialState ={
  data: {},
  errorMsg: null,
  successMsg: null,
}

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetMsgProfile: state => {
      state.errorMsg = null
      state.successMsg = null
    }
  },
  extraReducers: (build) => {
    build.addCase(getHistoryHome.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(getHistoryHome.fulfilled, (state, action)=> {
      state.historyHome = action.payload.data
    })

    build.addCase(uploadImageProfile.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(uploadImageProfile.fulfilled, (state, action)=> {
      state.resultMsg = action.payload.data
      state.errorMsg = action.payload.errorMsg;
    })

    build.addCase(editProfileName.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(editProfileName.fulfilled, (state, action)=> {
      state.resultMsg = action.payload.data
      state.errorMsg = action.payload.errorMsg;
    })

    build.addCase(getProfile.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.data
    })

    build.addCase(cheackPin.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(cheackPin.fulfilled, (state, action) => {
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.successMsg;
    })

    build.addCase(deleteImageProfile.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(deleteImageProfile.fulfilled, (state, action) => {
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.successMsg;
    })

    build.addCase(updatePin.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(updatePin.fulfilled, (state, action) => {
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.successMsg;
    })
  }
})

export { getProfile, getHistoryHome, editProfileName, uploadImageProfile, cheackPin, deleteImageProfile, updatePin}
export const { resetMsgProfile} = profile.actions
export default profile.reducer