import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SIGN_UP actions
function* signIn(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.API_LOGIN, JSON.stringify(action.payload))
    );
    if (response.ok) {
      const { data } = response.data;
      // In case: signup request success
      yield put({ type: 'accounts/signInRequestSuccess', data });
    } else {
      const { msg } = response?.data?.status;
      // In case: signup request failed
      yield put({
        type: 'accounts/signInRequestFailed',
        errorMsg: msg?.message,
        statusCode: response?.status,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'accounts/signInRequestFailed' });
  }
}

/*
  Starts signup Account on each dispatched `signIn` action.
*/
function* signInSaga() {
  yield takeLatest('accounts/signInRequest', signIn);
}

export default signInSaga;
