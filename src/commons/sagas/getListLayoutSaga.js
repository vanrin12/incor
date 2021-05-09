import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getListLayout() {
  try {
    const response = yield call(() => API.get(ROUTES.API_GET_LIST_LAYOUT));
    if (response.ok) {
      const { data } = response?.data;
      // In case: Login request success
      yield put({ type: 'common/getDetailLayoutSuccess', data });
    } else {
      // In case: Login request failed
      yield put({ type: 'common/getDetailLayoutFailed' });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'common/getDetailLayoutFailed', error });
  }
}

/*
  Starts login on each dispatched `SIGN_IN` action.
*/
function* getListLayoutSaga() {
  yield takeLatest('common/getDetailLayout', getListLayout);
}

export default getListLayoutSaga;
