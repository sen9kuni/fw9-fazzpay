import { createSlice } from '@reduxjs/toolkit'
import { getUserById, transferBalance } from '../action/TransferValues';

const initialState = {
  userChoice: {},
  errorMsg: null,
  successMsg: null,
  amount: null,
  notes: null,
  idUser: null
};

const TransferValues = createSlice({
  name: 'TransferValues',
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
    resetTransfer: () => {
      return initialState
    }
  },
  extraReducers: (build) => {
    build.addCase(getUserById.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    }) 
    build.addCase(getUserById.fulfilled, (state, action)=> {
      state.userChoice = action.payload.data
    })

    build.addCase(transferBalance.pending, (state)=> {
      state.errorMsg = null;
      state.successMsg = null;
    }) 
    build.addCase(transferBalance.fulfilled, (state, action)=> {
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.successMsg;
    })
  }
})

export{ getUserById, transferBalance }
export const { setAmount, setIdUser, setNote, resetTransfer} = TransferValues.actions
export default TransferValues.reducer