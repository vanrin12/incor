import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* formRequest(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.API_CONTACT_FORM, action?.payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    );
    // Reset response
    if (response) {
      API.addRequestTransform((request) => {
        request.headers['Content-Type'] = 'application/json';
      });
    }
    if (response.ok) {
      const { data } = response.data;
      // In case: formRequest request success
      yield put({ type: 'homes/formRequestSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: formRequest request failed
      yield put({
        type: 'homes/formRequestFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'homes/formRequestFailed' });
  }
}

/*
  Starts signup Account on each dispatched `formRequest` action.
*/
function* formRequestSaga() {
  yield takeLatest('homes/formRequest', formRequest);
}

export default formRequestSaga;
