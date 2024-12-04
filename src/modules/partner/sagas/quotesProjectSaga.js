import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* quotesProjects(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.API_QUOTES, JSON.stringify(action?.payload))
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: quotesProjects request success
      yield put({ type: 'partner/quotesProjectsSuccess', data });
    } else {
      const { msg } = response?.data?.project;
      // In case: quotesProjects request failed
      yield put({
        type: 'partner/quotesProjectsFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'partner/quotesProjectsFailed' });
  }
}

/*
  Starts signup Account on each dispatched `quotesProjects` action.
*/
function* quotesProjectsSaga() {
  yield takeLatest('partner/quotesProjects', quotesProjects);
}

export default quotesProjectsSaga;
