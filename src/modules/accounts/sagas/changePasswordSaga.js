import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SIGN_UP actions
function* changePassword(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.API_CHANGE_PASSWORD, action.payload)
    );
    if (response.ok) {
      const { data } = response.data;
      // In case: signup request success
      yield put({ type: 'accounts/changePasswordSuccess', data });
    } else {
      const { msg } = response?.data?.status;
      // In case: signup request failed
      yield put({
        type: 'accounts/changePasswordFailed',
        errorMsg: msg,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'accounts/changePasswordFailed' });
  }
}

/*
  Starts signup Account on each dispatched `changePassword` action.
*/
function* changePasswordSaga() {
  yield takeLatest('accounts/changePassword', changePassword);
}

export default changePasswordSaga;
