import { combineReducers } from '@reduxjs/toolkit';
import accountReducer from 'modules/accounts/redux';
import blogSlice from 'modules/blog/redux';
import homeSlice from 'modules/home/redux';

const appReducer = combineReducers({
  account: accountReducer,
  blog: blogSlice,
  home: homeSlice,
});

export default appReducer;
