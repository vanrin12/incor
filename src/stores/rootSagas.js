// import libs
import { all } from 'redux-saga/effects';
import signInSaga from 'modules/accounts/sagas/signInSaga';
import logOutSaga from 'modules/accounts/sagas/logoutSaga';
import getListBlog from 'modules/blog/sagas/getListBlogSaga';

export default function* RootSagas() {
  yield all([signInSaga(), logOutSaga(), getListBlog()]);
}
