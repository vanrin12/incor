import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getListSpaceType() {
  try {
    const response = yield call(() => API.get(ROUTES.API_SPACE_TYPE));

    if (response.ok) {
      const { data } = response.data;

      // In case: getListSpaceType request success
      yield put({ type: 'homes/getListSpaceTypeSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: getListSpaceType request failed
      yield put({
        type: 'homes/getListSpaceTypeFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'homes/getListSpaceTypeFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getListSpaceType` action.
*/
function* getListSpaceTypeSaga() {
  yield takeLatest('homes/getListSpaceType', getListSpaceType);
}

export default getListSpaceTypeSaga;
