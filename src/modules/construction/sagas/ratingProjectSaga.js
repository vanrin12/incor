import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* ratingProject(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.API_RATING_PROJECT, JSON.stringify(action?.payload))
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: ratingProject request success
      yield put({
        type: 'project/ratingProjectSuccess',
        data,
        rating: action?.payload,
      });
    } else {
      const { msg } = response?.data;
      // In case: ratingProject request failed
      yield put({
        type: 'project/ratingProjectFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'project/ratingProjectFailed' });
  }
}

/*
  Starts signup Account on each dispatched `ratingProject` action.
*/
function* ratingProjectSaga() {
  yield takeLatest('project/ratingProject', ratingProject);
}

export default ratingProjectSaga;
