// @flow

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ROUTERS from 'constants/router';

import { API } from '../apis';

import PrivateRoute from './PrivateRoute';

const HomeMain = lazy(() => import('modules/home/components'));

const Construction = lazy(() => import('modules/construction/components'));
const ConstructionDetail = lazy(() =>
  import('modules/construction/components/detail')
);

const blogManager = lazy(() => import('modules/blog/components'));
const BlogDetail = lazy(() => import('modules/blog/components/detail'));
const AboutUs = lazy(() => import('modules/aboutUs/components'));

const ContactUs = lazy(() => import('modules/contactUs/components'));

const RecruitmentPage = lazy(() => import('modules/recruitment/components'));

const ServicePage = lazy(() => import('modules/service/components'));

const CooperationPage = lazy(() => import('modules/cooperation/components'));

const PageSearch = lazy(() => import('modules/searchPage/components'));

const PagePartner = lazy(() => import('modules/partner/components'));

const Router = () => {
  const token = useSelector((state) => state?.account?.token);

  const isAuthenticated = token !== '';
  if (token) {
    API.setHeader('Authorization', `Bearer ${token}`);
  }

  return (
    <BrowserRouter>
      <Suspense>
        <Switch>
          <Route exact path={ROUTERS.MAIN_PAGE} component={HomeMain} />
          <PrivateRoute
            exact
            path={ROUTERS.PAGE_CONSTRUCTION}
            component={Construction}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path={ROUTERS.PAGE_CONSTRUCTION_DETAIL}
            component={ConstructionDetail}
            isAuthenticated={isAuthenticated}
          />
          <Route
            exact
            path={ROUTERS.PAGE_CATEGORY_DETAIL}
            component={blogManager}
          />
          <Route exact path={ROUTERS.PAGE_BLOG_DETAIL} component={BlogDetail} />
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
          <PrivateRoute
            exact
            path={ROUTERS.PAGE_SEARCH_DETAIL}
            component={PageSearch}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path={ROUTERS.PARTNER_DETAIL}
            component={PagePartner}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
