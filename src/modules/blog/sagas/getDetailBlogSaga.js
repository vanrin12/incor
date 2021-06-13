import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on LOG_OUT actions
function* getDetailBlog(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_DETAIL_BLOG(action?.payload))
    );

    if (response.ok) {
      const { data } = response.data;
      // In case:  request success
      yield put({ type: 'blogs/getDetailBlogSuccess', data });
    } else {
      // In case: request failed
      yield put({
        type: 'blogs/getDetailBlogFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'blogs/getDetailBlogFailed', error });
  }
}

function* getDetailBlogSaga() {
  yield takeLatest('blogs/getDetailBlog', getDetailBlog);
}

export default getDetailBlogSaga;
