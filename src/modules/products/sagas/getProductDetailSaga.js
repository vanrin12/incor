import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getProductDetail(action) {
  try {
    const response = yield call(() =>
        API.get(ROUTES.API_PRODUCT_DETAIL(action?.payload))
    );
    console.log('response', response);
    
    if (response.ok) {
      const { data } = response?.data;

      // In case: getProductDetail request success
      yield put({ type: 'products/getProductDetailSuccess', data });
    } else {
      const { msg } = response?.data?.product;
      // In case: getProductDetail request failed
      yield put({
        type: 'products/getProductDetailFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'products/getProductDetailFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getProductDetail` action.
*/
function* getProductDetailSaga() {
  yield takeLatest('products/getProductDetail', getProductDetail);
}

export default getProductDetailSaga;
