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
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
