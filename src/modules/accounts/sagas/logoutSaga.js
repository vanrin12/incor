import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on LOG_OUT actions
function* logOut() {
  try {
    /**
     * Example data
     * url: enpoint/register/check-email
     * params:
     *  {
     *    id: 'user123'
     *  }
     *
     */
    const response = yield call(() => API.post(ROUTES.API_LOGOUT));

    if (response.ok) {
      const { data } = response.data;
      // In case:  request success
      yield put({ type: 'accounts/logoutSuccess', data });
    } else {
      // In case: request failed
      yield put({
        type: 'accounts/logoutFailed',
        errors: response.data.text && response.data.text,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'accounts/logoutFailed', error });
  }
}

/*
  Starts getSmsCode on each dispatched `LOG_OUT` action.
*/
function* logOutSaga() {
  yield takeLatest('accounts/logout', logOut);
}

export default logOutSaga;
