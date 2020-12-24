import { combineReducers } from '@reduxjs/toolkit';
import accountReducer from 'modules/accounts/redux';
import blogSlice from 'modules/blog/redux';
import homeSlice from 'modules/home/redux';
import searchScales from 'modules/searchPage/redux';
import projectScales from 'modules/construction/redux';
import partnerSlice from 'modules/partner/redux';

const appReducer = combineReducers({
  account: accountReducer,
  blog: blogSlice,
  home: homeSlice,
  search: searchScales,
  project: projectScales,
  partner: partnerSlice,
});

export default appReducer;
