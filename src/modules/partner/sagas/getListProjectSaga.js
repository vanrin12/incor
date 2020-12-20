import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getListProject() {
  try {
    const response = yield call(() => API.get(ROUTES.API_LIST_PROJECT));

    if (response.ok) {
      const { data } = response.data;

      // In case: getListProject request success
      yield put({ type: 'partner/getListProjectSuccess', data });
    } else {
      const { msg } = response?.data?.project;
      // In case: getListProject request failed
      yield put({
        type: 'partner/getListProjectFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'partner/getListProjectFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getListProject` action.
*/
function* getListProjectSaga() {
  yield takeLatest('partner/getListProject', getListProject);
}

export default getListProjectSaga;
