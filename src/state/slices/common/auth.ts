import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: null,
  notification: {show: false, message: null},
  alert: {show: false, title: null, text: null, icon: null, showConfirmButton: true, confirmButtonText: null, onConfirmClick: null}
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
    },
    handleAlert: (state, action) => {
      state.alert = action.payload
    }
  },
})

export const { setUserToken, unSetUserToken, handleNotification, handleAlert } = authSlice.actions

export default authSlice.reducer