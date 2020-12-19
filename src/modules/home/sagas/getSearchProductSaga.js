import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getSearchProduct(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_SEARCH, action?.payload)
    );

    console.log(response, 'Dddddddddddddd');
    if (response.ok) {
      const { data } = response?.data;

      // In case: getSearchProduct request success
      yield put({ type: 'homes/getSearchProductSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: getSearchProduct request failed
      yield put({
        type: 'homes/getSearchProductFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'homes/getSearchProductFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getSearchProduct` action.
*/
function* getSearchProductSaga() {
  yield takeLatest('homes/getSearchProduct', getSearchProduct);
}

export default getSearchProductSaga;
