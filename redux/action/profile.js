import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import qs from 'qs'
import axios from '../../helper/axios';

export const getProfile = createAsyncThunk('profile/user', async (param) => {
  const result = {}
  try {
    const { data } = await axios.get(`/user/profile/${param}`)
    return data
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})


export const cheackPin = createAsyncThunk('auth/check-pin', async pin => {
  const result = {}
  try {
    const { data } = await axios.get(`/user/pin?pin=${pin}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    result.successMsg = data.msg
    return result
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
    return result = data
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})

export const deleteImageProfile = createAsyncThunk('profile/delete-image', async () => {
  const result = {}
  try {
    const { data } = await axios.delete(`/user/image/${Cookies.get('id')}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    result.successMsg = data.msg
    return result
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})

export const updatePin = createAsyncThunk('profile/update-pin', async param => {
  const result = {}
  try {
    const { data } = await axios.patch(`/user/pin/${Cookies.get('id')}`, param, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    Cookies.set('pin', data.msg)
    result.successMsg = data.msg
    return result
  } catch (e) {
    result.errorMsg = e.response.data.msg
    return result
  }
})