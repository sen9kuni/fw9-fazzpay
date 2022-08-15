import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
};

export const CostomPage = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    costomPagesPlus: (state, action) => {
      state.page = state.page + 1
    },
    costomPagesMinus: (state, action) => {
      state.page = state.page - 1
    },
    costomPagesReset: (state) => {
      state.page = 1
    }
  }
})

export const {
  costomPagesPlus,
  costomPagesMinus,
  costomPagesReset
} = CostomPage.actions

export default CostomPage.reducer;