import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';

// worker Saga: will be fired on GET_EVENT_DETAIL actions
function* getListPartnerProjects(action) {
  const { partner_id, page, paged } = action?.payload;
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_PARTNER(partner_id), { page, paged })
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: getListPartnerProjects request success
      yield put({ type: 'partner/getListPartnerProjectsSuccess', data });
    } else {
      const { msg } = response?.data;
      // In case: getListPartnerProjects request failed
      yield put({
        type: 'partner/getListPartnerProjectsFailed',
        errorMsg: msg.message,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'partner/getListPartnerProjectsFailed' });
  }
}

/*
  Starts signup Account on each dispatched `getListPartnerProjects` action.
*/
function* getListPartnerProjectsSaga() {
  yield takeLatest('partner/getListPartnerProjects', getListPartnerProjects);
}

export default getListPartnerProjectsSaga;
