import { createSlice } from '@reduxjs/toolkit'
import { getUserById } from '../action/TransferValues';

const initialState = {
  userChoice: {},
  errorMsg: null,
  successMsg: null,
  amount: null,
  notes: null,
  idUser: null
};

const TransferValues = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload
    },
    setNote: (state, action) => {
      state.notes = action.payload
    },
    setIdUser: (state, action) => {
      state.idUser = action.payload
    },
  },
  extraReducers: (build) => {
    build.addCase(getUserById.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    }) 
    build.addCase(getUserById.fulfilled, (state, action)=> {
      state.userChoice = action.payload.data
    })
  }
})

export{ getUserById }
export const { setAmount, setIdUser, setNote} = TransferValues.actions
export default TransferValues.reducer