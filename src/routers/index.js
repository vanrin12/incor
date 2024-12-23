// @flow

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ROUTERS from 'constants/router';

import { API } from '../apis';

import PrivateRoute from './PrivateRoute';
import ProductDetail from 'modules/products/components/productDetail';

const HomeMain = lazy(() => import('modules/home/components'));

const Construction = lazy(() => import('modules/construction/components'));
const ConstructionDetail = lazy(() =>
  import('modules/construction/components/detail')
);

const blogManager = lazy(() => import('modules/blog/components'));
const BlogDetail = lazy(() => import('modules/blog/components/detail'));
const PageSearch = lazy(() => import('modules/searchPage/components'));

const PagePartner = lazy(() => import('modules/partner/components'));
const ProductList = lazy(() => import('modules/products/components'));
const changePassword = lazy(() =>
  import('modules/accounts/components/changePass')
);
const Cooperation = lazy(() =>
  import('modules/cooperation/components')
);
const ContactUs = lazy(() => import('modules/contactUs/components'))
const warranty = lazy(() => import('modules/warranty/components'));
const Router = () => {
  const token = useSelector((state) => state?.account?.token);

  const isAuthenticated = token !== '';
  if (token) {
    API.setHeader('Authorization', `Bearer ${token}`);
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense>
        <Switch>
          <Route exact path={ROUTERS.MAIN_PAGE} component={HomeMain} />
          <Route
            exact
            path={ROUTERS.PAGE_SEARCH_DETAIL}
            component={PageSearch}
            // isAuthenticated={isAuthenticated}
          />
          <Route exact path={ROUTERS.CONTACT_US} component={ContactUs}/>
          <Route exact path={ROUTERS.COOPERATION} component={Cooperation}/>
          <Route exact path={ROUTERS.WARRANTY} component={warranty}/>
          <Route
            exact
            path={ROUTERS.PRODUCT_LIST}
            component={ProductList}
            // isAuthenticated={isAuthenticated}
          />
          <Route 
            exact
            path={ROUTERS.PRODUCT_DETAIL}
            component={ProductDetail}
          />
          <Route
            exact
            path={ROUTERS.PARTNER_DETAIL}
            component={PagePartner}
            // isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path={ROUTERS.CHANGE_PASSWORD}
            component={changePassword}
            isAuthenticated={isAuthenticated}
          />
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
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
