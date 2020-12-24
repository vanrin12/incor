import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getListHashTag(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_CONSTANTS(action.payload))
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: getListHashTag request success
      yield put({ type: 'homes/getListHashTagSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: getListHashTag request failed
      yield put({
        type: 'homes/getListHashTagFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'homes/getListHashTagFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getListHashTag` action.
*/
function* getListHashTagSaga() {
  yield takeLatest('homes/getListHashTag', getListHashTag);
}

export default getListHashTagSaga;
