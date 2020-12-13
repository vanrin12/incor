import { combineReducers } from '@reduxjs/toolkit';
import accountReducer from 'modules/accounts/redux';
import blogSlice from 'modules/blog/redux';

const appReducer = combineReducers({
  account: accountReducer,
  blog: blogSlice,
});

export default appReducer;
