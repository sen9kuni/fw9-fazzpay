import { createAsyncThunk } from '@reduxjs/toolkit';
// import qs from 'qs'
import axios from '../../helper/axios';

export const getUserById = createAsyncThunk('transfer/get-user', async (param)=> {
  const id = param.id
  const token = param.token
  try {
    const result = await axios.get(`/user/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) 
    return result
  } catch (e) {
    console.log(e.response);
  }
}) 