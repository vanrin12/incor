import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getListPartner() {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_PARTNER_MANAGEMENT)
    );
    if (response.ok) {
      const { data } = response?.data;
      // In case: Login request success
      yield put({ type: 'common/getListPartnerSuccess', data });
    } else {
      // In case: Login request failed
      yield put({ type: 'common/getListPartnerFailed' });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'common/getListPartnerFailed', error });
  }
}

/*
  Starts login on each dispatched `SIGN_IN` action.
*/
function* getListPartnerSaga() {
  yield takeLatest('common/getListPartner', getListPartner);
}

export default getListPartnerSaga;
