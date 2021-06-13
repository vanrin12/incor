import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on LOG_OUT actions
function* getListBlog(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_BLOG, action?.payload)
    );

    if (response.ok) {
      const { data } = response.data;
      // In case:  request success
      yield put({ type: 'blogs/getListBlogSuccess', data });
    } else {
      // In case: request failed
      yield put({
        type: 'blogs/getListBlogFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'blogs/getListBlogFailed', error });
  }
}

function* getListBlogSaga() {
  yield takeLatest('blogs/getListBlog', getListBlog);
}

export default getListBlogSaga;
