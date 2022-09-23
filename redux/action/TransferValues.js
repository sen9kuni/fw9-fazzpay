import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
import axios from '../../helper/axios';
import Cookies from 'js-cookie';

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
  try {
    const { data } = await axios.post('/transaction/transfer', param, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    // console.log(data);
    result.successMsg = data.msg
    return result
  } catch (e) {
    console.log(e.response.data.data.msg);
    result.errorMsg = e.response.data.data.msg
    return result
  }
})