import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getProducts(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_PRODUCTS, action?.payload)
    );
    if (response.ok) {
      const { data } = response?.data;

      // In case: getProducts request success
      yield put({ type: 'products/getProductsSuccess', data });
    } else {
      const { msg } = response?.data?.product;
      // In case: getProducts request failed
      yield put({
        type: 'products/getProductsFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'products/getProductsFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getProducts` action.
*/
function* getProductsSaga() {
  yield takeLatest('products/getProducts', getProducts);
}

export default getProductsSaga;
