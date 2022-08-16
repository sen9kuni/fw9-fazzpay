import { createSlice } from '@reduxjs/toolkit'
import { editProfileName, getHistoryHome, uploadImageProfile } from '../action/authUser';

const initialState = {
  historyHome: [],
  errorMsg: null,
  successMsg: null,
  resultMsg: {}
};

const authUser = createSlice({
  name: 'auth-user',
  initialState,
  reducers: {},
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
  }
})

export{ getHistoryHome, uploadImageProfile, editProfileName }
// export const { setAmount, setIdUser, setNote} = authUser.actions
export default authUser.reducer