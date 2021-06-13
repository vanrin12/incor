import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getProjectDetail(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_LIST_PROJECT_DETAIL(action?.payload?.id))
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: getProjectDetail request success
      yield put({ type: 'project/getProjectDetailSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: getProjectDetail request failed
      yield put({
        type: 'project/getProjectDetailFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'project/getProjectDetailFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getProjectDetail` action.
*/
function* getProjectDetailSaga() {
  yield takeLatest('project/getProjectDetail', getProjectDetail);
}

export default getProjectDetailSaga;
