import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on LOG_OUT actions
function* getListCategory(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_CATEGORY_BLOG, action?.payload)
    );

    if (response.ok) {
      const { data } = response.data;
      // In case:  request success
      yield put({ type: 'blogs/getListCategorySuccess', data });
    } else {
      // In case: request failed
      yield put({
        type: 'blogs/getListCategoryFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'blogs/getListCategoryFailed', error });
  }
}

function* getListCategorySaga() {
  yield takeLatest('blogs/getListCategory', getListCategory);
}

export default getListCategorySaga;
