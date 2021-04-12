import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  isProcessingLogin: false,
  isProcessingPass: false,
  type: '',
  token: '',
  errorLogin: '',
  statusCode: null,
  dateLogin: null,
  errorSignUp: '',
  errorMsg: '',
  mesgLogedUser: '',
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    signInRequest: (state, action) => {
      state.type = action.type;
      state.isProcessingLogin = true;
    },
    signInRequestSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessingLogin = false;
      state.token = action?.data?.token;
      state.userInfo = action?.data?.user;
    },
    signInRequestFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingLogin = false;
      state.errorMsg = action?.errorMsg;
    },
    resetSingIn: (state) => {
      state.errorMsg = '';
      state.type = 'accounts/signInRequest';
      state.isProcessingLogin = false;
      state.isProcessingPass = false;
    },
    logout: (state, action) => {
      state.type = action.type;
    },
    logoutSuccess: (state, action) => {
      state.type = action.type;
      state.token = '';
      state.userInfo = {};
    },
    logoutFailed: (state, action) => {
      state.type = action.type;
      state.token = '';
      state.userInfo = {};
    },
    changePassword: (state, action) => {
      state.type = action.type;
      state.isProcessingPass = true;
    },
    changePasswordSuccess: (state, action) => {
      state.type = action.type;
      state.isProcessingPass = false;
    },
    changePasswordFailed: (state, action) => {
      state.type = action.type;
      state.isProcessingPass = false;
      state.errorMsg = action?.errorMsg;
    },
  },
});

const { actions, reducer } = accountSlice;

export const {
  signInRequest,
  signInRequestSuccess,
  signInRequestFailed,
  resetSingIn,
  logout,
  logoutSuccess,
  logoutFailed,
  changePassword,
  changePasswordSuccess,
  changePasswordFailed,
} = actions;

export default reducer;
