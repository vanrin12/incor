import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getListAreas() {
  try {
    const response = yield call(() => API.get(ROUTES.API_GET_AREAS));

    if (response.ok) {
      const { data } = response.data;

      // In case: getListAreas request success
      yield put({ type: 'homes/getListAreasSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: getListAreas request failed
      yield put({
        type: 'homes/getListAreasFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'homes/getListAreasFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getListAreas` action.
*/
function* getListAreasSaga() {
  yield takeLatest('homes/getListAreas', getListAreas);
}

export default getListAreasSaga;
