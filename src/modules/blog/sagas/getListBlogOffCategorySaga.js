import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on LOG_OUT actions
function* getListBlogOffCategory(action) {
  const { slug_or_id, page, paged } = action.payload;
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_LIST_BLOG_OFF_CATEGORY(slug_or_id), { page, paged })
    );

    if (response.ok) {
      const { data } = response.data;
      // In case:  request success
      yield put({ type: 'blogs/getListBlogOffCategorySuccess', data });
    } else {
      // In case: request failed
      yield put({
        type: 'blogs/getListBlogOffCategoryFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'blogs/getListBlogOffCategoryFailed', error });
  }
}

function* getListBlogOffCategorySaga() {
  yield takeLatest('blogs/getListBlogOffCategory', getListBlogOffCategory);
}

export default getListBlogOffCategorySaga;
