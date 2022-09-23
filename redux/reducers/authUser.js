import { createSlice } from '@reduxjs/toolkit'
import { editProfileName, forgotPassword, getHistoryHome, login, register, resetPassword, uploadImageProfile } from '../action/authUser';

const initialState = {
  historyHome: [],
  errorMsg: null,
  successMsg: null,
  resultMsg: {}
};

const authUser = createSlice({
  name: 'auth-user',
  initialState,
  reducers: {
    resetMsgAuth: state => {
      state.successMsg = null
      state.errorMsg = null
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

    build.addCase(login.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(login.fulfilled, (state, action)=> {
      state.successMsg = action.payload.msg
      state.errorMsg = action.payload.errorMsg;
    })
    
    build.addCase(forgotPassword.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(forgotPassword.fulfilled, (state, action)=> {
      state.successMsg = action.payload.successMsg
      state.errorMsg = action.payload.errorMsg;
    })

    build.addCase(resetPassword.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(resetPassword.fulfilled, (state, action)=> {
      state.successMsg = action.payload.successMsg
      state.errorMsg = action.payload.errorMsg;
    })

    build.addCase(register.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(register.fulfilled, (state, action)=> {
      state.successMsg = action.payload.successMsg
      state.errorMsg = action.payload.errorMsg;
    })
  }
})

export{ getHistoryHome, uploadImageProfile, editProfileName, login, forgotPassword, resetPassword, register }
export const {resetMsgAuth} = authUser.actions
export default authUser.reducer