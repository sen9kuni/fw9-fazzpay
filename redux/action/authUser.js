import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import qs from 'qs'
import axios from '../../helper/axios';

export const login = createAsyncThunk('auth/login', async (request)=> {
  const result = {}
  try {
    // const send = qs.stringify(request)
    const { data } = await axios.post('auth/login', request)
    console.log(data);
    Cookies.set('token', data.data.token)
    Cookies.set('id', data.data.id)
    return result
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})

export const logOut = createAsyncThunk('auth/logout', async() => {
  try {
    const { data } = await axios.post('/auth/logout')
    Cookies.remove('token')
    Cookies.remove('id')
    return data
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})

export const getHistoryHome = createAsyncThunk('auth/get-history-home', async ()=> {
  const result = {}
  try {
    const { data } = await axios.get('/transaction/history?page=1&limit=4', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    console.log(data);
    return result = data
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})

export const uploadImageProfile = createAsyncThunk('auth/upload-profile', async (param)=>{
  const result = {}

  try {
    const file = new FormData()
    file.append('image', param)
    const { data } = await axios.patch(`/user/image/${Cookies.get('id')}`, file, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    return result = data
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})

export const editProfileName = createAsyncThunk('auth/edit-name', async (param) => {
  const result = {}
  try {
    const { data } = await axios.patch(`/user/profile/${Cookies.get('id')}`, param, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    console.log(data);
    return result = data
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})