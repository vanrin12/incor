// @flow

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { createBrowserHistory } from 'history';

import ROUTERS from 'constants/router';

// import { API } from '../apis';
// import PrivateRoute from './PrivateRoute';

const HomeMain = lazy(() => import('modules/home/components'));

const ConstructionManager = lazy(() =>
  import('modules/construction/components')
);

const ClientManager = lazy(() => import('modules/clientManager/components'));
const ClientDetailManager = lazy(() =>
  import('modules/clientManager/components/detail')
);
const AboutUs = lazy(() => import('modules/aboutUs/components'));

const ContactUs = lazy(() => import('modules/contactUs/components'));

const RecruitmentPage = lazy(() => import('modules/recruitment/components'));

const ServicePage = lazy(() => import('modules/service/components'));

const CooperationPage = lazy(() => import('modules/cooperation/components'));

const PageSearch = lazy(() => import('modules/searchPage/components'));

const PagePartner = lazy(() => import('modules/partner/components'));

const Router = () => {
  // const history = createBrowserHistory();
  // const token = useSelector((state) => state.account.token);
  // const isAuthenticated = token !== '';

  // if (token) {
  //   API.setHeader('Authorization', `Bearer ${token}`);
  // }

  return (
    <BrowserRouter>
      <Suspense>
        <Switch>
          <Route exact path={ROUTERS.MAIN_PAGE} component={HomeMain} />
          <Route
            exact
            path={ROUTERS.PAGE_CONSTRUCTION}
            component={ConstructionManager}
          />
          <Route exact path={ROUTERS.PAGE_CLIENT} component={ClientManager} />
          <Route
            exact
            path={ROUTERS.PAGE_CLIENT_DETAIL}
            component={ClientDetailManager}
          />
          <Route exact path={ROUTERS.PAGE_ABOUT_US} component={AboutUs} />
          <Route exact path={ROUTERS.CONTACT_US} component={ContactUs} />
          <Route
            exact
            path={ROUTERS.PAGE_RECRUITMENT}
            component={RecruitmentPage}
          />
          <Route exact path={ROUTERS.PAGE_SERVICE} component={ServicePage} />
          <Route
            exact
            path={ROUTERS.PAGE_COOPERATION}
            component={CooperationPage}
          />
          <Route
            exact
            path={ROUTERS.PAGE_SEARCH_DETAIL}
            component={PageSearch}
          />
          <Route exact path={ROUTERS.PARTNER_DETAIL} component={PagePartner} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
