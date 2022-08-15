import { combineReducers } from '@reduxjs/toolkit';
import CostomPage from './CostomPage';
import TransferValues from './TransferValues';

const reducer = combineReducers({
  CostomPage,
  TransferValues
})

export default reducer