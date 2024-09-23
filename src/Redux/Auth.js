import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';


const saveToken = (token) => {
  Cookies.set('authToken', token, { expires: 7 });
}

const AuthSlice = createSlice({
  name: 'auth',

  initialState: {
    Auth:false,
    Token:null
  },

  reducers: {

    AddlToken(state, action) {

      state.Auth = action.payload.auth
      state.Token = action.payload.token
      saveToken(action.payload.token)

    },

    Logout(state) {
        state.Auth = false
        state.Token = null
    },

  },

})

export const { AddlToken, Logout } = AuthSlice.actions
export default AuthSlice.reducer