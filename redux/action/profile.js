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