import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: null,
  notification: {show: false, message: null},
}

export const authSlice = createSlice({
  name: 'auth_token',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
    unSetUserToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
    handleNotification: (state, action) => {
      state.notification = action.payload
    }
  },
})

export const { setUserToken, unSetUserToken, handleNotification } = authSlice.actions

export default authSlice.reducer