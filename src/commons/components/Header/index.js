/* eslint-disable no-nested-ternary */
// @flow

import React, { memo, useState, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import IMAGES from 'themes/images';
import ROUTERS from 'constants/router';
import LoginForm from '../../../modules/accounts/components';
import Menu from './Menu';
import useClickOutside from 'customHooks/useClickOutSide';

type Props = {
  location: Object,
};

const Header = ({ location }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const refMenu = useRef(null);
  const iconRef = useRef(null);

  useClickOutside(
    refMenu,
    () => {
      if (isOpen) {
        setIsOpen(false);
      }
    },
    { iconRef }
  );

  return (
    <div className="header-main">
      <header className="header d-flex align-items-center">
        <div className="main_logo">
          <Link to={ROUTERS.MAIN_PAGE} title="Logo">
            <img src={IMAGES.logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-main d-flex align-items-center w-100 ">
          <Menu location={location} />
          <LoginForm />
        </div>
        <div
          className={`icon-menu btn-menu  ${isOpen ? 'show' : ''}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          tabIndex={0}
          role="menuitem"
          onKeyPress={() => {}}
          ref={iconRef}
        />
      </header>
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        tabIndex={0}
        role="menuitem"
        onKeyPress={() => {}}
        ref={iconRef}
        className={`click-off ${isOpen ? 'open' : ''}`}
      />
      <div className={`menu-mobile ${isOpen ? 'open' : ''}`}>
        <Link to={ROUTERS.MAIN_PAGE} title="Logo" className="logo-blue">
          <img src={IMAGES.logo_blue} alt="Logo" />
        </Link>
        <Menu location={location} />
        <LoginForm />
      </div>
    </div>
  );
};

export default withRouter(memo<Props>(Header));
