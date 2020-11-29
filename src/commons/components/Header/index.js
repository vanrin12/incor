/* eslint-disable no-nested-ternary */
// @flow

import React, { memo } from 'react';
import { withRouter, Link } from 'react-router-dom';
import IMAGES from 'themes/images';
import ROUTERS from 'constants/router';
import LoginForm from '../../../modules/accounts/components';
import Menu from './Menu';

type Props = {
  location: Object,
};

const Header = ({ location }: Props) => {
  return (
    <div className="header-main">
      <header className="header d-flex align-items-center">
        <div className="main_logo">
          <Link to={ROUTERS.MAIN_PAGE} title="Logo">
            <img src={IMAGES.logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-main d-flex align-items-center w-100">
          <Menu location={location} />
          <LoginForm />
        </div>
      </header>
    </div>
  );
};

export default withRouter(memo<Props>(Header));
