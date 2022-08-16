import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
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

export const transferBalance = createAsyncThunk('transfer/transfer', async (param)=> {
  const result = {}
  const receiverId = param.receiverId
  const amount = param.amount
  const notes = param.notes
  try {
    const send = qs.stringify({receiverId, amount, notes})
    const { data } = await axios.post('/transaction/transfer', send)
    result.successMsg = data.data.msg
    return result
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})