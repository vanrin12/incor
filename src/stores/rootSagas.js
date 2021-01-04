// import libs
import { all } from 'redux-saga/effects';
import signInSaga from 'modules/accounts/sagas/signInSaga';
import logOutSaga from 'modules/accounts/sagas/logoutSaga';
import getListBlog from 'modules/blog/sagas/getListBlogSaga';
import getDetailBlog from 'modules/blog/sagas/getDetailBlogSaga';
import getListCategory from 'modules/blog/sagas/getListCategorySaga';
import getListBlogOffCategory from 'modules/blog/sagas/getListBlogOffCategorySaga';

/**
 * Home
 */
import getDataPageHomeSaga from 'modules/home/sagas/getDataPageHomeSaga';
import getListAreasSaga from 'modules/home/sagas/getListAreasSaga';
import getListSpaceTypeSaga from 'modules/home/sagas/getListSpaceTypeSaga';
import formRequestSaga from 'modules/home/sagas/formRequestSaga';
import getSearchProductSaga from 'modules/home/sagas/getSearchProductSaga';
import getSearchProductFormSearch from 'modules/home/sagas/getListProductSearchFormSaga';

import getListHashTagSaga from 'modules/home/sagas/getHashTagSaga';

// Page Search
import getListScalesSaga from 'modules/searchPage/sagas/getListScalesSaga';

//
import ratingProjectSaga from 'modules/construction/sagas/ratingProjectSaga';

import getListProjectSaga from 'modules/partner/sagas/getListProjectSaga';
import quotesProjectsSaga from 'modules/partner/sagas/quotesProjectSaga';
import getListPartnerProjectsSaga from 'modules/partner/sagas/getListPartnerSaga';
import getListGallery from 'modules/partner/sagas/getPopupImageSaga';

export default function* RootSagas() {
  yield all([
    signInSaga(),
    logOutSaga(),
    getListBlog(),
    getDetailBlog(),
    getListCategory(),
    getListBlogOffCategory(),
    getListAreasSaga(),
    getListSpaceTypeSaga(),
    formRequestSaga(),
    getSearchProductSaga(),
    getListScalesSaga(),
    ratingProjectSaga(),
    getSearchProductFormSearch(),
    getListProjectSaga(),
    quotesProjectsSaga(),
    getListPartnerProjectsSaga(),
    getListHashTagSaga(),
    getListGallery(),
    getDataPageHomeSaga(),
  ]);
}
