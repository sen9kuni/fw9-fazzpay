import { combineReducers } from '@reduxjs/toolkit';
import CostomPage from './CostomPage';
import TransferValues from './TransferValues';
import profile from './profile';
import authUser from './authUser';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const transferValConfig ={
  key: 'transfer',
  storage
}

const presistedReducerTrans = persistReducer(transferValConfig, TransferValues)

const reducer = combineReducers({
  authUser,
  CostomPage,
  TransferValues : presistedReducerTrans,
  profile
})

export default reducer