import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getListScales() {
  try {
    const response = yield call(() => API.get(ROUTES.API_SCALES));

    if (response.ok) {
      const { data } = response.data;

      // In case: getListScales request success
      yield put({ type: 'search/getListScalesSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: getListScales request failed
      yield put({
        type: 'search/getListScalesFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'search/getListScalesFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getListScales` action.
*/
function* getListScalesSaga() {
  yield takeLatest('search/getListScales', getListScales);
}

export default getListScalesSaga;
