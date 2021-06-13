import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getDataPageHome() {
  try {
    const response = yield call(() => API.get(ROUTES.API_HOME));

    if (response.ok) {
      const { data } = response.data;

      // In case: getDataPageHome request success
      yield put({ type: 'homes/getDataPageHomeSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: getDataPageHome request failed
      yield put({
        type: 'homes/getDataPageHomeFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'homes/getDataPageHomeFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getDataPageHome` action.
*/
function* getDataPageHomeSaga() {
  yield takeLatest('homes/getDataPageHome', getDataPageHome);
}

export default getDataPageHomeSaga;
