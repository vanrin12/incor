import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getSearchProductFormSearch(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_SEARCH, action?.payload)
    );

    if (response.ok) {
      const { data } = response?.data;

      // In case: getSearchProductFormSearch request success
      yield put({
        type: 'homes/getSearchProductFormSearchSuccess',
        data: {
          listProject: data,
          params: action?.payload,
        },
      });
    } else {
      const { msg } = response?.data;
      // In case: getSearchProductFormSearch request failed
      yield put({
        type: 'homes/getSearchProductFormSearchFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'homes/getSearchProductFormSearchFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getSearchProductFormSearch` action.
*/
function* getSearchProductFormSearchSaga() {
  yield takeLatest(
    'homes/getSearchProductFormSearch',
    getSearchProductFormSearch
  );
}

export default getSearchProductFormSearchSaga;
