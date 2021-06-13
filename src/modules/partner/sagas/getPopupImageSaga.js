import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getListGallery(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_POPUP_GALLERY, action?.payload)
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: getListGallery request success
      yield put({ type: 'partner/getListGallerySuccess', data });
    } else {
      const { msg } = response?.data?.project;
      // In case: getListGallery request failed
      yield put({
        type: 'partner/getListGalleryFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'partner/getListGalleryFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getListGallery` action.
*/
function* getListGallerySaga() {
  yield takeLatest('partner/getListGallery', getListGallery);
}

export default getListGallerySaga;
